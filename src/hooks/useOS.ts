import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import { API, graphqlOperation } from 'aws-amplify'

import * as customQueries from 'graphql/custom-queries'
import * as queries from 'graphql/queries'
import * as mutations from 'graphql/mutations'

import {
  CreateOSInput,
  UpdateOSInput,
  DeleteOSInput,
  ListOSsQueryVariables,
  ListOSsByClientQueryVariables,
  ListOSsByClientStatusQueryVariables,
  ListOSsByClientStartQueryVariables,
  ListOSsByClientCampaignUnitQueryVariables,
  ListOSsByNumberQueryVariables,
  ListOSsByStatusNumberQueryVariables,
  ListOSsByClientCampaignQueryVariables
} from 'API'

export const useOS = () => {
  const createOS = async (
    input: CreateOSInput
  ) => {
    const {
      data: { createOS },
    } = (await API.graphql({
      query: mutations.createOS,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return createOS
  }

  const updateOS = async (
    input: UpdateOSInput
  ) => {
    const {
      data: { updateOS },
    } = (await API.graphql({
      query: mutations.updateOS,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return updateOS
  }

  const deleteOS = async (
    input: DeleteOSInput
  ) => {
    try {
      await API.graphql({
        query: mutations.deleteOS,
        variables: { input },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })
    } catch (error: any) {
      console.log(error)
    }
  }

  const listOSs = async (
    variables: ListOSsQueryVariables
  ) => {
    const {
      data: {
        listOSs: { items, nextToken },
      },
    } = (await API.graphql({
      query: customQueries.listOSsCustom,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listOSsByClient = async (
    variables: ListOSsByClientQueryVariables
  ) => {
    const {
      data: {
        listOSsByClient: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listOSsByClient,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listOSsByClientStatus = async (
    variables: ListOSsByClientStatusQueryVariables
  ) => {
    const {
      data: {
        listOSsByClientStatus: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listOSsByClientStatus,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listOSsByClientStart = async (
    variables: ListOSsByClientStartQueryVariables
  ) => {
    const {
      data: {
        listOSsByClientStart: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listOSsByClientStart,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listOSsByClientCampaignUnit = async (
    variables: ListOSsByClientCampaignUnitQueryVariables
  ) => {
    const {
      data: {
        listOSsByClientCampaignUnit: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listOSsByClientCampaignUnit,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listOSsByNumber = async (
    variables: ListOSsByNumberQueryVariables
  ) => {
    const {
      data: {
        listOSsByNumber: { items, nextToken },
      },
    } = (await API.graphql({
      query: customQueries.listOSsByNumberCustom,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listOSsByStatusNumber = async (
    variables: ListOSsByStatusNumberQueryVariables
  ) => {
    const {
      data: {
        listOSsByStatusNumber: { items, nextToken },
      },
    } = (await API.graphql({
      query: customQueries.listOSsByStatusNumberCustom,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listOSsByClientCampaign = async (
    variables: ListOSsByClientCampaignQueryVariables
  ) => {
    const {
      data: {
        listOSsByClientCampaign: { items, nextToken },
      },
    } = (await API.graphql({
      query: customQueries.listOSsByClientCampaign,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  return {
    createOS,
    updateOS,
    deleteOS,
    listOSs,
    listOSsByClient,
    listOSsByClientStatus,
    listOSsByClientStart,
    listOSsByClientCampaignUnit,
    listOSsByNumber,
    listOSsByStatusNumber,
    listOSsByClientCampaign
  }
}
