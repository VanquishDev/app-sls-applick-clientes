import { List } from 'components/ui'
import { ModelSortDirection, OSStatus } from 'API'
import { useScreen } from 'hooks/useScreen'
import { useBreakPoints } from 'hooks/useBreakPoints'
import { formatPhoneNumber } from 'react-phone-number-input'
import { useClientCampaignUnit } from 'hooks/useClientCampaignUnit'
import { useState, useEffect } from 'react'
import * as XLSX from 'xlsx';

import { useUI } from 'components/ui/context'
import { useDebounce } from 'use-debounce'
import { toast } from 'react-toastify'

import 'moment/locale/pt-br'
import Moment from 'moment'
Moment.locale('pt-br')

import Header from './Header'

export default function DetailsUnitsServed(props: any) {
  const { clientCampaignID, userID } = props;
  const { screenHeight } = useScreen()
  const { isSm } = useBreakPoints()

  const { listUnitsByClientCampaign } = useClientCampaignUnit()

  const [downloadReady, setDownloadReady] = useState(false)
  const [downloadItems, setDownloadItems] = useState([] as any)
  const { searchText, setStartDownload, startDownload } = useUI()
  const [value] = useDebounce(searchText, 600)

  const download = async () => {
    setDownloadItems([])
    setStartDownload(true)
    setDownloadReady(false)
    toast.info('Preparando dados para download...')
    const fetchData = async (n: string | null) => {
      const { items, nextToken } = await listUnitsByClientCampaign({
        clientCampaignID,
        limit: 1000,
        nextToken: n,
      })

      let count = 0
      const t = [] as any
      items.map((item: any, index: number) => {
        if (item.oss.items.length === 0) return
        if (item.qtyVisitsConfirmed < item.qtyVisits) return

        let allFinished = true
        item.oss.items.map((item2: any) => {
          if (item2.status !== OSStatus.COMPLETED && item2.status !== OSStatus.CANCELED) {
            allFinished = false
          }
        })
        if (!allFinished) return

        count++
        let OSs = ''
        item.oss.items.map((os: any) => {
          OSs += `${os.number} - ${os.clientCampaign.name} - ${Moment(os.start).format('DD/MM/YYYY')}\n`
        })

        const input = {
          Item: count,
          Nome: item.name,
          Código: item.code,
          TotalElegíveis: item.totalEligibles,
          DosesContratadas: item.totalContractedVaccines,
          QtdeVisitas: item.qtyVisits,
          Contato: item.contactName,
          ContatoEmail: item.contactEmail,
          ContatoPhone: item.contactPhone,
          OSs,
        } as any

        t.push(input)
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
        setStartDownload(false)
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
      const fileName = `Unidades_Atendidas_${Moment().format('YYYYMMDDHHmmss')}.xlsx`
      const worksheet = XLSX.utils.json_to_sheet(downloadItems);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
      XLSX.writeFile(workbook, fileName);

      /*
      let csv = 'Nome,Código,TotalElegíveis,DosesContratadas,QtdeVisitas,Contato,ContatoEmail,ContatoPhone\n'
      csv += downloadItems.map((row: any) =>
        Object.values(row).map((item: any) => `"${item}"`).join(',')
      ).join('\n')
      const blob = new Blob([csv], { type: 'text/csv' })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `Unidades_Atendidas_${Moment().format('YYYYMMDDHHmmss')}.csv`
      a.click()
      window.URL.revokeObjectURL(url)
      */
    }
  }, [downloadReady])

  return <List
    keys={`${clientCampaignID ? clientCampaignID : ''} ${value}`}
    userID={userID}
    Header={<Header />}
    emptyMessage='Nenhuma unidade atendida por aqui.'
    endMessage='Estes são todas as unidades atendidas.'
    listItems={listUnitsByClientCampaign}
    variables={value ? {
      clientCampaignID,
      filter: { search: { contains: value.toLowerCase() } },
      limit: 1000,
      // sortDirection: ModelSortDirection.DESC,
      nextToken: null
    } : {
      clientCampaignID,
      limit: 1000,
      // sortDirection: ModelSortDirection.DESC,
      nextToken: null
    }}
    layout='flexCol'
    Card={Card}
    height={isSm ? screenHeight - 70 : screenHeight * 0.8}
    paramsItems={{ unitsServed: true }}
  />;
}

function Card(props: any) {
  const { item, index, handleSelect, itemSelected, isLast } = props

  return (!item || (item && item.oss.items.length === 0)) ? null : (
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
        <div className='text-xl font-semibold'>{item.name}</div>
        <div className="flex mt-1 gap-2 font-semibold">
          <div className="bg-slate-700 text-white px-1 rounded">
            {index + 1}
          </div>
          <div className="bg-blue text-white px-1 rounded">
            Elegíveis {item.totalEligibles}
          </div>
          <div className="bg-orange-500 text-white px-1 rounded">
            Doses Contratadas {item.totalContractedVaccines}
          </div>
        </div>
      </div>

      {index === itemSelected && (
        <div className={[
          'border-l-4 p-2 pb-4 bg-accent-0 rounded-md border-tertiary-2',
          itemSelected === index ? 'rounded-t-none shadow-lg' : 'shadow'
        ].join(' ')}
        >
          <div className='mt-4 flex flex-wrap gap-6'>
            <div>
              <div className="text-sm font-semibold text-tertiary-2">N. Total Elegíveis</div>
              <div>{item.totalEligibles}</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-tertiary-2">N. Doses Contratadas</div>
              <div>{item.totalContractedVaccines}</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-tertiary-2">Qtde. Visitas</div>
              <div>{item.qtyVisits}</div>
            </div>
          </div>
          <div className='mt-4 flex flex-wrap gap-6'>
            <div>
              <div className="text-sm font-semibold text-tertiary-2">Contato</div>
              <div>{item.contactName}</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-tertiary-2">Email</div>
              <div>{item.contactEmail}</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-tertiary-2">Telefone</div>
              <div>{formatPhoneNumber(item.contactPhone)}</div>
            </div>
          </div>
          <div className="mt-4 text-sm font-semibold text-tertiary-2">Ordens de Serviços</div>
          {item.oss.items.length === 0 && <div>Nenhuma ordem de serviço localizada.</div>}
          {item.oss.items.length > 0 && <>
            <div className="pb-20 overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Número</th>
                    <th>Campanha</th>
                    <th>Data</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {item.oss.items.map((os: any, index: number) => (<tr key={index}>
                    <td className='font-semibold'>{os.number}</td>
                    <td>{(os.clientCampaign && os.clientCampaign.name) && <span>{os.clientCampaign.name}</span>}</td>
                    <td>{Moment(os.start).format('DD/MM/YYYY')}</td>
                    <td>
                      <div className='flex'>
                        {os.status ===
                          OSStatus.ROUTED && (
                            <div className="bg-purple-500 text-white px-1 rounded font-semibold">
                              ROTEIRIZADA
                            </div>
                          )}
                        {os.status ===
                          OSStatus.SCHEDULED && (
                            <div className="bg-green text-white px-1 rounded font-semibold">
                              AGENDADA
                            </div>
                          )}
                        {os.status ===
                          OSStatus.PENDING && (
                            <div className="bg-cyan text-white px-1 rounded font-semibold">
                              PENDENTE DE ALOCAÇÃO
                            </div>
                          )}
                        {os.status ===
                          OSStatus.STARTED && (
                            <div className="bg-orange-500 text-white px-1 rounded font-semibold">
                              INICIADA
                            </div>
                          )}
                        {os.status ===
                          OSStatus.COMPLETED && (
                            <div className="bg-blue text-white px-1 rounded font-semibold">
                              CONCLUÍDA
                            </div>
                          )}
                        {os.status === OSStatus.CANCELED && (
                          <div className="bg-slate-600 text-white px-1 rounded font-semibold">
                            CANCELADA
                          </div>
                        )}
                        {os.status === OSStatus.LATE && (
                          <div className="bg-red text-white px-1 rounded font-semibold">
                            ATRASADA
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>))}
                </tbody>
              </table>
            </div>
          </>}
          {false && <pre>{JSON.stringify(item, null, 4)}</pre>}
        </div>
      )}
    </div>
  )
}
