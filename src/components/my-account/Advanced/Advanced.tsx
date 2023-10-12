import { BrowserStorageCache } from '@aws-amplify/cache'
import { useState } from 'react'
import { Trash } from 'components/icons'
import { Button, FormCard } from 'components/ui'
import { useUser } from 'hooks/useUser'
import { useUserAuth } from 'components/userAuth/context'
import { useLog } from 'hooks/useLog'

import { ActionSheet, ActionSheetButtonStyle } from '@capacitor/action-sheet'

export default function Advanced(props: any) {
  const [loading, setLoading] = useState(false)
  const [loading2, setLoading2] = useState(false)
  const [message, setMessage] = useState()
  const [dirty, setDirty] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const { adminDeleteUser } = useUser()
  const { setLogUser } = useLog()
  const { user, signOut } = useUserAuth()

  const openModalClearCache = async (e: any) => {
    const promptRet = await ActionSheet.showActions({
      title: 'Confirma excluir o cache?',
      message: '',
      options: [
        { title: 'NÃO', style: ActionSheetButtonStyle.Destructive },
        { title: 'SIM' },
      ],
    })
    if (promptRet.index === 1) {
      setLoading(true)
      BrowserStorageCache.removeItem('federatedInfo')
      localStorage.clear()
      signOut(user.id)
      setLoading(false)
    }
  }

  const openModalDeleteAccount = async (e: any) => {
    const promptRet = await ActionSheet.showActions({
      title: 'Confirma excluir sua conta?',
      message: '',
      options: [
        { title: 'NÃO', style: ActionSheetButtonStyle.Destructive },
        { title: 'SIM' },
      ],
    })
    if (promptRet.index === 1) {
      setLoading2(true)
      const i = {
        userID: user.id,
        tag: 'EXCLUSÃO DA CONTA',
        notes: `${user.name} excluiu sua conta.`,
        message: `Nome: ${user.name}, Email: ${user.email}, Telefone: ${user.phone}.`,
        page: 'Minha Conta',
      }
      await setLogUser(i)
      await adminDeleteUser({ id: user.id })
      signOut(user.id)
      setLoading2(false)
    }
  }

  const ButtonsClearCache: React.FC = () => (
    <div>
      <Button
        variant="slim"
        type="button"
        loading={loading}
        disabled={loading}
        onClick={() => openModalClearCache(null)}
      >
        <Trash className="h-7 w-7" />
        <span className="ml-2 font-semibold md:font-medium text-lg md:text-base">
          LIMPAR CACHE
        </span>
      </Button>
    </div>
  )

  const ButtonsDeleteAccount: React.FC = () => (
    <div>
      <Button
        variant="slim"
        type="button"
        style={{ background: '#D50000', color: '#FFFFFF' }}
        onClick={() => openModalDeleteAccount(null)}
        loading={loading2}
        disabled={loading2}
      >
        <Trash className="h-7 w-7" />
        <span className="ml-2 font-semibold md:font-medium text-lg md:text-base">
          EXCLUIR CONTA
        </span>
      </Button>
    </div>
  )

  return (
    <>
      <FormCard
        title="Limpar Cache"
        description="A fim de melhorar sua experiencia no app um cache local é gerado automaticamente a medida que você utiliza o app. Aqui voce pode apagar este cache."
        buttons={<ButtonsClearCache />}
      ></FormCard>

      <FormCard
        title="Excluir Conta - Zona de perigo"
        description="Caso exclua sua conta, todos seus dados serão apagados de forma irreversível! Tenha certeza se realmente deseja excluir sua conta."
        buttons={<ButtonsDeleteAccount />}
      ></FormCard>
    </>
  )
}
