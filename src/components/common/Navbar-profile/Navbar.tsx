import { Storage } from 'aws-amplify'
import React, { useCallback, FC } from 'react'
import NextHead from 'next/head'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import cn from 'classnames'
import { Container } from 'components/ui'
import { useUI } from 'components/ui/context'
import { Camera, ArrowLeft, Moon, Sun } from 'components/icons'

import { useDropzone } from 'react-dropzone'
import { useUserAuth } from 'components/userAuth/context'
import { toast } from 'react-toast'

interface Link {
  href: string
  label: string
}
interface NavbarProps { }

const Navbar: FC<NavbarProps> = ({ }) => {
  const router = useRouter()
  const { pathname, query } = useRouter()
  const { target } = query
  const rootPathname = pathname.split('/')[1]
  const isMyaccount = rootPathname == 'my-account'
  const isHome = isMyaccount && !target

  const { theme, setTheme } = useTheme()
  const { user, updateUser } = useUserAuth()
  const { setProgress } = useUI()

  const onDrop = useCallback(async (acceptedFiles: any[]) => {
    const file = acceptedFiles[0]
    const extension = file.name.split('.').pop()
    const fileName = `avatar-${user.id}.${extension}`

    try {
      const tempAvatar = window.URL.createObjectURL(file)
      await updateUser({ id: user.id, avatar: fileName, tempAvatar })
      await Storage.put(fileName, file, {
        level: 'public',
        progressCallback(progress: { loaded: any; total: any }) {
          const { loaded, total } = progress
          const p = ((loaded / total) * 100).toFixed(0)
          setProgress(p)
        },
      })
      setProgress(0)
      toast('Avatar atualizado com sucesso.', {
        backgroundColor: '#263238',
        color: '#fff',
      })
    } catch (error) {
      console.log(error)
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { 'image/*': [] },
    onDrop,
  })

  return (
    <div className="shadow-xl rounded-b-3xl bg-tertiary text-tertiary sticky top-0 z-40 transition-all duration-150">
      <NextHead>
        <meta name="theme-color" content={'#7C3AED'} />
      </NextHead>
      <Container clean={process.env.FULL_WIDTH ? true : false}>
        <div
          className={cn('relative flex flex-col pb-4', {
            'px-4': !isHome,
          })}
        >
          <div
            className={cn(
              'mt-4 font-bold text-2xl flex flex-wrap content-center',
              {
                'justify-around mt-0': isHome,
              }
            )}
            onClick={() => router.push('/my-account/')}
          >
            {!isHome && <ArrowLeft className="mr-2" width={32} height={32} />}
            {!isHome && <div>Minha Conta</div>}
          </div>

          {isHome && (
            <div className="flex justify-around z-20">
              <div
                style={{
                  position: 'absolute',
                  marginTop: -80,
                  marginLeft: -250,
                  zIndex: 10,
                }}
              >
                <img width={530} height={530} src="/images/bg1.svg" alt="" />
              </div>
              <div
                className="z-50 pt-12 text-accent-1"
                onClick={() =>
                  theme === 'dark' ? setTheme('light') : setTheme('dark')
                }
              >
                {theme == 'dark' ? (
                  <Moon width={30} height={30} />
                ) : (
                  <Sun width={30} height={30} />
                )}
              </div>
              <div className="mt-4 avatar">
                <div
                  className="rounded-full w-24 h-24 ring ring-primary ring-offset-base-100 ring-offset-2"
                  {...getRootProps()}
                >
                  <input {...getInputProps()} />
                  {user && user.tempAvatar && (
                    <img alt="" src={user.tempAvatar} />
                  )}
                  {user && user.avatar && (
                    <Image
                      src={`${process.env.MIDIA_CLOUDFRONT}${user.avatar}`}
                      alt=""
                      width={120}
                      height={120}
                    />
                  )}
                  {(!user || (!user.avatar && !user.tempAvatar)) && (
                    <img alt="" src="/user/user.png" />
                  )}
                </div>
              </div>
              <div className="z-50 pt-12" {...getRootProps()}>
                <input {...getInputProps()} />
                <Camera width={28} height={28} />
              </div>
            </div>
          )}
          {isHome && user && (
            <div className="mt-2 flex flex-col w-full">
              <div className="font-semibold text-xl text-center">
                {user.name}
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}

export default Navbar
