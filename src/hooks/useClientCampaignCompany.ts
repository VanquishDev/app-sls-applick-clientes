import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import { API, graphqlOperation } from 'aws-amplify'

import * as queries from 'graphql/queries'
import * as mutations from 'graphql/mutations'

import {
  CreateClientCampaignCompanyInput,
  UpdateClientCampaignCompanyInput,
  DeleteClientCampaignCompanyInput,
  ListCompaniesByClientCampaignQueryVariables
} from 'API'

export const useClientCampaignCompany = () => {
  const createClientCampaignCompany = async (input: CreateClientCampaignCompanyInput) => {
    const {
      data: { createClientCampaignCompany },
    } = (await API.graphql({
      query: mutations.createClientCampaignCompany,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return createClientCampaignCompany
  }

  const updateClientCampaignCompany = async (input: UpdateClientCampaignCompanyInput) => {
    const {
      data: { updateClientCampaignCompany },
    } = (await API.graphql({
      query: mutations.updateClientCampaignCompany,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return updateClientCampaignCompany
  }

  const deleteClientCampaignCompany = async (input: DeleteClientCampaignCompanyInput) => {
    try {
      const r = await API.graphql({
        query: mutations.deleteClientCampaignCompany,
        variables: { input },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })
      return r
    } catch (error: any) {
      console.log(error)
    }
  }

  const listCompaniesByClientCampaign = async (
    variables: ListCompaniesByClientCampaignQueryVariables
  ) => {
    const {
      data: {
        listCompaniesByClientCampaign: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listCompaniesByClientCampaign,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  return {
    createClientCampaignCompany,
    updateClientCampaignCompany,
    deleteClientCampaignCompany,
    listCompaniesByClientCampaign
  }
}
