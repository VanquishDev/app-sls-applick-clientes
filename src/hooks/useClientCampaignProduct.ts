import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import { API, graphqlOperation } from 'aws-amplify'

import * as queries from 'graphql/queries'
import * as mutations from 'graphql/mutations'

import {
  CreateClientCampaignProductInput,
  UpdateClientCampaignProductInput,
  DeleteClientCampaignProductInput,
  ListProductsByClientCampaignQueryVariables
} from 'API'

export const useClientCampaignProduct= () => {
  const createClientCampaignProduct= async (input: CreateClientCampaignProductInput) => {
    const {
      data: { createClientCampaignProduct},
    } = (await API.graphql({
      query: mutations.createClientCampaignProduct,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return createClientCampaignProduct
  }

  const updateClientCampaignProduct= async (input: UpdateClientCampaignProductInput) => {
    const {
      data: { updateClientCampaignProduct},
    } = (await API.graphql({
      query: mutations.updateClientCampaignProduct,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return updateClientCampaignProduct
  }

  const deleteClientCampaignProduct= async (input: DeleteClientCampaignProductInput) => {
    try {
      const r = await API.graphql({
        query: mutations.deleteClientCampaignProduct,
        variables: { input },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })
      return r
    } catch (error: any) {
      console.log(error)
    }
  }

  const listProductsByClientCampaign = async (
    variables: ListProductsByClientCampaignQueryVariables
  ) => {
    const {
      data: {
        listProductsByClientCampaign: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listProductsByClientCampaign,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  return {
    createClientCampaignProduct,
    updateClientCampaignProduct,
    deleteClientCampaignProduct,
    listProductsByClientCampaign
  }
}
