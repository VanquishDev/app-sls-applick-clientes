/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react'
import { Button, Input, Segment } from 'components/ui'
import { Check, Picture } from 'components/icons'
import { toast } from 'react-toast'
import { useBlock } from 'hooks/useBlock'

import { useForm, Controller, SubmitHandler } from 'react-hook-form'

type Inputs = {
  title: string
  description: string
  imageUrl1: string
  topic1: string
  text1: string
  buttonName1: string
  buttonLink1: string
  imageUrl2: string
  topic2: string
  text2: string
  buttonName2: string
  buttonLink2: string
  imageUrl3: string
  topic3: string
  text3: string
  buttonName3: string
  buttonLink3: string
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
      setValue('title', contentParse.title)
      setValue('description', contentParse.description)
      setValue('imageUrl1', contentParse.imageUrl1)
      setValue('topic1', contentParse.topic1)
      setValue('text1', contentParse.text1)
      setValue('buttonName1', contentParse.buttonName1)
      setValue('buttonLink1', contentParse.buttonLink1)
      setValue('imageUrl2', contentParse.imageUrl2)
      setValue('topic2', contentParse.topic2)
      setValue('text2', contentParse.text2)
      setValue('buttonName2', contentParse.buttonName2)
      setValue('buttonLink2', contentParse.buttonLink2)
      setValue('imageUrl3', contentParse.imageUrl3)
      setValue('topic3', contentParse.topic3)
      setValue('text3', contentParse.text3)
      setValue('buttonName3', contentParse.buttonName3)
      setValue('buttonLink3', contentParse.buttonLink3)
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
              label="Título do bloco"
              type="text"
              register={register('title')}
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
                  name="description"
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

        <Segment title='TÓPICO 1' description='Entre com uma imagem, informações e um link opcional.' />

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
              label="Nome do tópico"
              type="text"
              register={register('topic1')}
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
                  name="text1"
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

        <div className="flex flex-col sm:flex-row w-full sm:space-x-2 space-y-3 sm:space-y-0 mb-2 sm:mb-4">
          <div className="w-full md:w-1/4">
            <Input
              label="Nome do botão"
              type="text"
              register={register('buttonName1')}
              defaultValue={''}
              notes="Exemplo: Saiba mais."
            />
          </div>
          <div className="w-full md:w-3/4">
            <Input
              label="Link para redirecionamento"
              type="text"
              register={register('buttonLink1')}
              defaultValue={''}
              notes="Links externos informe a url completa, por exemplo:
              https://www... Para links internos informe apenas o Apelido da página."
            />
          </div>
        </div>

        <Segment title='TÓPICO 2' description='Entre com uma imagem, informações e um link opcional.' />

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
              label="Nome do tópico"
              type="text"
              register={register('topic2')}
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
                  name="text2"
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
        <div className="flex flex-col sm:flex-row w-full sm:space-x-2 space-y-3 sm:space-y-0 mb-2 sm:mb-4">
          <div className="w-full md:w-1/4">
            <Input
              label="Nome do botão"
              type="text"
              register={register('buttonName2')}
              defaultValue={''}
              notes="Exemplo: Saiba mais."
            />
          </div>
          <div className="w-full md:w-3/4">
            <Input
              label="Link para redirecionamento"
              type="text"
              register={register('buttonLink2')}
              defaultValue={''}
              notes="Links externos informe a url completa, por exemplo:
              https://www... Para links internos informe apenas o Apelido da página."
            />
          </div>
        </div>

        <Segment title='TÓPICO 3' description='Entre com uma imagem, informações e um link opcional.' />

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
              label="Nome do tópico"
              type="text"
              register={register('topic3')}
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
                  name="text3"
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
        <div className="flex flex-col sm:flex-row w-full sm:space-x-2 space-y-3 sm:space-y-0 mb-2 sm:mb-4">
          <div className="w-full md:w-1/4">
            <Input
              label="Nome do botão"
              type="text"
              register={register('buttonName3')}
              defaultValue={''}
              notes="Exemplo: Saiba mais."
            />
          </div>
          <div className="w-full md:w-3/4">
            <Input
              label="Link para redirecionamento"
              type="text"
              register={register('buttonLink3')}
              defaultValue={''}
              notes="Links externos informe a url completa, por exemplo:
              https://www... Para links internos informe apenas o Apelido da página."
            />
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
