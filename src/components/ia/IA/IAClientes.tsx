import { FC, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { useScreen } from 'hooks/useScreen'
import { useUserAuth } from 'components/userAuth/context'
import { Loading } from 'components/ui'
import { useUI } from 'components/ui/context'
import Image from 'next/image'
import { ChatWindow } from "components/chat/ChatWindow";

interface Props { }

const IAClientes: FC<Props> = ({ }) => {
  const { isAuthenticating, user } = useUserAuth()
  const { theme } = useTheme()

  const {
    setModalView,
    openModal
  } = useUI()

  useEffect(() => {
    if (!isAuthenticating) {
      if (!user) {
        setModalView('LOGIN_VIEW')
        openModal()
      }
    }

  }, [isAuthenticating])

  const BannerUserNotFound = () => (
    <div className='bg-tertiary text-tertiary font-bold text-lg p-4 rounded-lg'>
      Para acessar esta página você precisa estar logado.
    </div>
  );

  const InfoCard = (<div className='w-full flex justify-start'><Image
    src='/user/ia.png'
    alt=""
    width={96}
    height={96}
    className="rounded-full shadow-lg"
  /></div>)

  return !isAuthenticating ? (<div className='p-4 lg:p-8'>
    {!user && <BannerUserNotFound />}

    {user && <ChatWindow
      endpoint="/api/chat/retrieval"
      emptyStateComponent={InfoCard}
      showIngestForm={true}
      placeholder="Olá, como posso ajudar você hoje?"
    ></ChatWindow>}

  </div>) : (<div><Loading /></div>)
}

export default IAClientes
