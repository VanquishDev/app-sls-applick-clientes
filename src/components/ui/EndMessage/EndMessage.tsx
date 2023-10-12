interface Props {
  message: string
}

export default function EndMessage(props: Props) {
  const { message } = props
  return (
    <div className="py-12 text-center">
      {message ? message : 'Final da lista.'}
    </div>
  )
}
