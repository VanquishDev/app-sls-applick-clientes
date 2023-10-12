import Link from 'next/link'
import { useBreakPoints } from 'hooks/useBreakPoints'
import { useTheme } from 'next-themes'
import { Logo } from 'components/ui'
import { useUserAuth } from 'components/userAuth/context'
import cn from 'classnames'

import {
  Person,
  Key,
  Mobile,
  IconList,
  Pin,
  Cart,
  Info,
  Preferences,
  CreditCard,
  Cog,
  Briefcase,
  Payments,
  Receipts,
  Home,
  Power,
  Logout,
  Building,
} from 'components/icons'

interface Props {
  user: any
  target: string | undefined
}

export default function Menu(props: Props) {
  const { user, target } = props
  const { isSm } = useBreakPoints()
  const { theme } = useTheme()

  return (
    <div>
      {!isSm && <Header />}
      <div
        className={cn('p-4 grid gap-y-3 z-35', {
          ['mb-20 pr-4']: isSm,
        })}
      >
        <h2 className="tracking-widest text-xs title-font font-medium text-tertiary-2 mb-1">
          MINHA CONTA
        </h2>

        <Link href="/my-account/pd">
          <span
            className={[
              'shadow p-3 flex items-center rounded-lg hover:bg-accent-2',
              (!target && !isSm) || target == 'pd'
                ? 'bg-accent-7 hover:bg-accent-8'
                : 'bg-accent-1',
            ].join(' ')}
          >
            <Person
              className={[
                'flex-shrink-0 h-7 w-7',
                (!target && !isSm) || target == 'pd'
                  ? 'text-tertiary-2'
                  : 'text-tertiary-2',
              ].join(' ')}
            />

            <div className="ml-4">
              <p
                className={[
                  'font-semibold md:font-medium text-lg md:text-base',
                  (!target && !isSm) || target == 'pd'
                    ? 'text-accent-0'
                    : theme === 'dark'
                      ? 'text-accent-3'
                      : 'text-accent-7',
                ].join(' ')}
              >
                Dados Pessoais
              </p>
            </div>
          </span>
        </Link>

        <Link href="/my-account/cpw">
          <span
            className={[
              'shadow p-3 flex items-center rounded-lg hover:bg-accent-2',
              target == 'cpw' ? 'bg-accent-7 hover:bg-accent-8' : 'bg-accent-1',
            ].join(' ')}
          >
            <Key
              className={[
                'flex-shrink-0 h-7 w-7',
                target == 'cpw' ? 'text-tertiary-2' : 'text-tertiary-2',
              ].join(' ')}
            />

            <div className="ml-4">
              <p
                className={[
                  'font-semibold md:font-medium text-lg md:text-base',
                  target == 'cpw'
                    ? 'text-accent-0'
                    : theme === 'dark'
                      ? 'text-accent-3'
                      : 'text-accent-7',
                ].join(' ')}
              >
                Alterar Senha
              </p>
            </div>
          </span>
        </Link>

        <Link href="/my-account/logs">
          <span
            className={[
              'shadow p-3 flex items-center rounded-lg hover:bg-accent-2',
              target == 'logs'
                ? 'bg-accent-7 hover:bg-accent-8'
                : 'bg-accent-1',
            ].join(' ')}
          >
            <IconList
              className={[
                'flex-shrink-0 h-7 w-7',
                target == 'logs' ? 'text-tertiary-2' : 'text-tertiary-2',
              ].join(' ')}
            />

            <div className="ml-4">
              <p
                className={[
                  'font-semibold md:font-medium text-lg md:text-base',
                  target == 'logs'
                    ? 'text-accent-0'
                    : theme === 'dark'
                      ? 'text-accent-3'
                      : 'text-accent-7',
                ].join(' ')}
              >
                Atividades Recentes
              </p>
            </div>
          </span>
        </Link>

        <Link href="/my-account/consent">
          <span
            className={[
              'shadow p-3 flex items-center rounded-lg hover:bg-accent-2',
              target == 'consent'
                ? 'bg-accent-7 hover:bg-accent-8'
                : 'bg-accent-1',
            ].join(' ')}
          >
            <Preferences
              className={[
                'flex-shrink-0 h-7 w-7',
                target == 'consent' ? 'text-tertiary-2' : 'text-tertiary-2',
              ].join(' ')}
            />

            <div className="ml-4">
              <p
                className={[
                  'font-semibold md:font-medium text-lg md:text-base',
                  target == 'consent'
                    ? 'text-accent-0'
                    : theme === 'dark'
                      ? 'text-accent-3'
                      : 'text-accent-7',
                ].join(' ')}
              >
                Consentimento
              </p>
            </div>
          </span>
        </Link>

        <Link href="/my-account/advanced">
          <span
            className={[
              'shadow p-3 flex items-center rounded-lg hover:bg-accent-2',
              target == 'advanced'
                ? 'bg-accent-7 hover:bg-accent-8'
                : 'bg-accent-1',
            ].join(' ')}
          >
            <Cog
              className={[
                'flex-shrink-0 h-7 w-7',
                target == 'advanced' ? 'text-tertiary-2' : 'text-tertiary-2',
              ].join(' ')}
            />

            <div className="ml-4">
              <p
                className={[
                  'font-semibold md:font-medium text-lg md:text-base',
                  target == 'advanced'
                    ? 'text-accent-0'
                    : theme === 'dark'
                      ? 'text-accent-3'
                      : 'text-accent-7',
                ].join(' ')}
              >
                Gerenciamento Avançado
              </p>
            </div>
          </span>
        </Link>

      </div>
    </div>
  )
}

function Header() {
  const { user, signOut } = useUserAuth()
  return (
    <div className="p-4 w-full sticky top-0 z-40 bg-primary">
      <Link href={`${process.env.HOME}`}>
        <span className="cursor-pointer" aria-label="Logo">
          <Logo maxHeight={45} />
        </span>
      </Link>
      <div className="pt-4 flex flex-row justify-start gap-3">
        <Link href={`${process.env.HOME}`}>
          <span className="z-10 cursor-pointer bg-accent-1 p-2 rounded-full flex items-center justify-center">
            <Home />
          </span>
        </Link>

        <a
          onClick={() => {
            signOut(user.id)
          }}
          className="z-10 cursor-pointer bg-accent-1 p-2 rounded-full flex items-center justify-center"
        >
          <Logout />
        </a>
      </div>
    </div>
  )
}
