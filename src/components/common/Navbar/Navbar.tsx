import { FC, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import cn from 'classnames'
import s from './Navbar.module.css'
import NavbarRoot from './NavbarRoot'
import { Logo, Container, GoBack } from 'components/ui'
import { Searchbar, UserNav } from 'components/common'
import NextHead from 'next/head'
import { useTheme } from 'next-themes'
import NavbarSub from './NavbarSub'
import { useUI } from 'components/ui/context'
import { useBreakPoints } from 'hooks/useBreakPoints'

interface Link {
  href: string
  label: string
}
interface NavbarProps {
  user?: any
  links?: Link[]
  displaySearch: boolean
}

const Navbar: FC<NavbarProps> = ({ links, displaySearch, user }) => {
  const { pathname, query } = useRouter()
  const rootPathname = pathname.split('/')[1]
  const isMyAccount = rootPathname === 'my-account'
  const isAdmin = rootPathname === 'admin'
  const { theme } = useTheme()
  const { isSm } = useBreakPoints()
  const { setHeightNavBar, itemListSelected } = useUI()

  const ref = useRef(null as any)

  useEffect(() => {
    if (ref.current) {
      const h = ref.current.clientHeight
      setHeightNavBar(h)
      console.log(`****** Height Nav Bar = ${h} ******`)
    }
  }, [ref.current?.clientHeight])

  return (
    <NavbarRoot>
      <NextHead>
        <meta
          name="theme-color"
          content={theme === 'dark' ? '#282a36' : '#fafafa'}
        />
      </NextHead>
      <Container clean={process.env.FULL_WIDTH === 'true' ? true : false}>
        <div
          ref={ref}
          className={cn(s.nav, {
            'px-4': process.env.FULL_WIDTH === 'true' ? true : false,
          })}
        >
          <div className="flex items-center flex-1">
            <Link
              href={`${query.t
                ? `${process.env.HOME}?t=` +
                encodeURIComponent(query.t.toString())
                : `${process.env.HOME}`
                }`}
            >
              <span className={cn(s.logo, 'absolute top-1.5')} aria-label="Logo">
                <Logo maxHeight={60} />
              </span>
            </Link>

            <nav className={s.navMenu}>
              {links?.map((l) => (
                <Link href={l.href} key={l.href}>
                  <span className={s.link}>{l.label}</span>
                </Link>
              ))}
            </nav>
          </div>

          {displaySearch && (
            <div className="justify-center flex-1 hidden md:flex">
              <Searchbar />
            </div>
          )}

          <div className="flex items-center justify-end flex-1 space-x-8">
            <UserNav />
          </div>
        </div>

        {displaySearch && (
          <div className="flex py-2 px-4 md:hidden">
            <Searchbar id="mobile-search" />
          </div>
        )}
      </Container>
    </NavbarRoot>
  )
}

export default Navbar
