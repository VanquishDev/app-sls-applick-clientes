import { useEffect, useState } from 'react'
import { List } from 'components/ui'
import { ModelSortDirection } from 'API'
import { useScreen } from 'hooks/useScreen'
import { useBreakPoints } from 'hooks/useBreakPoints'

import { useClientCampaignEligibleVaccination } from 'hooks/useClientCampaignEligibleVaccination'
import { useClientCampaign } from 'hooks/useClientCampaign'
import { useUser } from 'hooks/useUser'

import { useUI } from 'components/ui/context'
import { useDebounce } from 'use-debounce'
import { toast } from 'react-toastify'

import 'moment/locale/pt-br'
import Moment from 'moment'
Moment.locale('pt-br')

import Header from './Header'

export default function DetailsTotalVaccinations(props: any) {
  const { clientCampaignID, userID, dependents, thirds } = props;
  const { screenHeight } = useScreen()
  const { isSm } = useBreakPoints()

  const { listVaccinationsByClientCampaign } = useClientCampaignEligibleVaccination()
  const { updateClientCampaign } = useClientCampaign()

  const [downloadReady, setDownloadReady] = useState(false)
  const [downloadItems, setDownloadItems] = useState([] as any)
  const { searchText, setStartDownload, startDownload } = useUI()
  const [value] = useDebounce(searchText, 600)

  const download = async () => {
    setDownloadItems([])
    setDownloadReady(false)
    toast.info('Preparando dados para download...')

    let totalDependents = 0
    let totalThirds = 0
    let total = 0

    const fetchData = async (n: string | null) => {
      const { items, nextToken } = await listVaccinationsByClientCampaign({
        clientCampaignID,
        limit: 1000,
        nextToken: n,
      })

      const t = [] as any
      items.map((item: any) => {
        total++
        if (item.clientEligible && item.clientEligible.isDependent === '1') totalDependents++
        if (item.clientEligible && item.clientEligible.isThird === '1') totalThirds++

        if (dependents && (!item.clientEligible || (item.clientEligible && item.clientEligible.isDependent !== '1'))) return
        if (thirds && (!item.clientEligible || (item.clientEligible && item.clientEligible.isThird !== '1'))) return
        if (!thirds && !dependents && (item.clientEligible && (item.clientEligible.isThird === '1' || item.clientEligible.isDependent === '1'))) return

        if (item.clientEligible) {
          const input = {
            Identificador: item.clientEligible.key ? item.clientEligible.key : '',
            Nome: item.clientEligible.name,
            CPF: item.clientEligible.cpf && item.clientEligible.cpf !== '0' ? item.clientEligible.cpf : '',
            RG: item.clientEligible.rg && item.clientEligible.rg !== '0' ? item.clientEligible.rg : '',
            Nascimento: item.clientEligible.birth !== 'Data inválida' ? item.clientEligible.birth : '',
            Dependente: item.clientEligible.isDependent === '1' ? 'Sim' : 'Não',
            CPF_Responsável: item.clientEligible.cpfRelationship && item.clientEligible.cpfRelationship !== '0' ? item.clientEligible.cpfRelationship : '',
            Terceiro: item.clientEligible.isThird === '1' ? 'Sim' : 'Não',
            Empresa: item.clientEligible.thirdName ? item.clientEligible.thirdName : '',
            Data_Aplicação: Moment(item.applicationDate).format('DD/MM/YYYY HH:mm'),
            Coren: item.coren ? item.coren : '',
            Dose: JSON.parse(item.vaccination).map((v: any) => v.productName).join(', '),
            Unidade: item.os && item.os.clientCampaignUnit && item.os.clientCampaignUnit.name ? item.os.clientCampaignUnit.name : '',
            Obs: item.clientEligible.notes ? item.clientEligible.notes : '',
          } as any

          t.push(input)
        } else {
          console.log('item.clientEligible', item)
        }

      })
      setDownloadItems((downloadItems: any) => [...downloadItems, ...t])
      return nextToken
    }

    let nextToken = null

    for await (const num of [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4,
      5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8,
      9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2,
      3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6,
      7, 8, 9, 10,
    ]) {
      nextToken = await fetchData(nextToken)
      if (!nextToken) {
        setDownloadReady(true)

        await updateClientCampaign({
          id: clientCampaignID,
          totalVaccinationsDependent: totalDependents,
          totalVaccinationsThird: totalThirds,
          totalVaccinations: total,
        })

        break
      }
    }
  }

  useEffect(() => {
    if (startDownload) {
      download()
      setStartDownload(false)
    }
    return () => {
      setStartDownload(false)
    }
  }, [startDownload])

  useEffect(() => {
    if (downloadReady) {
      let csv = 'Identificador,Nome,CPF,RG,Nascimento,Dependente,CPF_Responsável,Terceiro,Empresa,Data_Aplicação,Coren,Dose,Unidade,Observação\n'
      csv += downloadItems.map((row: any) =>
        Object.values(row).map((item: any) => `"${item}"`).join(',')
      ).join('\n')
      const blob = new Blob([csv], { type: 'text/csv' })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = dependents ? `Dependentes_Imunizados_${Moment().format('YYYYMMDDHHmmss')}.csv` :
        thirds ? `Terceiros_Imunizados_${Moment().format('YYYYMMDDHHmmss')}.csv` :
          `Colaboradores_Imunizados_${Moment().format('YYYYMMDDHHmmss')}.csv`
      a.click()
      window.URL.revokeObjectURL(url)
    }
  }, [downloadReady])

  return <List
    keys={`${clientCampaignID ? clientCampaignID : ''} ${value}`}
    userID={userID}
    Header={<Header />}
    emptyMessage='Nenhum colaborador imunizado por aqui.'
    endMessage='Estes são todos os colaboradores imunizados.'
    listItems={listVaccinationsByClientCampaign}
    variables={value ? {
      clientCampaignID,
      filter: { search: { contains: value.toLowerCase() } },
      limit: 1000,
      sortDirection: ModelSortDirection.DESC,
      nextToken: null
    } : {
      clientCampaignID,
      limit: 1000,
      sortDirection: ModelSortDirection.DESC,
      nextToken: null
    }}
    layout='flexCol'
    Card={Card}
    height={isSm ? screenHeight - 70 : screenHeight * 0.8}
    paramsItems={{ dependents, thirds, colaborators: true }}
  />;
}

function Card(props: any) {
  const { item, index, handleSelect, itemSelected, isLast, paramsItems } = props

  const [currentItem, setCurrentItem] = useState(item)

  useEffect(() => {
    if (!item.clientEligible) {
      const searchCharacterLess = item.search.replace(/[a-zA-Z]/g, '').trim().split(' ');
      const searchName = item.search.replace(/[0-9]/g, '').replace('  ', ' ').replace('  ', ' ').replace(',', '');

      const clientEligible = {
        id: item.clientEligibleID,
        key: searchCharacterLess && searchCharacterLess[0] ? searchCharacterLess[0] : '',
        name: searchName,
        cpf: searchCharacterLess && searchCharacterLess[1] ? searchCharacterLess[1] : '',
        rg: searchCharacterLess && searchCharacterLess[2] ? searchCharacterLess[2] : '',
        birth: '',
        isDependent: '',
        cpfRelationship: '',
        isThird: '',
        thirdName: '',
        notes: '',
      }
      console.log(item, clientEligible)
      setCurrentItem({
        ...item,
        clientEligible
      })
    } else {
      setCurrentItem(item)
    }

    return () => {
      setCurrentItem(null)
    }
  }, [item])


  return (!item || (paramsItems.dependents && (currentItem.clientEligible.isDependent !== '1')) || (paramsItems.thirds && (currentItem.clientEligible.isThird !== '1'))) ? null : (
    <div
      key={index}
      className={`px-4 lg:pl-8 w-full ${itemSelected === index ? 'py-3 scale-100' : 'py-1 scale-95'
        } ${isLast && 'pb-5'
        } transform transition duration-500 hover:scale-100`}
    >
      <div className={[
        'w-full p-2 border-l-4 border-tertiary-2 bg-accent-0 rounded cursor-pointer',
        itemSelected === index ? 'rounded-b-none' : 'shadow'
      ].join(' ')}
        onClick={() => handleSelect(index)}>
        {currentItem.clientEligible && <div className='text-lg font-semibold'>{currentItem.clientEligible.name}</div>}
        <div className="flex mt-1 gap-2 text-sm font-semibold">
          <div className="bg-slate-700 text-white px-1 rounded">{index + 1}</div>
          <div className="bg-teal-500 text-white px-1 rounded">
            {Moment(currentItem.applicationDate).format('DD/MM/YYYY HH:mm')}
          </div>
        </div>
      </div>

      {index === itemSelected && (
        <div className={[
          'border-l-4 p-2 text-accent-8 bg-accent-0 pb-4 rounded-md border-tertiary-2',
          itemSelected === index ? 'rounded-t-none shadow-lg' : 'shadow'
        ].join(' ')}
        >
          <div className='flex flex-wrap gap-8'>
            {currentItem.clientEligible.key && <div>
              <div className="text-sm font-semibold text-tertiary-2">Identificador</div>
              <div>{currentItem.clientEligible.key}</div>
            </div>}
            {(currentItem.clientEligible.cpf && currentItem.clientEligible.cpf !== 'NaN' && currentItem.clientEligible.cpf !== '0') && <div>
              <div className="text-sm font-semibold text-tertiary-2">CPF</div>
              <div>{currentItem.clientEligible.cpf}</div>
            </div>}
            {(currentItem.clientEligible.rg && currentItem.clientEligible.rg !== 'NaN' && currentItem.clientEligible.rg !== '0') && <div>
              <div className="text-sm font-semibold text-tertiary-2">RG</div>
              <div>{currentItem.clientEligible.rg}</div>
            </div>}
            {currentItem.clientEligible.birth && <div>
              <div className="text-sm font-semibold text-tertiary-2">Nascimento</div>
              <div>{currentItem.clientEligible.birth}</div>
            </div>}
            {currentItem.clientEligible.isDependent === '1' && <div>
              <div className="text-sm font-semibold text-tertiary-2">Dependente</div>
              <div>Sim</div>
            </div>}
            {(currentItem.clientEligible.isDependent === '1' && currentItem.clientEligible.cpfRelationship) && <div>
              <div className="text-sm font-semibold text-tertiary-2">CPF do responsável</div>
              <div>{currentItem.clientEligible.cpfRelationship}</div>
            </div>}
            {currentItem.clientEligible.isThird === '1' && <div>
              <div className="text-sm font-semibold text-tertiary-2">Terceiro</div>
              <div>Sim</div>
            </div>}
            {(currentItem.clientEligible.isThird === '1' && currentItem.clientEligible.thirdName) && <div>
              <div className="text-sm font-semibold text-tertiary-2">Nome da empresa</div>
              <div>{currentItem.clientEligible.thirdName}</div>
            </div>}
          </div>
          <VaccinationCard vaccination={currentItem.vaccination} />
          <div className='mt-4 flex flex-wrap gap-8'>
            {currentItem.profissionalID && <div>
              <div className="text-sm font-semibold text-tertiary-2">Profissional Applick</div>
              <div><GetUserName userID={currentItem.profissionalID} /></div>
            </div>}
          </div>
          {false && <pre>{JSON.stringify(item, null, 4)}</pre>}
        </div>
      )}
    </div>
  )

}

function VaccinationCard(props: any) {
  const { vaccination } = props
  const vaccinationObj = JSON.parse(vaccination)
  return (<>
    {vaccinationObj &&
      vaccinationObj.map((v: any, index: number) => (
        <div className="my-2" key={index}>
          <label className="flex flex-start items-center gap-4">
            <div className="cursor-pointer">
              <div className="text-xl font-semibold">{v.productName}</div>
              <div className="mt-1 flex gap-1">
                {v.lote && (
                  <div className="bg-green text-white px-1 rounded text-sm">
                    Lote {v.lote}
                  </div>
                )}
                {v.dueDate && (
                  <div className="bg-cyan text-white px-1 rounded text-sm">
                    Data de Validade{' '}
                    {Moment(v.dueDate).format('DD/MM/YYYY')}
                  </div>
                )}
              </div>
            </div>
          </label>
        </div>
      ))}
  </>)
}

function GetUserName(props: any) {
  const { userID } = props
  const [name, setName] = useState('')
  const [birth, setBirth] = useState('')
  const [doc, setDoc] = useState('')
  const [docProfession, setDocProfession] = useState('')
  const { getUser } = useUser()

  useEffect(() => {
    const GetUser = async () => {
      const u = await getUser({ id: userID as string })
      setName(u && u.name ? u.name : '')
      setBirth(u && u.profile && u.profile.birth ? u.profile.birth : '')
      setDoc(u && u.profile && u.profile.doc ? u.profile.doc : '')
      setDocProfession(u && u.profile && u.profile.docProfession ? u.profile.docProfession : '')
    }
    if (userID) {
      GetUser()
    }
    return () => {
      setName('')
      setBirth('')
      setDoc('')
      setDocProfession('')
    }
  }, [userID])

  return (<div className='flex gap-3'>
    <div className='font-semibold'>{name}</div>
    {birth && <div> - {Moment(birth).format('DD/MM/YYYY')}</div>}
    {doc && <div> - CPF {doc}</div>}
    {docProfession && <div> - COREN {docProfession}</div>}
  </div>)
}
