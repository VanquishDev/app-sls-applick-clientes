/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react'
import cn from 'classnames'
import { useBreakPoints } from 'hooks/useBreakPoints'

interface Props {
  block: any
}

export default function View(props: Props) {
  const { block } = props
  const [content, setContent] = useState({} as any)
  const [config, setConfig] = useState({} as any)
  const { isSm } = useBreakPoints()

  useEffect(() => {
    if (block && block.config) {
      const configParse = JSON.parse(block.config)
      setConfig(configParse)
    }
    if (block && block.content) {
      const contentParse = JSON.parse(block.content)
      setContent(contentParse)
    }
    return () => {
      setConfig({} as any)
      setContent({} as any)
    }
  }, [block])

  return (
    <div
      className={cn({
        ['hidden']: config.view === 'hide',
        ['md:hidden']: config.view === 'sm',
        ['hidden md:block']: config.view === 'lg',
        ['px-0']: config.padX && config.padX === 'none',
        ['px-4']: !config.padX || config.padX === 'small',
        ['px-8']: config.padX && config.padX === 'normal',
        ['px-12']: config.padX && config.padX === 'large',
        ['px-24']: config.padX && config.padX === 'extra',
        ['py-0']: config.padY && config.padY === 'none',
        ['pt-4']: !config.padY || config.padY === 'small',
        ['pt-8']: config.padY && config.padY === 'normal',
        ['pt-12']: config.padY && config.padY === 'large',
        ['pt-24']: config.padY && config.padY === 'extra',
        ['bg-accent-1']: config.bgMode === 'auto',
      })}
      style={{
        backgroundColor:
          config.bgMode === 'custom' && config.bgColor ? config.bgColor : null,
      }}
    >
      {config.anchor && <a id={`${config.anchor}`}></a>}
      <div
        className={cn('w-full', {
          ['text-left']: isSm,
          ['text-center']: !isSm && content.align === 'center',
          ['text-right']: !isSm && content.align === 'right',
        })}
      >
        {content.title && (
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-accent-9">
            {content.title}
          </h1>
        )}
        {content.description && (
          <p
            className={cn(
              'inline text-base leading-relaxed xl:w-2/4 lg:w-3/4 text-accent-7',
              {
                ['mt-4']: content.title,
                ['mx-auto']: !isSm && content.align === 'center',
                ['text-right']: !isSm && content.align === 'right',
              }
            )}
          >
            {content.description}
          </p>
        )}
        {content.showBar === 'show' && (
          <div
            className={cn('flex', {
              ['mt-3']: content.title || content.description,
              ['justify-start']: isSm,
              ['justify-center']: !isSm && content.align === 'center',
              ['justify-end']: !isSm && content.align === 'right',
            })}
          >
            <div className="w-16 h-1 rounded-full bg-tertiary-2 inline-flex"></div>
          </div>
        )}
      </div>
    </div>
  )
}
