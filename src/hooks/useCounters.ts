import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import { API, graphqlOperation } from 'aws-amplify'

import * as queries from 'graphql/queries'
import * as mutations from 'graphql/mutations'

import {
  CreateCounterInput,
  UpdateCounterInput,
  DeleteCounterInput,
  GetCounterQueryVariables,
} from 'API'

export const useCounters = () => {
  const getCounter = async (variables: GetCounterQueryVariables) => {
    let {
      data: { getCounter },
    } = (await API.graphql({
      query: queries.getCounter,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return getCounter
  }

  const createCounter = async (input: CreateCounterInput) => {
    try {
      await API.graphql({
        query: mutations.createCounter,
        variables: { input },
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      })
    } catch (r: any) {
      console.log(r)
    }
  }

  const updateCounter = async (input: UpdateCounterInput) => {
    try {
      await API.graphql({
        query: mutations.updateCounter,
        variables: { input },
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      })
    } catch (r: any) {
      console.log(r)
    }
  }

  const deleteCounter = async (input: DeleteCounterInput) => {
    try {
      await API.graphql({
        query: mutations.deleteCounter,
        variables: { input },
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      })
    } catch (r: any) {
      console.log(r)
    }
  }

  return {
    getCounter,
    createCounter,
    updateCounter,
    deleteCounter,
  }
}
