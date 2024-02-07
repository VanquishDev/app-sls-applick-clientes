
import { FC, useState, useEffect } from 'react'
import { useUserAuth } from 'components/userAuth/context'
import { Loading } from 'components/ui'
import { useUI } from 'components/ui/context'

import { useClientUser } from 'hooks/useClientUser'
import { useClientCampaign } from 'hooks/useClientCampaign'

import Statistics from './Statistics'

interface Props { }

const DashClientes: FC<Props> = ({ }) => {
  const { isAuthenticating, user } = useUserAuth()

  const [loading, setLoading] = useState(true)
  const [loading2, setLoading2] = useState(false)

  const [checked, setChecked] = useState(false)
  const [checked2, setChecked2] = useState(false)

  const [clients, setClients] = useState([] as any)
  const [campaigns, setCampaigns] = useState([] as any)

  const [client, setClient] = useState({} as any)
  const [clientID, setClientID] = useState('')

  const [campaign, setCampaign] = useState({} as any)
  const [campaignID, setCampaignID] = useState('')

  const { listClientUserByUser } = useClientUser()
  const { listClientCampaignsByClient } = useClientCampaign()

  useEffect(() => {
    if (user) {
      setLoading(true)
      const fetchClients = async () => {
        const { items } = await listClientUserByUser({ userID: user.id, limit: 100 })
        const c = [] as any
        items.map((item: any) => {
          if (item.client) { c.push(item.client) }
        })
        setClient(c.length === 1 ? c[0] : {})
        setClients(c)
        setChecked(true)
        setLoading(false)
      }
      fetchClients()
    }
  }, [user])

  useEffect(() => {
    if (clientID) {
      setLoading2(true)
      const fetchCampaigns = async () => {
        const { items } = await listClientCampaignsByClient({ clientID, limit: 100 })
        const c = [] as any
        items.map((item: any) => {
          c.push(item)
        })
        setCampaign(c.length === 1 ? c[0] : {})
        setCampaigns(c)
        setChecked2(true)
        setLoading2(false)
      }
      fetchCampaigns()
    }
  }, [clientID])

  const {
    setModalView,
    openModal
  } = useUI()

  useEffect(() => {
    if (!isAuthenticating) {
      if (!user) {
        setModalView('LOGIN_VIEW')
        openModal()
      }
    }
  }, [isAuthenticating])

  const BannerUserNotFound = () => (
    <div className='bg-tertiary text-tertiary font-bold text-lg p-4 rounded-lg'>
      Para acessar esta página você precisa estar logado.
    </div>
  );

  const BannerAccessDeny = () => (
    <div className='bg-red text-tertiary font-bold text-lg p-4 rounded-lg'>
      Você não tem permissão de acesso a esta página.
    </div>
  );

  const SelectClient = () => (<div style={{ maxWidth: 300 }}>
    <select
      value={clientID}
      onChange={(e) => {
        const id = e.target.value
        const c = clients.filter((client: any) => client.id === id)
        setClient(c[0])
        setClientID(id)
      }}

      className="text-accent-9 bg-accent-1 w-full rounded-lg border-2 border-accent-2 outline-none focus:border-indigo-500"
    >
      {!client.id && <option value="">Selecione...</option>}
      {clients
        .sort((a: any, b: any) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        )
        .map((client: any) => (<option key={client.id} value={client.id}>{client.name}</option>))}
    </select>
  </div>)

  const SelectCampaign = () => (<div style={{ maxWidth: 300 }}>
    <select
      value={campaignID}
      onChange={(e) => {
        const id = e.target.value
        const c = campaigns.filter((campaign: any) => campaign.id === id)
        setCampaign(c[0])
        setCampaignID(id)
      }}

      className="text-accent-9 bg-accent-1 w-full rounded-lg border-2 border-accent-2 outline-none focus:border-indigo-500"
    >
      {!campaign.id && <option value="">Selecione...</option>}
      {campaigns
        .sort((a: any, b: any) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        )
        .map((campaign: any) => (<option key={campaign.id} value={campaign.id}>{campaign.name}</option>))}
    </select>
  </div>)

  return isAuthenticating ? <div className='flex justify-center'><Loading /></div> : user ? (<div className='w-full'>

    {loading && <div className='flex justify-center'><Loading /></div>}

    {(checked && clients.length === 0) && <BannerAccessDeny />}

    <div className='flex justify-center gap-4'>
      {(checked && clients.length > 1) && <SelectClient />}
      {(checked && clients.length === 1) && <div className='text-center text-4xl font-bold text-tertiary-2 tracking-wide'>{clients[0].name}</div>}

      {(checked2 && campaigns.length > 1) && <SelectCampaign />}
      {(checked2 && campaigns.length === 1) && <div className='text-center text-4xl font-bold text-tertiary-2 tracking-wide'>{campaigns[0].name}</div>}

      {loading2 && <Loading />}
    </div>

    {(checked && checked2 && client.id && campaign && campaign.id) && <Statistics campaign={campaign} userID={user.id} />}

  </div>) : <BannerUserNotFound />
}

export default DashClientes
