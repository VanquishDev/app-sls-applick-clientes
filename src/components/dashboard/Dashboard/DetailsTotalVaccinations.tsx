import { useEffect, useState } from 'react'
import { List } from 'components/ui'
import { ModelSortDirection } from 'API'
import { useScreen } from 'hooks/useScreen'
import { useBreakPoints } from 'hooks/useBreakPoints'

import 'moment/locale/pt-br'
import Moment from 'moment'
Moment.locale('pt-br')

import { useClientCampaignEligibleVaccination } from 'hooks/useClientCampaignEligibleVaccination'
import { useUser } from 'hooks/useUser'

export default function DetailsTotalVaccinations(props: any) {
  const { clientCampaignID, userID } = props;
  const { screenHeight } = useScreen()
  const { isSm } = useBreakPoints()

  const { listVaccinationsByClientCampaign } = useClientCampaignEligibleVaccination()

  return <List
    keys={`${clientCampaignID ? clientCampaignID : ''}`}
    userID={userID}
    emptyMessage='Nenhum colaborador imunizado por aqui.'
    endMessage='Estes são todos os colaboradores imunizados.'
    listItems={listVaccinationsByClientCampaign}
    variables={{
      clientCampaignID,
      limit: 100,
      sortDirection: ModelSortDirection.DESC,
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
        <div className='text-lg font-semibold'>{item.clientEligible.name}</div>
        <div className="flex mt-1 gap-2 text-xs font-semibold">
          <div className="bg-teal-500 text-white px-1 rounded">
            {Moment(item.applicationDate).format('DD/MM/YYYY HH:mm')}
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
            {item.clientEligible.key && <div>
              <div className="text-sm font-semibold text-tertiary-2">Identificador</div>
              <div>{item.clientEligible.key}</div>
            </div>}
            {(item.clientEligible.cpf && item.clientEligible.cpf !== 'NaN') && <div>
              <div className="text-sm font-semibold text-tertiary-2">CPF</div>
              <div>{item.clientEligible.cpf}</div>
            </div>}
            {(item.clientEligible.rg && item.clientEligible.rg !== 'NaN') && <div>
              <div className="text-sm font-semibold text-tertiary-2">RG</div>
              <div>{item.clientEligible.rg}</div>
            </div>}
            {item.clientEligible.birth && <div>
              <div className="text-sm font-semibold text-tertiary-2">Nascimento</div>
              <div>{item.clientEligible.birth}</div>
            </div>}
            {item.clientEligible.isDependent && <div>
              <div className="text-sm font-semibold text-tertiary-2">Dependente</div>
              <div>Sim</div>
            </div>}
            {(item.clientEligible.isDependent && item.clientEligible.cpfRelationship) && <div>
              <div className="text-sm font-semibold text-tertiary-2">CPF do responsável</div>
              <div>{item.clientEligible.cpfRelationship}</div>
            </div>}
            {item.clientEligible.isThird && <div>
              <div className="text-sm font-semibold text-tertiary-2">Terceiro</div>
              <div>Sim</div>
            </div>}
            {(item.clientEligible.isThird && item.clientEligible.thirdName) && <div>
              <div className="text-sm font-semibold text-tertiary-2">Nome da empresa</div>
              <div>{item.clientEligible.thirdName}</div>
            </div>}
          </div>
          <VaccinationCard vaccination={item.vaccination} />
          <div className='mt-4 flex flex-wrap gap-8'>
            {item.profissionalID && <div>
              <div className="text-sm font-semibold text-tertiary-2">Profissional Applick</div>
              <div><GetUserName userID={item.profissionalID} /></div>
            </div>}
            {item.coren && <div>
              <div className="text-sm font-semibold text-tertiary-2">Coren</div>
              <div>{item.coren}</div>
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
  const { getUser } = useUser()

  useEffect(() => {
    const GetUser = async () => {
      const u = await getUser({ id: userID as string })
      console.log(u)
      setName(u.name)
    }
    if (userID) {
      GetUser()
    }
  }, [userID])

  return (<div>{name}</div>)
}
