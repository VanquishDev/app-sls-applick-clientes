import { FC, useEffect, useState } from 'react'
import cn from 'classnames'
import { Device } from '@capacitor/device'
import { useTheme } from 'next-themes'
import { Mic, Play, Thumbnail } from 'components/icons'
import Link from 'next/link'

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

    <BottomInput />

  </div>)
}

export default IAClientes

function BottomInput() {
  const [isPWA, setIsPWA] = useState(false)
  const [device, setDevice] = useState({} as any)
  const [comment, setComment] = useState('')

  const { theme } = useTheme()

  useEffect(() => {
    let isMounted = true
    if (isMounted) {
      const logDeviceInfo = async () => {
        const info = await Device.getInfo()
        setDevice(info)
        if (window.matchMedia('(display-mode: standalone)').matches) {
          setIsPWA(true)
        }
      }
      logDeviceInfo()
    }
    return () => {
      setDevice({} as any)
    }
  }, [])

  return (<div
    className={cn(
      'z-50 block fixed inset-x-0 bottom-0 border-t-2 backdrop-blur-md rounded-t-box',
      {
        'pb-4': isPWA && device.model === 'iPhone',
        'bg-white/80 border-slate-200': theme === 'light',
        'bg-black/50 border-slate-500 text-accent-4': theme === 'dark',
      }
    )}
  >
    <div className='flex items-center w-full p-0'>
      <Link
        href={`${process.env.HOME}`}
      >
        <span className="px-3 text-xs justify-center inline-block text-center py-2">
          <Thumbnail />
        </span>
      </Link>
      <div className="px-3 text-xs justify-center inline-block text-center py-2">
        <Mic />
      </div>

      <textarea
        rows={2}
        className='w-full border-none'
        placeholder='Digite sua mensagem...'
        value={comment}
        onChange={(e) => {
          setComment(e.target.value)
        }}
      ></textarea>

      <div className="px-3 text-xs justify-center inline-block text-center py-2">
        <Play />
      </div>
    </div>
  </div>)
}
