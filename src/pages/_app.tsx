import { Amplify } from 'aws-amplify'
import awsExports from '../aws-exports'
Amplify.configure({ ...awsExports, ssr: true })

import 'assets/main.css'
import 'assets/chrome-bug.css'
import 'suneditor/dist/css/suneditor.min.css'

import { useRouter } from 'next/router'
import { Head } from 'components/common'

import { FC, useEffect } from 'react'
import type { AppProps } from 'next/app'

import { ThemeProvider } from 'next-themes'

import { ManagedUserAuthContext } from 'components/userAuth/context'
import { ManagedUIContext } from 'components/ui/context'

import { ParallaxProvider } from 'react-scroll-parallax'
import { defineCustomElements } from '@ionic/pwa-elements/loader'
import NextNprogress from 'nextjs-progressbar'

interface Props {
  children?: React.ReactNode
}

const Noop: FC<Props> = ({ children }) => <>{children}</>

export default function AppSls({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  useEffect(() => {
    defineCustomElements(window)
  })

  const { pathname } = useRouter()
  const rootPathname = pathname.split('/')[1]
  const isPage = rootPathname === 'page'
  const isProduct = rootPathname === 'product'

  return (
    <div id="main">
      {!isPage && !isProduct && <Head />}
      <NextNprogress
        color="#7C3AED"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <ThemeProvider>
        <ManagedUserAuthContext>
          <ManagedUIContext>
            <ParallaxProvider>
              <Layout pageProps={pageProps}>
                <Component {...pageProps} />
              </Layout>
            </ParallaxProvider>
          </ManagedUIContext>
        </ManagedUserAuthContext>
      </ThemeProvider>
    </div>
  )
}
