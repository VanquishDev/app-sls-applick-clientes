import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import { API, graphqlOperation } from 'aws-amplify'

import * as customQueries from 'graphql/custom-queries'
import * as queries from 'graphql/queries'
import * as mutations from 'graphql/mutations'

import {
  CreateClientCampaignEligibleVaccinationInput,
  UpdateClientCampaignEligibleVaccinationInput,
  DeleteClientCampaignEligibleVaccinationInput,
  ListVaccinationsByOSQueryVariables,
  ListVaccinationsByClientCampaignQueryVariables,
  ListVaccinationsByClientCampaignEligibleQueryVariables
} from 'API'

export const useClientCampaignEligibleVaccination = () => {
  const createClientCampaignEligibleVaccination = async (input: CreateClientCampaignEligibleVaccinationInput) => {
    const {
      data: { createClientCampaignEligibleVaccination },
    } = (await API.graphql({
      query: mutations.createClientCampaignEligibleVaccination,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return createClientCampaignEligibleVaccination
  }

  const updateClientCampaignEligibleVaccination = async (input: UpdateClientCampaignEligibleVaccinationInput) => {
    const {
      data: { updateClientCampaignEligibleVaccination },
    } = (await API.graphql({
      query: mutations.updateClientCampaignEligibleVaccination,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return updateClientCampaignEligibleVaccination
  }

  const deleteClientCampaignEligibleVaccination = async (input: DeleteClientCampaignEligibleVaccinationInput) => {
    try {
      const r = await API.graphql({
        query: mutations.deleteClientCampaignEligibleVaccination,
        variables: { input },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })
      return r
    } catch (error: any) {
      console.log(error)
    }
  }

  const listVaccinationsByOS = async (
    variables: ListVaccinationsByOSQueryVariables
  ) => {
    const {
      data: {
        listVaccinationsByOS: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listVaccinationsByOS,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listVaccinationsByClientCampaign = async (
    variables: ListVaccinationsByClientCampaignQueryVariables
  ) => {
    const {
      data: {
        listVaccinationsByClientCampaign: { items, nextToken },
      },
    } = (await API.graphql({
      query: customQueries.listVaccinationsByClientCampaign,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listVaccinationsByClientCampaignEligible = async (
    variables: ListVaccinationsByClientCampaignEligibleQueryVariables
  ) => {
    const {
      data: {
        listVaccinationsByClientCampaignEligible: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listVaccinationsByClientCampaignEligible,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  return {
    createClientCampaignEligibleVaccination,
    updateClientCampaignEligibleVaccination,
    deleteClientCampaignEligibleVaccination,
    listVaccinationsByOS,
    listVaccinationsByClientCampaign,
    listVaccinationsByClientCampaignEligible
  }
}
