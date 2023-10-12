/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { useBlock } from 'hooks/useBlock'
import { toast } from 'react-toast'
import { Plus2 } from 'components/icons'

interface Props {
  pageID: any
  order: number
  handleCreate: any
}

export default function Add(props: Props): JSX.Element {
  const { pageID, order, handleCreate } = props
  const { createBlock } = useBlock()
  const [show, setShow] = useState(false)

  const addBlock = async (n: number) => {
    const input = {
      pageID,
      order,
      component: `${n}`,
      content: '',
    }

    const createdBlock = await createBlock(input)
    delete createdBlock.page
    handleCreate(createdBlock)

    toast.info(`Bloco adicionado com sucesso.`)
  }

  return (
    <div
      style={{ backgroundColor: '#EDF2F7' }}
      className="mt-8 shadow rounded-md"
    >
      <div className="p-4 text-left font-bold" onClick={() => setShow(!show)}>
        <Plus2 /> <span className="ml-2">Adicionar</span>
      </div>
      {show && (
        <div className="pb-4 flex justify-between md:justify-start flex-wrap">
          <img
            onClick={() => {
              addBlock(19)
            }}
            className="cursor-pointer"
            alt="bloco19"
            src="/blocks/19.png"
          />
          <img
            onClick={() => {
              addBlock(1)
            }}
            className="cursor-pointer"
            alt="bloco1"
            src="/blocks/1.png"
          />
          <img
            onClick={() => {
              addBlock(2)
            }}
            className="cursor-pointer"
            alt="bloco2"
            src="/blocks/2.png"
          />
          <img
            onClick={() => {
              addBlock(3)
            }}
            className="cursor-pointer"
            alt="bloco3"
            src="/blocks/3.png"
          />
          <img
            onClick={() => {
              addBlock(14)
            }}
            className="cursor-pointer"
            alt="bloco14"
            src="/blocks/14.png"
          />
          <img
            onClick={() => {
              addBlock(5)
            }}
            className="cursor-pointer"
            alt="bloco5"
            src="/blocks/5.png"
          />
          <img
            onClick={() => {
              addBlock(6)
            }}
            className="cursor-pointer"
            alt="bloco6"
            src="/blocks/6.png"
          />
          <img
            onClick={() => {
              addBlock(7)
            }}
            className="cursor-pointer"
            alt="bloco7"
            src="/blocks/7.png"
          />
          <img
            onClick={() => {
              addBlock(8)
            }}
            className="cursor-pointer"
            alt="bloco8"
            src="/blocks/8.png"
          />
          <img
            onClick={() => {
              addBlock(9)
            }}
            className="cursor-pointer"
            alt="bloco9"
            src="/blocks/9.png"
          />
          <img
            onClick={() => {
              addBlock(13)
            }}
            className="cursor-pointer"
            alt="bloco13"
            src="/blocks/13.png"
          />
          <img
            onClick={() => {
              addBlock(10)
            }}
            className="cursor-pointer"
            alt="bloco10"
            src="/blocks/10.png"
          />
          <img
            onClick={() => {
              addBlock(23)
            }}
            className="cursor-pointer"
            alt="bloco23"
            src="/blocks/23.png"
          />
          <img
            onClick={() => {
              addBlock(20)
            }}
            className="cursor-pointer"
            alt="bloco20"
            src="/blocks/20.png"
          />
          <img
            onClick={() => {
              addBlock(4)
            }}
            className="cursor-pointer"
            alt="bloco4"
            src="/blocks/4.png"
          />
          <img
            onClick={() => {
              addBlock(12)
            }}
            className="cursor-pointer"
            alt="bloco12"
            src="/blocks/12.png"
          />

          <img
            onClick={() => {
              addBlock(11)
            }}
            className="cursor-pointer"
            alt="bloco11"
            src="/blocks/11.png"
          />
          <img
            onClick={() => {
              addBlock(15)
            }}
            className="cursor-pointer"
            alt="bloco15"
            src="/blocks/15.png"
          />
          <img
            onClick={() => {
              addBlock(16)
            }}
            className="cursor-pointer"
            alt="bloco16"
            src="/blocks/16.png"
          />
          <img
            onClick={() => {
              addBlock(17)
            }}
            className="cursor-pointer"
            alt="bloco17"
            src="/blocks/17.png"
          />
          <img
            onClick={() => {
              addBlock(18)
            }}
            className="cursor-pointer"
            alt="bloco18"
            src="/blocks/18.png"
          />
          <img
            onClick={() => {
              addBlock(22)
            }}
            className="cursor-pointer"
            alt="bloco22"
            src="/blocks/22.png"
          />
        </div>
      )}
    </div>
  )
}
