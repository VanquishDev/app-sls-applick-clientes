import { useEffect, useState } from 'react'
import { List } from 'components/ui'
import { ModelSortDirection, OSStatus } from 'API'
import { useScreen } from 'hooks/useScreen'
import { useBreakPoints } from 'hooks/useBreakPoints'

import 'moment/locale/pt-br'
import Moment from 'moment'
Moment.locale('pt-br')

import { useOS } from 'hooks/useOS'
import { useUser } from 'hooks/useUser'

export default function DetailsScheduleRouted(props: any) {
  const { clientID, userID } = props;
  const { screenHeight } = useScreen()
  const { isSm } = useBreakPoints()

  const { listOSsByClientStatus } = useOS()

  return clientID ? <List
    keys={`${clientID ? clientID : ''}`}
    userID={userID}
    emptyMessage='Nenhum agendamento por aqui.'
    endMessage='Estes são todos os agendamentos.'
    listItems={listOSsByClientStatus}
    variables={{
      clientID,
      status: { eq: OSStatus.ROUTED },
      limit: 100,
      sortDirection: ModelSortDirection.ASC,
      nextToken: null
    }}
    layout='flexCol'
    Card={Card}
    height={isSm ? screenHeight - 70 : screenHeight * 0.8}
  /> : <></>;
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
        <div className='text-xl font-semibold'>{Moment(item.start).format('dddd')}, {Moment(item.start).format('DD/MM/YYYY')} - OS {item.number}</div>
        <div className="flex mt-1 gap-2 text-sm">
          {item.status ===
            OSStatus.ROUTED && (
              <div className="bg-purple-500 text-white px-1 rounded font-semibold">
                ROTEIRIZADA
              </div>
            )}
          {item.status ===
            OSStatus.SCHEDULED && (
              <div className="bg-green text-white px-1 rounded font-semibold">
                AGENDADA
              </div>
            )}
          {item.status ===
            OSStatus.PENDING && (
              <div className="bg-cyan text-white px-1 rounded font-semibold">
                PENDENTE DE ALOCAÇÃO
              </div>
            )}
          {item.status ===
            OSStatus.STARTED && (
              <div className="bg-orange-500 text-white px-1 rounded font-semibold">
                INICIADA
              </div>
            )}
          {item.status ===
            OSStatus.COMPLETED && (
              <div className="bg-blue text-white px-1 rounded font-semibold">
                CONCLUÍDA
              </div>
            )}
          {item.status === OSStatus.CANCELED && (
            <div className="bg-slate-600 text-white px-1 rounded font-semibold">
              CANCELADA
            </div>
          )}
          {item.status === OSStatus.LATE && (
            <div className="bg-red text-white px-1 rounded font-semibold">
              ATRASADA
            </div>
          )}
        </div>
      </div>

      {index === itemSelected && (
        <div className={[
          'border-l-4 p-2 text-accent-8 bg-accent-0 pb-4 rounded-md border-tertiary-2',
          itemSelected === index ? 'rounded-t-none shadow-lg' : 'shadow'
        ].join(' ')}
        >
          <VaccinationCard vaccination={item.vaccination} />
          {item.orientation && <div className='mt-4'>
            <div className="text-sm font-semibold text-tertiary-2">Orientação</div>
            <div>{item.orientation}</div>
          </div>}
          {item.notes && <div className='mt-2'>
            <div className="text-sm font-semibold text-tertiary-2">Observações</div>
            <div>{item.notes}</div>
          </div>}
          <div className='mt-4 flex flex-wrap gap-8'>
            {item.professionalStarted && <div>
              <div className="text-sm font-semibold text-tertiary-2">Profissional Abertura</div>
              <div><GetUserName userID={item.professionalStarted} /></div>
            </div>}
            {item.unitNameFinished && <div>
              <div className="text-sm font-semibold text-tertiary-2">Unidade</div>
              <div>{item.unitNameFinished}</div>
            </div>}
            {item.contactNameFinished && <div>
              <div className="text-sm font-semibold text-tertiary-2">Contato</div>
              <div>{item.contactNameFinished}</div>
            </div>}
            {item.contactDocFinished && <div>
              <div className="text-sm font-semibold text-tertiary-2">Doc</div>
              <div>{item.contactDocFinished}</div>
            </div>}
          </div>
          <div className='mt-4'>
            <div className="text-sm font-semibold text-tertiary-2">Equipe Applick</div>
            {item.professionals.map((userID: string, idx1: number) => (<div key={idx1}><GetUserName userID={userID} /></div>))}
            {item.collaborators.map((userID: string, idx1: number) => (<div key={idx1}><GetUserName userID={userID} /></div>))}
            {item.driverID && <div><GetUserName userID={item.driverID} /></div>}
          </div>
          <div className='mt-4 flex flex-wrap gap-6'>
            <div>
              <div className="text-sm font-semibold text-tertiary-2">Doses aplicadas</div>
              <div>{item.qtyApplication ? item.qtyApplication : 0}</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-tertiary-2">Doses retidas</div>
              <div>{item.stayQtd ? item.stayQtd : 0}</div>
            </div>
          </div>
          {item.notesStarted && <div className='mt-4'>
            <div className="text-sm font-semibold text-tertiary-2">Abertura da OS</div>
            <div>{item.notesStarted}</div>
          </div>}
          {item.notesFinished && <div className='mt-4'>
            <div className="text-sm font-semibold text-tertiary-2">Fechamento da OS</div>
            <div>{item.notesFinished}</div>
          </div>}
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
  const { getUser } = useUser()

  useEffect(() => {
    const GetUser = async () => {
      const u = await getUser({ id: userID as string })
      setName(u && u.name ? u.name : '')
    }
    if (userID) {
      GetUser()
    }
  }, [userID])

  return (<div>{name}</div>)
}
