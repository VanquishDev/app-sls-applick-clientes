import { useRouter } from 'next/router'
import { useState } from 'react'
import cn from 'classnames'
import s from './NavbarSub.module.css'
import Link from 'next/link'
import ClickOutside from 'lib/click-outside'
import {
  Person,
  Chat,
  Plus2,
  Book,
  Calendar,
  Thumbnail,
  Files,
  Building,
} from 'components/icons'

import { useBreakPoints } from 'hooks/useBreakPoints'
import { useUserAuth } from 'components/userAuth/context'
export default function NavbarSub() {
  const [menuOpen, setMenuOpen] = useState(0)

  const router = useRouter()
  const { pathname, query } = useRouter()
  const rootPathname = pathname.split('/')[1]

  const { user } = useUserAuth()

  const isHome = router.asPath == process.env.HOME
  const isMyAccount = rootPathname === 'my-account'
  const isAdmin = rootPathname === 'admin'
  const isDeliveries = router.asPath == '/deliveries/'
  const isCompany = router.asPath == '/company/'
  const isChat = router.asPath == '/page/chat/'
  const isOrders = router.asPath == '/orders/'
  const isVaccinationCard =
    router.asPath == '/vaccinationCard/' ||
    (pathname.split('/')[1] == 'vaccinationCard' &&
      pathname.split('/')[2] !== 'register')
  const isVaccinationRegister =
    pathname.split('/')[1] == 'vaccinationCard' &&
    pathname.split('/')[2] === 'register'

  const { isMd } = useBreakPoints()

  return (
    <ClickOutside active={menuOpen !== 0} onClick={() => setMenuOpen(0)}>
      <div>
        <nav className={s.nav}>
          <ul className={s.navmain}>
            <li>
              <Link
                href={`${query.t
                  ? `${process.env.HOME}?t=` +
                  encodeURIComponent(query.t.toString())
                  : `${process.env.HOME}`
                  }`}
              >
                <span className={cn(s.link, { [s.active]: isHome })}>
                  <Thumbnail />
                  <span className="block ml-2 mt-1 subpixel-antialiased">
                    VACINAS
                  </span>
                </span>
              </Link>
            </li>
            {user && (
              <li>
                <Link
                  href={`${query.t
                    ? `/vaccinationCard/?t=` +
                    encodeURIComponent(query.t.toString())
                    : '/vaccinationCard/'
                    }`}
                >
                  <span
                    className={cn(s.link, {
                      [s.active]: isVaccinationCard,
                    })}
                  >
                    <Book />
                    <span className="block ml-2 mt-1 subpixel-antialiased">
                      CARTEIRAS
                    </span>
                  </span>
                </Link>
              </li>
            )}
            {user && (
              <li>
                <Link
                  href={`${query.t
                    ? `/orders/?t=` + encodeURIComponent(query.t.toString())
                    : '/orders/'
                    }`}
                >
                  <span
                    className={cn(s.link, {
                      [s.active]: isOrders,
                    })}
                  >
                    <Files width={26} height={26} />
                    <span className="block mt-1 ml-2 subpixel-antialiased">
                      PEDIDOS
                    </span>
                  </span>
                </Link>
              </li>
            )}
            {user && user.groups.indexOf('Profissional') !== -1 && (
              <li>
                <Link href="/deliveries/">
                  <span
                    className={cn(s.link, {
                      [s.active]: isDeliveries,
                    })}
                  >
                    <Calendar />
                    <span className="block mt-1 ml-2 subpixel-antialiased">
                      AGENDA
                    </span>
                  </span>
                </Link>
              </li>
            )}
            {user && user.groups.indexOf('Profissional') !== -1 && (
              <li>
                <Link href="/vaccinationCard/register/">
                  <span
                    className={cn(s.link, {
                      [s.active]: isVaccinationRegister,
                    })}
                  >
                    <Plus2 />
                    <span className="block mt-1 ml-2 subpixel-antialiased">
                      APLICAR
                    </span>
                  </span>
                </Link>
              </li>
            )}
            {user && user.groups.indexOf('Clinica') !== -1 && (
              <li>
                <Link href="/company/">
                  <span
                    className={cn(s.link, {
                      [s.active]: isCompany,
                    })}
                  >
                    <Building />
                    <span className="block mt-1 ml-2 subpixel-antialiased">
                      CLÍNICA
                    </span>
                  </span>
                </Link>
              </li>
            )}
            {user && <li></li>}
          </ul>
        </nav>
      </div>
    </ClickOutside>
  )
}
