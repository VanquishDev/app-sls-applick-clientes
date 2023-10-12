import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import { API, graphqlOperation } from 'aws-amplify'

import * as customQueries from 'graphql/custom-queries'
import * as queries from 'graphql/queries'
import * as mutations from 'graphql/mutations'

import {
  CreateCampaignInput,
  UpdateCampaignInput,
  DeleteCampaignInput,
  GetCampaignQueryVariables,
  ListCampaignsQueryVariables,
  ListCampaignByCodeQueryVariables,
  CreateCampaignProductInput,
  UpdateCampaignProductInput,
  DeleteCampaignProductInput,
  CreateCampaignCompanyInput,
  UpdateCampaignCompanyInput,
  DeleteCampaignCompanyInput,
  ListProductsByCampaignQueryVariables,
  ListCompaniesByCampaignQueryVariables,
  CreateCampaignUsedInput,
  ListUsedByCampaignQueryVariables,
  ListUsedByCampaignUserQueryVariables,
  ListOrdersByCampaignCreatedAtQueryVariables,
} from 'API'

export const useCampaign = () => {
  const getCampaign = async (variables: GetCampaignQueryVariables) => {
    const {
      data: { getCampaign },
    } = (await API.graphql(
      graphqlOperation(customQueries.getCampaignCustom, variables)
    )) as GraphQLResult<any>
    return getCampaign
  }

  const listCampaigns = async (variables: ListCampaignsQueryVariables) => {
    const {
      data: {
        listCampaigns: { items, nextToken },
      },
    } = (await API.graphql({
      query: customQueries.listCampaignsCustom,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listCampaignByCode = async (
    variables: ListCampaignByCodeQueryVariables
  ) => {
    const {
      data: {
        listCampaignByCode: { items, nextToken },
      },
    } = (await API.graphql({
      query: customQueries.listCampaignByCodeCustom,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const createCampaign = async (input: CreateCampaignInput) => {
    const {
      data: { createCampaign },
    } = (await API.graphql({
      query: mutations.createCampaign,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return createCampaign
  }

  const updateCampaign = async (input: UpdateCampaignInput) => {
    const {
      data: { updateCampaign },
    } = (await API.graphql({
      query: mutations.updateCampaign,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return updateCampaign
  }

  const deleteCampaign = async (input: DeleteCampaignInput) => {
    try {
      await API.graphql({
        query: mutations.deleteCampaign,
        variables: { input },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })
    } catch (error: any) {
      console.log(error)
    }
  }

  const createCampaignProduct = async (input: CreateCampaignProductInput) => {
    const {
      data: { createCampaignProduct },
    } = (await API.graphql({
      query: mutations.createCampaignProduct,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return createCampaignProduct
  }

  const updateCampaignProduct = async (input: UpdateCampaignProductInput) => {
    const {
      data: { updateCampaignProduct },
    } = (await API.graphql({
      query: mutations.updateCampaignProduct,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return updateCampaignProduct
  }

  const deleteCampaignProduct = async (input: DeleteCampaignProductInput) => {
    try {
      await API.graphql({
        query: mutations.deleteCampaignProduct,
        variables: { input },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })
    } catch (error: any) {
      console.log(error)
    }
  }

  const createCampaignCompany = async (input: CreateCampaignCompanyInput) => {
    const {
      data: { createCampaignCompany },
    } = (await API.graphql({
      query: mutations.createCampaignCompany,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return createCampaignCompany
  }

  const updateCampaignCompany = async (input: UpdateCampaignCompanyInput) => {
    const {
      data: { updateCampaignCompany },
    } = (await API.graphql({
      query: mutations.updateCampaignCompany,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return updateCampaignCompany
  }

  const deleteCampaignCompany = async (input: DeleteCampaignCompanyInput) => {
    try {
      await API.graphql({
        query: mutations.deleteCampaignCompany,
        variables: { input },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })
    } catch (error: any) {
      console.log(error)
    }
  }

  const listProductsByCampaign = async (
    variables: ListProductsByCampaignQueryVariables
  ) => {
    const {
      data: {
        listProductsByCampaign: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listProductsByCampaign,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listCompaniesByCampaign = async (
    variables: ListCompaniesByCampaignQueryVariables
  ) => {
    const {
      data: {
        listCompaniesByCampaign: { items, nextToken },
      },
    } = (await API.graphql({
      query: customQueries.listCompaniesByCampaignCustom,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const createCampaignUsed = async (input: CreateCampaignUsedInput) => {
    try {
      await API.graphql({
        query: mutations.createCampaignUsed,
        variables: { input },
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      })
    } catch (r: any) {
      console.log(r)
    }
  }

  const listUsedByCampaign = async (
    variables: ListUsedByCampaignQueryVariables
  ) => {
    const {
      data: {
        listUsedByCampaign: { items, nextToken },
      },
    } = (await API.graphql({
      query: customQueries.listUsedByCampaignCustom,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listUsedByCampaignUserPools = async (
    variables: ListUsedByCampaignQueryVariables
  ) => {
    const {
      data: {
        listUsedByCampaign: { items, nextToken },
      },
    } = (await API.graphql({
      query: customQueries.listUsedByCampaignCustom,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listUsedByCampaignUser = async (
    variables: ListUsedByCampaignUserQueryVariables
  ) => {
    const {
      data: {
        listUsedByCampaignUser: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listUsedByCampaignUser,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listOrdersByCampaignCreatedAt = async (
    variables: ListOrdersByCampaignCreatedAtQueryVariables
  ) => {
    const {
      data: {
        listOrdersByCampaignCreatedAt: { items, nextToken },
      },
    } = (await API.graphql({
      query: customQueries.listOrdersByCampaignCreatedAtCustom,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  return {
    getCampaign,
    listCampaigns,
    listCampaignByCode,
    createCampaign,
    updateCampaign,
    deleteCampaign,
    createCampaignProduct,
    updateCampaignProduct,
    deleteCampaignProduct,
    createCampaignCompany,
    updateCampaignCompany,
    deleteCampaignCompany,
    listProductsByCampaign,
    listCompaniesByCampaign,
    createCampaignUsed,
    listUsedByCampaign,
    listUsedByCampaignUser,
    listOrdersByCampaignCreatedAt,
    listUsedByCampaignUserPools,
  }
}
