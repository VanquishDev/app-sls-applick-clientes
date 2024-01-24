
import { FC, useState, useEffect } from 'react'
import { useUserAuth } from 'components/userAuth/context'
import { Loading } from 'components/ui'
import { useUI } from 'components/ui/context'
import { useClientUser } from 'hooks/useClientUser'
import Statistics from './Statistics'

interface Props { }

const DashClientes: FC<Props> = ({ }) => {
  const { isAuthenticating, user } = useUserAuth()

  const [loading, setLoading] = useState(true)
  const [checked, setChecked] = useState(false)
  const [clients, setClients] = useState([] as any)
  const [client, setClient] = useState({} as any)
  const [clientID, setClientID] = useState('')

  const { listClientUserByUser } = useClientUser()

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

  const SelectClient = () => (<div style={{ maxWidth: 300 }} className='mx-auto'>
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

  return isAuthenticating ? <Loading /> : user ? (<div>

    {loading && <Loading />}

    {checked && clients.length === 0 && <BannerAccessDeny />}

    {checked && clients.length > 1 && <SelectClient />}
    {checked && clients.length === 1 && <div className='text-center text-4xl font-bold text-tertiary-2 tracking-wide'>{clients[0].name}</div>}

    {checked && client.id && <Statistics client={client} userID={user.id} />}

  </div>) : <BannerUserNotFound />
}

export default DashClientes
