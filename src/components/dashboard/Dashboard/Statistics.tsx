import { useEffect, useState } from 'react'
import { Calendar, Building, Team, Plus2, Info, Dashboard } from 'components/icons'
import { Loading, Modal } from 'components/ui'
import Chart1 from '../chart1'
import Image from 'next/image'
import Link from 'next/link'

import { Amplify, API } from 'aws-amplify';
import { GraphQLSubscription, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import * as subscriptions from 'graphql/subscriptions';
import { OnUpdateClientCampaignSubscription } from 'API';

import { useClientCampaign } from 'hooks/useClientCampaign'
import { useUI } from 'components/ui/context'
import { useScreen } from 'hooks/useScreen'
import { useBreakPoints } from 'hooks/useBreakPoints'

import 'moment/locale/pt-br'
import Moment from 'moment'
Moment.locale('pt-br')

import DetailsTotalUnits from './DetailsTotalUnits'
import DetailsUnitsServed from './DetailsUnitsServed'
import DetailsSchedules from './DetailsSchedules'
import DetailsScheduleRouted from './DetailsScheduleRouted'
import DetailsScheduleConfirmed from './DetailsScheduleConfirmed'
import DetailsScheduleFinished from './DetailsScheduleFinished'
import DetailsTotalEligibles from './DetailsTotalEligibles'
import DetailsTotalVaccinations from './DetailsTotalVaccinations'

export default function Statistics(props: any) {
  const { userID } = props
  const [campaign, setCampaign] = useState({} as any)
  const [modalSel, setModalSel] = useState<string>();

  const { getClientCampaign } = useClientCampaign()
  const { openModal, displayModal, closeModal } = useUI()
  const { screenHeight, screenWidth } = useScreen()
  const { isSm } = useBreakPoints()

  const handleCampaign = async (c: any) => {
    const cp = await getClientCampaign({ id: c.id })
    cp.percentServed = cp.client?.totalUnits ? Math.round((cp.client.unitsServed / cp.client.totalUnits) * 100) : 0
    cp.progressUnits = 0
    cp.progressVaccinations = 0
    setCampaign(cp)
  }

  useEffect(() => {
    handleCampaign(props.campaign)
  }, [props])

  useEffect(() => {
    if (campaign && campaign.id) {
      const updateSub = API.graphql<GraphQLSubscription<OnUpdateClientCampaignSubscription>>({
        query: subscriptions.onUpdateClientCampaign,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      }).subscribe({
        next: ({ provider, value }) => {
          const { data } = value as any;
          const { onUpdateClientCampaign } = data;
          if (onUpdateClientCampaign.id === campaign.id) {
            handleCampaign(onUpdateClientCampaign);
          }
        },
        error: (error) => console.warn(error)
      });
      return () => {
        console.log('unsubscribing')
        updateSub.unsubscribe();
      }
    }
  }, [campaign])

  return (campaign && campaign.id) ? (<div>
    {true && <pre>{JSON.stringify(campaign, null, 4)}</pre>}

    <div className='mt-2 font-semibold tracking-wide text-tertiary-2'>LOCALIDADES/CNPJs</div>
    <div className='m-4 grid grid-cols-1 gap-y-4 md:gap-4 md:grid-cols-5'>

      <div className='col-span-3 bg-accent-0 rounded-lg shadow md:shadow-lg p-4 md:p-6 2xl:p-7.5'>
        <div className='flex justify-between items-center gap-4 md:gap-6 2xl:gap-7.5'>
          <div className={campaign.firstOSDate ? 'w-3/5' : 'w-5/5'}>
            <div className='flex gap-4 items-center'>
              <div className="stat-figure text-tertiary-2">
                <Building />
              </div>
              <div className="stat-title font-bold text-tertiary-2">Unidades</div>
            </div>
            <div className='mt-5 flex flex-wrap justify-around items-center gap-5 md:gap-7.5 2xl:gap-10'>
              <div className='cursor-pointer transform transition duration-500 hover:scale-110' onClick={() => {
                setModalSel('totalUnits')
                openModal()
              }}>
                <div className="stat-value">{campaign.client.totalUnits ? campaign.client.totalUnits : 0}</div>
                <div className="stat-desc">Total cadastradas</div>
              </div>
              <div className='cursor-pointer transform transition duration-500 hover:scale-110' onClick={() => {
                setModalSel('unitsServed')
                openModal()
              }}>
                <div className="stat-value">{campaign.client.unitsServed ? campaign.client.unitsServed : 0}</div>
                <div className="stat-desc">Unidades atendidas</div>
              </div>
              <div className='cursor-pointer transform transition duration-500 hover:scale-110' onClick={() => {
                setModalSel('unitsServed')
                openModal()
              }}>
                <div className="stat-value">{campaign.percentServed}%</div>
                <div className="stat-desc">% de atendimento</div>
              </div>
            </div>
          </div>
          {campaign.firstOSDate && <div className='w-2/5'>
            {campaign.firstOSDate && (<div className='cursor-pointer transform transition duration-500 hover:scale-110' onClick={() => {
              setModalSel('schedules')
              openModal()
            }}>
              <div className='font-semibold'>{Moment(campaign.firstOSDate).format('DD/MM/YYYY')}</div>
              <div className='text-xs text-accent-5'>Data da primeira unidade agendada.</div>
            </div>)}
            {campaign.lastOSDate && (<div className='cursor-pointer transform transition duration-500 hover:scale-110' onClick={() => {
              setModalSel('schedules')
              openModal()
            }}>
              <div className='mt-5 font-semibold'>{Moment(campaign.lastOSDate).format('DD/MM/YYYY')}</div>
              <div className='text-xs text-accent-5'>Data da última unidade agendada.</div>
            </div>)}
          </div>}
        </div>
      </div>

      <div className='col-span-2 bg-accent-0 rounded-lg shadow md:shadow-lg p-4 md:p-6 2xl:p-7.5'>
        <div className='flex flex-col justify-between'>
          <div className='flex gap-4 items-center'>
            <div className="stat-figure text-tertiary-2">
              <Calendar />
            </div>
            <div className="stat-title font-bold text-tertiary-2">Agendamentos</div>
          </div>
          <div className='mt-5 flex flex-wrap justify-around items-center gap-4 md:gap-6 2xl:gap-7.5'>
            <div className='cursor-pointer transform transition duration-500 hover:scale-110' onClick={() => {
              setModalSel('scheduleRouted')
              openModal()
            }}>
              <div className="stat-value">{campaign.scheduleRouted ? campaign.scheduleRouted : 0}</div>
              <div className="stat-desc">Roteirizados</div>
            </div>
            <div className='cursor-pointer transform transition duration-500 hover:scale-110' onClick={() => {
              setModalSel('scheduleConfirmed')
              openModal()
            }}>
              <div className="stat-value">{campaign.scheduleConfirmed ? campaign.scheduleConfirmed : 0}</div>
              <div className="stat-desc">Confirmados</div>
            </div>
            <div className='cursor-pointer transform transition duration-500 hover:scale-110' onClick={() => {
              setModalSel('scheduleFinished')
              openModal()
            }}>
              <div className="stat-value">{campaign.scheduleFinished ? campaign.scheduleFinished : 0}</div>
              <div className="stat-desc">Concluídos</div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div className='mt-8 font-semibold tracking-wide text-tertiary-2'>POTENCIAL ELEGÍVEL</div>

    <div className='m-4 grid grid-cols-1 gap-y-4 md:gap-4 md:grid-cols-5'>
      <div className='col-span-3 bg-accent-0 rounded-lg shadow md:shadow-lg p-4 md:p-6 2xl:p-7.5'>
        <div className='flex flex-wrap justify-around items-center gap-5 md:gap-7.5 2xl:gap-10'>
          <div>
            <div className='flex gap-4 items-center'>
              <div className="stat-figure text-tertiary-2">
                <Team />
              </div>
              <div className="stat-title font-bold text-tertiary-2">Colaboradores</div>
            </div>
            <div className='cursor-pointer transform transition duration-500 hover:scale-110' onClick={() => {
              setModalSel('totalEligibles')
              openModal()
            }}>
              <div className="mt-5 stat-value">{campaign.totalEligibles ? campaign.totalEligibles : 0}</div>
              <div className="stat-desc">Total cadastrados</div>
            </div>
            <div className='cursor-pointer transform transition duration-500 hover:scale-110' onClick={() => {
              setModalSel('totalEligiblesDependent')
              openModal()
            }}>
              <div className="mt-5 stat-value">{campaign.totalEligiblesDependent ? campaign.totalEligiblesDependent : 0}</div>
              <div className="stat-desc">Total dependentes</div>
            </div>
            <div className='cursor-pointer transform transition duration-500 hover:scale-110' onClick={() => {
              setModalSel('totalEligiblesThird')
              openModal()
            }}>
              <div className="mt-5 stat-value">{campaign.totalEligiblesThird ? campaign.totalEligiblesThird : 0}</div>
              <div className="stat-desc">Total terceiros</div>
            </div>
          </div>
          <div>
            <div className='flex gap-4 items-center'>
              <div className="stat-figure text-tertiary-2">
                <Plus2 />
              </div>
              <div className="stat-title font-bold text-tertiary-2">Aplicações</div>
            </div>
            <div className='cursor-pointer transform transition duration-500 hover:scale-110' onClick={() => {
              setModalSel('totalVaccinations')
              openModal()
            }}>
              <div className="mt-5 stat-value">{campaign.totalVaccinations ? campaign.totalVaccinations : 0}</div>
              <div className="stat-desc">Doses aplicadas</div>
            </div>
            <div className='cursor-pointer transform transition duration-500 hover:scale-110' onClick={() => {
            }}>
              <div className="mt-5 stat-value">{campaign.totalVaccinationsDependent ? campaign.totalVaccinationsDependent : 0}</div>
              <div className="stat-desc">Doses em dependentes</div>
            </div>
            <div className='cursor-pointer transform transition duration-500 hover:scale-110' onClick={() => {
            }}>
              <div className="mt-5 stat-value">{campaign.totalVaccinationsThird ? campaign.totalVaccinationsThird : 0}</div>
              <div className="stat-desc">Doses em terceiros</div>
            </div>
          </div>
          <div>
            <div className='flex gap-4 items-center'>
              <div className="stat-figure text-tertiary-2">
                <Info />
              </div>
              <div className="stat-title font-bold text-tertiary-2">Adesões</div>
            </div>
            <div className='cursor-pointer transform transition duration-500 hover:scale-110' onClick={() => {
              setModalSel('totalVaccinations')
              openModal()
            }}>
              <div className="mt-5 stat-value">{(campaign.totalEligibles && campaign.totalVaccinations) ? ((campaign.totalVaccinations / campaign.totalEligibles) * 100).toFixed(2) : 0}%</div>
              <div className="stat-desc">% de adesão</div>
            </div>
            <div className='cursor-pointer transform transition duration-500 hover:scale-110' onClick={() => {
            }}>
              <div className="mt-5 stat-value">{(campaign.totalEligiblesDependent && campaign.totalVaccinationsDependent) ? ((campaign.totalVaccinationsDependent / campaign.totalEligiblesDependent) * 100).toFixed(2) : 0}%</div>
              <div className="stat-desc">% de dependentes</div>
            </div>
            <div className='cursor-pointer transform transition duration-500 hover:scale-110' onClick={() => {
            }}>
              <div className="mt-5 stat-value">{(campaign.totalEligiblesThird && campaign.totalVaccinationsThird) ? ((campaign.totalVaccinationsThird / campaign.totalEligiblesThird) * 100).toFixed(2) : 0}%</div>
              <div className="stat-desc">% de terceiros</div>
            </div>
          </div>
        </div>
      </div>

      <div className='col-span-2 bg-accent-0 rounded-lg shadow md:shadow-lg p-4 md:p-6 2xl:p-7.5'>
        <div className='flex gap-4 items-center'>
          <div className="stat-figure text-tertiary-2">
            <Dashboard />
          </div>
          <div className="stat-title font-bold text-tertiary-2">Progressão de campanha</div>
        </div>

        <div className='mt-5 flex justify-between'>
          <div>{campaign.percentServed ? campaign.percentServed : 0}% unidades atendidas</div>
          <div>{campaign.client.totalUnits ? campaign.client.totalUnits : 0}</div>
        </div>
        <progress className="w-full progress progress-warning" value={campaign.percentServed ? campaign.percentServed : 0} max="100"></progress>

        <div className='mt-2 flex justify-between'>
          <div>{(campaign.totalEligibles && campaign.totalVaccinations) ? ((campaign.totalVaccinations / campaign.totalEligibles) * 100).toFixed(2) : 0}% doses aplicadas</div>
          <div>{campaign.totalVaccinations}</div>
        </div>
        <progress className="w-full progress progress-success" value={(campaign.totalEligibles && campaign.totalVaccinations) ? ((campaign.totalVaccinations / campaign.totalEligibles) * 100).toFixed(2) : 0} max="100"></progress>

        <div className='mt-2 flex justify-between'>
          <div>{(campaign.totalEligiblesDependent && campaign.totalVaccinationsDependent) ? ((campaign.totalVaccinationsDependent / campaign.totalEligiblesDependent) * 100).toFixed(2) : 0}% doses em dependentes</div>
          <div>{campaign.totalVaccinationsDependent}</div>
        </div>
        <progress className="w-full progress progress-info" value={(campaign.totalEligiblesDependent && campaign.totalVaccinationsDependent) ? ((campaign.totalVaccinationsDependent / campaign.totalEligiblesDependent) * 100).toFixed(2) : 0} max="100"></progress>

        <div className='mt-2 flex justify-between'>
          <div>{(campaign.totalEligiblesThird && campaign.totalVaccinationsThird) ? ((campaign.totalVaccinationsThird / campaign.totalEligiblesThird) * 100).toFixed(2) : 0}% doses em terceiros</div>
          <div>{campaign.totalVaccinationsThird}</div>
        </div>
        <progress className="w-full progress progress-secondary" value={(campaign.totalEligiblesThird && campaign.totalVaccinationsThird) ? ((campaign.totalVaccinationsThird / campaign.totalEligiblesThird) * 100).toFixed(2) : 0} max="100"></progress>
      </div>
    </div>

    <div className='mt-8 mx-4'>
      <div className='bg-accent-0 rounded-lg shadow md:shadow-lg p-4 md:p-6 2xl:p-7.5'>
        <Chart1 />
      </div>
    </div>

    <div className='mt-8 mx-4 flex justify-center'>
      <Link href="/page/ia"><Image className='rounded-lg shadow md:shadow-lg' alt="IA" src="/ia.png" width={985} height={275} /></Link>
    </div>

    <Modal
      open={displayModal}
      onClose={closeModal}
      focusTrap={false}
      title={
        <div className="mt-2 mb-4 text-2xl font-semibold">
          {modalSel === 'totalUnits' && (<><Building /> <span className="ml-2">Unidades cadastradas</span></>)}
          {modalSel === 'unitsServed' && (<><Building /> <span className="ml-2">Unidades atendidas</span></>)}
          {modalSel === 'schedules' && (<><Calendar /> <span className="ml-2">Datas dos agendamentos</span></>)}
          {modalSel === 'scheduleRouted' && (<><Calendar /> <span className="ml-2">Agendamentos roteirizados</span></>)}
          {modalSel === 'scheduleConfirmed' && (<><Calendar /> <span className="ml-2">Agendamentos confirmados</span></>)}
          {modalSel === 'scheduleFinished' && (<><Calendar /> <span className="ml-2">Agendamentos concluídos</span></>)}
          {modalSel === 'totalEligibles' && (<><Team /> <span className="ml-2">Colaboradores</span></>)}
          {modalSel === 'totalEligiblesDependent' && (<><Team /> <span className="ml-2">Dependentes</span></>)}
          {modalSel === 'totalEligiblesThird' && (<><Team /> <span className="ml-2">Terceiros</span></>)}
          {modalSel === 'totalVaccinations' && (<><Plus2 /> <span className="ml-2">Aplicações</span></>)}
        </div>
      }
    >
      <div
        className=""
        style={{
          height: isSm ? screenHeight : screenHeight * 0.9,
          maxHeight: isSm ? screenHeight : screenHeight * 0.9,
          width: isSm ? screenWidth : screenWidth * 0.9,
          maxWidth: isSm ? screenWidth : screenWidth * 0.9,
        }}
      >
        {modalSel === 'totalUnits' && (<DetailsTotalUnits clientID={campaign.clientID} userID={userID} />)}
        {modalSel === 'unitsServed' && (<DetailsUnitsServed clientID={campaign.clientID} userID={userID} />)}
        {modalSel === 'schedules' && (<DetailsSchedules clientCampaignID={campaign.id} userID={userID} />)}
        {modalSel === 'scheduleRouted' && (<DetailsScheduleRouted clientID={campaign.clientID} userID={userID} />)}
        {modalSel === 'scheduleConfirmed' && (<DetailsScheduleConfirmed clientID={campaign.clientID} userID={userID} />)}
        {modalSel === 'scheduleFinished' && (<DetailsScheduleFinished clientID={campaign.clientID} userID={userID} />)}
        {modalSel === 'totalEligibles' && (<DetailsTotalEligibles clientCampaignID={campaign.id} userID={userID} />)}
        {modalSel === 'totalEligiblesDependent' && (<DetailsTotalEligibles isDependent={true} clientCampaignID={campaign.id} userID={userID} />)}
        {modalSel === 'totalEligiblesThird' && (<DetailsTotalEligibles isThird={true} clientCampaignID={campaign.id} userID={userID} />)}
        {modalSel === 'totalVaccinations' && (<DetailsTotalVaccinations clientCampaignID={campaign.id} userID={userID} />)}
      </div>
    </Modal>

  </div>) : (<Loading />)
}
