import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import { API, graphqlOperation, Auth } from 'aws-amplify'

import * as customQueries from 'graphql/custom-queries'
import * as queries from 'graphql/queries'
import * as mutations from 'graphql/mutations'

import {
  CreateMessageInput,
  DeleteMessageInput,
  ListMessagesByRelationCreatedAtQueryVariables,
  ListMessagesByUserCreatedAtQueryVariables,
} from 'API'

export const useMessage = () => {
  const createMessage = async (input: CreateMessageInput) => {
    const credential = await Auth.currentCredentials()
    input.identityId = credential.identityId
    try {
      return await API.graphql({
        query: mutations.createMessage,
        variables: { input },
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      })
    } catch (r: any) {
      console.log(r)
    }
  }

  const deleteMessage = async (input: DeleteMessageInput) => {
    try {
      await API.graphql({
        query: mutations.deleteMessage,
        variables: { input },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })
    } catch (r: any) {
      console.log(r)
    }
  }

  const listMessagesByRelationCreatedAt = async (
    variables: ListMessagesByRelationCreatedAtQueryVariables
  ) => {
    const {
      data: {
        listMessagesByRelationCreatedAt: { items, nextToken },
      },
    } = (await API.graphql({
      query: customQueries.listMessagesByRelationCreatedAtCustom,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>

    return { items, nextToken }
  }

  const listMessagesByUserCreatedAt = async (
    variables: ListMessagesByUserCreatedAtQueryVariables
  ) => {
    const {
      data: {
        listMessagesByUserCreatedAt: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listMessagesByUserCreatedAt,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>

    return { items, nextToken }
  }

  return {
    createMessage,
    deleteMessage,
    listMessagesByRelationCreatedAt,
    listMessagesByUserCreatedAt,
  }
}
