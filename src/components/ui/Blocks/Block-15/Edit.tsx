/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react'
import { Button, Input, Segment } from 'components/ui'
import { Check, Trash, Plus2, Warning } from 'components/icons'
import { toast } from 'react-toast'
import { useBlock } from 'hooks/useBlock'

import {
  useForm,
  useFieldArray,
  useWatch,
  Controller,
  Control,
} from 'react-hook-form'

type FormValues = {
  title: string
  description: string
  action: string
  message: string
  buttonName: string
  linkRedirect: string
  emailTo: string
  dataBase: string
  data: {
    size: string
    type: string
    options: string
    value: string
    name: string
  }[]
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
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      title: '',
      description: '',
      action: 'PIPELINE',
      message: '',
      buttonName: 'Enviar',
      linkRedirect: '',
      emailTo: '',
      dataBase: '',
      data: [],
    },
    mode: 'onBlur',
  })

  const formValues = useWatch({
    name: 'data',
    control,
  })

  const watchAction = watch('action')

  const { fields, append, remove } = useFieldArray({
    name: 'data',
    control,
  })

  useEffect(() => {
    if (block && block.content) {
      const contentParse = JSON.parse(block.content)
      setValue('title', contentParse.title)
      setValue('description', contentParse.description)
      setValue('action', contentParse.action)
      setValue('message', contentParse.message)
      setValue('buttonName', contentParse.buttonName)
      setValue('linkRedirect', contentParse.linkRedirect)
      setValue('emailTo', contentParse.emailTo)
      setValue('dataBase', contentParse.dataBase)
      contentParse.data && contentParse.data.map((f: any) => append(f))
    } else {
      setValue('action', 'PIPELINE')
    }
  }, [])

  const onSubmit = async (data: FormValues) => {
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
        <Segment title="Cabeçalho" description="Entre com as informações." />

        <div className="flex flex-col sm:flex-row w-full sm:space-x-2 space-y-3 sm:space-y-0 mb-2 sm:mb-4">
          <div className="w-full md:w-4/4">
            <Input
              label="Título do formulário"
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
                      rows={2}
                      className="-ml-10 text-accent-9 bg-accent-1 w-full rounded-lg border-2 border-accent-2 outline-none focus:border-indigo-500"
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
            </div>
          </div>
        </div>

        <Segment
          title="Configuração da ação"
          description="Selecione umas das ações."
        />

        <div className="flex flex-col sm:flex-row w-full sm:space-x-2 space-y-3 sm:space-y-0 mb-2 sm:mb-4">
          <div className="w-full">
            <div className="flex -mx-3">
              <div className="w-full px-3">
                <label
                  htmlFor=""
                  className="text-accent-7 text-sm font-semibold px-1"
                >
                  Opções de ações para o formulário
                </label>
                <div className="flex">
                  <div className="w-10 z-10"></div>
                  <select
                    {...register('action')}

                    className="text-accent-9 bg-accent-1 w-full pl-3 -ml-10 rounded-lg border-2 border-accent-2 outline-none focus:border-indigo-500"
                  >
                    <option value="ONLYMAIL">
                      Apenas enviar os dados por email.
                    </option>
                    <option value="PIPELINE">
                      Enviar os dados por email e integrar ao Pipeline do app.
                    </option>
                    <option value="CRUDL">
                      Enviar os dados por email e salvar em um banco de dados de
                      forma publica.
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {watchAction == 'CRUDL' && (
          <div className="flex flex-col sm:flex-row w-full sm:space-x-2 space-y-3 sm:space-y-0 mb-2 sm:mb-4">
            <div className="w-full">
              <Input
                label="Nome do banco de dados"
                type="text"
                register={register('dataBase')}
                defaultValue={''}
              />
            </div>
          </div>
        )}

        {(watchAction == 'PIPELINE' || watchAction == 'CRUDL') && (
          <div className="alert md:w-11/12">
            <div className="flex-1">
              <div className="text-orange-400">
                <Warning width={48} />
              </div>
              <label>
                {watchAction == 'PIPELINE' && (
                  <h4>Integração com o Pipeline.</h4>
                )}
                {watchAction == 'CRUDL' && (
                  <h4>Salvar dados em banco de dados de forma publica.</h4>
                )}
                <p className="text-sm text-base-content text-opacity-60">
                  Caso o usuário não esteja conectato, os campos{' '}
                  <span className="font-bold">Nome</span>,{' '}
                  <span className="font-bold">Email</span> e{' '}
                  <span className="font-bold">Celular</span> serão
                  automaticamente inseridos no inicio do formulário, por tanto
                  você não deve adicioná-los para evitar duplicidade. Através
                  deles o app irá criar uma nova conta ou vincular uma conta
                  existente para o usuário que preencher o formulário e ter
                  acesso a seus dados.
                </p>
              </label>
            </div>
          </div>
        )}

        <Segment
          title="Campos e Layout"
          description="Entre com os tamanhos, nome, tipos e opções dos campos."
          notes="Cada linha do formulário é dividida em doze partes, onde cada campo pode utilizar de 1 a 12 partes, desta forma permitindo inserir mais de um campo por linha."
        />

        {fields.map((field, index) => {
          return (
            <div key={field.id} className="max-w-full w-full mx-auto">
              <div className="flex flex-col sm:flex-row w-full sm:space-x-2 space-y-3 sm:space-y-0 mb-2 sm:mb-4">
                <div className="w-full md:w-1/12">
                  <div className="flex -mx-3">
                    <div className="w-full px-3">
                      <label
                        htmlFor=""
                        className="text-accent-7 text-sm font-semibold px-1"
                      >
                        Tamanho
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10"></div>
                        <select
                          {...register(`data.${index}.size` as const)}

                          className="text-accent-9 bg-accent-1 w-full pl-3 -ml-10 rounded-lg border-2 border-accent-2 outline-none focus:border-indigo-500"
                        >
                          <option value="1">1/12</option>
                          <option value="2">2/12</option>
                          <option value="3">3/12</option>
                          <option value="4">4/12</option>
                          <option value="5">5/12</option>
                          <option value="6">6/12</option>
                          <option value="7">7/12</option>
                          <option value="8">8/12</option>
                          <option value="9">9/12</option>
                          <option value="10">10/12</option>
                          <option value="11">11/12</option>
                          <option value="12">12/12</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/12">
                  <div className="flex -mx-3">
                    <div className="w-full px-3">
                      <label
                        htmlFor=""
                        className="text-accent-7 text-sm font-semibold px-1"
                      >
                        Tipo
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10"></div>
                        <select
                          {...register(`data.${index}.type` as const)}

                          className="text-accent-9 bg-accent-1 w-full pl-3 -ml-10 rounded-lg border-2 border-accent-2 outline-none focus:border-indigo-500"
                        >
                          <option value="text">Texto</option>
                          <option value="number">Número</option>
                          <option value="currency">Moeda</option>
                          <option value="tel">Telefone</option>
                          <option value="email">Email</option>
                          <option value="date">Data</option>
                          <option value="datetime">Data e Hora</option>
                          <option value="month">Mês</option>
                          <option value="week">Semana</option>
                          <option value="time">Hora</option>
                          <option value="url">URL</option>
                          <option value="select">Seleção</option>
                          <option value="textarea">Área de texto</option>
                          <option value="image">Imagem</option>
                          <option value="title">Título</option>
                          <option value="info">Informações</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-3/12">
                  <Input
                    label="Nome do campo"
                    type="text"
                    register={register(`data.${index}.name` as const, {
                      required: true,
                    })}
                    defaultValue={''}
                  />
                </div>
                {formValues &&
                  formValues[index] &&
                  (formValues[index].type === 'select' ||
                    formValues[index].type === 'textarea') && (
                    <div className="w-full md:w-5/12">
                      <Input
                        label={`${formValues[index].type === 'select'
                            ? 'Items separados por virgula'
                            : formValues[index].type === 'textarea'
                              ? 'Quantidade de linhas'
                              : 'Opções'
                          }`}
                        type="text"
                        register={register(`data.${index}.options` as const)}
                        defaultValue={''}
                        placeholder={`${formValues[index].type === 'select'
                            ? 'exemplo: sim,não'
                            : formValues[index].type === 'textarea'
                              ? 'exemplo: 3'
                              : ''
                          }`}
                      />
                    </div>
                  )}
                <div className="w-full md:w-1/12 pt-8">
                  <button type="button" onClick={() => remove(index)}>
                    <Trash />
                  </button>
                </div>
              </div>
            </div>
          )
        })}

        <button
          type="button"
          className="mt-2 bg-accent-9 text-accent-0 py-2 px-4 rounded-xl shadow"
          onClick={() =>
            append({
              size: '12',
              type: 'text',
              options: '',
              name: '',
              value: '',
            })
          }
        >
          <Plus2 /> <span className="ml-2">Adicionar Campo</span>
        </button>

        <Segment
          title="Rodapé do formulário"
          description="Botão de envio e redirecionamento opcional."
        />

        <div className="flex flex-col sm:flex-row w-full sm:space-x-2 space-y-3 sm:space-y-0 mb-2 sm:mb-4">
          <div className="w-full md:w-1/4">
            <Input
              label="Nome do botão"
              type="text"
              aria-invalid={errors.buttonName ? 'true' : 'false'}
              register={register('buttonName')}
              defaultValue={''}
              notes="Exemplo: Enviar"
            />
          </div>
          <div className="w-full md:w-3/4">
            <Input
              label="Link para redirecionamento (Opcional)"
              type="text"
              aria-invalid={errors.linkRedirect ? 'true' : 'false'}
              register={register('linkRedirect')}
              defaultValue={''}
              notes="Links externos informe a url completa, por exemplo:
              https://www... Para links internos informe apenas o Apelido da página."
            />
          </div>
        </div>

        <Segment
          title="Visualização no Admin e envio por emails"
          description="Configuração da mensagem."
        />

        <div className="flex flex-col sm:flex-row w-full sm:space-x-2 space-y-3 sm:space-y-0 mb-2 sm:mb-4">
          <div className="flex flex-col sm:flex-row w-full sm:space-x-2 space-y-3 sm:space-y-0 mb-2 sm:mb-4">
            <div className="w-full">
              <label className="text-accent-7 text-sm font-semibold px-1">
                Mensagem exibida após envio
              </label>
              <div className="flex">
                <div className="w-10 z-10"></div>
                <Controller
                  name="message"
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
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full sm:space-x-2 space-y-3 sm:space-y-0 mb-2 sm:mb-4">
          <div className="w-full md:w-4/4">
            <Input
              label="Email(s) do(s) destinatário(s) (separados por virgula)"
              type="text"
              register={register('emailTo')}
              defaultValue={''}
              notes="Emails para os quais serão enviados o contato."
            />
          </div>
        </div>

        <div className="mt-6">
          <Button
            type="submit"
            variant="slim"
            loading={loading}
            disabled={false}
          >
            <Check className="-ml-2 mr-2" />
            Atualizar
          </Button>
        </div>
      </div>
    </form>
  )
}
