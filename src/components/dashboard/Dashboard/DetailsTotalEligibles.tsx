import { useEffect, useState } from 'react'
import { List, Loading } from 'components/ui'
import { ModelSortDirection } from 'API'
import { useScreen } from 'hooks/useScreen'
import { useBreakPoints } from 'hooks/useBreakPoints'

import { useClientCampaignEligible } from 'hooks/useClientCampaignEligible'

import { useUI } from 'components/ui/context'
import { useDebounce } from 'use-debounce'
import { toast } from 'react-toastify'

import 'moment/locale/pt-br'
import Moment from 'moment'
Moment.locale('pt-br')

import Header from './Header'

export default function DetailsTotalEligibles(props: any) {
  const { clientCampaignID, userID, dependents, thirds } = props;
  const { screenHeight } = useScreen()
  const { isSm } = useBreakPoints()

  const { listEligiblesByClientCampaign, listEligiblesByClientCampaignIsDependent, listEligiblesByClientCampaignIsThird } = useClientCampaignEligible()

  const [downloadReady, setDownloadReady] = useState(false)
  const [downloadItems, setDownloadItems] = useState([] as any)
  const { searchText, setStartDownload, startDownload } = useUI()
  const [value] = useDebounce(searchText, 600)

  const download = async () => {
    setDownloadItems([])
    setDownloadReady(false)
    toast.info('Preparando dados para download...')
    const fetchData = async (n: string | null) => {

      let l = {} as any

      if (dependents) {
        l = await listEligiblesByClientCampaignIsDependent({
          clientCampaignID,
          isDependent: { eq: "1" },
          limit: 1000,
          nextToken: null
        })
      } else if (thirds) {
        l = await listEligiblesByClientCampaignIsThird({
          clientCampaignID,
          isThird: { eq: '1' },
          limit: 1000,
          nextToken: null
        })
      } else {
        l = await listEligiblesByClientCampaign({
          clientCampaignID,
          limit: 1000,
          nextToken: n,
        })
      }

      const t = [] as any
      l.items.map((item: any) => {
        const input = {
          Identificador: item.key ? item.key : '',
          Nome: item.name,
          CPF: item.cpf ? item.cpf : '',
          RG: item.rg ? item.rg : '',
          Nascimento: item.birth !== 'Data inválida' ? item.birth : '',
          Dependente: item.isDependent === '1' ? 'Sim' : 'Não',
          CPF_Responsável: item.cpfRelationship ? item.cpfRelationship : '',
          Terceiro: item.isThird === '1' ? 'Sim' : 'Não',
          Empresa: item.thirdName ? item.thirdName : '',
          Obs: item.notes ? item.notes : ''
        } as any

        t.push(input)
      })
      setDownloadItems((downloadItems: any) => [...downloadItems, ...t])
      return l.nextToken
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
      let csv = 'Identificador,Nome,CPF,RG,Nascimento,Dependente,CPF_Responsável,Terceiro,Empresa,Obs\n'
      csv += downloadItems.map((row: any) =>
        Object.values(row).map((item: any) => `"${item}"`).join(',')
      ).join('\n')
      const blob = new Blob([csv], { type: 'text/csv' })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${dependents ? 'Dependentes_' : thirds ? 'Terceiros_' : 'Colaboradores_'}${Moment().format('YYYYMMDDHHmmss')}.csv`
      a.click()
      window.URL.revokeObjectURL(url)
    }
  }, [downloadReady])

  return clientCampaignID ? <List
    keys={`${clientCampaignID ? clientCampaignID : ''} ${value}`}
    userID={userID}
    Header={<Header />}
    emptyMessage={
      dependents ? 'Nenhum dependente por aqui.' :
        thirds ? 'Nenhum terceiro por aqui.' :
          'Nenhum colaborador por aqui.'
    }
    endMessage={
      dependents ? 'Estes são todos os dependentes.' :
        thirds ? 'Estes são todos os terceiros.' :
          'Estes são todos os colaboradores.'
    }
    listItems={
      dependents ? listEligiblesByClientCampaignIsDependent
        : thirds ? listEligiblesByClientCampaignIsThird
          : listEligiblesByClientCampaign
    }
    variables={
      dependents ? value ? {
        clientCampaignID,
        isDependent: { eq: "1" },
        filter: { search: { contains: value.toLowerCase() } },
        limit: 1000,
        nextToken: null
      } : {
        clientCampaignID,
        isDependent: { eq: "1" },
        limit: 1000,
        nextToken: null
      } :
        thirds ? value ? {
          clientCampaignID,
          isThird: { eq: '1' },
          filter: { search: { contains: value.toLowerCase() } },
          limit: 1000,
          nextToken: null
        } : {
          clientCampaignID,
          isThird: { eq: '1' },
          limit: 1000,
          nextToken: null
        } :
          value ? {
            filter: { search: { contains: value.toLowerCase() } },
            clientCampaignID,
            limit: 1000,
            nextToken: null
          } : {
            clientCampaignID,
            limit: 1000,
            nextToken: null
          }
    }
    layout='flexCol'
    Card={Card}
    height={isSm ? screenHeight - 70 : screenHeight * 0.8}
  /> : <Loading />;
}

function Card(props: any) {
  const { item, index, handleSelect, itemSelected, isLast } = props

  return !item ? null : (
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
        <div className='text-lg font-semibold'>{item.name}</div>
        {false && <div className="flex mt-1 gap-2 text-xs font-semibold">
          <div className="bg-blue text-white px-1 rounded">
            {item.key}
          </div>
        </div>}
      </div>

      {index === itemSelected && (
        <div className={[
          'border-l-4 p-2 text-accent-8 bg-accent-0 pb-4 rounded-md border-tertiary-2',
          itemSelected === index ? 'rounded-t-none shadow-lg' : 'shadow'
        ].join(' ')}
        >
          <div className='flex flex-wrap gap-8'>
            {item.key && <div>
              <div className="text-sm font-semibold text-tertiary-2">Identificador</div>
              <div>{item.key}</div>
            </div>}
            {(item.cpf && item.cpf !== 'NaN') && <div>
              <div className="text-sm font-semibold text-tertiary-2">CPF</div>
              <div>{item.cpf}</div>
            </div>}
            {(item.rg && item.rg !== 'NaN') && <div>
              <div className="text-sm font-semibold text-tertiary-2">RG</div>
              <div>{item.rg}</div>
            </div>}
            {item.birth && <div>
              <div className="text-sm font-semibold text-tertiary-2">Nascimento</div>
              <div>{item.birth}</div>
            </div>}
            {item.isDependent === '1' && <div>
              <div className="text-sm font-semibold text-tertiary-2">Dependente</div>
              <div>Sim</div>
            </div>}
            {(item.isDependent === '1' && item.cpfRelationship) && <div>
              <div className="text-sm font-semibold text-tertiary-2">CPF do responsável</div>
              <div>{item.cpfRelationship}</div>
            </div>}
            {item.isThird === '1' && <div>
              <div className="text-sm font-semibold text-tertiary-2">Terceiro</div>
              <div>Sim</div>
            </div>}
            {(item.isThird === '1' && item.thirdName) && <div>
              <div className="text-sm font-semibold text-tertiary-2">Nome da empresa</div>
              <div>{item.thirdName}</div>
            </div>}
          </div>
          {item.notes && <>
            <div className="mt-4 text-sm font-semibold text-tertiary-2">Observações</div>
            <div>{item.notes}</div>
          </>}
          {false && <pre>{JSON.stringify(item, null, 4)}</pre>}
        </div>
      )}
    </div>
  )
}
