import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import { API, graphqlOperation } from 'aws-amplify'

import * as customQueries from 'graphql/custom-queries'
import * as queries from 'graphql/queries'
import * as mutations from 'graphql/mutations'

import {
  CreateEligibleVaccinationInput,
  UpdateEligibleVaccinationInput,
  DeleteEligibleVaccinationInput,
  ListEligiblesVaccinationByClientEligibleQueryVariables,
  ListEligiblesVaccinationByClientDateQueryVariables
} from 'API'

export const useEligibleVaccination = () => {
  const createEligibleVaccination = async (
    input: CreateEligibleVaccinationInput
  ) => {
    const {
      data: { createEligibleVaccination },
    } = (await API.graphql({
      query: mutations.createEligibleVaccination,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return createEligibleVaccination
  }

  const updateEligibleVaccination = async (
    input: UpdateEligibleVaccinationInput
  ) => {
    const {
      data: { updateEligibleVaccination },
    } = (await API.graphql({
      query: mutations.updateEligibleVaccination,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return updateEligibleVaccination
  }

  const deleteEligibleVaccination = async (
    input: DeleteEligibleVaccinationInput
  ) => {
    try {
      await API.graphql({
        query: mutations.deleteEligibleVaccination,
        variables: { input },
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      })
    } catch (error: any) {
      console.log(error)
    }
  }

  const listEligiblesVaccinationByClientEligible = async (
    variables: ListEligiblesVaccinationByClientEligibleQueryVariables
  ) => {
    const {
      data: {
        listEligiblesVaccinationByClientEligible: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listEligiblesVaccinationByClientEligible,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listEligiblesVaccinationByClientDate = async (
    variables: ListEligiblesVaccinationByClientDateQueryVariables
  ) => {
    const {
      data: {
        listEligiblesVaccinationByClientDate: { items, nextToken },
      },
    } = (await API.graphql({
      query: customQueries.listEligiblesVaccinationByClientDate,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  return {
    createEligibleVaccination,
    updateEligibleVaccination,
    deleteEligibleVaccination,
    listEligiblesVaccinationByClientEligible,
    listEligiblesVaccinationByClientDate
  }
}
