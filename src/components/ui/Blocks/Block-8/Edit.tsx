/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react'
import { Button, Input, Segment } from 'components/ui'
import { Check, Picture } from 'components/icons'
import { toast } from 'react-toast'
import { useBlock } from 'hooks/useBlock'

import { useForm, Controller, SubmitHandler } from 'react-hook-form'

type Inputs = {
  blockTitle: string
  blockDescription: string
  imageUrl1: string
  title1: string
  subTitle1: string
  description1: string
  imageUrl2: string
  title2: string
  subTitle2: string
  description2: string
  imageUrl3: string
  title3: string
  subTitle3: string
  description3: string
  imageUrl4: string
  title4: string
  subTitle4: string
  description4: string
}

interface Props {
  block: any
  handleUpdate: any
  index?: number
  onClickItem?: any
}

export default function Edit(props: Props) {
  const { block, handleUpdate, index, onClickItem } = props
  const [loading, setLoading] = useState(false)
  const { updateBlock } = useBlock()

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<Inputs>()

  useEffect(() => {
    if (block && block.content) {
      const contentParse = JSON.parse(block.content)
      setValue('blockTitle', contentParse.blockTitle)
      setValue('blockDescription', contentParse.blockDescription)
      setValue('imageUrl1', contentParse.imageUrl1)
      setValue('title1', contentParse.title1)
      setValue('subTitle1', contentParse.subTitle1)
      setValue('description1', contentParse.description1)
      setValue('imageUrl2', contentParse.imageUrl2)
      setValue('title2', contentParse.title2)
      setValue('subTitle2', contentParse.subTitle2)
      setValue('description2', contentParse.description2)
      setValue('imageUrl3', contentParse.imageUrl3)
      setValue('title3', contentParse.title3)
      setValue('subTitle3', contentParse.subTitle3)
      setValue('description3', contentParse.description3)
      setValue('imageUrl4', contentParse.imageUrl4)
      setValue('title4', contentParse.title4)
      setValue('subTitle4', contentParse.subTitle4)
      setValue('description4', contentParse.description4)
    }
  }, [])

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true)
    const updatedBlock = await updateBlock({
      id: block.id,
      content: JSON.stringify(data),
    })
    delete updatedBlock.page
    handleUpdate(index, updatedBlock)
    toast.info(`Bloco atualizado com sucesso!`)
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="max-w-full w-full mx-auto">
        <Segment title='Cabeçalho' description='Entre com as informações.' />

        <div className="flex flex-col sm:flex-row w-full sm:space-x-2 space-y-3 sm:space-y-0 mb-2 sm:mb-4">
          <div className="w-full md:w-4/4">
            <Input
              label="Título do Bloco"
              type="text"
              register={register('blockTitle')}
              defaultValue={''}
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full sm:space-x-2 space-y-3 sm:space-y-0 mb-2 sm:mb-4">
          <div className="flex flex-col sm:flex-row w-full sm:space-x-2 space-y-3 sm:space-y-0 mb-2 sm:mb-4">
            <div className="w-full">
              <label className="text-accent-7 text-sm font-semibold px-1">
                Descrição
              </label>
              <div className="flex">
                <div className="w-10 z-10"></div>
                <Controller
                  name="blockDescription"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <textarea
                      rows={5}
                      className="-ml-10 text-accent-9 bg-accent-1 w-full rounded-lg border-2 border-accent-2 outline-none focus:border-indigo-500"
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
              <span className="text-accent-6 text-xs"></span>
            </div>
          </div>
        </div>

        <Segment title='Tópico 1' description='Entre com uma imagem e as informações do tópico 1.' />

        <div className="flex flex-col sm:flex-row w-full sm:space-x-2 space-y-3 sm:space-y-0 mb-2 sm:mb-4">
          <div className="w-full md:w-4/4">
            <div className="flex flex-row-reverse w-full">
              <div className="mt-6 pl-2">
                <div
                  className="p-2 flex items-center rounded-lg hover:bg-accent-2 bg-accent-1 border-2 border-accent-2"
                  onClick={() =>
                    onClickItem({ action: 'IMAGES', block, index })
                  }
                >
                  <Picture className="flex-shrink-0 h-6 w-6 text-accent-7" />
                </div>
              </div>
              <div className="w-full">
                <Input
                  label="URL de uma imagem"
                  type="text"
                  register={register('imageUrl1')}
                  defaultValue={''}
                  notes="Pesquise e clique sobre uma das imagens da galeria e cole aqui."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full sm:space-x-2 space-y-3 sm:space-y-0 mb-2 sm:mb-4">
          <div className="w-full md:w-2/4">
            <Input
              label="Título"
              type="text"
              register={register('title1')}
              defaultValue={''}
            />
          </div>
          <div className="w-full md:w-2/4">
            <Input
              label="Sub-Título"
              type="text"
              register={register('subTitle1')}
              defaultValue={''}
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full sm:space-x-2 space-y-3 sm:space-y-0 mb-2 sm:mb-4">
          <div className="flex flex-col sm:flex-row w-full sm:space-x-2 space-y-3 sm:space-y-0 mb-2 sm:mb-4">
            <div className="w-full">
              <label className="text-accent-7 text-sm font-semibold px-1">
                Descrição curta
              </label>
              <div className="flex">
                <div className="w-10 z-10"></div>
                <Controller
                  name="description1"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <textarea
                      rows={2}
                      className="-ml-10 text-accent-9 bg-accent-1 w-full rounded-lg border-2 border-accent-2 outline-none focus:border-indigo-500"
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
              <span className="text-accent-6 text-xs"></span>
            </div>
          </div>
        </div>

        <Segment title='Tópico 2' description='Entre com uma imagem e as informações do tópico 2.' />

        <div className="flex flex-col sm:flex-row w-full sm:space-x-2 space-y-3 sm:space-y-0 mb-2 sm:mb-4">
          <div className="w-full md:w-4/4">
            <div className="flex flex-row-reverse w-full">
              <div className="mt-6 pl-2">
                <div
                  className="p-2 flex items-center rounded-lg hover:bg-accent-2 bg-accent-1 border-2 border-accent-2"
                  onClick={() =>
                    onClickItem({ action: 'IMAGES', block, index })
                  }
                >
                  <Picture className="flex-shrink-0 h-6 w-6 text-accent-7" />
                </div>
              </div>
              <div className="w-full">
                <Input
                  label="URL de uma imagem"
                  type="text"
                  register={register('imageUrl2')}
                  defaultValue={''}
                  notes="Pesquise e clique sobre uma das imagens da galeria e cole aqui."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full sm:space-x-2 space-y-3 sm:space-y-0 mb-2 sm:mb-4">
          <div className="w-full md:w-2/4">
            <Input
              label="Título"
              type="text"
              register={register('title2')}
              defaultValue={''}
            />
          </div>
          <div className="w-full md:w-2/4">
            <Input
              label="Sub-Título"
              type="text"
              register={register('subTitle2')}
              defaultValue={''}
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full sm:space-x-2 space-y-3 sm:space-y-0 mb-2 sm:mb-4">
          <div className="flex flex-col sm:flex-row w-full sm:space-x-2 space-y-3 sm:space-y-0 mb-2 sm:mb-4">
            <div className="w-full">
              <label className="text-accent-7 text-sm font-semibold px-1">
                Descrição curta
              </label>
              <div className="flex">
                <div className="w-10 z-10"></div>
                <Controller
                  name="description2"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <textarea
                      rows={2}
                      className="-ml-10 text-accent-9 bg-accent-1 w-full rounded-lg border-2 border-accent-2 outline-none focus:border-indigo-500"
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
              <span className="text-accent-6 text-xs"></span>
            </div>
          </div>
        </div>

        <Segment title='Tópico 3' description='Entre com uma imagem e as informações do tópico 3.' />

        <div className="flex flex-col sm:flex-row w-full sm:space-x-2 space-y-3 sm:space-y-0 mb-2 sm:mb-4">
          <div className="w-full md:w-4/4">
            <div className="flex flex-row-reverse w-full">
              <div className="mt-6 pl-2">
                <div
                  className="p-2 flex items-center rounded-lg hover:bg-accent-2 bg-accent-1 border-2 border-accent-2"
                  onClick={() =>
                    onClickItem({ action: 'IMAGES', block, index })
                  }
                >
                  <Picture className="flex-shrink-0 h-6 w-6 text-accent-7" />
                </div>
              </div>
              <div className="w-full">
                <Input
                  label="URL de uma imagem"
                  type="text"
                  register={register('imageUrl3')}
                  defaultValue={''}
                  notes="Pesquise e clique sobre uma das imagens da galeria e cole aqui."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full sm:space-x-2 space-y-3 sm:space-y-0 mb-2 sm:mb-4">
          <div className="w-full md:w-2/4">
            <Input
              label="Título"
              type="text"
              register={register('title3')}
              defaultValue={''}
            />
          </div>
          <div className="w-full md:w-2/4">
            <Input
              label="Sub-Título"
              type="text"
              register={register('subTitle3')}
              defaultValue={''}
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full sm:space-x-2 space-y-3 sm:space-y-0 mb-2 sm:mb-4">
          <div className="flex flex-col sm:flex-row w-full sm:space-x-2 space-y-3 sm:space-y-0 mb-2 sm:mb-4">
            <div className="w-full">
              <label className="text-accent-7 text-sm font-semibold px-1">
                Descrição curta
              </label>
              <div className="flex">
                <div className="w-10 z-10"></div>
                <Controller
                  name="description3"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <textarea
                      rows={2}
                      className="-ml-10 text-accent-9 bg-accent-1 w-full rounded-lg border-2 border-accent-2 outline-none focus:border-indigo-500"
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
              <span className="text-accent-6 text-xs"></span>
            </div>
          </div>
        </div>

        <Segment title='Tópico 4' description='Entre com uma imagem e as informações do tópico 4.' />

        <div className="flex flex-col sm:flex-row w-full sm:space-x-2 space-y-3 sm:space-y-0 mb-2 sm:mb-4">
          <div className="w-full md:w-4/4">
            <div className="flex flex-row-reverse w-full">
              <div className="mt-6 pl-2">
                <div
                  className="p-2 flex items-center rounded-lg hover:bg-accent-2 bg-accent-1 border-2 border-accent-2"
                  onClick={() =>
                    onClickItem({ action: 'IMAGES', block, index })
                  }
                >
                  <Picture className="flex-shrink-0 h-6 w-6 text-accent-7" />
                </div>
              </div>
              <div className="w-full">
                <Input
                  label="URL de uma imagem"
                  type="text"
                  register={register('imageUrl4')}
                  defaultValue={''}
                  notes="Pesquise e clique sobre uma das imagens da galeria e cole aqui."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full sm:space-x-2 space-y-3 sm:space-y-0 mb-2 sm:mb-4">
          <div className="w-full md:w-2/4">
            <Input
              label="Título"
              type="text"
              register={register('title4')}
              defaultValue={''}
            />
          </div>
          <div className="w-full md:w-2/4">
            <Input
              label="Sub-Título"
              type="text"
              register={register('subTitle4')}
              defaultValue={''}
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full sm:space-x-2 space-y-3 sm:space-y-0 mb-2 sm:mb-4">
          <div className="flex flex-col sm:flex-row w-full sm:space-x-2 space-y-3 sm:space-y-0 mb-2 sm:mb-4">
            <div className="w-full">
              <label className="text-accent-7 text-sm font-semibold px-1">
                Descrição curta
              </label>
              <div className="flex">
                <div className="w-10 z-10"></div>
                <Controller
                  name="description4"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <textarea
                      rows={2}
                      className="-ml-10 text-accent-9 bg-accent-1 w-full rounded-lg border-2 border-accent-2 outline-none focus:border-indigo-500"
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
              <span className="text-accent-6 text-xs"></span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <Button type="submit" variant="slim" loading={loading} disabled={false}>
          <Check className="-ml-2 mr-2" />
          Atualizar
        </Button>
      </div>
    </form>
  )
}
