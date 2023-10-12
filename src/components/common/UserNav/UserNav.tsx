import { FC } from 'react'
import cn from 'classnames'
import { Bell, Edit } from 'components/icons'
import { Button } from 'components/ui'
import { useUI } from 'components/ui/context'
import DropdownMenu from './DropdownMenu'
import s from './UserNav.module.css'
import { useUserAuth } from 'components/userAuth/context'
import { useRouter } from 'next/router'

interface Props {
  className?: string
  children?: React.ReactNode
  closeSidebarIfPresent?: any
  rootPathname?: any
}

const UserNav: FC<Props> = ({ className, children, ...props }) => {
  const { user } = useUserAuth()

  const { pathname, query } = useRouter()
  const rootPathName = pathname.split('/')[1]

  const {
    showEditPage,
    hideEditPage,
    displayEditPage,
    toggleSidebarRight,
    openModal,
    displayModal,
    setModalView,
  } = useUI()
  const itemsCount = 0

  return (
    <nav className={cn(s.root, className)}>
      <div className={s.mainContainer}>
        <ul className={s.list}>

          {user && (
            <li key="noti" className={s.item} onClick={toggleSidebarRight}>
              <a className="z-10 cursor-pointer bg-accent-1 p-2 rounded-full flex items-center justify-center">
                <Bell />
                {itemsCount > 0 && (
                  <span className={s.bagCount}>{itemsCount}</span>
                )}
              </a>
            </li>
          )}

          <li key="my-account" className={s.item}>
            {user ? (
              <DropdownMenu />
            ) : !displayModal ? (
              <div>
                <Button
                  className="bg-tertiary text-tertiary"
                  variant="slim"
                  onClick={() => {
                    setModalView('LOGIN_VIEW')
                    openModal()
                  }}
                >
                  ENTRAR
                </Button>
              </div>
            ) : (
              <div></div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default UserNav
