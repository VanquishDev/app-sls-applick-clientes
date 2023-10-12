/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react'
import { Button, Input } from 'components/ui'
import { Check } from 'components/icons'
import { toast } from 'react-toast'
import { useBlock } from 'hooks/useBlock'
import { useForm, SubmitHandler } from 'react-hook-form'
import InputColor from 'react-input-color'

type Inputs = {
  order: number
  bgMode: string
  padY: string
  padX: string
  view: string
  anchor: string
}

interface Props {
  block: any
  index: number
  handleUpdate: any
}

export default function Config(props: Props) {
  const { block, index, handleUpdate } = props
  const [loading, setLoading] = useState(false)
  const { updateBlock } = useBlock()

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const watchBgMode = watch('bgMode', 'transparent')
  const [color, setColor] = useState({} as any)

  useEffect(() => {
    if (block) {
      setValue('order', block.order)
      if (block.config) {
        const configParse = JSON.parse(block.config)
        setValue('bgMode', configParse.bgMode)
        setValue('padY', configParse.padY ? configParse.padY : 'small')
        setValue('padX', configParse.padX ? configParse.padX : 'small')
        setValue('view', configParse.view ? configParse.view : 'show')
        setValue('anchor', configParse.anchor)
      } else {
        setValue('bgMode', 'transparent')
        setValue('padY', 'small')
        setValue('padX', 'small')
        setValue('view', 'show')
      }
    }
  }, [block])

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true)
    const updatedBlock = await updateBlock({
      id: block.id,
      order: data.order,
      config: JSON.stringify({
        bgMode: data.bgMode,
        bgColor: color ? color.hex : '#fafafa',
        padX: data.padX ? data.padX : 'normal',
        padY: data.padY ? data.padY : 'normal',
        view: data.view ? data.view : 'show',
        anchor: data.anchor
      }),
    })
    delete updatedBlock.page
    handleUpdate(index, updatedBlock)
    toast.info(`Bloco atualizado com sucesso!`)
    setLoading(false)
  }

  return (
    <form className=" p-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="max-w-full w-full mx-auto">
        <div className="flex flex-col sm:flex-row w-full sm:space-x-2 space-y-3 sm:space-y-0 mb-2 sm:mb-4">
          <div className="w-full md:w-1/2">
            <Input
              label="Ordem de exibição"
              type="number"
              register={register('order')}
              defaultValue={''}
              notes="Em ordem crescente."
            />
          </div>
          <div className="w-full md:w-1/2">
          <label
                htmlFor=""
                className="text-accent-7 text-sm font-semibold px-1"
              >
                Exibir bloco
              </label>
              <div className="flex">
                <div className="w-10 z-10"></div>
                <select
                  {...register('view')}
                  placeholder=""
                  className="text-accent-9 bg-accent-1 w-full pl-3 -ml-10 rounded-lg border-2 border-accent-2 outline-none focus:border-indigo-500"
                >
                  <option value="show">Sim</option>
                  <option value="hide">Não</option>
                  <option value="sm">Tela Pequena (Celular)</option>
                  <option value="lg">Tela Grande (Desktop e Tablet)</option>
                </select>
              </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full sm:space-x-2 space-y-3 sm:space-y-0 mb-2 sm:mb-4">
        <div className="w-full">
            <Input
              label="Identificação (id) do elemento"
              type="text"
              register={register('anchor')}
              defaultValue={''}
              notes="Caso informado, deve ser único na página. O id é utilizado para criar (âncoras/links) na página."
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full sm:space-x-2 space-y-3 sm:space-y-0 mb-2 sm:mb-4">
          <div className="w-full md:w-1/2">
            <div className="w-full">
              <label
                htmlFor=""
                className="text-accent-7 text-sm font-semibold px-1"
              >
                Espaçamento Horizontal
              </label>
              <div className="flex">
                <div className="w-10 z-10"></div>
                <select
                  {...register('padX')}
                  placeholder=""
                  className="text-accent-9 bg-accent-1 w-full pl-3 -ml-10 rounded-lg border-2 border-accent-2 outline-none focus:border-indigo-500"
                >
                  <option value="none">Nenhum</option>
                  <option value="small">Pequeno</option>
                  <option value="normal">Médio</option>
                  <option value="large">Grande</option>
                  <option value="extra">Enorme</option>
                </select>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-full">
              <label
                htmlFor=""
                className="text-accent-7 text-sm font-semibold px-1"
              >
                Espaçamento Vertical
              </label>
              <div className="flex">
                <div className="w-10 z-10"></div>
                <select
                  {...register('padY')}
                  placeholder=""
                  className="text-accent-9 bg-accent-1 w-full pl-3 -ml-10 rounded-lg border-2 border-accent-2 outline-none focus:border-indigo-500"
                >
                  <option value="none">Nenhum</option>
                  <option value="small">Pequeno</option>
                  <option value="normal">Médio</option>
                  <option value="large">Grande</option>
                  <option value="extra">Enorme</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full sm:space-x-2 space-y-3 sm:space-y-0 mb-2 sm:mb-4">
          <div className="w-full md:w-1/2">
            <div className="w-full">
              <label
                htmlFor=""
                className="text-accent-7 text-sm font-semibold px-1"
              >
                Cor do fundo
              </label>
              <div className="flex">
                <div className="w-10 z-10"></div>
                <select
                  {...register('bgMode')}
                  placeholder=""
                  className="text-accent-9 bg-accent-1 w-full pl-3 -ml-10 rounded-lg border-2 border-accent-2 outline-none focus:border-indigo-500"
                >
                  <option value="auto">Automatica</option>
                  <option value="transparent">Transparente</option>
                  <option value="custom">Personalizada</option>
                </select>
              </div>
            </div>
          </div>
          {watchBgMode === 'custom' && (
            <div className="w-full md:w-1/2 pt-9">
              <InputColor
                initialValue={`${
                  block.config ? JSON.parse(block.config)['bgColor'] : '#fafafa'
                }`}
                onChange={setColor}
                placement="right"
              />
            </div>
          )}
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
