import Image from 'next/image'
import { useRouter } from 'next/router'
import cn from 'classnames'

interface Props {
  photo: string
  title: string
  link?: string
  objectFit?: string
  viewFormat?: string
}

export default function Card2(props: Props): JSX.Element {
  const { photo, title, objectFit, viewFormat, link } = props
  const router = useRouter()

  return (
    <div className={cn("relative h-full w-full z-10", {
      ['cursor-pointer'] : link
    })} onClick={() => link && router.push(link)}>
      <Image
        alt=""
        className={`absolute object-${
          objectFit ? objectFit : 'cover'
        } object-center`}
        src={photo}
        layout="fill"
        priority
      />
      <div className={cn("absolute z-20 w-full font-sans text-accent-0 whitespace-normal",{
        ['text-center text-xs font-bold bottom-4 grid justify-items-stretch p-0']: viewFormat && viewFormat === 'circle-sm',
        ['text-center text-base font-semibold bottom-6 grid justify-items-stretch p-0']: viewFormat && viewFormat === 'circle-md',
        ['text-center text-xl font-semibold bottom-8 grid justify-items-stretch p-0']: viewFormat && viewFormat === 'circle-lg',
        ['bottom-0 text-xs font-bold p-1']: viewFormat && viewFormat === 'square-sm',
        ['bottom-0 text-base font-semibold p-1']: viewFormat && viewFormat === 'square-md',
        ['bottom-0 text-xl font-semibold p-2']: viewFormat && viewFormat === 'square-lg',
        ['bottom-0 p-3 text-2xl font-semibold']: !viewFormat || (
          viewFormat !== 'square-lg' && 
          viewFormat !== 'square-md' && 
          viewFormat !== 'square-sm' && 
          viewFormat !== 'circle-lg' && 
          viewFormat !== 'circle-md' && 
          viewFormat !== 'circle-sm')
      })}>
        <span className='line-clamp-2' style={{ textShadow: '2px 2px 2px rgba(0,0,0,0.6)' }}>
          {title}
        </span>
      </div>
    </div>
  )
}