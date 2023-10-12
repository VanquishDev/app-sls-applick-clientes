import { fetchWrapper } from 'lib/fetch-wrapper'

export const useEnotas = () => {
  const createNFe = async (body: any) => {
    return await fetchWrapper.post(`/api/enotas/vendas`, body)
  }

  return {
    createNFe,
  }
}
