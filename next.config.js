/**
 * @type {import('next').NextConfig}
 */

const runtimeCaching = require('next-pwa/cache')

const withPWA = require('next-pwa')({
  disable: true,
  register: true,
  dest: 'public',
  runtimeCaching,
})

const redirect = {
  source: '/',
  destination: '/page/clientes/',
  permanent: true,
}

const settings = {
  reactStrictMode: false,
  trailingSlash: true,
  swcMinify: true,
  images: {
    domains: [
      'd2s6sa0lwx9zo4.cloudfront.net',
      'images.unsplash.com',
      'app.applickvacinas.com.br',
      'clientes.applickvacinas.com.br',
      'd4m5je1hn71cr.cloudfront.net',
    ],
  },
  env: {
    COMPANY: 'Applick',
    URL: 'https://clientes.applickvacinas.com.br/',
    MIDIA_CLOUDFRONT: 'https://d2s6sa0lwx9zo4.cloudfront.net/',
    ALLOW_LOGIN: 'EMAIL,PHONE',
    DEFAULT_LOGIN: 'PHONE',
    NO_SIGNUP_CONFIRMATION: 'false',
    PASSWORD_LENGTH: '6',
    FULL_WIDTH: 'true',
    APP_COMMERCE: 'true',
    HOME: redirect.destination,
    SMTP: JSON.stringify({
      HOST: 'wezen.vanquish.com.br',
      PORT: 465,
      USER: 'noreply@siteinteligente.com',
      PASSWORD: '95$zaDt1',
    }),
    region: process.env.region,
    userPoolId: process.env.userPoolId,
    userPoolClientId: process.env.userPoolClientId,
    userPoolRegion: process.env.userPoolRegion,
    identityPoolId: process.env.identityPoolId,
    bucketName: process.env.bucketName,
    bucketRegion: process.env.bucketRegion,
    bucketCloudFront: process.env.bucketCloudFront,
    graphqlURL: process.env.graphqlURL,
    graphqlApiKey: process.env.graphqlApiKey,
    DEBUG_MODE: process.env.DEBUG_MODE,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_PRIVATE_KEY: process.env.SUPABASE_PRIVATE_KEY,
  },
  async redirects() {
    return [redirect]
  },
}

module.exports = withPWA(settings)
