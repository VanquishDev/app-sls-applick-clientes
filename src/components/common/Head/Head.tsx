import NextHead from 'next/head'
import { useTheme } from 'next-themes'
import config from 'config/seo.json'

interface Props {
  title?: string
  description?: string
  alias?: string
  thumbnail?: string
}

const Head = (props: Props): JSX.Element => {
  const { title, description, alias, thumbnail } = props
  const { theme } = useTheme()
  return (
    <>
      <NextHead>
        <meta charSet="utf-8" />
        <title>{`${config.title}${title ? ' - ' + title : ''}`}</title>
        <meta
          name="Description"
          content={`${description ? description : config.description}`}
        />
        <meta httpEquiv="Content-Language" content="pt-br" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          name="thumbnail"
          content={
            thumbnail
              ? `${process.env.MIDIA_CLOUDFRONT}${thumbnail}`
              : `${process.env.URL}whatsapp/link.png`
          }
        />
        <link
          itemProp="thumbnailUrl"
          href={
            thumbnail
              ? `${process.env.MIDIA_CLOUDFRONT}${thumbnail}`
              : `${process.env.URL}whatsapp/link.png`
          }
        />
        <link rel="icon" type="image/ico" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        <meta
          name="theme-color"
          content={theme === 'dark' ? '#282a36' : '#fafafa'}
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="application-name"
          content={`${config.title}${title ? ' - ' + title : ''}`}
        />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta
          name="apple-mobile-web-app-title"
          content={`${config.title}${title ? ' - ' + title : ''}`}
        />
        <link rel="apple-touch-icon" href="icons/icon-192x192.png" />

        <meta name="msapplication-navbutton-color" content="#fafafa" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/apple-icon-144x144.png"
        />

        <meta
          name="og:locale"
          property="og:locale"
          content="pt_BR"
          key="oglocale"
        />
        <meta
          name="og:url"
          property="og:url"
          content={`${process.env.URL}${alias ? 'page/' + alias + '/' : ''}`}
          key="ogurl"
        />
        <meta
          name="og:title"
          property="og:title"
          content={`${config.title}${title ? ' - ' + title : ''}`}
          key="ogtitle"
        />
        <meta
          name="og:description"
          property="og:description"
          content={`${description ? description : config.description}`}
          key="ogdescription"
        />
        <meta
          name="og:site_name"
          property="og:site_name"
          content={`${config.title}${title ? ' - ' + title : ''}`}
          key="ogsite_name"
        />
        <meta
          name="og:image"
          itemProp="image"
          property="og:image:secure_url"
          content={
            thumbnail
              ? `${process.env.MIDIA_CLOUDFRONT}${thumbnail}`
              : `${process.env.URL}whatsapp/link.png`
          }
          key="ogimage"
        />
        <meta
          name="og:image:type"
          property="og:image:type"
          content="image/png"
          key="ogimage_type"
        />
        <meta
          name="og:image:width"
          property="og:image:width"
          content="256"
          key="ogimage_width"
        />
        <meta
          name="og:image:height"
          property="og:image:height"
          content="256"
          key="ogimage_height"
        />
        <meta
          name="og:type"
          property="og:type"
          content="website"
          key="ogtype"
        />

        <link rel="manifest" href="/manifest.json" key="manifest" />
      </NextHead>
    </>
  )
}

export default Head
