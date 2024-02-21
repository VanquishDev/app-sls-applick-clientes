import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import { API, graphqlOperation } from 'aws-amplify'

import * as customQueries from 'graphql/custom-queries'
import * as queries from 'graphql/queries'
import * as mutations from 'graphql/mutations'

import {
  CreateClientCampaignUnitInput,
  UpdateClientCampaignUnitInput,
  DeleteClientCampaignUnitInput,
  ListUnitsByClientCampaignQueryVariables
} from 'API'

export const useClientCampaignUnit = () => {
  const createClientCampaignUnit = async (input: CreateClientCampaignUnitInput) => {
    const {
      data: { createClientCampaignUnit },
    } = (await API.graphql({
      query: mutations.createClientCampaignUnit,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return createClientCampaignUnit
  }

  const updateClientCampaignUnit = async (input: UpdateClientCampaignUnitInput) => {
    const {
      data: { updateClientCampaignUnit },
    } = (await API.graphql({
      query: mutations.updateClientCampaignUnit,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return updateClientCampaignUnit
  }

  const deleteClientCampaignUnit = async (input: DeleteClientCampaignUnitInput) => {
    try {
      const r = await API.graphql({
        query: mutations.deleteClientCampaignUnit,
        variables: { input },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })
      return r
    } catch (error: any) {
      console.log(error)
    }
  }

  const listUnitsByClientCampaign = async (
    variables: ListUnitsByClientCampaignQueryVariables
  ) => {
    const {
      data: {
        listUnitsByClientCampaign: { items, nextToken },
      },
    } = (await API.graphql({
      query: customQueries.listUnitsByClientCampaignCustom,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  return {
    createClientCampaignUnit,
    updateClientCampaignUnit,
    deleteClientCampaignUnit,
    listUnitsByClientCampaign
  }
}
