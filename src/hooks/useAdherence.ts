import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import { API, graphqlOperation } from 'aws-amplify'

import * as customQueries from 'graphql/custom-queries'
import * as queries from 'graphql/queries'
import * as mutations from 'graphql/mutations'

import {
  CreateAdherenceInput,
  UpdateAdherenceInput,
  DeleteAdherenceInput,
  GetAdherenceQueryVariables,
  ListAdherencesQueryVariables,
  ListAdherenceByCodeQueryVariables,
  CreateAdherenceProductInput,
  UpdateAdherenceProductInput,
  DeleteAdherenceProductInput,
  CreateAdherenceCompanyInput,
  UpdateAdherenceCompanyInput,
  DeleteAdherenceCompanyInput,
  ListProductsByAdherenceQueryVariables,
  ListCompaniesByAdherenceQueryVariables,
  CreateAdherenceUsedInput,
  ListUsedByAdherenceQueryVariables,
  ListUsedByAdherenceUserQueryVariables,
  ListOrdersByAdherenceCreatedAtQueryVariables,
} from 'API'

export const useAdherence = () => {
  const getAdherence = async (variables: GetAdherenceQueryVariables) => {
    const {
      data: { getAdherence },
    } = (await API.graphql(
      graphqlOperation(customQueries.getAdherenceCustom, variables)
    )) as GraphQLResult<any>
    return getAdherence
  }

  const listAdherences = async (variables: ListAdherencesQueryVariables) => {
    const {
      data: {
        listAdherences: { items, nextToken },
      },
    } = (await API.graphql({
      query: customQueries.listAdherencesCustom,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listAdherenceByCode = async (
    variables: ListAdherenceByCodeQueryVariables
  ) => {
    const {
      data: {
        listAdherenceByCode: { items, nextToken },
      },
    } = (await API.graphql({
      query: customQueries.listAdherenceByCodeCustom,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const createAdherence = async (input: CreateAdherenceInput) => {
    const {
      data: { createAdherence },
    } = (await API.graphql({
      query: mutations.createAdherence,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return createAdherence
  }

  const updateAdherence = async (input: UpdateAdherenceInput) => {
    const {
      data: { updateAdherence },
    } = (await API.graphql({
      query: mutations.updateAdherence,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return updateAdherence
  }

  const deleteAdherence = async (input: DeleteAdherenceInput) => {
    try {
      await API.graphql({
        query: mutations.deleteAdherence,
        variables: { input },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })
    } catch (error: any) {
      console.log(error)
    }
  }

  const createAdherenceProduct = async (input: CreateAdherenceProductInput) => {
    const {
      data: { createAdherenceProduct },
    } = (await API.graphql({
      query: mutations.createAdherenceProduct,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return createAdherenceProduct
  }

  const updateAdherenceProduct = async (input: UpdateAdherenceProductInput) => {
    const {
      data: { updateAdherenceProduct },
    } = (await API.graphql({
      query: mutations.updateAdherenceProduct,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return updateAdherenceProduct
  }

  const deleteAdherenceProduct = async (input: DeleteAdherenceProductInput) => {
    try {
      await API.graphql({
        query: mutations.deleteAdherenceProduct,
        variables: { input },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })
    } catch (error: any) {
      console.log(error)
    }
  }

  const createAdherenceCompany = async (input: CreateAdherenceCompanyInput) => {
    const {
      data: { createAdherenceCompany },
    } = (await API.graphql({
      query: mutations.createAdherenceCompany,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return createAdherenceCompany
  }

  const updateAdherenceCompany = async (input: UpdateAdherenceCompanyInput) => {
    const {
      data: { updateAdherenceCompany },
    } = (await API.graphql({
      query: mutations.updateAdherenceCompany,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return updateAdherenceCompany
  }

  const deleteAdherenceCompany = async (input: DeleteAdherenceCompanyInput) => {
    try {
      await API.graphql({
        query: mutations.deleteAdherenceCompany,
        variables: { input },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })
    } catch (error: any) {
      console.log(error)
    }
  }

  const listProductsByAdherence = async (
    variables: ListProductsByAdherenceQueryVariables
  ) => {
    const {
      data: {
        listProductsByAdherence: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listProductsByAdherence,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listCompaniesByAdherence = async (
    variables: ListCompaniesByAdherenceQueryVariables
  ) => {
    const {
      data: {
        listCompaniesByAdherence: { items, nextToken },
      },
    } = (await API.graphql({
      query: customQueries.listCompaniesByAdherenceCustom,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const createAdherenceUsed = async (input: CreateAdherenceUsedInput) => {
    try {
      await API.graphql({
        query: mutations.createAdherenceUsed,
        variables: { input },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })
    } catch (r: any) {
      console.log(r)
    }
  }

  const listUsedByAdherence = async (
    variables: ListUsedByAdherenceQueryVariables
  ) => {
    const {
      data: {
        listUsedByAdherence: { items, nextToken },
      },
    } = (await API.graphql({
      query: customQueries.listUsedByAdherenceCustom,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listUsedByAdherenceUserPools = async (
    variables: ListUsedByAdherenceQueryVariables
  ) => {
    const {
      data: {
        listUsedByAdherence: { items, nextToken },
      },
    } = (await API.graphql({
      query: customQueries.listUsedByAdherenceCustom,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listUsedByAdherenceUser = async (
    variables: ListUsedByAdherenceUserQueryVariables
  ) => {
    const {
      data: {
        listUsedByAdherenceUser: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listUsedByAdherenceUser,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listOrdersByAdherenceCreatedAt = async (
    variables: ListOrdersByAdherenceCreatedAtQueryVariables
  ) => {
    const {
      data: {
        listOrdersByAdherenceCreatedAt: { items, nextToken },
      },
    } = (await API.graphql({
      query: customQueries.listOrdersByAdherenceCreatedAtCustom,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  return {
    getAdherence,
    listAdherences,
    listAdherenceByCode,
    createAdherence,
    updateAdherence,
    deleteAdherence,
    createAdherenceProduct,
    updateAdherenceProduct,
    deleteAdherenceProduct,
    createAdherenceCompany,
    updateAdherenceCompany,
    deleteAdherenceCompany,
    listProductsByAdherence,
    listCompaniesByAdherence,
    createAdherenceUsed,
    listUsedByAdherence,
    listUsedByAdherenceUser,
    listOrdersByAdherenceCreatedAt,
    listUsedByAdherenceUserPools,
  }
}
