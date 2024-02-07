import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import { API, graphqlOperation } from 'aws-amplify'

import * as customQueries from 'graphql/custom-queries'
import * as queries from 'graphql/queries'
import * as mutations from 'graphql/mutations'

import {
  CreateAuthorizationListInput,
  UpdateAuthorizationListInput,
  DeleteAuthorizationListInput,
  ListAuthorizationListQueryVariables,
  ListAuthorizationListMembersQueryVariables,
  CreateAuthorizationListMemberInput,
  UpdateAuthorizationListMemberInput,
  DeleteAuthorizationListMemberInput,
  ListMembersByAuthorizationListQueryVariables,
  ListMembersByAuthorizationListKeyQueryVariables,
  ListMembersByAuthorizationListCPFQueryVariables,
  ListMembersByKeyQueryVariables,
  ListMembersByCPFQueryVariables,
  CreateAuthorizationListMemberVaccinationInput,
  UpdateAuthorizationListMemberVaccinationInput,
  DeleteAuthorizationListMemberVaccinationInput,
  ListMembersVaccinationByAuthorizationListQueryVariables,
  ListVaccinationsByAuthorizationListMemberQueryVariables,
  CreateAuthorizationListClosureInput,
  UpdateAuthorizationListClosureInput,
  DeleteAuthorizationListClosureInput,
  ListClosuresByAuthorizationListQueryVariables,
  ListAuthorizationListsByAdherenceCodeQueryVariables,
} from 'API'

export const useAuthorizationList = () => {
  const createAuthorizationList = async (
    input: CreateAuthorizationListInput
  ) => {
    const {
      data: { createAuthorizationList },
    } = (await API.graphql({
      query: mutations.createAuthorizationList,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return createAuthorizationList
  }

  const updateAuthorizationList = async (
    input: UpdateAuthorizationListInput
  ) => {
    const {
      data: { updateAuthorizationList },
    } = (await API.graphql({
      query: mutations.updateAuthorizationList,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return updateAuthorizationList
  }

  const deleteAuthorizationList = async (
    input: DeleteAuthorizationListInput
  ) => {
    try {
      await API.graphql({
        query: mutations.deleteAuthorizationList,
        variables: { input },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })
    } catch (error: any) {
      console.log(error)
    }
  }

  const listAuthorizationList = async (
    variables: ListAuthorizationListQueryVariables
  ) => {
    const {
      data: {
        listAuthorizationList: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listAuthorizationList,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listAuthorizationListMembers = async (
    variables: ListAuthorizationListMembersQueryVariables
  ) => {
    const {
      data: {
        listAuthorizationListMembers: { items, nextToken },
      },
    } = (await API.graphql({
      query: customQueries.listAuthorizationListMembersCustom,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const createAuthorizationListMember = async (
    input: CreateAuthorizationListMemberInput
  ) => {
    const {
      data: { createAuthorizationListMember },
    } = (await API.graphql({
      query: mutations.createAuthorizationListMember,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return createAuthorizationListMember
  }

  const updateAuthorizationListMember = async (
    input: UpdateAuthorizationListMemberInput
  ) => {
    const {
      data: { updateAuthorizationListMember },
    } = (await API.graphql({
      query: mutations.updateAuthorizationListMember,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return updateAuthorizationListMember
  }

  const deleteAuthorizationListMember = async (
    input: DeleteAuthorizationListMemberInput
  ) => {
    try {
      await API.graphql({
        query: mutations.deleteAuthorizationListMember,
        variables: { input },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })
    } catch (error: any) {
      console.log(error)
    }
  }

  const listMembersByAuthorizationList = async (
    variables: ListMembersByAuthorizationListQueryVariables
  ) => {
    const {
      data: {
        listMembersByAuthorizationList: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listMembersByAuthorizationList,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listMembersByAuthorizationListKey = async (
    variables: ListMembersByAuthorizationListKeyQueryVariables
  ) => {
    const {
      data: {
        listMembersByAuthorizationListKey: { items, nextToken },
      },
    } = (await API.graphql({
      query: customQueries.listMembersByAuthorizationListKeyCustom,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listMembersByAuthorizationListCPF = async (
    variables: ListMembersByAuthorizationListCPFQueryVariables
  ) => {
    const {
      data: {
        listMembersByAuthorizationListCPF: { items, nextToken },
      },
    } = (await API.graphql({
      query: customQueries.listMembersByAuthorizationListCPFCustom,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listMembersByCPF = async (
    variables: ListMembersByCPFQueryVariables
  ) => {
    const {
      data: {
        listMembersByCPF: { items, nextToken },
      },
    } = (await API.graphql({
      query: customQueries.listMembersByCPFCustom,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listMembersByKey = async (
    variables: ListMembersByKeyQueryVariables
  ) => {
    const {
      data: {
        listMembersByKey: { items, nextToken },
      },
    } = (await API.graphql({
      query: customQueries.listMembersByKeyCustom,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const createAuthorizationListMemberVaccination = async (
    input: CreateAuthorizationListMemberVaccinationInput
  ) => {
    const {
      data: { createAuthorizationListMemberVaccination },
    } = (await API.graphql({
      query: mutations.createAuthorizationListMemberVaccination,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return createAuthorizationListMemberVaccination
  }

  const updateAuthorizationListMemberVaccination = async (
    input: UpdateAuthorizationListMemberVaccinationInput
  ) => {
    const {
      data: { updateAuthorizationListMemberVaccination },
    } = (await API.graphql({
      query: mutations.updateAuthorizationListMemberVaccination,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return updateAuthorizationListMemberVaccination
  }

  const deleteAuthorizationListMemberVaccination = async (
    input: DeleteAuthorizationListMemberVaccinationInput
  ) => {
    try {
      await API.graphql({
        query: mutations.deleteAuthorizationListMemberVaccination,
        variables: { input },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })
    } catch (error: any) {
      console.log(error)
    }
  }

  const listMembersVaccinationByAuthorizationList = async (
    variables: ListMembersVaccinationByAuthorizationListQueryVariables
  ) => {
    const {
      data: {
        listMembersVaccinationByAuthorizationList: { items, nextToken },
      },
    } = (await API.graphql({
      query: customQueries.listMembersVaccinationByAuthorizationListCustom,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listVaccinationsByAuthorizationListMember = async (
    variables: ListVaccinationsByAuthorizationListMemberQueryVariables
  ) => {
    const {
      data: {
        listVaccinationsByAuthorizationListMember: { items, nextToken },
      },
    } = (await API.graphql({
      query: customQueries.listVaccinationsByAuthorizationListMemberCustom,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const createAuthorizationListClosure = async (
    input: CreateAuthorizationListClosureInput
  ) => {
    const {
      data: { createAuthorizationListClosure },
    } = (await API.graphql({
      query: mutations.createAuthorizationListClosure,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return createAuthorizationListClosure
  }

  const updateAuthorizationListClosure = async (
    input: UpdateAuthorizationListClosureInput
  ) => {
    const {
      data: { updateAuthorizationListClosure },
    } = (await API.graphql({
      query: mutations.updateAuthorizationListClosure,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return updateAuthorizationListClosure
  }

  const deleteAuthorizationListClosure = async (
    input: DeleteAuthorizationListClosureInput
  ) => {
    try {
      await API.graphql({
        query: mutations.deleteAuthorizationListClosure,
        variables: { input },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })
    } catch (error: any) {
      console.log(error)
    }
  }

  const listClosuresByAuthorizationList = async (
    variables: ListClosuresByAuthorizationListQueryVariables
  ) => {
    const {
      data: {
        listClosuresByAuthorizationList: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listClosuresByAuthorizationList,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listAuthorizationListsByAdherenceCode = async (
    variables: ListAuthorizationListsByAdherenceCodeQueryVariables
  ) => {
    const {
      data: {
        listAuthorizationListsByAdherenceCode: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listAuthorizationListsByAdherenceCode,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  return {
    createAuthorizationList,
    updateAuthorizationList,
    deleteAuthorizationList,
    listAuthorizationList,
    createAuthorizationListMember,
    updateAuthorizationListMember,
    deleteAuthorizationListMember,
    listMembersByAuthorizationList,
    listMembersByAuthorizationListKey,
    listMembersByAuthorizationListCPF,
    listMembersByKey,
    listMembersByCPF,
    createAuthorizationListMemberVaccination,
    updateAuthorizationListMemberVaccination,
    deleteAuthorizationListMemberVaccination,
    listMembersVaccinationByAuthorizationList,
    listVaccinationsByAuthorizationListMember,
    listAuthorizationListMembers,
    createAuthorizationListClosure,
    updateAuthorizationListClosure,
    deleteAuthorizationListClosure,
    listClosuresByAuthorizationList,
    listAuthorizationListsByAdherenceCode
  }
}
