import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import { API, graphqlOperation } from 'aws-amplify'

import * as customQueries from 'graphql/custom-queries'
import * as queries from 'graphql/queries'
import * as mutations from 'graphql/mutations'

import {
  CreateClientUserInput,
  DeleteClientUserInput,
  ListClientUserByUserQueryVariables,
  ListClientUserByClientQueryVariables,
} from 'API'

export const useClientUser = () => {
  const createClientUser = async (input: CreateClientUserInput) => {
    const {
      data: { createClientUser },
    } = (await API.graphql({
      query: mutations.createClientUser,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return createClientUser
  }

  const deleteClientUser = async (input: DeleteClientUserInput) => {
    try {
      await API.graphql({
        query: mutations.deleteClientUser,
        variables: { input },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })
    } catch (error: any) {
      console.log(error)
    }
  }

  const listClientUserByUser = async (
    variables: ListClientUserByUserQueryVariables
  ) => {
    const {
      data: {
        listClientUserByUser: { items, nextToken },
      },
    } = (await API.graphql({
      query: customQueries.listClientUserByUser,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listClientUserByClient = async (variables: ListClientUserByClientQueryVariables) => {
    const {
      data: {
        listClientUserByClient: { items, nextToken },
      },
    } = (await API.graphql({
      query: customQueries.listClientUserByClientCustom,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  return {
    createClientUser,
    deleteClientUser,
    listClientUserByUser,
    listClientUserByClient,
  }
}
