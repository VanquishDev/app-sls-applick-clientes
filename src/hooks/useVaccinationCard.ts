import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import { API, graphqlOperation } from 'aws-amplify'

import * as customQueries from 'graphql/custom-queries'
import * as queries from 'graphql/queries'
import * as mutations from 'graphql/mutations'

import {
  GetVaccinationCardQueryVariables,
  CreateVaccinationCardInput,
  UpdateVaccinationCardInput,
  DeleteVaccinationCardInput,
  ListVaccinationCardsByUserQueryVariables,
  CreateVaccinationCardItemInput,
  UpdateVaccinationCardItemInput,
  DeleteVaccinationCardItemInput,
  ListVaccinationCardItemsQueryVariables,
  ListVaccinationCardsItemsByVaccinationCardQueryVariables,
  ListVaccinationCardsItemsByOrderQueryVariables,
  ListVaccinationCardsItemsByAdherenceQueryVariables,
  ListVaccinationCardsItemsByClientCampaignQueryVariables,
  ListVaccinationCardsItemsByProfissionalQueryVariables,
  ListVaccinationCardsItemsByStatusQueryVariables,
  ListVaccinationCardsItemsByCompanyQueryVariables,
} from 'API'

export const useVaccinationCard = () => {
  const getVaccinationCard = async (
    variables: GetVaccinationCardQueryVariables
  ) => {
    const {
      data: { getVaccinationCard },
    } = (await API.graphql(
      graphqlOperation(queries.getVaccinationCard, variables)
    )) as GraphQLResult<any>
    return getVaccinationCard
  }

  const listVaccinationCardsByUser = async (
    variables: ListVaccinationCardsByUserQueryVariables
  ) => {
    const {
      data: {
        listVaccinationCardsByUser: { items, nextToken },
      },
    } = (await API.graphql({
      query: customQueries.listVaccinationCardsByUserCustom,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const createVaccinationCard = async (input: CreateVaccinationCardInput) => {
    const {
      data: { createVaccinationCard },
    } = (await API.graphql({
      query: mutations.createVaccinationCard,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return createVaccinationCard
  }

  const updateVaccinationCard = async (input: UpdateVaccinationCardInput) => {
    const {
      data: { updateVaccinationCard },
    } = (await API.graphql({
      query: mutations.updateVaccinationCard,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return updateVaccinationCard
  }

  const deleteVaccinationCard = async (input: DeleteVaccinationCardInput) => {
    try {
      await API.graphql({
        query: mutations.deleteVaccinationCard,
        variables: { input },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })
    } catch (error: any) {
      console.log(error)
    }
  }

  const listVaccinationCardItems = async (
    variables: ListVaccinationCardItemsQueryVariables
  ) => {
    const {
      data: {
        listVaccinationCardItems: { items, nextToken },
      },
    } = (await API.graphql({
      query: customQueries.listVaccinationCardItemsCustom,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listVaccinationCardItems2 = async (
    variables: ListVaccinationCardItemsQueryVariables
  ) => {
    const {
      data: {
        listVaccinationCardItems: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listVaccinationCardItems,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listVaccinationCardsItemsByVaccinationCard = async (
    variables: ListVaccinationCardsItemsByVaccinationCardQueryVariables
  ) => {
    const {
      data: {
        listVaccinationCardsItemsByVaccinationCard: { items, nextToken },
      },
    } = (await API.graphql({
      query: customQueries.listVaccinationCardsItemsByVaccinationCardCustom,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listVaccinationCardsItemsByOrder = async (
    variables: ListVaccinationCardsItemsByOrderQueryVariables
  ) => {
    const {
      data: {
        listVaccinationCardsItemsByOrder: { items, nextToken },
      },
    } = (await API.graphql({
      query: customQueries.listVaccinationCardsItemsByOrderCustom,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listVaccinationCardsItemsByAdherence = async (
    variables: ListVaccinationCardsItemsByAdherenceQueryVariables
  ) => {
    const {
      data: {
        listVaccinationCardsItemsByAdherence: { items, nextToken },
      },
    } = (await API.graphql({
      query: customQueries.listVaccinationCardsItemsByAdherenceCustom,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listVaccinationCardsItemsByClientCampaign = async (
    variables: ListVaccinationCardsItemsByClientCampaignQueryVariables
  ) => {
    const {
      data: {
        listVaccinationCardsItemsByClientCampaign: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listVaccinationCardsItemsByClientCampaign,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listVaccinationCardsItemsByCompany = async (
    variables: ListVaccinationCardsItemsByCompanyQueryVariables
  ) => {
    const {
      data: {
        listVaccinationCardsItemsByCompany: { items, nextToken },
      },
    } = (await API.graphql({
      query: customQueries.listVaccinationCardsItemsByCompanyCustom,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listVaccinationCardsItemsByStatus = async (
    variables: ListVaccinationCardsItemsByStatusQueryVariables
  ) => {
    const {
      data: {
        listVaccinationCardsItemsByStatus: { items, nextToken },
      },
    } = (await API.graphql({
      query: customQueries.listVaccinationCardsItemsByStatusCustom,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listVaccinationCardsItemsByProfissional = async (
    variables: ListVaccinationCardsItemsByProfissionalQueryVariables
  ) => {
    const {
      data: {
        listVaccinationCardsItemsByProfissional: { items, nextToken },
      },
    } = (await API.graphql({
      query: customQueries.listVaccinationCardsItemsByProfissionalCustom,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const createVaccinationCardItem = async (
    input: CreateVaccinationCardItemInput
  ) => {
    const {
      data: { createVaccinationCardItem },
    } = (await API.graphql({
      query: mutations.createVaccinationCardItem,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return createVaccinationCardItem
  }

  const updateVaccinationCardItem = async (
    input: UpdateVaccinationCardItemInput
  ) => {
    const {
      data: { updateVaccinationCardItem },
    } = (await API.graphql({
      query: mutations.updateVaccinationCardItem,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return updateVaccinationCardItem
  }

  const deleteVaccinationCardItem = async (
    input: DeleteVaccinationCardItemInput
  ) => {
    try {
      await API.graphql({
        query: mutations.deleteVaccinationCardItem,
        variables: { input },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })
    } catch (error: any) {
      console.log(error)
    }
  }

  return {
    getVaccinationCard,
    listVaccinationCardsByUser,
    createVaccinationCard,
    updateVaccinationCard,
    deleteVaccinationCard,
    listVaccinationCardItems,
    listVaccinationCardItems2,
    listVaccinationCardsItemsByVaccinationCard,
    listVaccinationCardsItemsByOrder,
    listVaccinationCardsItemsByAdherence,
    listVaccinationCardsItemsByClientCampaign,
    listVaccinationCardsItemsByProfissional,
    listVaccinationCardsItemsByCompany,
    listVaccinationCardsItemsByStatus,
    createVaccinationCardItem,
    updateVaccinationCardItem,
    deleteVaccinationCardItem,
  }
}
