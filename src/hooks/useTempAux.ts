import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import { API, graphqlOperation } from 'aws-amplify'

import * as queries from 'graphql/queries'
import * as mutations from 'graphql/mutations'

import {
  CreateTempAuxInput,
  DeleteTempAuxInput,
  GetTempAuxQueryVariables,
} from 'API'

export const useTempAux = () => {
  const getTempAux = async (variables: GetTempAuxQueryVariables) => {
    const {
      data: { getTempAux },
    } = (await API.graphql({
      query: queries.getTempAux,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return getTempAux
  }

  const createTempAux = async (input: CreateTempAuxInput) => {
    const {
      data: { createTempAux },
    } = (await API.graphql({
      query: mutations.createTempAux,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return createTempAux
  }

  const deleteTempAux = async (input: DeleteTempAuxInput) => {
    try {
      await API.graphql({
        query: mutations.deleteTempAux,
        variables: { input },
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      })
    } catch (error: any) {
      console.log(error)
    }
  }

  return {
    getTempAux,
    createTempAux,
    deleteTempAux,
  }
}
