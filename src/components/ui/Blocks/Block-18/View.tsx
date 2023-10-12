/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Search } from 'components/icons'
import cn from 'classnames'

interface Props {
  block: any
}

export default function View(props: Props) {
  const { block } = props
  const [content, setContent] = useState({} as any)
  const [config, setConfig] = useState({} as any)
  const router = useRouter()

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
        ['py-4']: !config.padY || config.padY === 'small',
        ['py-8']: config.padY && config.padY === 'normal',
        ['py-12']: config.padY && config.padY === 'large',
        ['py-24']: config.padY && config.padY === 'extra',
        ['bg-accent-1']: config.bgMode === 'auto',
      })}
      style={{
        backgroundColor:
          config.bgMode === 'custom' && config.bgColor ? config.bgColor : null,
      }}
    >
      {content.autoplay}
      {content.videoUrl && (
        <video
          height={200}
          className={cn('w-full aspect-video', {
            [`shadow${content.viewShadow}`]:
              content.viewShadow && content.viewShadow !== '-none',
            [`p-${content.viewBorder}`]:
              content.viewBorder && content.viewBorder !== '0',
            [`bg-accent-${content.viewBgColor}`]:
              content.viewBgColor && content.viewBgColor !== 'none',
            [`rounded${content.viewRounded}`]:
              content.viewRounded && content.viewRounded !== '-none',
          })}
          controls={content.controls}
          autoPlay={content.autoplay}
          muted={content.muted}
        >
          <source src={content.videoUrl} type="video/mp4" />
        </video>
      )}
    </div>
  )
}
