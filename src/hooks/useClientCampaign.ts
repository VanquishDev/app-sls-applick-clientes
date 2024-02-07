import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import { API, graphqlOperation } from 'aws-amplify'

import * as customQueries from 'graphql/custom-queries'
import * as queries from 'graphql/queries'
import * as mutations from 'graphql/mutations'

import {
  GetClientCampaignQueryVariables,
  CreateClientCampaignInput,
  UpdateClientCampaignInput,
  DeleteClientCampaignInput,
  ListClientCampaignsQueryVariables,
  ListClientCampaignsByClientQueryVariables,
  ListClientCampaignsByClientStatusQueryVariables,
  ListClientCampaignsByCampaignCodeQueryVariables,
  ListClientCampaignsByStatusCreatedAtQueryVariables,
  ListClientCampaignsByIdxCreatedAtQueryVariables
} from 'API'

export const useClientCampaign = () => {
  const getClientCampaign = async (variables: GetClientCampaignQueryVariables) => {
    const {
      data: { getClientCampaign },
    } = (await API.graphql(
      graphqlOperation(queries.getClientCampaign, variables)
    )) as GraphQLResult<any>
    return getClientCampaign
  }

  const createClientCampaign = async (input: CreateClientCampaignInput) => {
    const {
      data: { createClientCampaign },
    } = (await API.graphql({
      query: mutations.createClientCampaign,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return createClientCampaign
  }

  const updateClientCampaign = async (input: UpdateClientCampaignInput) => {
    const {
      data: { updateClientCampaign },
    } = (await API.graphql({
      query: mutations.updateClientCampaign,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return updateClientCampaign
  }

  const deleteClientCampaign = async (input: DeleteClientCampaignInput) => {
    try {
      await API.graphql({
        query: mutations.deleteClientCampaign,
        variables: { input },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })
    } catch (error: any) {
      console.log(error)
    }
  }

  const listClientCampaigns = async (
    variables: ListClientCampaignsQueryVariables
  ) => {
    const {
      data: {
        listClientCampaigns: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listClientCampaigns,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listClientCampaignsByClient = async (
    variables: ListClientCampaignsByClientQueryVariables
  ) => {
    const {
      data: {
        listClientCampaignsByClient: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listClientCampaignsByClient,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listClientCampaignsByClientStatus = async (
    variables: ListClientCampaignsByClientStatusQueryVariables
  ) => {
    const {
      data: {
        listClientCampaignsByClientStatus: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listClientCampaignsByClientStatus,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listClientCampaignsByCampaignCode = async (variables: ListClientCampaignsByCampaignCodeQueryVariables) => {
    const {
      data: {
        listClientCampaignsByCampaignCode: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listClientCampaignsByCampaignCode,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listClientCampaignsByStatusCreatedAt = async (variables: ListClientCampaignsByStatusCreatedAtQueryVariables) => {
    const {
      data: {
        listClientCampaignsByStatusCreatedAt: { items, nextToken },
      },
    } = (await API.graphql({
      query: customQueries.listClientCampaignsByStatusCreatedAtCustom,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listClientCampaignsByIdxCreatedAt = async (variables: ListClientCampaignsByIdxCreatedAtQueryVariables) => {
    const {
      data: {
        listClientCampaignsByIdxCreatedAt: { items, nextToken },
      },
    } = (await API.graphql({
      query: customQueries.listClientCampaignsByIdxCreatedAtCustom,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  return {
    getClientCampaign,
    createClientCampaign,
    updateClientCampaign,
    deleteClientCampaign,
    listClientCampaigns,
    listClientCampaignsByClient,
    listClientCampaignsByClientStatus,
    listClientCampaignsByCampaignCode,
    listClientCampaignsByStatusCreatedAt,
    listClientCampaignsByIdxCreatedAt
  }
}
