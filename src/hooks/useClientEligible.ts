import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import { API, graphqlOperation } from 'aws-amplify'

import * as queries from 'graphql/queries'
import * as mutations from 'graphql/mutations'

import {
  CreateClientEligibleInput,
  UpdateClientEligibleInput,
  DeleteClientEligibleInput,
  ListEligiblesByClientQueryVariables,
  ListEligiblesByClientKeyQueryVariables,
  ListEligiblesByClientCPFQueryVariables,
  ListEligiblesByClientRGQueryVariables,
} from 'API'

export const useClientEligible = () => {
  const createClientEligible = async (input: CreateClientEligibleInput) => {
    const {
      data: { createClientEligible },
    } = (await API.graphql({
      query: mutations.createClientEligible,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return createClientEligible
  }

  const updateClientEligible = async (input: UpdateClientEligibleInput) => {
    const {
      data: { updateClientEligible },
    } = (await API.graphql({
      query: mutations.updateClientEligible,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return updateClientEligible
  }

  const deleteClientEligible = async (input: DeleteClientEligibleInput) => {
    try {
      const r = await API.graphql({
        query: mutations.deleteClientEligible,
        variables: { input },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })
      return r
    } catch (error: any) {
      console.log(error)
    }
  }

  const listEligiblesByClient = async (
    variables: ListEligiblesByClientQueryVariables
  ) => {
    const {
      data: {
        listEligiblesByClient: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listEligiblesByClient,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listEligiblesByClientKey = async (
    variables: ListEligiblesByClientKeyQueryVariables
  ) => {
    const {
      data: {
        listEligiblesByClientKey: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listEligiblesByClientKey,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listEligiblesByClientCPF = async (
    variables: ListEligiblesByClientCPFQueryVariables
  ) => {
    const {
      data: {
        listEligiblesByClientCPF: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listEligiblesByClientCPF,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listEligiblesByClientRG = async (
    variables: ListEligiblesByClientRGQueryVariables
  ) => {
    const {
      data: {
        listEligiblesByClientRG: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listEligiblesByClientRG,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  return {
    createClientEligible,
    updateClientEligible,
    deleteClientEligible,
    listEligiblesByClient,
    listEligiblesByClientKey,
    listEligiblesByClientCPF,
    listEligiblesByClientRG,
  }
}
