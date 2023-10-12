import { FC, useEffect, useState } from 'react'
import {
  Person,
  Chat,
  Plus2,
  Book,
  Calendar,
  Thumbnail,
  Files,
} from 'components/icons'

import { useRouter } from 'next/router'
import Link from 'next/link'
import s from './BottomNavBar.module.css'
import cn from 'classnames'
import { Device } from '@capacitor/device'
import { useUI } from 'components/ui/context'
import { useTheme } from 'next-themes'

interface Props {
  user: any
}

const BottomNavBar: FC<Props> = (props: Props) => {
  const { user } = props

  const router = useRouter()
  const { pathname, query } = router
  const rootPathname = pathname.split('/')[1]
  const { theme } = useTheme()

  const isHome = router.asPath == process.env.HOME
  const isMyAccount = rootPathname === 'my-account'
  const isChat = router.asPath == '/page/ia/'

  const { config } = useUI()
  const [device, setDevice] = useState({} as any)
  const [isPWA, setIsPWA] = useState(false)
  const [configNavBar, setConfigNavBar] = useState({} as any)

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
      setConfigNavBar({} as any)
    }
  }, [config])

  return user ? (
    <section
      className={cn(
        'z-50 block fixed inset-x-0 bottom-0 border-t-2 backdrop-blur-md rounded-t-box',
        {
          'pb-4': isPWA && device.model === 'iPhone',
          'bg-white/80 border-slate-200': theme === 'light',
          'bg-black/50 border-slate-500 text-accent-4': theme === 'dark',
        }
      )}
    >
      <div className="flex justify-evenly">
        <Link
          href={`${query.t
            ? `${process.env.HOME}?t=` +
            encodeURIComponent(query.t.toString())
            : `${process.env.HOME}`
            }`}
        >
          <span className={cn(s.link, { [s.active]: isHome })}>
            <Thumbnail />
            <span className="block mt-1 subpixel-antialiased">Dashboard</span>
          </span>
        </Link>

        <Link href="/page/ia">
          <span
            className={cn(s.link, {
              [s.active]: isChat,
            })}
          >
            <Chat />
            <span className="block mt-1 subpixel-antialiased">IA</span>
          </span>
        </Link>

        {user && (
          <Link href="/my-account/">
            <span
              className={cn(s.link, {
                [s.active]: isMyAccount,
              })}
            >
              <Person width={26} height={26} />
              <span className="block mt-1 subpixel-antialiased">M. Conta</span>
            </span>
          </Link>
        )}
      </div>
    </section>
  ) : (
    <></>
  )
}

export default BottomNavBar
