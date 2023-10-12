import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Share } from 'components/icons'
import { useBreakPoints } from 'hooks/useBreakPoints'
import { useScreen } from 'hooks/useScreen'
import Masonry from 'react-masonry-css'
import config from 'config/seo.json'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  className?: string
  children?: any
  facebook?: string
  twitter?: string
  instagram?: string
  info?: string
}

const Footer: FC<Props> = ({
  className,
  facebook,
  twitter,
  instagram,
  info,
}) => {
  const router = useRouter()
  const { isSm, isMd } = useBreakPoints()
  const [mounted, setMounted] = useState(false)
  const [show, setShow] = useState('')
  const { screenWidth } = useScreen()

  return (
    <footer className="mt-4 bg-primary lg:bg-accent-1 mb-4 mx-4 p-4 rounded-lg">
      {!isSm && (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 justify-items-center">
          <div className="lg:col-span-2 w-full">
            <div className="flex justify-center lg:justify-start">
              <Image
                alt=""
                width={96}
                height={96}
                className="rounded-full"
                src="/favicon-96x96.png"
              />
            </div>
            <div className="mt-3 text-center lg:text-left font-bold text-2xl">
              Applick Clientes
            </div>
            <div className="mt-1 text-center lg:text-left text-lg text-accent-7 leading-tight">
              Plataforma Applick - App Clientes.
            </div>
          </div>
          {screenWidth && (
            <div className="py-2 lg:col-span-3 w-full">
              <Masonry
                breakpointCols={isSm ? 2 : 3}
                className="gallery-grid"
                columnClassName="gallery-grid_column"
              >
                <div
                  style={{
                    width: isSm
                      ? (screenWidth / 2).toFixed(0)
                      : (screenWidth / 5).toFixed(0),
                  }}
                  className="w-full mt-4 flex flex-col gap-2 lg:gap-1 px-0 md:px-2"
                >
                  <div className="text-center lg:text-left text-xl font-semibold">
                    Links
                  </div>
                  <Link href="/page/sobre_nos">
                    <span className="text-center lg:text-left text-accent-5 font-medium italic">
                      Sobre nós
                    </span>
                  </Link>
                  <Link href="/page/clientes">
                    <span className="text-center lg:text-left text-accent-5 font-medium italic">
                      Dashboard
                    </span>
                  </Link>
                  <Link href="/page/ia">
                    <span className="text-center lg:text-left text-accent-5 font-medium italic">
                      Inteligencia Artificial
                    </span>
                  </Link>
                  <Link href="/page/contato">
                    <span className="text-center lg:text-left text-accent-5 font-medium italic">
                      Contato
                    </span>
                  </Link>
                </div>
                <div
                  style={{
                    width: isSm
                      ? (screenWidth / 2).toFixed(0)
                      : (screenWidth / 5).toFixed(0),
                  }}
                  className="w-full mt-4 flex flex-col gap-2 lg:gap-1 px-0 md:px-2"
                >
                  <div className="text-center lg:text-left text-xl font-semibold">
                    Apps
                  </div>
                  <a href='https://app.applickvacinas.com.br' className="text-center lg:text-left text-accent-5 font-medium italic">
                    Applick Vacinas
                  </a>
                </div>
                <div
                  style={{
                    width: isSm
                      ? (screenWidth / 2).toFixed(0)
                      : (screenWidth / 5).toFixed(0),
                  }}
                  className="w-full mt-4 flex flex-col gap-2 lg:gap-1 px-0 md:px-2"
                >
                  <div className="text-center lg:text-left text-xl font-semibold">
                    Legal
                  </div>
                  <Link href="/page/termos_uso">
                    <span className="text-center lg:text-left text-accent-5 font-medium italic">
                      Termos de uso
                    </span>
                  </Link>
                  <Link href="/page/psi">
                    <span className="text-center lg:text-left text-accent-5 font-medium italic">
                      Política de Segurança da Informação - Procat
                    </span>
                  </Link>
                </div>
              </Masonry>
            </div>
          )}
        </div>
      )}

      {!isSm && <hr className="my-8 lg:mt-4" />}

      <div className="mx-auto flex items-center lg:flex-row flex-col">
        {!isSm && !isMd && info && (
          <div className="font-medium italic text-accent-9 text-sm text-center lg:text-base lg:text-left pt-6 lg:pt-0">
            {info}
          </div>
        )}
        <div className="inline-flex lg:ml-auto justify-center lg:justify-start">
          {mounted &&
            window &&
            window.navigator &&
            window.navigator.canShare() && (
              <div
                className="mr-6 text-accent-6"
                onClick={async () => {
                  const path = router.asPath.substr(1)
                  const pathFmt =
                    path.indexOf('?') === -1
                      ? path
                      : path.substring(0, path.indexOf('?'))
                  await window.navigator.share({
                    title: config.title,
                    text: config.description,
                    url: `${process.env.URL}${pathFmt}`,
                  })
                }}
              >
                <Share width={21} height={21} />
              </div>
            )}

          {facebook && (
            <a
              href={facebook}
              target="_blank"
              rel="noreferrer"
              className="text-accent-6"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-7 h-7"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
          )}
          {twitter && (
            <a
              href={twitter}
              target="_blank"
              rel="noreferrer"
              className="ml-6 text-accent-6"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-7 h-7"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
          )}
          {instagram && (
            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className="ml-6 text-accent-6"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-7 h-7"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
          )}
        </div>
        {(isSm || isMd) && info && (
          <div className="text-accent-6 text-sm text-center lg:text-left pt-6 lg:pt-0">
            {info}
          </div>
        )}
        {(isSm || isMd) && (
          <Link href="/page/termos_uso">
            <span className="mt-2 text-center text-sm text-accent-5 font-medium italic">
              Termos de uso
            </span>
          </Link>
        )}
      </div>
    </footer>
  )
}

export default Footer
