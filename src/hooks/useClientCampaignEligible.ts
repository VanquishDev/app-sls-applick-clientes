import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import { API, graphqlOperation } from 'aws-amplify'

import * as queries from 'graphql/queries'
import * as mutations from 'graphql/mutations'

import {
  CreateClientCampaignEligibleInput,
  UpdateClientCampaignEligibleInput,
  DeleteClientCampaignEligibleInput,
  ListEligiblesByClientCampaignQueryVariables,
  ListEligiblesByClientCampaignKeyQueryVariables,
  ListEligiblesByClientCampaignCPFQueryVariables,
  ListEligiblesByClientCampaignRGQueryVariables,
} from 'API'

export const useClientCampaignEligible = () => {
  const createClientCampaignEligible = async (input: CreateClientCampaignEligibleInput) => {
    const {
      data: { createClientCampaignEligible },
    } = (await API.graphql({
      query: mutations.createClientCampaignEligible,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return createClientCampaignEligible
  }

  const updateClientCampaignEligible = async (input: UpdateClientCampaignEligibleInput) => {
    const {
      data: { updateClientCampaignEligible },
    } = (await API.graphql({
      query: mutations.updateClientCampaignEligible,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return updateClientCampaignEligible
  }

  const deleteClientCampaignEligible = async (input: DeleteClientCampaignEligibleInput) => {
    try {
      const r = await API.graphql({
        query: mutations.deleteClientCampaignEligible,
        variables: { input },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })
      return r
    } catch (error: any) {
      console.log(error)
    }
  }

  const listEligiblesByClientCampaign = async (
    variables: ListEligiblesByClientCampaignQueryVariables
  ) => {
    const {
      data: {
        listEligiblesByClientCampaign: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listEligiblesByClientCampaign,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listEligiblesByClientCampaignKey = async (
    variables: ListEligiblesByClientCampaignKeyQueryVariables
  ) => {
    const {
      data: {
        listEligiblesByClientCampaignKey: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listEligiblesByClientCampaignKey,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listEligiblesByClientCampaignCPF = async (
    variables: ListEligiblesByClientCampaignCPFQueryVariables
  ) => {
    const {
      data: {
        listEligiblesByClientCampaignCPF: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listEligiblesByClientCampaignCPF,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listEligiblesByClientCampaignRG = async (
    variables: ListEligiblesByClientCampaignRGQueryVariables
  ) => {
    const {
      data: {
        listEligiblesByClientCampaignRG: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listEligiblesByClientCampaignRG,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  return {
    createClientCampaignEligible,
    updateClientCampaignEligible,
    deleteClientCampaignEligible,
    listEligiblesByClientCampaign,
    listEligiblesByClientCampaignKey,
    listEligiblesByClientCampaignCPF,
    listEligiblesByClientCampaignRG,
  }
}
