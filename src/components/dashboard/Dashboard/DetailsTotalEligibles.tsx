import { useEffect, useState } from 'react'
import { List, Loading } from 'components/ui'
import { ModelSortDirection } from 'API'
import { useScreen } from 'hooks/useScreen'
import { useBreakPoints } from 'hooks/useBreakPoints'
import * as XLSX from 'xlsx';

import { useClientCampaignEligible } from 'hooks/useClientCampaignEligible'

import { useUI } from 'components/ui/context'
import { useDebounce } from 'use-debounce'
import { toast } from 'react-toastify'

import 'moment/locale/pt-br'
import Moment from 'moment'
Moment.locale('pt-br')

import Header from './Header'
import { useClientCampaign } from 'hooks/useClientCampaign'

export default function DetailsTotalEligibles(props: any) {
  const { clientCampaignID, userID, dependents, thirds, colaborators } = props;
  const { screenHeight } = useScreen()
  const { isSm } = useBreakPoints()

  const { listEligiblesByClientCampaign, listEligiblesByClientCampaignIsDependent, listEligiblesByClientCampaignIsThird } = useClientCampaignEligible()
  const { updateClientCampaign } = useClientCampaign()

  const [downloadReady, setDownloadReady] = useState(false)
  const [downloadItems, setDownloadItems] = useState([] as any)
  const { searchText, setStartDownload, startDownload } = useUI()
  const [value] = useDebounce(searchText, 600)

  const download = async () => {
    setDownloadItems([])
    setStartDownload(true)
    setDownloadReady(false)
    toast.info('Preparando dados para download...')

    let totalDependents = 0
    let totalThirds = 0
    let total = 0

    const fetchData = async (n: string | null) => {

      let l = {} as any

      if (dependents) {
        l = await listEligiblesByClientCampaignIsDependent({
          clientCampaignID,
          isDependent: { eq: "1" },
          limit: 1000,
          nextToken: n
        })
      } else if (thirds) {
        l = await listEligiblesByClientCampaignIsThird({
          clientCampaignID,
          isThird: { eq: '1' },
          limit: 1000,
          nextToken: n
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
        total++
        if (item.isDependent === '1') totalDependents++
        if (item.isThird === '1') totalThirds++

        if (dependents && item.isDependent !== '1') return
        if (thirds && item.isThird !== '1') return
        if (colaborators && (item.isDependent === '1' || item.isThird === '1')) return

        const input = {
          Identificador: item.key && item.key !== '0' ? item.key : '',
          Nome: item.name,
          CPF: item.cpf && item.cpf !== '0' && item.cpf !== 'NaN' ? item.cpf : '',
          RG: item.rg && item.rg !== '0' && item.rg !== 'NaN' ? item.rg : '',
          Nascimento: item.birth !== 'Data inválida' ? item.birth : '',
          Dependente: item.isDependent === '1' ? 'Sim' : 'Não',
          CPF_Responsável: item.cpfRelationship && item.cpfRelationship !== '0' ? item.cpfRelationship : '',
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
      7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8,
      9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2,
      3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6,
      7, 8, 9, 10,
    ]) {
      nextToken = await fetchData(nextToken)
      if (!nextToken) {
        setDownloadReady(true)
        setStartDownload(false)

        if (!dependents && !thirds && colaborators) {
          await updateClientCampaign({
            id: clientCampaignID,
            totalEligiblesDependent: totalDependents,
            totalEligiblesThird: totalThirds,
            totalEligibles: total,
          })
        }

        console.log({ total, totalDependents, totalThirds, colaborators: (total - (totalDependents + totalThirds)) })
        break
      }
    }
  }

  useEffect(() => {
    if (startDownload) {
      download()
    }
  }, [startDownload])

  useEffect(() => {
    if (downloadReady) {
      const fileName = `${dependents ? 'Dependentes_' : thirds ? 'Terceiros_' : 'Colaboradores_'}${Moment().format('YYYYMMDDHHmmss')}.xlsx`
      const worksheet = XLSX.utils.json_to_sheet(downloadItems);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
      XLSX.writeFile(workbook, fileName);

      /*
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
      */
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
    paramsItems={colaborators ? { colaborators2: true } : {}}
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
        <div className="flex mt-1 gap-2 text-sm font-semibold">
          <div className="bg-slate-700 text-white px-1 rounded">{index + 1}</div>
          {(item.cpf && item.cpf !== '0') && <div className="bg-teal-500 text-white px-1 rounded font-semibold line-clamp-1">
            CPF {item.cpf}
          </div>}
          {(item.notes && item.notes !== 'Não') && <div className="bg-cyan text-white px-1 rounded font-semibold line-clamp-1">
            {item.notes}
          </div>}
        </div>
      </div>

      {index === itemSelected && (
        <div className={[
          'border-l-4 p-2 text-accent-8 bg-accent-0 pb-4 rounded-md border-tertiary-2',
          itemSelected === index ? 'rounded-t-none shadow-lg' : 'shadow'
        ].join(' ')}
        >
          <div className='flex flex-wrap gap-8'>
            {(item.key && item.key !== '0') && <div>
              <div className="text-sm font-semibold text-tertiary-2">Identificador</div>
              <div>{item.key}</div>
            </div>}
            {(item.cpf && item.cpf !== 'NaN' && item.cpf !== '0') && <div>
              <div className="text-sm font-semibold text-tertiary-2">CPF</div>
              <div>{item.cpf}</div>
            </div>}
            {(item.rg && item.rg !== 'NaN' && item.rg !== '0') && <div>
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
            {(item.isDependent === '1' && item.cpfRelationship && item.cpfRelationship !== '0') && <div>
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
