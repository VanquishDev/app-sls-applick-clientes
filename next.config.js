/** @type {import('next').NextConfig} */

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
      'd4m5je1hn71cr.cloudfront.net',
    ],
  },
  env: {
    COMPANY: 'Applick',
    PRODUCTION: true,
    URL: 'https://clientes.applickvacinas.com.br/',
    MIDIA_CLOUDFRONT: 'https://d2s6sa0lwx9zo4.cloudfront.net/',
    GROUPS: ['Admin', 'Clinica', 'Profissional', 'Colaborador'],
    ALLOW_LOGIN: ['EMAIL', 'PHONE'],
    DEFAULT_LOGIN: 'PHONE',
    NO_SIGNUP_CONFIRMATION: false,
    PASSWORD_LENGTH: 6,
    FULL_WIDTH: true,
    APP_COMMERCE: true,
    SCHEDULED_DELIVERY: true,
    MIN_VALUE_INSTALLMENTS: 100,
    HOME: redirect.destination,
    SMTP: {
      HOST: 'wezen.vanquish.com.br',
      PORT: 465,
      USER: 'noreply@siteinteligente.com',
      PASSWORD: '95$zaDt1',
    },
    CRYPTO_PASS: '4ebd12d942d1fe2f88fe7ba901c3ba98c1b1803c',
    ENOTAS_API: 'https://app.enotas.com.br/api',
    ENOTAS_KEY: 'OWNmODg4NzQtMGI4YS00NjA5LThiOWQtMWE3M2E2YzA0YzAy',
    PAGARME_API: 'https://api.pagar.me/core/v5',
    PAGARME_SECRET_KEY: 'sk_KVJZ0DOsLHnPGlva',
    MIN_VALUE_INSTALLMENTS: 100,
    PAGARME_DEBIT: false,
    PAGARME_PIX: true,
    ORDER_STATUS: {
      STANDBY: 'AGUARDANDO PAGTO PIX',
      REJECTED: 'PAGTO REPROVADO',
      APPROVED: 'APROVADO',
      IN_PREPARATION: 'CONFIRMADO',
      IN_TRANSIT: 'A CAMINHO',
      DELIVERED: 'FINALIZADO',
      CANCELED: 'CANCELADO',
    },
  },
  async redirects() {
    return [redirect]
  },
}

module.exports = withPWA(settings)
