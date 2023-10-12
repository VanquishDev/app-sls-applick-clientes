import { Edit, View } from './'

interface Props {
  mode?: string
  block: any
  handleUpdate?: any
  index?: number
  onClickItem?: any
}

export default function Block7(props: Props) {
  const { mode, block, handleUpdate, index, onClickItem } = props
  return mode === 'EDIT' ? (
    <Edit
      block={block}
      handleUpdate={handleUpdate}
      index={index}
      onClickItem={onClickItem}
    />
  ) : (
    <View block={block} />
  )
}
