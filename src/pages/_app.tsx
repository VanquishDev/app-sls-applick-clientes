import { Amplify } from 'aws-amplify'
// import awsExports from '../aws-exports'
// Amplify.configure({ ...awsExports, ssr: true })

Amplify.configure({
  aws_project_region: `${process.env.region}`,
  aws_cognito_identity_pool_id: `${process.env.identityPoolId}`,
  aws_cognito_region: `${process.env.userPoolRegion}`,
  aws_user_pools_id: `${process.env.userPoolId}`,
  aws_user_pools_web_client_id: `${process.env.userPoolClientId}`,
  oauth: {
    // domain: 'your_cognito_domain',
    // scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
    // redirectSignIn: 'http://localhost:3000/',
    // redirectSignOut: 'http://localhost:3000/',
    // responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
  },
  aws_cognito_username_attributes: ['username'],
  aws_cognito_social_providers: [],
  aws_cognito_signup_attributes: ['name', 'email', 'phone_number'],
  aws_cognito_mfa_configuration: 'OFF',
  aws_cognito_mfa_types: [],
  aws_cognito_password_protection_settings: {
    passwordPolicyMinLength: 6,
    passwordPolicyCharacters: [
      // "REQUIRES_LOWERCASE",
      // "REQUIRES_UPPERCASE",
      'REQUIRES_NUMBERS',
      // "REQUIRES_SYMBOLS"
    ],
  },
  aws_cognito_verification_mechanisms: ['email'],
  aws_user_files_s3_bucket: `${process.env.bucketName}`,
  aws_user_files_s3_bucket_region: `${process.env.bucketRegion}`,
  aws_appsync_graphqlEndpoint: `${process.env.graphqlURL}`,
  aws_appsync_region: `${process.env.region}`,
  aws_appsync_authenticationType: 'API_KEY',
  aws_appsync_apiKey: `${process.env.graphqlApiKey}`,
  ssr: true
});

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

import { FloatingWhatsApp } from 'react-floating-whatsapp'

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

      <FloatingWhatsApp
        buttonStyle={{ marginBottom: 20, marginRight: 10 }}
        phoneNumber="+5511930948120"
        accountName="Mauro"
        avatar="/whatsapp/applick.png"
        allowEsc
        allowClickAway
        notification={false}
        notificationSound={false}
        statusMessage="Equipe Applick"
        chatMessage="Olá, como posso ajudar?"
        placeholder="Digite uma mensagem"
      />
    </div>
  )
}
