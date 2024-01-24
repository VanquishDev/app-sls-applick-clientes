import { List } from 'components/ui'
import { ModelSortDirection, OSStatus } from 'API'
import { useScreen } from 'hooks/useScreen'
import { useBreakPoints } from 'hooks/useBreakPoints'
import { formatPhoneNumber } from 'react-phone-number-input'

import 'moment/locale/pt-br'
import Moment from 'moment'
Moment.locale('pt-br')

import { useClientUnit } from 'hooks/useClientUnit'

export default function DetailsTotalUnits(props: any) {
  const { clientID, userID } = props;
  const { screenHeight } = useScreen()
  const { isSm } = useBreakPoints()

  const { listUnitsByClient } = useClientUnit()

  return <List
    keys={`${clientID ? clientID : ''}`}
    userID={userID}
    emptyMessage='Nenhuma unidade por aqui.'
    endMessage='Estes são todas as unidades.'
    listItems={listUnitsByClient}
    variables={{
      clientID,
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
        {item.oss.items.length > 0 && <div className="flex mt-1 gap-2 text-xs font-semibold">
          <div className="bg-blue text-white px-1 rounded">
            {item.oss.items.length} OS
          </div>
        </div>}
      </div>

      {index === itemSelected && (
        <div className={[
          'border-l-4 p-2 pb-4 bg-accent-0 rounded-md border-tertiary-2',
          itemSelected === index ? 'rounded-t-none shadow-lg' : 'shadow'
        ].join(' ')}
        >
          <div className="text-sm font-semibold text-tertiary-2">Localização</div>
          <div>
            {item.street}
            {item.number && (
              <span>, {item.number}</span>
            )}
            {item.complement && (
              <span>, {item.complement}</span>
            )}
            {' '}
            CEP {item.zipcode}
            {item.neighborhood && (
              <span>, {item.neighborhood}</span>
            )}
            {' '}
            {item.city && <span>{item.city}</span>}
            {item.state && (
              <span>, {item.state}</span>
            )}
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
                          OSStatus.CONFIRMED && (
                            <div className="bg-emerald-500 text-white px-1 rounded font-semibold">
                              CONFIRMADA
                            </div>
                          )}
                        {os.status ===
                          OSStatus.CANCELED && (
                            <div className="bg-black text-white px-1 rounded font-semibold">
                              CANCELADA
                            </div>
                          )}
                        {os.status ===
                          OSStatus.FINISHED && (
                            <div className="bg-black text-white px-1 rounded font-semibold">
                              FINALIZADA
                            </div>
                          )}
                        {os.status ===
                          OSStatus.ROUTED && (
                            <div className="bg-cyan text-white px-1 rounded font-semibold">
                              ROTERIZADA
                            </div>
                          )}
                        {os.status ===
                          OSStatus.STARTED && (
                            <div className="bg-red text-white px-1 rounded font-semibold">
                              INICIADA
                            </div>
                          )}
                        {os.status === OSStatus.STANDBY && (
                          <div className="bg-orange-500 text-white px-1 rounded font-semibold">
                            AGUARDANDO
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
