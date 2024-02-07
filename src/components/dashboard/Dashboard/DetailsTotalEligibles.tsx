import { List, Loading } from 'components/ui'
import { ModelSortDirection } from 'API'
import { useScreen } from 'hooks/useScreen'
import { useBreakPoints } from 'hooks/useBreakPoints'

import { useClientCampaignEligible } from 'hooks/useClientCampaignEligible'

export default function DetailsTotalEligibles(props: any) {
  const { clientCampaignID, userID, isDependent, isThird } = props;
  const { screenHeight } = useScreen()
  const { isSm } = useBreakPoints()

  const { listEligiblesByClientCampaign } = useClientCampaignEligible()

  return clientCampaignID ? <List
    keys={`${clientCampaignID ? clientCampaignID : ''}`}
    userID={userID}
    emptyMessage='Nenhum colaborador por aqui.'
    endMessage='Estes são todos os colaboradores.'
    listItems={listEligiblesByClientCampaign}
    variables={{
      clientCampaignID,
      limit: 100,
      // sortDirection: ModelSortDirection.DESC,
      nextToken: null
    }}
    layout='flexCol'
    Card={Card}
    height={isSm ? screenHeight - 70 : screenHeight * 0.8}
    paramsItems={{ isDependent, isThird }}
  /> : <Loading />;
}

function Card(props: any) {
  const { item, index, handleSelect, itemSelected, isLast, paramsItems } = props

  return (!item || (paramsItems.isDependent && !item.isDependent) || (paramsItems.isThird && !item.isThird)) ? null : (
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
            {item.isDependent && <div>
              <div className="text-sm font-semibold text-tertiary-2">Dependente</div>
              <div>Sim</div>
            </div>}
            {(item.isDependent && item.cpfRelationship) && <div>
              <div className="text-sm font-semibold text-tertiary-2">CPF do responsável</div>
              <div>{item.cpfRelationship}</div>
            </div>}
            {item.isThird && <div>
              <div className="text-sm font-semibold text-tertiary-2">Terceiro</div>
              <div>Sim</div>
            </div>}
            {(item.isThird && item.thirdName) && <div>
              <div className="text-sm font-semibold text-tertiary-2">Nome da empresa</div>
              <div>{item.thirdName}</div>
            </div>}
          </div>
          {false && <pre>{JSON.stringify(item, null, 4)}</pre>}
        </div>
      )}
    </div>
  )
}
