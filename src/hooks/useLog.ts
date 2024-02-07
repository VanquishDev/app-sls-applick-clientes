import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import { API, graphqlOperation } from 'aws-amplify'

import * as customQueries from 'graphql/custom-queries'
import * as queries from 'graphql/queries'
import * as mutations from 'graphql/mutations'

import { useState } from 'react'
import { Device } from '@capacitor/device'
import { Geolocation } from '@capacitor/geolocation'

import { LogSource } from 'models'

import {
  ListLogsByUserCreatedAtQueryVariables,
  ListLogsByTagCreatedAtQueryVariables,
  ListLogsByUserTagCreatedAtQueryVariables,
  ListLogsBySourceCreatedAtQueryVariables,
} from 'API'

interface LogProps {
  userID: string
  tag: string
  notes?: string | null
  page?: string | null
  message?: string | null
}

export const useLog = () => {
  const listLogBySource = async (
    variables: ListLogsBySourceCreatedAtQueryVariables
  ) => {
    const {
      data: {
        listLogsBySourceCreatedAt: { items, nextToken },
      },
    } = (await API.graphql({
      query: customQueries.listLogsBySourceCreatedAtCustom,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listLogByUser = async (
    variables: ListLogsByUserCreatedAtQueryVariables
  ) => {
    const {
      data: {
        listLogsByUserCreatedAt: { items, nextToken },
      },
    } = (await API.graphql(
      {
        query: customQueries.listLogsByUserCreatedAtCustom,
        variables,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listLogByTag = async (
    variables: ListLogsByTagCreatedAtQueryVariables
  ) => {
    const {
      data: {
        listLogsByTagCreatedAt: { items, nextToken },
      },
    } = (await API.graphql({
      query: customQueries.listLogsByTagCreatedAtCustom,
      variables,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as GraphQLResult<any>
    return { items, nextToken }
  }

  const listLogByUserByTag = async (
    variables: ListLogsByUserTagCreatedAtQueryVariables
  ) => {
    const {
      data: {
        listLogsByUserTagCreatedAt: { items, nextToken },
      },
    } = (await API.graphql(
      graphqlOperation(
        customQueries.listLogsByUserTagCreatedAtCustom,
        variables
      )
    )) as GraphQLResult<any>
    return { items, nextToken }
  }

  const setLogUser = async (log: LogProps) => {
    let location
    try {
      location = await Geolocation.getCurrentPosition()
    } catch (error) {
      location = null
    }

    const device = await Device.getInfo()

    const res = await fetch('https://ipapi.co/json')
    const data = await res.json()

    const input = {
      userID: log.userID,
      source: LogSource.APP,
      tag: log.tag,
      notes: log.notes ? log.notes : '',
      message: log.message ? log.message : '',
      page: log.page ? log.page : '',
      manufacturer: device?.manufacturer,
      model: device?.model,
      osName: device?.operatingSystem,
      osVersion: device?.osVersion,
      platform: device?.platform,
      uuid: '',
      lat:
        location && location.coords && location.coords.latitude
          ? location.coords.latitude
          : 0,
      lng:
        location && location.coords && location.coords.longitude
          ? location.coords.longitude
          : 0,
      ip: data.ip,
      city: data.city,
      region: data.region,
      country: data.country_name,
      provider: data.org,
      createdAt: new Date().toISOString(),
    }

    try {
      const r = (await API.graphql({
        query: mutations.createLog,
        variables: { input },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as any
      return r.data.createLog
    } catch (error) {
      console.log(error)
    }
  }

  return {
    setLogUser,
    listLogByTag,
    listLogByUserByTag,
    listLogByUser,
    listLogBySource,
  }
}
