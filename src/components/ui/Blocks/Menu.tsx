/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react'
import { Trash, Eye, Edit, Cog } from 'components/icons'
import { useCategory } from 'hooks/useCategory'

interface Props {
  onClickItem: any
  block: any
  index: number
}

export default function Menu(props: Props): JSX.Element {
  const { onClickItem, block, index } = props
  const order = block.order
  const configParse = block.config ? JSON.parse(block.config) : false
  const contentParse = block.content ? JSON.parse(block.content) : false

  const { getCategory } = useCategory()

  const r =
    (configParse && configParse.anchor) ? configParse.anchor :
    (contentParse && contentParse.title) ? contentParse.title : 
    contentParse.blockTitle ? contentParse.blockTitle :
    contentParse.content ? contentParse.content.replace(/<[^>]*>?/gm, '') : 
    contentParse.imageUrl ? contentParse.imageUrl :
    (contentParse.source === 'categories') ? 'Categorias do e-commerce' :
    (contentParse.source === 'images_folder') ? `Galeria de Mídias - ${contentParse.folder}` :
    (contentParse.source === 'category_products') ? 'Produtos de uma categoria' :
    (contentParse.source === 'menus') ? 'Menus das Páginas' :
    contentParse.folder ? contentParse.folder : 
    contentParse.videoUrl ? contentParse.videoUrl : ''

  const [reference, setReference] = useState(r)
  

  useEffect(()=>{
    let isMounted = true
    if (isMounted) {

      const GetCategory = async (r: string) => {
        const c = await getCategory({id: contentParse.category})
        console.log(contentParse.category, c)
        setReference(`${r} - ${c?.title}`)
      }

      if (block.component === "13") {
        GetCategory('Produtos da Categoria')
      }

      if (block.component === "17") {
        GetCategory('Produtos da Categoria')
      }
    }
    return () => {
      setReference('')
    }
  },[block])

  return (
    <div className="flex justify-start">
      <img className="inline" alt="" src={`/blocks/${block.component}.png`} />
      <div>
        <div className="flex justify-start mt-3 mb-1 ml-3">
          <div className="text-lg font-bold">{order}</div>
          {reference && <div className="text-lg font-medium ml-4 text-tertiary-2 line-clamp-1 mr-8">{reference}</div>}
        </div>
        <div className="flex justify-start">
          <button className="cursor-pointer px-3" title="Editar Bloco">
            <Edit />
          </button>
          <button
            type="button"
            className="cursor-pointer px-3"
            title="Visualizar Bloco"
            onClick={() => onClickItem({ action: 'PREVIEW', block })}
          >
            <Eye />
          </button>
          <button
            className="cursor-pointer px-3"
            title="Configurações"
            onClick={() => onClickItem({ action: 'CONFIG', block, index })}
          >
            <Cog />
          </button>
          <button
            className="cursor-pointer px-3"
            title="Excluir Bloco"
            onClick={() => onClickItem({ action: 'DELETE', block, index })}
          >
            <Trash />
          </button>
        </div>
      </div>
    </div>
  )
}
