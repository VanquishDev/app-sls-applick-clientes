import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import { API, graphqlOperation } from 'aws-amplify'

import * as queries from 'graphql/queries'
import * as mutations from 'graphql/mutations'

import { GetConfigQueryVariables } from 'API'
import { ConfigValidationModes } from 'models'

import { toast } from 'react-toastify'

export const useConfig = () => {

  const getConfig = async (variables: GetConfigQueryVariables) => {
    let {
      data: { getConfig },
    } = (await API.graphql({
      query: queries.getConfig,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    }
    )) as GraphQLResult<any>
    return getConfig
  }

  const updateConfig = async (input: any) => {
    input.id = 'DEFAULT'
    try {
      let {
        data: { updateConfig },
      } = (await API.graphql(
        graphqlOperation(mutations.updateConfig, { input })
      )) as GraphQLResult<any>
      return updateConfig
    } catch (r: any) {
      console.log(r)
      const message =
        r && r.errors[0] && r.errors[0].message ? r.errors[0].message : null
      if (message) {
        toast.error(message)
      }
    }
  }

  return { getConfig, updateConfig }
}
