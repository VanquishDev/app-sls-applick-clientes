import Image from 'next/image'
import { useRouter } from 'next/router'
import cn from 'classnames'

interface Props {
  photo: string
  link?: string
  objectFit?: string
  viewFormat?: string
}

export default function Card1(props: Props): JSX.Element {
  const { photo, objectFit, viewFormat, link } = props
  const router = useRouter()

  return (
    <div className={cn("relative h-full w-full", {
      ['cursor-pointer'] : link
    })} onClick={() => link && router.push(link)}>
      <Image
        alt=""
        className={cn(`absolute object-${objectFit ? objectFit : 'cover'} object-center`)}
        src={photo}
        layout="fill"
        priority
      />
    </div>
  )
}
