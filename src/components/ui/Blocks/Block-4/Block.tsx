import { Edit, View } from './'

interface Props {
  mode?: string
  block: any
  handleUpdate?: any
  index?: number
  onClickItem?: any
  hasLateral?: boolean
}

export default function Block4(props: Props) {
  const { mode, block, handleUpdate, index, onClickItem, hasLateral } = props
  return mode === 'EDIT' ? (
    <Edit
      block={block}
      handleUpdate={handleUpdate}
      index={index}
      onClickItem={onClickItem}
    />
  ) : (
    <View block={block} hasLateral={hasLateral} />
  )
}
