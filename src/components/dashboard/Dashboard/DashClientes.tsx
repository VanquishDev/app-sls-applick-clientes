import { FC } from 'react'
import { Calendar, Building, Check2, Team, Plus2, Info } from 'components/icons'
import Chart1 from '../chart1'

interface Props { }

const DashClientes: FC<Props> = ({ }) => {
  return (<div>
    <div>UNIDADES</div>
    <div className='m-4 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5'>

      <div className='bg-accent-0 rounded-lg shadow md:shadow-lg p-4 md:p-6 2xl:p-7.5'>
        <div className='flex flex-start gap-7 items-center'>
          <div>
            <div className="stat-figure text-tertiary-2">
              <Building />
            </div>
            <div className="stat-title font-bold text-tertiary-2">Unidades</div>
            <div className="mt-1 stat-value text-primary">37</div>
            <div className="stat-desc">Total cadastradas</div>
          </div>
          <div>
            <div className='font-semibold'>24/03/2024</div>
            <div className='text-xs text-accent-5'>Data da primeira unidade agendada.</div>
            <div className='mt-5 font-semibold'>12/05/2024</div>
            <div className='text-xs text-accent-5'>Data da última unidade agendada.</div>
          </div>
        </div>
      </div>

      <div className='bg-accent-0 rounded-lg shadow md:shadow-lg p-4 md:p-6 2xl:p-7.5'>
        <div>
          <div className='flex gap-4 items-center'>
            <div className="stat-figure text-tertiary-2">
              <Calendar />
            </div>
            <div className="stat-title font-bold text-tertiary-2">Agendamentos</div>
          </div>
          <div className='mt-5 flex flex-start justify-around items-center'>
            <div>
              <div className="stat-value">23</div>
              <div className="stat-desc">Agendadas</div>
            </div>
            <div>
              <div className="stat-value">13</div>
              <div className="stat-desc">Confirmadas</div>
            </div>
            <div>
              <div className="stat-value">10</div>
              <div className="stat-desc">À Confirmar</div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-accent-0 rounded-lg shadow md:shadow-lg p-4 md:p-6 2xl:p-7.5'>
        <div>
          <div className='flex gap-4 items-center'>
            <div className="stat-figure text-tertiary-2">
              <Check2 />
            </div>
            <div className="stat-title font-bold text-tertiary-2">Atendimentos</div>
          </div>
          <div className='mt-5 flex flex-start'>
            <div>
              <div className="stat-value">14</div>
              <div className="stat-desc">Unidades atendidas</div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div className='mt-8'>COLABORADORES</div>
    <div className='m-4 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 2xl:gap-7.5'>
      <div className='bg-accent-0 rounded-lg shadow md:shadow-lg p-4 md:p-6 2xl:p-7.5'>
        <div>
          <div className='flex gap-4 items-center'>
            <div className="stat-figure text-tertiary-2">
              <Team />
            </div>
            <div className="stat-title font-bold text-tertiary-2">Colaboradores</div>
          </div>
          <div className='mt-5 flex flex-start'>
            <div>
              <div className="stat-value">1.400</div>
              <div className="stat-desc">total cadastrados</div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-accent-0 rounded-lg shadow md:shadow-lg p-4 md:p-6 2xl:p-7.5'>
        <div className='flex gap-4 items-center'>
          <div className="stat-figure text-tertiary-2">
            <Plus2 />
          </div>
          <div className="stat-title font-bold text-tertiary-2">Aplicações / Adesão</div>
        </div>
        <div className='flex justify-evenly gap-4'>
          <div className='mt-5 flex flex-start'>
            <div>
              <div className="stat-value">700</div>
              <div className="stat-desc">Doses Aplicadas</div>
            </div>
          </div>

          <div className='mt-5 flex flex-start'>
            <div>
              <div className="stat-value">50,0%</div>
              <div className="stat-desc">Percentual de Adesão</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='m-4'>
      <div className='bg-accent-0 rounded-lg shadow md:shadow-lg p-4 md:p-6 2xl:p-7.5'>
        <Chart1 />
      </div>
    </div>

  </div>)
}

export default DashClientes
