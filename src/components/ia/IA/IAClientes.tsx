import { FC } from 'react'

interface Props { }

const IAClientes: FC<Props> = ({ }) => {
  return (<div className='p-4 lg:p-8'>
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="" src="/images/ia.jpg" />
        </div>
      </div>
      <div className="chat-bubble">Olá, eu sou a Inteligencia Artificial do Applick.</div>
    </div>
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="" src="/images/ia.jpg" />
        </div>
      </div>
      <div className="chat-bubble">Em breve, estarei pronta para ajudar e atender às suas solicitações.</div>
    </div>
  </div>)
}

export default IAClientes
