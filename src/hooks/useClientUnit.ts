import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import { API, graphqlOperation } from 'aws-amplify'

import * as queries from 'graphql/queries'
import * as mutations from 'graphql/mutations'

import {
  CreateClientUnitInput,
  UpdateClientUnitInput,
  DeleteClientUnitInput,
  ListUnitsByClientQueryVariables
} from 'API'

export const useClientUnit = () => {
  const createClientUnit = async (input: CreateClientUnitInput) => {
    const {
      data: { createClientUnit },
    } = (await API.graphql({
      query: mutations.createClientUnit,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return createClientUnit
  }

  const updateClientUnit = async (input: UpdateClientUnitInput) => {
    const {
      data: { updateClientUnit },
    } = (await API.graphql({
      query: mutations.updateClientUnit,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return updateClientUnit
  }

  const deleteClientUnit = async (input: DeleteClientUnitInput) => {
    try {
      await API.graphql({
        query: mutations.deleteClientUnit,
        variables: { input },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })
    } catch (error: any) {
      console.log(error)
    }
  }

  const listUnitsByClient = async (
    variables: ListUnitsByClientQueryVariables
  ) => {
    const {
      data: {
        listUnitsByClient: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listUnitsByClient,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  return {
    createClientUnit,
    updateClientUnit,
    deleteClientUnit,
    listUnitsByClient
  }
}
