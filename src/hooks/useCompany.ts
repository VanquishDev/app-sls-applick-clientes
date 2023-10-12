import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import { API, graphqlOperation } from 'aws-amplify'

import * as queries from 'graphql/queries'
import * as mutations from 'graphql/mutations'

import {
  CreateCompanyInput,
  UpdateCompanyInput,
  DeleteCompanyInput,
  GetCompanyQueryVariables,
  ListCompaniesQueryVariables,
  ListCompanyByCNPJQueryVariables,
  ListCompanyByEnableRetailQueryVariables,
} from 'API'

export const useCompany = () => {
  const getCompany = async (variables: GetCompanyQueryVariables) => {
    const {
      data: { getCompany },
    } = (await API.graphql(
      graphqlOperation(queries.getCompany, variables)
    )) as GraphQLResult<any>
    return getCompany
  }

  const listCompanies = async (variables: ListCompaniesQueryVariables) => {
    const {
      data: {
        listCompanies: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listCompanies,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listCompanyByCNPJ = async (
    variables: ListCompanyByCNPJQueryVariables
  ) => {
    const {
      data: {
        listCompanyByCNPJ: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listCompanyByCNPJ,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listCompanyByEnableRetail = async (
    variables: ListCompanyByEnableRetailQueryVariables
  ) => {
    const {
      data: {
        listCompanyByEnableRetail: { items, nextToken },
      },
    } = (await API.graphql({
      query: queries.listCompanyByEnableRetail,
      variables,
      authMode: GRAPHQL_AUTH_MODE.API_KEY,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const createCompany = async (input: CreateCompanyInput) => {
    const {
      data: { createCompany },
    } = (await API.graphql({
      query: mutations.createCompany,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return createCompany
  }

  const updateCompany = async (input: UpdateCompanyInput) => {
    const {
      data: { updateCompany },
    } = (await API.graphql({
      query: mutations.updateCompany,
      variables: { input },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return updateCompany
  }

  const deleteCompany = async (input: DeleteCompanyInput) => {
    try {
      await API.graphql({
        query: mutations.deleteCompany,
        variables: { input },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })
    } catch (error: any) {
      console.log(error)
    }
  }

  return {
    getCompany,
    listCompanies,
    listCompanyByCNPJ,
    listCompanyByEnableRetail,
    createCompany,
    updateCompany,
    deleteCompany,
  }
}
