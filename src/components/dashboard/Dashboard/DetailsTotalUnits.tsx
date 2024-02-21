import { List } from 'components/ui'
import { OSStatus } from 'API'
import { useScreen } from 'hooks/useScreen'
import { useBreakPoints } from 'hooks/useBreakPoints'
import { formatPhoneNumber } from 'react-phone-number-input'
import { Search } from 'components/icons'
import cn from 'classnames'

import 'moment/locale/pt-br'
import Moment from 'moment'
Moment.locale('pt-br')

import { useClientCampaignUnit } from 'hooks/useClientCampaignUnit'
import { useState } from 'react'

export default function DetailsTotalUnits(props: any) {
  const { clientCampaignID, userID } = props;
  const { screenHeight } = useScreen()
  const { isSm } = useBreakPoints()

  const { listUnitsByClientCampaign } = useClientCampaignUnit()

  return <List
    keys={`${clientCampaignID ? clientCampaignID : ''}`}
    userID={userID}
    emptyMessage='Nenhuma unidade por aqui.'
    endMessage='Estes são todas as unidades.'
    listItems={listUnitsByClientCampaign}
    variables={{
      clientCampaignID,
      limit: 100,
      // sortDirection: ModelSortDirection.DESC,
      nextToken: null
    }}
    layout='flexCol'
    Card={Card}
    height={isSm ? screenHeight - 70 : screenHeight * 0.8}
  />;
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
        <div className='text-xl font-semibold'>{item.name}</div>
        <div className="flex mt-1 gap-2 font-semibold">
          <div className="bg-black text-white px-1 rounded">
            {item.totalContractedVaccines} / {item.totalEligibles}
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
            <div className="overflow-x-auto">
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

function Header(props: any) {
  const [search, setSearch] = useState('')

  return (<div className="mb-4 flex flex-col md:flex-row md:justify-between">
    <div></div>
    <div>
      <div
        className={cn(
          'cursor-default relative flex items-center justify-center text-base transition-colors duration-150'
        )}
      >
        <input
          id="searchHeader"
          className="text-accent-9 py-2 bg-accent-0 w-full pl-3 rounded-lg border-2 border-accent-2 outline-none focus:border-indigo-500"
          autoComplete="off"
          placeholder="Pesquisar..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <div className="cursor-pointer text-accent-7 absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <Search />
        </div>
      </div>
    </div>
  </div>)
}
