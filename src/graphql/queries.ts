/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    email
    phone
    status
    active
    avatar
    search
    createdAt
    profile {
      userID
      doc
      docType
      docProfessionType
      docProfession
      profession
      specialties
      subSpecialties
      bio
      gender
      birth
      notes
      urlUserName
      urlEnable
      allowViewEmail
      allowViewPhone
      allowCookiesPreference
      allowCookiesStatistic
      pix
      zipCodeCoverage
      schedulesSunday
      schedulesMonday
      schedulesTuesday
      schedulesWednesday
      schedulesThursday
      schedulesFriday
      schedulesSaturday
      regionsConfig
      regionSunday
      regionMonday
      regionTuesday
      regionWednesday
      regionThursday
      regionFriday
      regionSaturday
      customerPagarmeID
      companyID
      companyHomeCare
      companyCampaign
      companyAdmin
      createdAt
      updatedAt
      __typename
    }
    groups {
      nextToken
      __typename
    }
    logs {
      nextToken
      __typename
    }
    addresses {
      nextToken
      __typename
    }
    payMethods {
      nextToken
      __typename
    }
    relationsLink {
      nextToken
      __typename
    }
    carts {
      nextToken
      __typename
    }
    ordersByCreatedAt {
      nextToken
      __typename
    }
    ordersByStatusCreatedAt {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $id: ID
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listUsers(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      name
      email
      phone
      status
      active
      avatar
      search
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getProfile = /* GraphQL */ `query GetProfile($userID: ID!) {
  getProfile(userID: $userID) {
    userID
    user {
      id
      name
      email
      phone
      status
      active
      avatar
      search
      createdAt
      updatedAt
      __typename
    }
    doc
    docType
    docProfessionType
    docProfession
    profession
    specialties
    subSpecialties
    bio
    gender
    birth
    notes
    urlUserName
    urlEnable
    allowViewEmail
    allowViewPhone
    allowCookiesPreference
    allowCookiesStatistic
    pix
    zipCodeCoverage
    schedulesSunday
    schedulesMonday
    schedulesTuesday
    schedulesWednesday
    schedulesThursday
    schedulesFriday
    schedulesSaturday
    regionsConfig
    regionSunday
    regionMonday
    regionTuesday
    regionWednesday
    regionThursday
    regionFriday
    regionSaturday
    customerPagarmeID
    companyID
    company {
      id
      cnpj
      name
      openingHours
      phones
      street
      number
      complement
      zipcode
      neighborhood
      city
      state
      country
      search
      enableRetail
      schedulesSunday
      schedulesMonday
      schedulesTuesday
      schedulesWednesday
      schedulesThursday
      schedulesFriday
      schedulesSaturday
      status
      createdAt
      updatedAt
      __typename
    }
    companyHomeCare
    companyCampaign
    companyAdmin
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProfileQueryVariables,
  APITypes.GetProfileQuery
>;
export const listFolders = /* GraphQL */ `query ListFolders(
  $id: ID
  $filter: ModelFolderFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listFolders(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFoldersQueryVariables,
  APITypes.ListFoldersQuery
>;
export const getVaccinationCard = /* GraphQL */ `query GetVaccinationCard($id: ID!) {
  getVaccinationCard(id: $id) {
    id
    userID
    person
    doc
    birth
    relationship
    notes
    avatar
    isOwner
    vaccinationCardItem {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetVaccinationCardQueryVariables,
  APITypes.GetVaccinationCardQuery
>;
export const getUserByEmail = /* GraphQL */ `query GetUserByEmail(
  $email: AWSEmail!
  $sortDirection: ModelSortDirection
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  getUserByEmail(
    email: $email
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      email
      phone
      status
      active
      avatar
      search
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserByEmailQueryVariables,
  APITypes.GetUserByEmailQuery
>;
export const getUserByPhone = /* GraphQL */ `query GetUserByPhone(
  $phone: AWSPhone!
  $sortDirection: ModelSortDirection
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  getUserByPhone(
    phone: $phone
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      email
      phone
      status
      active
      avatar
      search
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserByPhoneQueryVariables,
  APITypes.GetUserByPhoneQuery
>;
export const getProfileByDoc = /* GraphQL */ `query GetProfileByDoc(
  $doc: String!
  $sortDirection: ModelSortDirection
  $filter: ModelProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  getProfileByDoc(
    doc: $doc
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      userID
      doc
      docType
      docProfessionType
      docProfession
      profession
      specialties
      subSpecialties
      bio
      gender
      birth
      notes
      urlUserName
      urlEnable
      allowViewEmail
      allowViewPhone
      allowCookiesPreference
      allowCookiesStatistic
      pix
      zipCodeCoverage
      schedulesSunday
      schedulesMonday
      schedulesTuesday
      schedulesWednesday
      schedulesThursday
      schedulesFriday
      schedulesSaturday
      regionsConfig
      regionSunday
      regionMonday
      regionTuesday
      regionWednesday
      regionThursday
      regionFriday
      regionSaturday
      customerPagarmeID
      companyID
      companyHomeCare
      companyCampaign
      companyAdmin
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProfileByDocQueryVariables,
  APITypes.GetProfileByDocQuery
>;
export const listProfilesByCompany = /* GraphQL */ `query ListProfilesByCompany(
  $companyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listProfilesByCompany(
    companyID: $companyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      userID
      doc
      docType
      docProfessionType
      docProfession
      profession
      specialties
      subSpecialties
      bio
      gender
      birth
      notes
      urlUserName
      urlEnable
      allowViewEmail
      allowViewPhone
      allowCookiesPreference
      allowCookiesStatistic
      pix
      zipCodeCoverage
      schedulesSunday
      schedulesMonday
      schedulesTuesday
      schedulesWednesday
      schedulesThursday
      schedulesFriday
      schedulesSaturday
      regionsConfig
      regionSunday
      regionMonday
      regionTuesday
      regionWednesday
      regionThursday
      regionFriday
      regionSaturday
      customerPagarmeID
      companyID
      companyHomeCare
      companyCampaign
      companyAdmin
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProfilesByCompanyQueryVariables,
  APITypes.ListProfilesByCompanyQuery
>;
export const listAddressesByUser = /* GraphQL */ `query ListAddressesByUser(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAddressFilterInput
  $limit: Int
  $nextToken: String
) {
  listAddressesByUser(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      name
      reference
      street
      number
      complement
      zipcode
      neighborhood
      city
      state
      country
      addressPagarmeID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAddressesByUserQueryVariables,
  APITypes.ListAddressesByUserQuery
>;
export const listPayMethodsByUser = /* GraphQL */ `query ListPayMethodsByUser(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPayMethodFilterInput
  $limit: Int
  $nextToken: String
) {
  listPayMethodsByUser(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      method
      number
      holderName
      holderDocument
      expMonth
      expYear
      cvv
      brand
      label
      cardPagarmeID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPayMethodsByUserQueryVariables,
  APITypes.ListPayMethodsByUserQuery
>;
export const listLogsByUserCreatedAt = /* GraphQL */ `query ListLogsByUserCreatedAt(
  $userID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelLogFilterInput
  $limit: Int
  $nextToken: String
) {
  listLogsByUserCreatedAt(
    userID: $userID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      tag
      source
      notes
      message
      page
      manufacturer
      model
      osName
      osVersion
      platform
      uuid
      ip
      city
      region
      country
      provider
      lat
      lng
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLogsByUserCreatedAtQueryVariables,
  APITypes.ListLogsByUserCreatedAtQuery
>;
export const listLogsByUserTagCreatedAt = /* GraphQL */ `query ListLogsByUserTagCreatedAt(
  $userID: ID!
  $tagCreatedAt: ModelLogLogsByUserTagCreatedAtCompositeKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelLogFilterInput
  $limit: Int
  $nextToken: String
) {
  listLogsByUserTagCreatedAt(
    userID: $userID
    tagCreatedAt: $tagCreatedAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      tag
      source
      notes
      message
      page
      manufacturer
      model
      osName
      osVersion
      platform
      uuid
      ip
      city
      region
      country
      provider
      lat
      lng
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLogsByUserTagCreatedAtQueryVariables,
  APITypes.ListLogsByUserTagCreatedAtQuery
>;
export const listLogsByTagCreatedAt = /* GraphQL */ `query ListLogsByTagCreatedAt(
  $tag: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelLogFilterInput
  $limit: Int
  $nextToken: String
) {
  listLogsByTagCreatedAt(
    tag: $tag
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      tag
      source
      notes
      message
      page
      manufacturer
      model
      osName
      osVersion
      platform
      uuid
      ip
      city
      region
      country
      provider
      lat
      lng
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLogsByTagCreatedAtQueryVariables,
  APITypes.ListLogsByTagCreatedAtQuery
>;
export const listLogsBySourceCreatedAt = /* GraphQL */ `query ListLogsBySourceCreatedAt(
  $source: LogSource!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelLogFilterInput
  $limit: Int
  $nextToken: String
) {
  listLogsBySourceCreatedAt(
    source: $source
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      tag
      source
      notes
      message
      page
      manufacturer
      model
      osName
      osVersion
      platform
      uuid
      ip
      city
      region
      country
      provider
      lat
      lng
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLogsBySourceCreatedAtQueryVariables,
  APITypes.ListLogsBySourceCreatedAtQuery
>;
export const listFoldersByName = /* GraphQL */ `query ListFoldersByName(
  $name: String!
  $sortDirection: ModelSortDirection
  $filter: ModelFolderFilterInput
  $limit: Int
  $nextToken: String
) {
  listFoldersByName(
    name: $name
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFoldersByNameQueryVariables,
  APITypes.ListFoldersByNameQuery
>;
export const listNotifyByUserCreatedAt = /* GraphQL */ `query ListNotifyByUserCreatedAt(
  $userID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelNotifyFilterInput
  $limit: Int
  $nextToken: String
) {
  listNotifyByUserCreatedAt(
    userID: $userID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      createdAt
      content
      link
      viewed
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListNotifyByUserCreatedAtQueryVariables,
  APITypes.ListNotifyByUserCreatedAtQuery
>;
export const listVaccinationCardsByUser = /* GraphQL */ `query ListVaccinationCardsByUser(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelVaccinationCardFilterInput
  $limit: Int
  $nextToken: String
) {
  listVaccinationCardsByUser(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      person
      doc
      birth
      relationship
      notes
      avatar
      isOwner
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListVaccinationCardsByUserQueryVariables,
  APITypes.ListVaccinationCardsByUserQuery
>;
export const getTempAux = /* GraphQL */ `query GetTempAux($id: ID!) {
  getTempAux(id: $id) {
    id
    name
    doc
    birth
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTempAuxQueryVariables,
  APITypes.GetTempAuxQuery
>;
export const listUsersByGroup = /* GraphQL */ `query ListUsersByGroup(
  $group: String!
  $userID: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelGroupUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsersByGroup(
    group: $group
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      group
      userID
      profileID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUsersByGroupQueryVariables,
  APITypes.ListUsersByGroupQuery
>;
export const listGroupsByUser = /* GraphQL */ `query ListGroupsByUser(
  $userID: ID!
  $group: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelGroupUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listGroupsByUser(
    userID: $userID
    group: $group
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      group
      userID
      profileID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGroupsByUserQueryVariables,
  APITypes.ListGroupsByUserQuery
>;
export const getConfig = /* GraphQL */ `query GetConfig($id: ID!) {
  getConfig(id: $id) {
    id
    validationMode
    googleAnalyticsID
    googleSiteVerification
    inviteSubject
    inviteMessage
    inviteSMS
    facebook
    twitter
    instagram
    infoFooter
    minValueOrder
    phoneOrders
    allowPayOnDelivery
    allowLocalPickup
    deliveryOnSunday
    deliveryOnMonday
    deliveryOnTuesday
    deliveryOnWednesday
    deliveryOnThursday
    deliveryOnFriday
    deliveryOnSaturday
    deliveryOffSunday
    deliveryOffMonday
    deliveryOffTuesday
    deliveryOffWednesday
    deliveryOffThursday
    deliveryOffFriday
    deliveryOffSaturday
    showNotesCart
    notesCart
    soundOnNewOrder
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetConfigQueryVariables, APITypes.GetConfigQuery>;
export const listInvites = /* GraphQL */ `query ListInvites(
  $id: ID
  $filter: ModelInviteFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listInvites(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      name
      description
      email
      phone
      groups
      status
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListInvitesQueryVariables,
  APITypes.ListInvitesQuery
>;
export const listInvitesByEmail = /* GraphQL */ `query ListInvitesByEmail(
  $email: String!
  $sortDirection: ModelSortDirection
  $filter: ModelInviteFilterInput
  $limit: Int
  $nextToken: String
) {
  listInvitesByEmail(
    email: $email
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      email
      phone
      groups
      status
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListInvitesByEmailQueryVariables,
  APITypes.ListInvitesByEmailQuery
>;
export const listInvitesByPhone = /* GraphQL */ `query ListInvitesByPhone(
  $phone: String!
  $sortDirection: ModelSortDirection
  $filter: ModelInviteFilterInput
  $limit: Int
  $nextToken: String
) {
  listInvitesByPhone(
    phone: $phone
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      email
      phone
      groups
      status
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListInvitesByPhoneQueryVariables,
  APITypes.ListInvitesByPhoneQuery
>;
export const listInvitesByStatusCreatedAt = /* GraphQL */ `query ListInvitesByStatusCreatedAt(
  $status: InviteStatus!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelInviteFilterInput
  $limit: Int
  $nextToken: String
) {
  listInvitesByStatusCreatedAt(
    status: $status
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      email
      phone
      groups
      status
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListInvitesByStatusCreatedAtQueryVariables,
  APITypes.ListInvitesByStatusCreatedAtQuery
>;
export const getCoupon = /* GraphQL */ `query GetCoupon($id: ID!) {
  getCoupon(id: $id) {
    id
    name
    description
    code
    start
    expiration
    discountPercentage
    discountValue
    qtyLimit
    qtyUsed
    qtyProduct
    qtyProductUsed
    search
    products {
      nextToken
      __typename
    }
    couponUsed {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetCouponQueryVariables, APITypes.GetCouponQuery>;
export const listCoupons = /* GraphQL */ `query ListCoupons(
  $id: ID
  $filter: ModelCouponFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCoupons(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      name
      description
      code
      start
      expiration
      discountPercentage
      discountValue
      qtyLimit
      qtyUsed
      qtyProduct
      qtyProductUsed
      search
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCouponsQueryVariables,
  APITypes.ListCouponsQuery
>;
export const listCouponsByCode = /* GraphQL */ `query ListCouponsByCode(
  $code: String!
  $sortDirection: ModelSortDirection
  $filter: ModelCouponFilterInput
  $limit: Int
  $nextToken: String
) {
  listCouponsByCode(
    code: $code
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      code
      start
      expiration
      discountPercentage
      discountValue
      qtyLimit
      qtyUsed
      qtyProduct
      qtyProductUsed
      search
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCouponsByCodeQueryVariables,
  APITypes.ListCouponsByCodeQuery
>;
export const listProductsByCoupon = /* GraphQL */ `query ListProductsByCoupon(
  $couponID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCouponProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listProductsByCoupon(
    couponID: $couponID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      couponID
      productID
      price
      limit
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProductsByCouponQueryVariables,
  APITypes.ListProductsByCouponQuery
>;
export const listUsedByCoupon = /* GraphQL */ `query ListUsedByCoupon(
  $couponID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCouponUsedFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsedByCoupon(
    couponID: $couponID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      couponID
      userID
      qty
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUsedByCouponQueryVariables,
  APITypes.ListUsedByCouponQuery
>;
export const listUsedByCouponUser = /* GraphQL */ `query ListUsedByCouponUser(
  $couponID: ID!
  $userID: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelCouponUsedFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsedByCouponUser(
    couponID: $couponID
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      couponID
      userID
      qty
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUsedByCouponUserQueryVariables,
  APITypes.ListUsedByCouponUserQuery
>;
export const listMidias = /* GraphQL */ `query ListMidias(
  $id: ID
  $filter: ModelMidiaFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listMidias(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      key
      type
      title
      subTitle
      description
      identifyText
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMidiasQueryVariables,
  APITypes.ListMidiasQuery
>;
export const listMidiaByKey = /* GraphQL */ `query ListMidiaByKey(
  $key: String!
  $sortDirection: ModelSortDirection
  $filter: ModelMidiaFilterInput
  $limit: Int
  $nextToken: String
) {
  listMidiaByKey(
    key: $key
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      key
      type
      title
      subTitle
      description
      identifyText
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMidiaByKeyQueryVariables,
  APITypes.ListMidiaByKeyQuery
>;
export const getRelation = /* GraphQL */ `query GetRelation($id: ID!) {
  getRelation(id: $id) {
    id
    type
    mode
    name
    description
    avatar
    reference
    members
    admins
    updatedAt
    status
    search
    relationsLink {
      nextToken
      __typename
    }
    messages {
      nextToken
      __typename
    }
    createdAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRelationQueryVariables,
  APITypes.GetRelationQuery
>;
export const listRelations = /* GraphQL */ `query ListRelations(
  $id: ID
  $filter: ModelRelationFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listRelations(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      type
      mode
      name
      description
      avatar
      reference
      members
      admins
      updatedAt
      status
      search
      createdAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRelationsQueryVariables,
  APITypes.ListRelationsQuery
>;
export const listRelationsByTypeUpdatedAt = /* GraphQL */ `query ListRelationsByTypeUpdatedAt(
  $type: RelationTypes!
  $updatedAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelRelationFilterInput
  $limit: Int
  $nextToken: String
) {
  listRelationsByTypeUpdatedAt(
    type: $type
    updatedAt: $updatedAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      type
      mode
      name
      description
      avatar
      reference
      members
      admins
      updatedAt
      status
      search
      createdAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRelationsByTypeUpdatedAtQueryVariables,
  APITypes.ListRelationsByTypeUpdatedAtQuery
>;
export const listRelationsByTypeModeUpdatedAt = /* GraphQL */ `query ListRelationsByTypeModeUpdatedAt(
  $type: RelationTypes!
  $modeUpdatedAt: ModelRelationRelationsByTypeModeUpdatedAtCompositeKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelRelationFilterInput
  $limit: Int
  $nextToken: String
) {
  listRelationsByTypeModeUpdatedAt(
    type: $type
    modeUpdatedAt: $modeUpdatedAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      type
      mode
      name
      description
      avatar
      reference
      members
      admins
      updatedAt
      status
      search
      createdAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRelationsByTypeModeUpdatedAtQueryVariables,
  APITypes.ListRelationsByTypeModeUpdatedAtQuery
>;
export const listRelationsByTypeStatusUpdatedAt = /* GraphQL */ `query ListRelationsByTypeStatusUpdatedAt(
  $type: RelationTypes!
  $statusUpdatedAt: ModelRelationRelationsByTypeStatusUpdatedAtCompositeKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelRelationFilterInput
  $limit: Int
  $nextToken: String
) {
  listRelationsByTypeStatusUpdatedAt(
    type: $type
    statusUpdatedAt: $statusUpdatedAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      type
      mode
      name
      description
      avatar
      reference
      members
      admins
      updatedAt
      status
      search
      createdAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRelationsByTypeStatusUpdatedAtQueryVariables,
  APITypes.ListRelationsByTypeStatusUpdatedAtQuery
>;
export const listRelationsByStatusUpdatedAt = /* GraphQL */ `query ListRelationsByStatusUpdatedAt(
  $status: RelationStatus!
  $updatedAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelRelationFilterInput
  $limit: Int
  $nextToken: String
) {
  listRelationsByStatusUpdatedAt(
    status: $status
    updatedAt: $updatedAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      type
      mode
      name
      description
      avatar
      reference
      members
      admins
      updatedAt
      status
      search
      createdAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRelationsByStatusUpdatedAtQueryVariables,
  APITypes.ListRelationsByStatusUpdatedAtQuery
>;
export const listRelationsLink = /* GraphQL */ `query ListRelationsLink(
  $id: ID
  $filter: ModelRelationLinkFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listRelationsLink(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      userID
      relationID
      type
      notify
      updatedAt
      search
      percentage
      createdAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRelationsLinkQueryVariables,
  APITypes.ListRelationsLinkQuery
>;
export const listRelationsLinkByUserTypeNotifyUpdatedAt = /* GraphQL */ `query ListRelationsLinkByUserTypeNotifyUpdatedAt(
  $userID: ID!
  $typeNotifyUpdatedAt: ModelRelationLinkRelationsLinkByUserTypeNotifyUpdatedAtCompositeKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelRelationLinkFilterInput
  $limit: Int
  $nextToken: String
) {
  listRelationsLinkByUserTypeNotifyUpdatedAt(
    userID: $userID
    typeNotifyUpdatedAt: $typeNotifyUpdatedAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      relationID
      type
      notify
      updatedAt
      search
      percentage
      createdAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRelationsLinkByUserTypeNotifyUpdatedAtQueryVariables,
  APITypes.ListRelationsLinkByUserTypeNotifyUpdatedAtQuery
>;
export const listRelationsLinkByRelationUser = /* GraphQL */ `query ListRelationsLinkByRelationUser(
  $relationID: ID!
  $userID: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelRelationLinkFilterInput
  $limit: Int
  $nextToken: String
) {
  listRelationsLinkByRelationUser(
    relationID: $relationID
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      relationID
      type
      notify
      updatedAt
      search
      percentage
      createdAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRelationsLinkByRelationUserQueryVariables,
  APITypes.ListRelationsLinkByRelationUserQuery
>;
export const listMessagesByRelationCreatedAt = /* GraphQL */ `query ListMessagesByRelationCreatedAt(
  $relationID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessagesByRelationCreatedAt(
    relationID: $relationID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      relationID
      userID
      type
      content
      search
      identityId
      createdAt
      status
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMessagesByRelationCreatedAtQueryVariables,
  APITypes.ListMessagesByRelationCreatedAtQuery
>;
export const listMessagesByUserCreatedAt = /* GraphQL */ `query ListMessagesByUserCreatedAt(
  $userID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessagesByUserCreatedAt(
    userID: $userID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      relationID
      userID
      type
      content
      search
      identityId
      createdAt
      status
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMessagesByUserCreatedAtQueryVariables,
  APITypes.ListMessagesByUserCreatedAtQuery
>;
export const listMessagesByStatusCreatedAt = /* GraphQL */ `query ListMessagesByStatusCreatedAt(
  $status: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessagesByStatusCreatedAt(
    status: $status
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      relationID
      userID
      type
      content
      search
      identityId
      createdAt
      status
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMessagesByStatusCreatedAtQueryVariables,
  APITypes.ListMessagesByStatusCreatedAtQuery
>;
export const getMenu = /* GraphQL */ `query GetMenu($id: ID!) {
  getMenu(id: $id) {
    id
    alias
    order
    title
    description
    orderDesc
    thumbnail
    thumbnailSrc
    thumbnailCropper
    showDescriptionPage
    showThumbnailPage
    hide
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetMenuQueryVariables, APITypes.GetMenuQuery>;
export const listMenus = /* GraphQL */ `query ListMenus(
  $id: ID
  $filter: ModelMenuFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listMenus(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      alias
      order
      title
      description
      orderDesc
      thumbnail
      thumbnailSrc
      thumbnailCropper
      showDescriptionPage
      showThumbnailPage
      hide
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListMenusQueryVariables, APITypes.ListMenusQuery>;
export const listMenusByAliasOrder = /* GraphQL */ `query ListMenusByAliasOrder(
  $alias: String!
  $order: ModelIntKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelMenuFilterInput
  $limit: Int
  $nextToken: String
) {
  listMenusByAliasOrder(
    alias: $alias
    order: $order
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      alias
      order
      title
      description
      orderDesc
      thumbnail
      thumbnailSrc
      thumbnailCropper
      showDescriptionPage
      showThumbnailPage
      hide
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMenusByAliasOrderQueryVariables,
  APITypes.ListMenusByAliasOrderQuery
>;
export const getPage = /* GraphQL */ `query GetPage($id: ID!) {
  getPage(id: $id) {
    id
    alias
    status
    type
    menu
    menuProps {
      id
      alias
      order
      title
      description
      orderDesc
      thumbnail
      thumbnailSrc
      thumbnailCropper
      showDescriptionPage
      showThumbnailPage
      hide
      createdAt
      updatedAt
      __typename
    }
    order
    title
    titlePadX
    titlePadY
    description
    content
    contentPadX
    contentPadY
    tags
    thumbnail
    thumbnailSrc
    thumbnailCropper
    changeFreq
    priority
    optionTitle
    sideColumn
    sideColumnPadX
    sideColumnPadY
    sideColumnContent
    optionSideColumn
    hideFooter
    hideInMenu
    createdAt
    search
    blocks {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPageQueryVariables, APITypes.GetPageQuery>;
export const listPages = /* GraphQL */ `query ListPages(
  $id: ID
  $filter: ModelPageFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listPages(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      alias
      status
      type
      menu
      order
      title
      titlePadX
      titlePadY
      description
      content
      contentPadX
      contentPadY
      tags
      thumbnail
      thumbnailSrc
      thumbnailCropper
      changeFreq
      priority
      optionTitle
      sideColumn
      sideColumnPadX
      sideColumnPadY
      sideColumnContent
      optionSideColumn
      hideFooter
      hideInMenu
      createdAt
      search
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListPagesQueryVariables, APITypes.ListPagesQuery>;
export const listPagesByAliasCreatedAt = /* GraphQL */ `query ListPagesByAliasCreatedAt(
  $alias: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPageFilterInput
  $limit: Int
  $nextToken: String
) {
  listPagesByAliasCreatedAt(
    alias: $alias
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      alias
      status
      type
      menu
      order
      title
      titlePadX
      titlePadY
      description
      content
      contentPadX
      contentPadY
      tags
      thumbnail
      thumbnailSrc
      thumbnailCropper
      changeFreq
      priority
      optionTitle
      sideColumn
      sideColumnPadX
      sideColumnPadY
      sideColumnContent
      optionSideColumn
      hideFooter
      hideInMenu
      createdAt
      search
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPagesByAliasCreatedAtQueryVariables,
  APITypes.ListPagesByAliasCreatedAtQuery
>;
export const listPagesByStatusMenuOrder = /* GraphQL */ `query ListPagesByStatusMenuOrder(
  $status: PageStatus!
  $menuOrder: ModelPagePagesByStatusMenuOrderCompositeKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPageFilterInput
  $limit: Int
  $nextToken: String
) {
  listPagesByStatusMenuOrder(
    status: $status
    menuOrder: $menuOrder
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      alias
      status
      type
      menu
      order
      title
      titlePadX
      titlePadY
      description
      content
      contentPadX
      contentPadY
      tags
      thumbnail
      thumbnailSrc
      thumbnailCropper
      changeFreq
      priority
      optionTitle
      sideColumn
      sideColumnPadX
      sideColumnPadY
      sideColumnContent
      optionSideColumn
      hideFooter
      hideInMenu
      createdAt
      search
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPagesByStatusMenuOrderQueryVariables,
  APITypes.ListPagesByStatusMenuOrderQuery
>;
export const listPagesByMenuOrder = /* GraphQL */ `query ListPagesByMenuOrder(
  $menu: ID!
  $order: ModelIntKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPageFilterInput
  $limit: Int
  $nextToken: String
) {
  listPagesByMenuOrder(
    menu: $menu
    order: $order
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      alias
      status
      type
      menu
      order
      title
      titlePadX
      titlePadY
      description
      content
      contentPadX
      contentPadY
      tags
      thumbnail
      thumbnailSrc
      thumbnailCropper
      changeFreq
      priority
      optionTitle
      sideColumn
      sideColumnPadX
      sideColumnPadY
      sideColumnContent
      optionSideColumn
      hideFooter
      hideInMenu
      createdAt
      search
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPagesByMenuOrderQueryVariables,
  APITypes.ListPagesByMenuOrderQuery
>;
export const getBlock = /* GraphQL */ `query GetBlock($id: ID!) {
  getBlock(id: $id) {
    id
    pageID
    order
    component
    content
    config
    page {
      id
      alias
      status
      type
      menu
      order
      title
      titlePadX
      titlePadY
      description
      content
      contentPadX
      contentPadY
      tags
      thumbnail
      thumbnailSrc
      thumbnailCropper
      changeFreq
      priority
      optionTitle
      sideColumn
      sideColumnPadX
      sideColumnPadY
      sideColumnContent
      optionSideColumn
      hideFooter
      hideInMenu
      createdAt
      search
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetBlockQueryVariables, APITypes.GetBlockQuery>;
export const listBlocks = /* GraphQL */ `query ListBlocks(
  $id: ID
  $filter: ModelBlockFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listBlocks(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      pageID
      order
      component
      content
      config
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBlocksQueryVariables,
  APITypes.ListBlocksQuery
>;
export const listBlocksByPage = /* GraphQL */ `query ListBlocksByPage(
  $pageID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBlockFilterInput
  $limit: Int
  $nextToken: String
) {
  listBlocksByPage(
    pageID: $pageID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      pageID
      order
      component
      content
      config
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBlocksByPageQueryVariables,
  APITypes.ListBlocksByPageQuery
>;
export const listBlocksByPageOrder = /* GraphQL */ `query ListBlocksByPageOrder(
  $pageID: ID!
  $order: ModelIntKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelBlockFilterInput
  $limit: Int
  $nextToken: String
) {
  listBlocksByPageOrder(
    pageID: $pageID
    order: $order
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      pageID
      order
      component
      content
      config
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBlocksByPageOrderQueryVariables,
  APITypes.ListBlocksByPageOrderQuery
>;
export const getCategory = /* GraphQL */ `query GetCategory($id: ID!) {
  getCategory(id: $id) {
    id
    alias
    order
    title
    description
    thumbnail
    thumbnailSrc
    thumbnailCropper
    hide
    isSub
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCategoryQueryVariables,
  APITypes.GetCategoryQuery
>;
export const listCategories = /* GraphQL */ `query ListCategories(
  $id: ID
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCategories(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      alias
      order
      title
      description
      thumbnail
      thumbnailSrc
      thumbnailCropper
      hide
      isSub
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCategoriesQueryVariables,
  APITypes.ListCategoriesQuery
>;
export const listCategoryByAliasOrder = /* GraphQL */ `query ListCategoryByAliasOrder(
  $alias: String!
  $order: ModelIntKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listCategoryByAliasOrder(
    alias: $alias
    order: $order
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      alias
      order
      title
      description
      thumbnail
      thumbnailSrc
      thumbnailCropper
      hide
      isSub
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCategoryByAliasOrderQueryVariables,
  APITypes.ListCategoryByAliasOrderQuery
>;
export const listLaboratories = /* GraphQL */ `query ListLaboratories(
  $id: ID
  $filter: ModelLaboratoryFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listLaboratories(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLaboratoriesQueryVariables,
  APITypes.ListLaboratoriesQuery
>;
export const getProduct = /* GraphQL */ `query GetProduct($id: ID!) {
  getProduct(id: $id) {
    id
    alias
    status
    category
    categoryProps {
      id
      alias
      order
      title
      description
      thumbnail
      thumbnailSrc
      thumbnailCropper
      hide
      isSub
      createdAt
      updatedAt
      __typename
    }
    subCategory
    subCategoryProps {
      id
      alias
      order
      title
      description
      thumbnail
      thumbnailSrc
      thumbnailCropper
      hide
      isSub
      createdAt
      updatedAt
      __typename
    }
    laboratory
    code
    name
    type
    description
    manufacturer
    contentTitle
    contentTitle2
    contentTitle3
    content
    content2
    content3
    tags
    changeFreq
    priority
    price_of
    price
    qty
    stockControl
    applicationTime
    applicationTimeChild
    photo1
    photo2
    photo3
    photo4
    photo5
    thumbnail
    thumbnailSrc
    thumbnailCropper
    titlePadX
    titlePadY
    contentPadX
    contentPadY
    optionTitle
    sideColumn
    sideColumnPadX
    sideColumnPadY
    sideColumnContent
    optionSideColumn
    hideFooter
    hideInMenu
    createdAt
    search
    hideInSearch
    options {
      nextToken
      __typename
    }
    kitItems {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProductQueryVariables,
  APITypes.GetProductQuery
>;
export const listProducts = /* GraphQL */ `query ListProducts(
  $id: ID
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listProducts(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      alias
      status
      category
      subCategory
      laboratory
      code
      name
      type
      description
      manufacturer
      contentTitle
      contentTitle2
      contentTitle3
      content
      content2
      content3
      tags
      changeFreq
      priority
      price_of
      price
      qty
      stockControl
      applicationTime
      applicationTimeChild
      photo1
      photo2
      photo3
      photo4
      photo5
      thumbnail
      thumbnailSrc
      thumbnailCropper
      titlePadX
      titlePadY
      contentPadX
      contentPadY
      optionTitle
      sideColumn
      sideColumnPadX
      sideColumnPadY
      sideColumnContent
      optionSideColumn
      hideFooter
      hideInMenu
      createdAt
      search
      hideInSearch
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProductsQueryVariables,
  APITypes.ListProductsQuery
>;
export const listProductsByAliasCreatedAt = /* GraphQL */ `query ListProductsByAliasCreatedAt(
  $alias: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listProductsByAliasCreatedAt(
    alias: $alias
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      alias
      status
      category
      subCategory
      laboratory
      code
      name
      type
      description
      manufacturer
      contentTitle
      contentTitle2
      contentTitle3
      content
      content2
      content3
      tags
      changeFreq
      priority
      price_of
      price
      qty
      stockControl
      applicationTime
      applicationTimeChild
      photo1
      photo2
      photo3
      photo4
      photo5
      thumbnail
      thumbnailSrc
      thumbnailCropper
      titlePadX
      titlePadY
      contentPadX
      contentPadY
      optionTitle
      sideColumn
      sideColumnPadX
      sideColumnPadY
      sideColumnContent
      optionSideColumn
      hideFooter
      hideInMenu
      createdAt
      search
      hideInSearch
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProductsByAliasCreatedAtQueryVariables,
  APITypes.ListProductsByAliasCreatedAtQuery
>;
export const listProductsByStatusCategoryName = /* GraphQL */ `query ListProductsByStatusCategoryName(
  $status: PageStatus!
  $categoryName: ModelProductProductsByStatusCategoryNameCompositeKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listProductsByStatusCategoryName(
    status: $status
    categoryName: $categoryName
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      alias
      status
      category
      subCategory
      laboratory
      code
      name
      type
      description
      manufacturer
      contentTitle
      contentTitle2
      contentTitle3
      content
      content2
      content3
      tags
      changeFreq
      priority
      price_of
      price
      qty
      stockControl
      applicationTime
      applicationTimeChild
      photo1
      photo2
      photo3
      photo4
      photo5
      thumbnail
      thumbnailSrc
      thumbnailCropper
      titlePadX
      titlePadY
      contentPadX
      contentPadY
      optionTitle
      sideColumn
      sideColumnPadX
      sideColumnPadY
      sideColumnContent
      optionSideColumn
      hideFooter
      hideInMenu
      createdAt
      search
      hideInSearch
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProductsByStatusCategoryNameQueryVariables,
  APITypes.ListProductsByStatusCategoryNameQuery
>;
export const listProductsByCategorySubCategoryName = /* GraphQL */ `query ListProductsByCategorySubCategoryName(
  $category: ID!
  $subCategoryName: ModelProductProductsByCategorySubCategoryNameCompositeKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listProductsByCategorySubCategoryName(
    category: $category
    subCategoryName: $subCategoryName
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      alias
      status
      category
      subCategory
      laboratory
      code
      name
      type
      description
      manufacturer
      contentTitle
      contentTitle2
      contentTitle3
      content
      content2
      content3
      tags
      changeFreq
      priority
      price_of
      price
      qty
      stockControl
      applicationTime
      applicationTimeChild
      photo1
      photo2
      photo3
      photo4
      photo5
      thumbnail
      thumbnailSrc
      thumbnailCropper
      titlePadX
      titlePadY
      contentPadX
      contentPadY
      optionTitle
      sideColumn
      sideColumnPadX
      sideColumnPadY
      sideColumnContent
      optionSideColumn
      hideFooter
      hideInMenu
      createdAt
      search
      hideInSearch
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProductsByCategorySubCategoryNameQueryVariables,
  APITypes.ListProductsByCategorySubCategoryNameQuery
>;
export const listKitItemsByProduct = /* GraphQL */ `query ListKitItemsByProduct(
  $productID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelKitItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listKitItemsByProduct(
    productID: $productID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      productID
      kitItemProductID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListKitItemsByProductQueryVariables,
  APITypes.ListKitItemsByProductQuery
>;
export const getOption = /* GraphQL */ `query GetOption($id: ID!) {
  getOption(id: $id) {
    id
    productID
    name
    price
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetOptionQueryVariables, APITypes.GetOptionQuery>;
export const listOptions = /* GraphQL */ `query ListOptions(
  $id: ID
  $filter: ModelOptionFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listOptions(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      productID
      name
      price
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOptionsQueryVariables,
  APITypes.ListOptionsQuery
>;
export const listOptionsByProduct = /* GraphQL */ `query ListOptionsByProduct(
  $productID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelOptionFilterInput
  $limit: Int
  $nextToken: String
) {
  listOptionsByProduct(
    productID: $productID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      productID
      name
      price
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOptionsByProductQueryVariables,
  APITypes.ListOptionsByProductQuery
>;
export const listCarts = /* GraphQL */ `query ListCarts(
  $id: ID
  $filter: ModelCartFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCarts(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      userID
      productID
      qty
      changeName
      changeDescription
      changeQtyBlend
      changePriceAdjustment
      blendID
      adherenceToken
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListCartsQueryVariables, APITypes.ListCartsQuery>;
export const listCartsByUser = /* GraphQL */ `query ListCartsByUser(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCartFilterInput
  $limit: Int
  $nextToken: String
) {
  listCartsByUser(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      productID
      qty
      changeName
      changeDescription
      changeQtyBlend
      changePriceAdjustment
      blendID
      adherenceToken
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCartsByUserQueryVariables,
  APITypes.ListCartsByUserQuery
>;
export const listOptionsByCart = /* GraphQL */ `query ListOptionsByCart(
  $cartID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCartOptionFilterInput
  $limit: Int
  $nextToken: String
) {
  listOptionsByCart(
    cartID: $cartID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      cartID
      optionID
      createdAt
      updatedAt
      userID
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOptionsByCartQueryVariables,
  APITypes.ListOptionsByCartQuery
>;
export const getOrder = /* GraphQL */ `query GetOrder($id: ID!) {
  getOrder(id: $id) {
    id
    userID
    user {
      id
      name
      email
      phone
      status
      active
      avatar
      search
      createdAt
      updatedAt
      __typename
    }
    profile {
      userID
      doc
      docType
      docProfessionType
      docProfession
      profession
      specialties
      subSpecialties
      bio
      gender
      birth
      notes
      urlUserName
      urlEnable
      allowViewEmail
      allowViewPhone
      allowCookiesPreference
      allowCookiesStatistic
      pix
      zipCodeCoverage
      schedulesSunday
      schedulesMonday
      schedulesTuesday
      schedulesWednesday
      schedulesThursday
      schedulesFriday
      schedulesSaturday
      regionsConfig
      regionSunday
      regionMonday
      regionTuesday
      regionWednesday
      regionThursday
      regionFriday
      regionSaturday
      customerPagarmeID
      companyID
      companyHomeCare
      companyCampaign
      companyAdmin
      createdAt
      updatedAt
      __typename
    }
    status
    createdAt
    items {
      nextToken
      __typename
    }
    couponID
    couponName
    couponDiscount
    deliveryPrice
    total
    rating
    ratingNotes
    orderPagarmeID
    addressReference
    addressStreet
    addressNumber
    addressComplement
    addressZipcode
    addressNeighborhood
    addressCity
    addressState
    addressCountry
    notes
    adherenceID
    adherenceName
    adherenceOrientation
    clientCampaignID
    clientCampaignName
    companyID
    company {
      id
      cnpj
      name
      openingHours
      phones
      street
      number
      complement
      zipcode
      neighborhood
      city
      state
      country
      search
      enableRetail
      schedulesSunday
      schedulesMonday
      schedulesTuesday
      schedulesWednesday
      schedulesThursday
      schedulesFriday
      schedulesSaturday
      status
      createdAt
      updatedAt
      __typename
    }
    companyName
    companyPhone
    companyOpeningHours
    qrCodePix
    qrCodePixUrl
    payMethod
    installments
    homeCareOrRetail
    vaccinationCardItems {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetOrderQueryVariables, APITypes.GetOrderQuery>;
export const listOrders = /* GraphQL */ `query ListOrders(
  $id: ID
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listOrders(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      userID
      status
      createdAt
      couponID
      couponName
      couponDiscount
      deliveryPrice
      total
      rating
      ratingNotes
      orderPagarmeID
      addressReference
      addressStreet
      addressNumber
      addressComplement
      addressZipcode
      addressNeighborhood
      addressCity
      addressState
      addressCountry
      notes
      adherenceID
      adherenceName
      adherenceOrientation
      clientCampaignID
      clientCampaignName
      companyID
      companyName
      companyPhone
      companyOpeningHours
      qrCodePix
      qrCodePixUrl
      payMethod
      installments
      homeCareOrRetail
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrdersQueryVariables,
  APITypes.ListOrdersQuery
>;
export const listOrdersByUserStatusCreatedAt = /* GraphQL */ `query ListOrdersByUserStatusCreatedAt(
  $userID: ID!
  $statusCreatedAt: ModelOrderOrdersByUserStatusCreatedAtCompositeKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrdersByUserStatusCreatedAt(
    userID: $userID
    statusCreatedAt: $statusCreatedAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      status
      createdAt
      couponID
      couponName
      couponDiscount
      deliveryPrice
      total
      rating
      ratingNotes
      orderPagarmeID
      addressReference
      addressStreet
      addressNumber
      addressComplement
      addressZipcode
      addressNeighborhood
      addressCity
      addressState
      addressCountry
      notes
      adherenceID
      adherenceName
      adherenceOrientation
      clientCampaignID
      clientCampaignName
      companyID
      companyName
      companyPhone
      companyOpeningHours
      qrCodePix
      qrCodePixUrl
      payMethod
      installments
      homeCareOrRetail
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrdersByUserStatusCreatedAtQueryVariables,
  APITypes.ListOrdersByUserStatusCreatedAtQuery
>;
export const listOrdersByUserCreatedAt = /* GraphQL */ `query ListOrdersByUserCreatedAt(
  $userID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrdersByUserCreatedAt(
    userID: $userID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      status
      createdAt
      couponID
      couponName
      couponDiscount
      deliveryPrice
      total
      rating
      ratingNotes
      orderPagarmeID
      addressReference
      addressStreet
      addressNumber
      addressComplement
      addressZipcode
      addressNeighborhood
      addressCity
      addressState
      addressCountry
      notes
      adherenceID
      adherenceName
      adherenceOrientation
      clientCampaignID
      clientCampaignName
      companyID
      companyName
      companyPhone
      companyOpeningHours
      qrCodePix
      qrCodePixUrl
      payMethod
      installments
      homeCareOrRetail
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrdersByUserCreatedAtQueryVariables,
  APITypes.ListOrdersByUserCreatedAtQuery
>;
export const listOrdersByStatusCreatedAt = /* GraphQL */ `query ListOrdersByStatusCreatedAt(
  $status: OrderStatus!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrdersByStatusCreatedAt(
    status: $status
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      status
      createdAt
      couponID
      couponName
      couponDiscount
      deliveryPrice
      total
      rating
      ratingNotes
      orderPagarmeID
      addressReference
      addressStreet
      addressNumber
      addressComplement
      addressZipcode
      addressNeighborhood
      addressCity
      addressState
      addressCountry
      notes
      adherenceID
      adherenceName
      adherenceOrientation
      clientCampaignID
      clientCampaignName
      companyID
      companyName
      companyPhone
      companyOpeningHours
      qrCodePix
      qrCodePixUrl
      payMethod
      installments
      homeCareOrRetail
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrdersByStatusCreatedAtQueryVariables,
  APITypes.ListOrdersByStatusCreatedAtQuery
>;
export const listOrdersByAdherenceCreatedAt = /* GraphQL */ `query ListOrdersByAdherenceCreatedAt(
  $adherenceID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrdersByAdherenceCreatedAt(
    adherenceID: $adherenceID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      status
      createdAt
      couponID
      couponName
      couponDiscount
      deliveryPrice
      total
      rating
      ratingNotes
      orderPagarmeID
      addressReference
      addressStreet
      addressNumber
      addressComplement
      addressZipcode
      addressNeighborhood
      addressCity
      addressState
      addressCountry
      notes
      adherenceID
      adherenceName
      adherenceOrientation
      clientCampaignID
      clientCampaignName
      companyID
      companyName
      companyPhone
      companyOpeningHours
      qrCodePix
      qrCodePixUrl
      payMethod
      installments
      homeCareOrRetail
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrdersByAdherenceCreatedAtQueryVariables,
  APITypes.ListOrdersByAdherenceCreatedAtQuery
>;
export const listOrdersByClientCampaignCreatedAt = /* GraphQL */ `query ListOrdersByClientCampaignCreatedAt(
  $clientCampaignID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrdersByClientCampaignCreatedAt(
    clientCampaignID: $clientCampaignID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      status
      createdAt
      couponID
      couponName
      couponDiscount
      deliveryPrice
      total
      rating
      ratingNotes
      orderPagarmeID
      addressReference
      addressStreet
      addressNumber
      addressComplement
      addressZipcode
      addressNeighborhood
      addressCity
      addressState
      addressCountry
      notes
      adherenceID
      adherenceName
      adherenceOrientation
      clientCampaignID
      clientCampaignName
      companyID
      companyName
      companyPhone
      companyOpeningHours
      qrCodePix
      qrCodePixUrl
      payMethod
      installments
      homeCareOrRetail
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrdersByClientCampaignCreatedAtQueryVariables,
  APITypes.ListOrdersByClientCampaignCreatedAtQuery
>;
export const listItemsByOrder = /* GraphQL */ `query ListItemsByOrder(
  $orderID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelOrderItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listItemsByOrder(
    orderID: $orderID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      orderID
      productID
      qty
      code
      name
      description
      price
      photo1
      changeName
      changeDescription
      changeQtyBlend
      changePriceAdjustment
      blendID
      changeNameAdmin
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListItemsByOrderQueryVariables,
  APITypes.ListItemsByOrderQuery
>;
export const listOptionsByOrderItem = /* GraphQL */ `query ListOptionsByOrderItem(
  $orderItemID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelOrderItemOptionFilterInput
  $limit: Int
  $nextToken: String
) {
  listOptionsByOrderItem(
    orderItemID: $orderItemID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      orderItemID
      optionID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOptionsByOrderItemQueryVariables,
  APITypes.ListOptionsByOrderItemQuery
>;
export const listDeliveryOrders = /* GraphQL */ `query ListDeliveryOrders(
  $id: ID
  $filter: ModelDeliveryOrderFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listDeliveryOrders(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      orderID
      date
      deliveryUserID
      deliveryCompanyID
      status
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDeliveryOrdersQueryVariables,
  APITypes.ListDeliveryOrdersQuery
>;
export const listDeliveryByOrder = /* GraphQL */ `query ListDeliveryByOrder(
  $orderID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelDeliveryOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  listDeliveryByOrder(
    orderID: $orderID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      orderID
      date
      deliveryUserID
      deliveryCompanyID
      status
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDeliveryByOrderQueryVariables,
  APITypes.ListDeliveryByOrderQuery
>;
export const listDeliveryByDateUser = /* GraphQL */ `query ListDeliveryByDateUser(
  $date: AWSDateTime!
  $deliveryUserID: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelDeliveryOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  listDeliveryByDateUser(
    date: $date
    deliveryUserID: $deliveryUserID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      orderID
      date
      deliveryUserID
      deliveryCompanyID
      status
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDeliveryByDateUserQueryVariables,
  APITypes.ListDeliveryByDateUserQuery
>;
export const listDeliveryByUserDate = /* GraphQL */ `query ListDeliveryByUserDate(
  $deliveryUserID: ID!
  $date: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelDeliveryOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  listDeliveryByUserDate(
    deliveryUserID: $deliveryUserID
    date: $date
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      orderID
      date
      deliveryUserID
      deliveryCompanyID
      status
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDeliveryByUserDateQueryVariables,
  APITypes.ListDeliveryByUserDateQuery
>;
export const listDeliveryByCompanyDate = /* GraphQL */ `query ListDeliveryByCompanyDate(
  $deliveryCompanyID: ID!
  $date: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelDeliveryOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  listDeliveryByCompanyDate(
    deliveryCompanyID: $deliveryCompanyID
    date: $date
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      orderID
      date
      deliveryUserID
      deliveryCompanyID
      status
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDeliveryByCompanyDateQueryVariables,
  APITypes.ListDeliveryByCompanyDateQuery
>;
export const listDeliveryByStatusDate = /* GraphQL */ `query ListDeliveryByStatusDate(
  $status: DeliveryStatus!
  $date: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelDeliveryOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  listDeliveryByStatusDate(
    status: $status
    date: $date
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      orderID
      date
      deliveryUserID
      deliveryCompanyID
      status
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDeliveryByStatusDateQueryVariables,
  APITypes.ListDeliveryByStatusDateQuery
>;
export const listDeliveryMethodOrders = /* GraphQL */ `query ListDeliveryMethodOrders(
  $id: ID
  $filter: ModelDeliveryMethodOrderFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listDeliveryMethodOrders(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      name
      zipCode
      price
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDeliveryMethodOrdersQueryVariables,
  APITypes.ListDeliveryMethodOrdersQuery
>;
export const getAdherence = /* GraphQL */ `query GetAdherence($id: ID!) {
  getAdherence(id: $id) {
    id
    name
    description
    code
    campaignCode
    start
    expiration
    discountPercentage
    discountValue
    qtyLimit
    qtyUsed
    qtyProduct
    qtyProductUsed
    orientation
    orderMessage
    zipCodeCoverage
    search
    products {
      nextToken
      __typename
    }
    adherenceUsed {
      nextToken
      __typename
    }
    companies {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAdherenceQueryVariables,
  APITypes.GetAdherenceQuery
>;
export const listAdherences = /* GraphQL */ `query ListAdherences(
  $id: ID
  $filter: ModelAdherenceFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listAdherences(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      name
      description
      code
      campaignCode
      start
      expiration
      discountPercentage
      discountValue
      qtyLimit
      qtyUsed
      qtyProduct
      qtyProductUsed
      orientation
      orderMessage
      zipCodeCoverage
      search
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAdherencesQueryVariables,
  APITypes.ListAdherencesQuery
>;
export const listAdherenceByCode = /* GraphQL */ `query ListAdherenceByCode(
  $code: String!
  $sortDirection: ModelSortDirection
  $filter: ModelAdherenceFilterInput
  $limit: Int
  $nextToken: String
) {
  listAdherenceByCode(
    code: $code
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      code
      campaignCode
      start
      expiration
      discountPercentage
      discountValue
      qtyLimit
      qtyUsed
      qtyProduct
      qtyProductUsed
      orientation
      orderMessage
      zipCodeCoverage
      search
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAdherenceByCodeQueryVariables,
  APITypes.ListAdherenceByCodeQuery
>;
export const listAdherenceByCampaignCode = /* GraphQL */ `query ListAdherenceByCampaignCode(
  $campaignCode: String!
  $sortDirection: ModelSortDirection
  $filter: ModelAdherenceFilterInput
  $limit: Int
  $nextToken: String
) {
  listAdherenceByCampaignCode(
    campaignCode: $campaignCode
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      code
      campaignCode
      start
      expiration
      discountPercentage
      discountValue
      qtyLimit
      qtyUsed
      qtyProduct
      qtyProductUsed
      orientation
      orderMessage
      zipCodeCoverage
      search
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAdherenceByCampaignCodeQueryVariables,
  APITypes.ListAdherenceByCampaignCodeQuery
>;
export const listUsedByAdherence = /* GraphQL */ `query ListUsedByAdherence(
  $adherenceID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAdherenceUsedFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsedByAdherence(
    adherenceID: $adherenceID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      adherenceID
      userID
      qty
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUsedByAdherenceQueryVariables,
  APITypes.ListUsedByAdherenceQuery
>;
export const listUsedByAdherenceUser = /* GraphQL */ `query ListUsedByAdherenceUser(
  $adherenceID: ID!
  $userID: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelAdherenceUsedFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsedByAdherenceUser(
    adherenceID: $adherenceID
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      adherenceID
      userID
      qty
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUsedByAdherenceUserQueryVariables,
  APITypes.ListUsedByAdherenceUserQuery
>;
export const listProductsByAdherence = /* GraphQL */ `query ListProductsByAdherence(
  $adherenceID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAdherenceProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listProductsByAdherence(
    adherenceID: $adherenceID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      adherenceID
      productID
      price
      limit
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProductsByAdherenceQueryVariables,
  APITypes.ListProductsByAdherenceQuery
>;
export const listCompaniesByAdherence = /* GraphQL */ `query ListCompaniesByAdherence(
  $adherenceID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAdherenceCompanyFilterInput
  $limit: Int
  $nextToken: String
) {
  listCompaniesByAdherence(
    adherenceID: $adherenceID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      adherenceID
      companyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCompaniesByAdherenceQueryVariables,
  APITypes.ListCompaniesByAdherenceQuery
>;
export const listVaccinationCardItems = /* GraphQL */ `query ListVaccinationCardItems(
  $id: ID
  $filter: ModelVaccinationCardItemFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listVaccinationCardItems(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      vaccinationCardID
      orderID
      orderItemID
      adherenceID
      clientCampaignID
      companyID
      lote
      profissionalID
      profissionalName
      coren
      dueDate
      via
      applicationDate
      status
      createdAt
      updatedAt
      userID
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListVaccinationCardItemsQueryVariables,
  APITypes.ListVaccinationCardItemsQuery
>;
export const listVaccinationCardsItemsByVaccinationCard = /* GraphQL */ `query ListVaccinationCardsItemsByVaccinationCard(
  $vaccinationCardID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelVaccinationCardItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listVaccinationCardsItemsByVaccinationCard(
    vaccinationCardID: $vaccinationCardID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      vaccinationCardID
      orderID
      orderItemID
      adherenceID
      clientCampaignID
      companyID
      lote
      profissionalID
      profissionalName
      coren
      dueDate
      via
      applicationDate
      status
      createdAt
      updatedAt
      userID
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListVaccinationCardsItemsByVaccinationCardQueryVariables,
  APITypes.ListVaccinationCardsItemsByVaccinationCardQuery
>;
export const listVaccinationCardsItemsByOrder = /* GraphQL */ `query ListVaccinationCardsItemsByOrder(
  $orderID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelVaccinationCardItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listVaccinationCardsItemsByOrder(
    orderID: $orderID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      vaccinationCardID
      orderID
      orderItemID
      adherenceID
      clientCampaignID
      companyID
      lote
      profissionalID
      profissionalName
      coren
      dueDate
      via
      applicationDate
      status
      createdAt
      updatedAt
      userID
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListVaccinationCardsItemsByOrderQueryVariables,
  APITypes.ListVaccinationCardsItemsByOrderQuery
>;
export const listVaccinationCardsItemsByAdherence = /* GraphQL */ `query ListVaccinationCardsItemsByAdherence(
  $adherenceID: ID!
  $applicationDate: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelVaccinationCardItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listVaccinationCardsItemsByAdherence(
    adherenceID: $adherenceID
    applicationDate: $applicationDate
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      vaccinationCardID
      orderID
      orderItemID
      adherenceID
      clientCampaignID
      companyID
      lote
      profissionalID
      profissionalName
      coren
      dueDate
      via
      applicationDate
      status
      createdAt
      updatedAt
      userID
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListVaccinationCardsItemsByAdherenceQueryVariables,
  APITypes.ListVaccinationCardsItemsByAdherenceQuery
>;
export const listVaccinationCardsItemsByClientCampaign = /* GraphQL */ `query ListVaccinationCardsItemsByClientCampaign(
  $clientCampaignID: ID!
  $applicationDate: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelVaccinationCardItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listVaccinationCardsItemsByClientCampaign(
    clientCampaignID: $clientCampaignID
    applicationDate: $applicationDate
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      vaccinationCardID
      orderID
      orderItemID
      adherenceID
      clientCampaignID
      companyID
      lote
      profissionalID
      profissionalName
      coren
      dueDate
      via
      applicationDate
      status
      createdAt
      updatedAt
      userID
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListVaccinationCardsItemsByClientCampaignQueryVariables,
  APITypes.ListVaccinationCardsItemsByClientCampaignQuery
>;
export const listVaccinationCardsItemsByCompany = /* GraphQL */ `query ListVaccinationCardsItemsByCompany(
  $companyID: ID!
  $applicationDate: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelVaccinationCardItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listVaccinationCardsItemsByCompany(
    companyID: $companyID
    applicationDate: $applicationDate
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      vaccinationCardID
      orderID
      orderItemID
      adherenceID
      clientCampaignID
      companyID
      lote
      profissionalID
      profissionalName
      coren
      dueDate
      via
      applicationDate
      status
      createdAt
      updatedAt
      userID
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListVaccinationCardsItemsByCompanyQueryVariables,
  APITypes.ListVaccinationCardsItemsByCompanyQuery
>;
export const listVaccinationCardsItemsByProfissional = /* GraphQL */ `query ListVaccinationCardsItemsByProfissional(
  $profissionalID: ID!
  $applicationDate: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelVaccinationCardItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listVaccinationCardsItemsByProfissional(
    profissionalID: $profissionalID
    applicationDate: $applicationDate
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      vaccinationCardID
      orderID
      orderItemID
      adherenceID
      clientCampaignID
      companyID
      lote
      profissionalID
      profissionalName
      coren
      dueDate
      via
      applicationDate
      status
      createdAt
      updatedAt
      userID
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListVaccinationCardsItemsByProfissionalQueryVariables,
  APITypes.ListVaccinationCardsItemsByProfissionalQuery
>;
export const listVaccinationCardsItemsByStatus = /* GraphQL */ `query ListVaccinationCardsItemsByStatus(
  $status: String!
  $applicationDate: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelVaccinationCardItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listVaccinationCardsItemsByStatus(
    status: $status
    applicationDate: $applicationDate
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      vaccinationCardID
      orderID
      orderItemID
      adherenceID
      clientCampaignID
      companyID
      lote
      profissionalID
      profissionalName
      coren
      dueDate
      via
      applicationDate
      status
      createdAt
      updatedAt
      userID
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListVaccinationCardsItemsByStatusQueryVariables,
  APITypes.ListVaccinationCardsItemsByStatusQuery
>;
export const getCompany = /* GraphQL */ `query GetCompany($id: ID!) {
  getCompany(id: $id) {
    id
    cnpj
    name
    openingHours
    phones
    street
    number
    complement
    zipcode
    neighborhood
    city
    state
    country
    search
    enableRetail
    schedulesSunday
    schedulesMonday
    schedulesTuesday
    schedulesWednesday
    schedulesThursday
    schedulesFriday
    schedulesSaturday
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCompanyQueryVariables,
  APITypes.GetCompanyQuery
>;
export const listCompanies = /* GraphQL */ `query ListCompanies(
  $id: ID
  $filter: ModelCompanyFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCompanies(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      cnpj
      name
      openingHours
      phones
      street
      number
      complement
      zipcode
      neighborhood
      city
      state
      country
      search
      enableRetail
      schedulesSunday
      schedulesMonday
      schedulesTuesday
      schedulesWednesday
      schedulesThursday
      schedulesFriday
      schedulesSaturday
      status
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCompaniesQueryVariables,
  APITypes.ListCompaniesQuery
>;
export const listCompanyByCNPJ = /* GraphQL */ `query ListCompanyByCNPJ(
  $cnpj: String!
  $sortDirection: ModelSortDirection
  $filter: ModelCompanyFilterInput
  $limit: Int
  $nextToken: String
) {
  listCompanyByCNPJ(
    cnpj: $cnpj
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      cnpj
      name
      openingHours
      phones
      street
      number
      complement
      zipcode
      neighborhood
      city
      state
      country
      search
      enableRetail
      schedulesSunday
      schedulesMonday
      schedulesTuesday
      schedulesWednesday
      schedulesThursday
      schedulesFriday
      schedulesSaturday
      status
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCompanyByCNPJQueryVariables,
  APITypes.ListCompanyByCNPJQuery
>;
export const listCompanyByEnableRetail = /* GraphQL */ `query ListCompanyByEnableRetail(
  $enableRetail: String!
  $sortDirection: ModelSortDirection
  $filter: ModelCompanyFilterInput
  $limit: Int
  $nextToken: String
) {
  listCompanyByEnableRetail(
    enableRetail: $enableRetail
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      cnpj
      name
      openingHours
      phones
      street
      number
      complement
      zipcode
      neighborhood
      city
      state
      country
      search
      enableRetail
      schedulesSunday
      schedulesMonday
      schedulesTuesday
      schedulesWednesday
      schedulesThursday
      schedulesFriday
      schedulesSaturday
      status
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCompanyByEnableRetailQueryVariables,
  APITypes.ListCompanyByEnableRetailQuery
>;
export const getCounter = /* GraphQL */ `query GetCounter($id: String!) {
  getCounter(id: $id) {
    id
    qty
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCounterQueryVariables,
  APITypes.GetCounterQuery
>;
export const getClient = /* GraphQL */ `query GetClient($id: ID!) {
  getClient(id: $id) {
    id
    name
    notes
    group
    indication
    origin
    status
    search
    logo
    logoSrc
    logoCropper
    totalUnits
    unitsServed
    unitsExpected
    firstOSDate
    lastOSDate
    scheduleRouted
    scheduleConfirmed
    schedulePending
    totalEligibles
    totalVaccinations
    code
    contactName
    contactEmail
    contactPhone
    units {
      nextToken
      __typename
    }
    eligibles {
      nextToken
      __typename
    }
    campaigns {
      nextToken
      __typename
    }
    oss {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetClientQueryVariables, APITypes.GetClientQuery>;
export const listClients = /* GraphQL */ `query ListClients(
  $id: ID
  $filter: ModelClientFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listClients(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      name
      notes
      group
      indication
      origin
      status
      search
      logo
      logoSrc
      logoCropper
      totalUnits
      unitsServed
      unitsExpected
      firstOSDate
      lastOSDate
      scheduleRouted
      scheduleConfirmed
      schedulePending
      totalEligibles
      totalVaccinations
      code
      contactName
      contactEmail
      contactPhone
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListClientsQueryVariables,
  APITypes.ListClientsQuery
>;
export const listClientsByStatusName = /* GraphQL */ `query ListClientsByStatusName(
  $status: ClientStatus!
  $name: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelClientFilterInput
  $limit: Int
  $nextToken: String
) {
  listClientsByStatusName(
    status: $status
    name: $name
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      notes
      group
      indication
      origin
      status
      search
      logo
      logoSrc
      logoCropper
      totalUnits
      unitsServed
      unitsExpected
      firstOSDate
      lastOSDate
      scheduleRouted
      scheduleConfirmed
      schedulePending
      totalEligibles
      totalVaccinations
      code
      contactName
      contactEmail
      contactPhone
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListClientsByStatusNameQueryVariables,
  APITypes.ListClientsByStatusNameQuery
>;
export const listClientUserByUser = /* GraphQL */ `query ListClientUserByUser(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelClientUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listClientUserByUser(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      clientID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListClientUserByUserQueryVariables,
  APITypes.ListClientUserByUserQuery
>;
export const listClientUserByClient = /* GraphQL */ `query ListClientUserByClient(
  $clientID: ID!
  $userID: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelClientUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listClientUserByClient(
    clientID: $clientID
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      clientID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListClientUserByClientQueryVariables,
  APITypes.ListClientUserByClientQuery
>;
export const listUnitsByClient = /* GraphQL */ `query ListUnitsByClient(
  $clientID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelClientUnitFilterInput
  $limit: Int
  $nextToken: String
) {
  listUnitsByClient(
    clientID: $clientID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      clientID
      cnpj
      name
      fullName
      street
      number
      complement
      zipcode
      neighborhood
      city
      state
      country
      billingStreet
      billingNumber
      billingComplement
      billingZipcode
      billingNeighborhood
      billingCity
      billingState
      billingCountry
      notes
      search
      contactName
      contactEmail
      contactPhone
      totalEligibles
      totalCollaborators
      code
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUnitsByClientQueryVariables,
  APITypes.ListUnitsByClientQuery
>;
export const getClientCampaign = /* GraphQL */ `query GetClientCampaign($id: ID!) {
  getClientCampaign(id: $id) {
    id
    clientID
    client {
      id
      name
      notes
      group
      indication
      origin
      status
      search
      logo
      logoSrc
      logoCropper
      totalUnits
      unitsServed
      unitsExpected
      firstOSDate
      lastOSDate
      scheduleRouted
      scheduleConfirmed
      schedulePending
      totalEligibles
      totalVaccinations
      code
      contactName
      contactEmail
      contactPhone
      createdAt
      updatedAt
      __typename
    }
    name
    description
    clientNotes
    internalNotes
    totalUnits
    unitsServed
    unitsExpected
    firstOSDate
    lastOSDate
    scheduleRouted
    scheduleConfirmed
    scheduleFinished
    totalEligibles
    totalEligiblesDependent
    totalEligiblesThird
    totalVaccinations
    search
    responsible
    number
    contactName
    contactEmail
    contactPhone
    createdAt
    idx
    campaignCode
    status
    products {
      nextToken
      __typename
    }
    companies {
      nextToken
      __typename
    }
    units {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetClientCampaignQueryVariables,
  APITypes.GetClientCampaignQuery
>;
export const listClientCampaigns = /* GraphQL */ `query ListClientCampaigns(
  $id: ID
  $filter: ModelClientCampaignFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listClientCampaigns(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      clientID
      name
      description
      clientNotes
      internalNotes
      totalUnits
      unitsServed
      unitsExpected
      firstOSDate
      lastOSDate
      scheduleRouted
      scheduleConfirmed
      scheduleFinished
      totalEligibles
      totalEligiblesDependent
      totalEligiblesThird
      totalVaccinations
      search
      responsible
      number
      contactName
      contactEmail
      contactPhone
      createdAt
      idx
      campaignCode
      status
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListClientCampaignsQueryVariables,
  APITypes.ListClientCampaignsQuery
>;
export const listClientCampaignsByClient = /* GraphQL */ `query ListClientCampaignsByClient(
  $clientID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelClientCampaignFilterInput
  $limit: Int
  $nextToken: String
) {
  listClientCampaignsByClient(
    clientID: $clientID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      clientID
      name
      description
      clientNotes
      internalNotes
      totalUnits
      unitsServed
      unitsExpected
      firstOSDate
      lastOSDate
      scheduleRouted
      scheduleConfirmed
      scheduleFinished
      totalEligibles
      totalEligiblesDependent
      totalEligiblesThird
      totalVaccinations
      search
      responsible
      number
      contactName
      contactEmail
      contactPhone
      createdAt
      idx
      campaignCode
      status
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListClientCampaignsByClientQueryVariables,
  APITypes.ListClientCampaignsByClientQuery
>;
export const listClientCampaignsByClientStatus = /* GraphQL */ `query ListClientCampaignsByClientStatus(
  $clientID: ID!
  $status: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelClientCampaignFilterInput
  $limit: Int
  $nextToken: String
) {
  listClientCampaignsByClientStatus(
    clientID: $clientID
    status: $status
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      clientID
      name
      description
      clientNotes
      internalNotes
      totalUnits
      unitsServed
      unitsExpected
      firstOSDate
      lastOSDate
      scheduleRouted
      scheduleConfirmed
      scheduleFinished
      totalEligibles
      totalEligiblesDependent
      totalEligiblesThird
      totalVaccinations
      search
      responsible
      number
      contactName
      contactEmail
      contactPhone
      createdAt
      idx
      campaignCode
      status
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListClientCampaignsByClientStatusQueryVariables,
  APITypes.ListClientCampaignsByClientStatusQuery
>;
export const listClientCampaignsByIdxCreatedAt = /* GraphQL */ `query ListClientCampaignsByIdxCreatedAt(
  $idx: Int!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelClientCampaignFilterInput
  $limit: Int
  $nextToken: String
) {
  listClientCampaignsByIdxCreatedAt(
    idx: $idx
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      clientID
      name
      description
      clientNotes
      internalNotes
      totalUnits
      unitsServed
      unitsExpected
      firstOSDate
      lastOSDate
      scheduleRouted
      scheduleConfirmed
      scheduleFinished
      totalEligibles
      totalEligiblesDependent
      totalEligiblesThird
      totalVaccinations
      search
      responsible
      number
      contactName
      contactEmail
      contactPhone
      createdAt
      idx
      campaignCode
      status
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListClientCampaignsByIdxCreatedAtQueryVariables,
  APITypes.ListClientCampaignsByIdxCreatedAtQuery
>;
export const listClientCampaignsByCampaignCode = /* GraphQL */ `query ListClientCampaignsByCampaignCode(
  $campaignCode: String!
  $sortDirection: ModelSortDirection
  $filter: ModelClientCampaignFilterInput
  $limit: Int
  $nextToken: String
) {
  listClientCampaignsByCampaignCode(
    campaignCode: $campaignCode
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      clientID
      name
      description
      clientNotes
      internalNotes
      totalUnits
      unitsServed
      unitsExpected
      firstOSDate
      lastOSDate
      scheduleRouted
      scheduleConfirmed
      scheduleFinished
      totalEligibles
      totalEligiblesDependent
      totalEligiblesThird
      totalVaccinations
      search
      responsible
      number
      contactName
      contactEmail
      contactPhone
      createdAt
      idx
      campaignCode
      status
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListClientCampaignsByCampaignCodeQueryVariables,
  APITypes.ListClientCampaignsByCampaignCodeQuery
>;
export const listClientCampaignsByStatusCreatedAt = /* GraphQL */ `query ListClientCampaignsByStatusCreatedAt(
  $status: ClientCampaignStatus!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelClientCampaignFilterInput
  $limit: Int
  $nextToken: String
) {
  listClientCampaignsByStatusCreatedAt(
    status: $status
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      clientID
      name
      description
      clientNotes
      internalNotes
      totalUnits
      unitsServed
      unitsExpected
      firstOSDate
      lastOSDate
      scheduleRouted
      scheduleConfirmed
      scheduleFinished
      totalEligibles
      totalEligiblesDependent
      totalEligiblesThird
      totalVaccinations
      search
      responsible
      number
      contactName
      contactEmail
      contactPhone
      createdAt
      idx
      campaignCode
      status
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListClientCampaignsByStatusCreatedAtQueryVariables,
  APITypes.ListClientCampaignsByStatusCreatedAtQuery
>;
export const listProductsByClientCampaign = /* GraphQL */ `query ListProductsByClientCampaign(
  $clientCampaignID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelClientCampaignProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listProductsByClientCampaign(
    clientCampaignID: $clientCampaignID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      clientCampaignID
      productID
      price
      limit
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProductsByClientCampaignQueryVariables,
  APITypes.ListProductsByClientCampaignQuery
>;
export const listCompaniesByClientCampaign = /* GraphQL */ `query ListCompaniesByClientCampaign(
  $clientCampaignID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelClientCampaignCompanyFilterInput
  $limit: Int
  $nextToken: String
) {
  listCompaniesByClientCampaign(
    clientCampaignID: $clientCampaignID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      clientCampaignID
      companyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCompaniesByClientCampaignQueryVariables,
  APITypes.ListCompaniesByClientCampaignQuery
>;
export const listUnitsByClientCampaign = /* GraphQL */ `query ListUnitsByClientCampaign(
  $clientCampaignID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelClientCampaignUnitFilterInput
  $limit: Int
  $nextToken: String
) {
  listUnitsByClientCampaign(
    clientCampaignID: $clientCampaignID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      clientCampaignID
      unitID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUnitsByClientCampaignQueryVariables,
  APITypes.ListUnitsByClientCampaignQuery
>;
export const listEligiblesByClientCampaign = /* GraphQL */ `query ListEligiblesByClientCampaign(
  $clientCampaignID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelClientCampaignEligibleFilterInput
  $limit: Int
  $nextToken: String
) {
  listEligiblesByClientCampaign(
    clientCampaignID: $clientCampaignID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      clientCampaignID
      key
      name
      cpf
      rg
      birth
      notes
      search
      relationship
      isDependent
      cpfRelationship
      isThird
      thirdName
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEligiblesByClientCampaignQueryVariables,
  APITypes.ListEligiblesByClientCampaignQuery
>;
export const listEligiblesByClientCampaignKey = /* GraphQL */ `query ListEligiblesByClientCampaignKey(
  $clientCampaignID: ID!
  $key: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelClientCampaignEligibleFilterInput
  $limit: Int
  $nextToken: String
) {
  listEligiblesByClientCampaignKey(
    clientCampaignID: $clientCampaignID
    key: $key
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      clientCampaignID
      key
      name
      cpf
      rg
      birth
      notes
      search
      relationship
      isDependent
      cpfRelationship
      isThird
      thirdName
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEligiblesByClientCampaignKeyQueryVariables,
  APITypes.ListEligiblesByClientCampaignKeyQuery
>;
export const listEligiblesByClientCampaignCPF = /* GraphQL */ `query ListEligiblesByClientCampaignCPF(
  $clientCampaignID: ID!
  $cpf: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelClientCampaignEligibleFilterInput
  $limit: Int
  $nextToken: String
) {
  listEligiblesByClientCampaignCPF(
    clientCampaignID: $clientCampaignID
    cpf: $cpf
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      clientCampaignID
      key
      name
      cpf
      rg
      birth
      notes
      search
      relationship
      isDependent
      cpfRelationship
      isThird
      thirdName
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEligiblesByClientCampaignCPFQueryVariables,
  APITypes.ListEligiblesByClientCampaignCPFQuery
>;
export const listEligiblesByClientCampaignRG = /* GraphQL */ `query ListEligiblesByClientCampaignRG(
  $clientCampaignID: ID!
  $rg: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelClientCampaignEligibleFilterInput
  $limit: Int
  $nextToken: String
) {
  listEligiblesByClientCampaignRG(
    clientCampaignID: $clientCampaignID
    rg: $rg
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      clientCampaignID
      key
      name
      cpf
      rg
      birth
      notes
      search
      relationship
      isDependent
      cpfRelationship
      isThird
      thirdName
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEligiblesByClientCampaignRGQueryVariables,
  APITypes.ListEligiblesByClientCampaignRGQuery
>;
export const listVaccinationsByOS = /* GraphQL */ `query ListVaccinationsByOS(
  $osID: ID!
  $applicationDate: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelClientCampaignEligibleVaccinationFilterInput
  $limit: Int
  $nextToken: String
) {
  listVaccinationsByOS(
    osID: $osID
    applicationDate: $applicationDate
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      osID
      clientCampaignID
      clientCampaignEligibleID
      profissionalID
      profissionalDoc
      coren
      applicationDate
      reason
      search
      vaccination
      status
      localCity
      localState
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListVaccinationsByOSQueryVariables,
  APITypes.ListVaccinationsByOSQuery
>;
export const listVaccinationsByClientCampaign = /* GraphQL */ `query ListVaccinationsByClientCampaign(
  $clientCampaignID: ID!
  $applicationDate: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelClientCampaignEligibleVaccinationFilterInput
  $limit: Int
  $nextToken: String
) {
  listVaccinationsByClientCampaign(
    clientCampaignID: $clientCampaignID
    applicationDate: $applicationDate
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      osID
      clientCampaignID
      clientCampaignEligibleID
      profissionalID
      profissionalDoc
      coren
      applicationDate
      reason
      search
      vaccination
      status
      localCity
      localState
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListVaccinationsByClientCampaignQueryVariables,
  APITypes.ListVaccinationsByClientCampaignQuery
>;
export const listVaccinationsByClientCampaignEligible = /* GraphQL */ `query ListVaccinationsByClientCampaignEligible(
  $clientCampaignEligibleID: ID!
  $applicationDate: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelClientCampaignEligibleVaccinationFilterInput
  $limit: Int
  $nextToken: String
) {
  listVaccinationsByClientCampaignEligible(
    clientCampaignEligibleID: $clientCampaignEligibleID
    applicationDate: $applicationDate
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      osID
      clientCampaignID
      clientCampaignEligibleID
      profissionalID
      profissionalDoc
      coren
      applicationDate
      reason
      search
      vaccination
      status
      localCity
      localState
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListVaccinationsByClientCampaignEligibleQueryVariables,
  APITypes.ListVaccinationsByClientCampaignEligibleQuery
>;
export const listOSs = /* GraphQL */ `query ListOSs(
  $id: ID
  $filter: ModelOSFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listOSs(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      clientID
      clientUnitID
      clientCampaignID
      driverID
      professionals
      collaborators
      number
      start
      expiration
      orientation
      notes
      status
      allowOffList
      withList
      vaccination
      qtyApplication
      dateStarted
      dateFinished
      professionalStarted
      professionalFinished
      notesStarted
      notesFinished
      clientNameStarted
      clientNameFinished
      unitNameFinished
      contactNameFinished
      contactDocFinished
      contactCRMFinished
      contactEmailFinished
      stayVaccines
      stayQtd
      lat
      lng
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListOSsQueryVariables, APITypes.ListOSsQuery>;
export const listOSsByClient = /* GraphQL */ `query ListOSsByClient(
  $clientID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelOSFilterInput
  $limit: Int
  $nextToken: String
) {
  listOSsByClient(
    clientID: $clientID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      clientID
      clientUnitID
      clientCampaignID
      driverID
      professionals
      collaborators
      number
      start
      expiration
      orientation
      notes
      status
      allowOffList
      withList
      vaccination
      qtyApplication
      dateStarted
      dateFinished
      professionalStarted
      professionalFinished
      notesStarted
      notesFinished
      clientNameStarted
      clientNameFinished
      unitNameFinished
      contactNameFinished
      contactDocFinished
      contactCRMFinished
      contactEmailFinished
      stayVaccines
      stayQtd
      lat
      lng
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOSsByClientQueryVariables,
  APITypes.ListOSsByClientQuery
>;
export const listOSsByClientStart = /* GraphQL */ `query ListOSsByClientStart(
  $clientID: ID!
  $start: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelOSFilterInput
  $limit: Int
  $nextToken: String
) {
  listOSsByClientStart(
    clientID: $clientID
    start: $start
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      clientID
      clientUnitID
      clientCampaignID
      driverID
      professionals
      collaborators
      number
      start
      expiration
      orientation
      notes
      status
      allowOffList
      withList
      vaccination
      qtyApplication
      dateStarted
      dateFinished
      professionalStarted
      professionalFinished
      notesStarted
      notesFinished
      clientNameStarted
      clientNameFinished
      unitNameFinished
      contactNameFinished
      contactDocFinished
      contactCRMFinished
      contactEmailFinished
      stayVaccines
      stayQtd
      lat
      lng
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOSsByClientStartQueryVariables,
  APITypes.ListOSsByClientStartQuery
>;
export const listOSsByClientStatus = /* GraphQL */ `query ListOSsByClientStatus(
  $clientID: ID!
  $status: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelOSFilterInput
  $limit: Int
  $nextToken: String
) {
  listOSsByClientStatus(
    clientID: $clientID
    status: $status
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      clientID
      clientUnitID
      clientCampaignID
      driverID
      professionals
      collaborators
      number
      start
      expiration
      orientation
      notes
      status
      allowOffList
      withList
      vaccination
      qtyApplication
      dateStarted
      dateFinished
      professionalStarted
      professionalFinished
      notesStarted
      notesFinished
      clientNameStarted
      clientNameFinished
      unitNameFinished
      contactNameFinished
      contactDocFinished
      contactCRMFinished
      contactEmailFinished
      stayVaccines
      stayQtd
      lat
      lng
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOSsByClientStatusQueryVariables,
  APITypes.ListOSsByClientStatusQuery
>;
export const listOSsByClientUnit = /* GraphQL */ `query ListOSsByClientUnit(
  $clientUnitID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelOSFilterInput
  $limit: Int
  $nextToken: String
) {
  listOSsByClientUnit(
    clientUnitID: $clientUnitID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      clientID
      clientUnitID
      clientCampaignID
      driverID
      professionals
      collaborators
      number
      start
      expiration
      orientation
      notes
      status
      allowOffList
      withList
      vaccination
      qtyApplication
      dateStarted
      dateFinished
      professionalStarted
      professionalFinished
      notesStarted
      notesFinished
      clientNameStarted
      clientNameFinished
      unitNameFinished
      contactNameFinished
      contactDocFinished
      contactCRMFinished
      contactEmailFinished
      stayVaccines
      stayQtd
      lat
      lng
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOSsByClientUnitQueryVariables,
  APITypes.ListOSsByClientUnitQuery
>;
export const listOSsByClientCampaign = /* GraphQL */ `query ListOSsByClientCampaign(
  $clientCampaignID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelOSFilterInput
  $limit: Int
  $nextToken: String
) {
  listOSsByClientCampaign(
    clientCampaignID: $clientCampaignID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      clientID
      clientUnitID
      clientCampaignID
      driverID
      professionals
      collaborators
      number
      start
      expiration
      orientation
      notes
      status
      allowOffList
      withList
      vaccination
      qtyApplication
      dateStarted
      dateFinished
      professionalStarted
      professionalFinished
      notesStarted
      notesFinished
      clientNameStarted
      clientNameFinished
      unitNameFinished
      contactNameFinished
      contactDocFinished
      contactCRMFinished
      contactEmailFinished
      stayVaccines
      stayQtd
      lat
      lng
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOSsByClientCampaignQueryVariables,
  APITypes.ListOSsByClientCampaignQuery
>;
export const listOSsByNumber = /* GraphQL */ `query ListOSsByNumber(
  $number: Int!
  $sortDirection: ModelSortDirection
  $filter: ModelOSFilterInput
  $limit: Int
  $nextToken: String
) {
  listOSsByNumber(
    number: $number
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      clientID
      clientUnitID
      clientCampaignID
      driverID
      professionals
      collaborators
      number
      start
      expiration
      orientation
      notes
      status
      allowOffList
      withList
      vaccination
      qtyApplication
      dateStarted
      dateFinished
      professionalStarted
      professionalFinished
      notesStarted
      notesFinished
      clientNameStarted
      clientNameFinished
      unitNameFinished
      contactNameFinished
      contactDocFinished
      contactCRMFinished
      contactEmailFinished
      stayVaccines
      stayQtd
      lat
      lng
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOSsByNumberQueryVariables,
  APITypes.ListOSsByNumberQuery
>;
export const listOSsByStatusNumber = /* GraphQL */ `query ListOSsByStatusNumber(
  $status: OSStatus!
  $number: ModelIntKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelOSFilterInput
  $limit: Int
  $nextToken: String
) {
  listOSsByStatusNumber(
    status: $status
    number: $number
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      clientID
      clientUnitID
      clientCampaignID
      driverID
      professionals
      collaborators
      number
      start
      expiration
      orientation
      notes
      status
      allowOffList
      withList
      vaccination
      qtyApplication
      dateStarted
      dateFinished
      professionalStarted
      professionalFinished
      notesStarted
      notesFinished
      clientNameStarted
      clientNameFinished
      unitNameFinished
      contactNameFinished
      contactDocFinished
      contactCRMFinished
      contactEmailFinished
      stayVaccines
      stayQtd
      lat
      lng
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOSsByStatusNumberQueryVariables,
  APITypes.ListOSsByStatusNumberQuery
>;
export const listEligiblesVaccinationByOS = /* GraphQL */ `query ListEligiblesVaccinationByOS(
  $osID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEligibleVaccinationFilterInput
  $limit: Int
  $nextToken: String
) {
  listEligiblesVaccinationByOS(
    osID: $osID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      osID
      clientEligibleID
      clientID
      profissionalID
      profissionalDoc
      coren
      applicationDate
      reason
      search
      vaccination
      status
      localCity
      localState
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEligiblesVaccinationByOSQueryVariables,
  APITypes.ListEligiblesVaccinationByOSQuery
>;
export const listEligiblesVaccinationByClientEligible = /* GraphQL */ `query ListEligiblesVaccinationByClientEligible(
  $clientEligibleID: ID!
  $applicationDate: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEligibleVaccinationFilterInput
  $limit: Int
  $nextToken: String
) {
  listEligiblesVaccinationByClientEligible(
    clientEligibleID: $clientEligibleID
    applicationDate: $applicationDate
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      osID
      clientEligibleID
      clientID
      profissionalID
      profissionalDoc
      coren
      applicationDate
      reason
      search
      vaccination
      status
      localCity
      localState
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEligiblesVaccinationByClientEligibleQueryVariables,
  APITypes.ListEligiblesVaccinationByClientEligibleQuery
>;
export const listEligiblesVaccinationByClientDate = /* GraphQL */ `query ListEligiblesVaccinationByClientDate(
  $clientID: ID!
  $applicationDate: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEligibleVaccinationFilterInput
  $limit: Int
  $nextToken: String
) {
  listEligiblesVaccinationByClientDate(
    clientID: $clientID
    applicationDate: $applicationDate
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      osID
      clientEligibleID
      clientID
      profissionalID
      profissionalDoc
      coren
      applicationDate
      reason
      search
      vaccination
      status
      localCity
      localState
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEligiblesVaccinationByClientDateQueryVariables,
  APITypes.ListEligiblesVaccinationByClientDateQuery
>;
export const listEligiblesByClient = /* GraphQL */ `query ListEligiblesByClient(
  $clientID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelClientEligibleFilterInput
  $limit: Int
  $nextToken: String
) {
  listEligiblesByClient(
    clientID: $clientID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      clientID
      key
      name
      cpf
      rg
      birth
      notes
      search
      relationship
      isDependent
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEligiblesByClientQueryVariables,
  APITypes.ListEligiblesByClientQuery
>;
export const listEligiblesByClientKey = /* GraphQL */ `query ListEligiblesByClientKey(
  $clientID: ID!
  $key: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelClientEligibleFilterInput
  $limit: Int
  $nextToken: String
) {
  listEligiblesByClientKey(
    clientID: $clientID
    key: $key
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      clientID
      key
      name
      cpf
      rg
      birth
      notes
      search
      relationship
      isDependent
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEligiblesByClientKeyQueryVariables,
  APITypes.ListEligiblesByClientKeyQuery
>;
export const listEligiblesByClientCPF = /* GraphQL */ `query ListEligiblesByClientCPF(
  $clientID: ID!
  $cpf: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelClientEligibleFilterInput
  $limit: Int
  $nextToken: String
) {
  listEligiblesByClientCPF(
    clientID: $clientID
    cpf: $cpf
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      clientID
      key
      name
      cpf
      rg
      birth
      notes
      search
      relationship
      isDependent
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEligiblesByClientCPFQueryVariables,
  APITypes.ListEligiblesByClientCPFQuery
>;
export const listEligiblesByClientRG = /* GraphQL */ `query ListEligiblesByClientRG(
  $clientID: ID!
  $rg: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelClientEligibleFilterInput
  $limit: Int
  $nextToken: String
) {
  listEligiblesByClientRG(
    clientID: $clientID
    rg: $rg
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      clientID
      key
      name
      cpf
      rg
      birth
      notes
      search
      relationship
      isDependent
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEligiblesByClientRGQueryVariables,
  APITypes.ListEligiblesByClientRGQuery
>;
export const listAuthorizationList = /* GraphQL */ `query ListAuthorizationList(
  $id: ID
  $filter: ModelAuthorizationListFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listAuthorizationList(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      name
      description
      start
      expiration
      orientation
      search
      qtyApplication
      qtyReturned
      contactNameFinished
      contactPhoneFinished
      contactEmailFinished
      notesFinished
      professionalFinished
      withList
      adherenceCode
      OS
      status
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAuthorizationListQueryVariables,
  APITypes.ListAuthorizationListQuery
>;
export const listAuthorizationListsByAdherenceCode = /* GraphQL */ `query ListAuthorizationListsByAdherenceCode(
  $adherenceCode: String!
  $sortDirection: ModelSortDirection
  $filter: ModelAuthorizationListFilterInput
  $limit: Int
  $nextToken: String
) {
  listAuthorizationListsByAdherenceCode(
    adherenceCode: $adherenceCode
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      start
      expiration
      orientation
      search
      qtyApplication
      qtyReturned
      contactNameFinished
      contactPhoneFinished
      contactEmailFinished
      notesFinished
      professionalFinished
      withList
      adherenceCode
      OS
      status
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAuthorizationListsByAdherenceCodeQueryVariables,
  APITypes.ListAuthorizationListsByAdherenceCodeQuery
>;
export const listAuthorizationListsByStatus = /* GraphQL */ `query ListAuthorizationListsByStatus(
  $status: AuthorizationListStatus!
  $sortDirection: ModelSortDirection
  $filter: ModelAuthorizationListFilterInput
  $limit: Int
  $nextToken: String
) {
  listAuthorizationListsByStatus(
    status: $status
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      start
      expiration
      orientation
      search
      qtyApplication
      qtyReturned
      contactNameFinished
      contactPhoneFinished
      contactEmailFinished
      notesFinished
      professionalFinished
      withList
      adherenceCode
      OS
      status
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAuthorizationListsByStatusQueryVariables,
  APITypes.ListAuthorizationListsByStatusQuery
>;
export const listClosuresByAuthorizationList = /* GraphQL */ `query ListClosuresByAuthorizationList(
  $authorizationListID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelAuthorizationListClosureFilterInput
  $limit: Int
  $nextToken: String
) {
  listClosuresByAuthorizationList(
    authorizationListID: $authorizationListID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      authorizationListID
      contactName
      contactPhone
      contactEmail
      notes
      qtyApplication
      qtyReturned
      professionalID
      OS
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListClosuresByAuthorizationListQueryVariables,
  APITypes.ListClosuresByAuthorizationListQuery
>;
export const listAuthorizationListMembers = /* GraphQL */ `query ListAuthorizationListMembers(
  $id: ID
  $filter: ModelAuthorizationListMemberFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listAuthorizationListMembers(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      authorizationListID
      name
      key
      cpf
      birth
      search
      others
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAuthorizationListMembersQueryVariables,
  APITypes.ListAuthorizationListMembersQuery
>;
export const listMembersByAuthorizationList = /* GraphQL */ `query ListMembersByAuthorizationList(
  $authorizationListID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAuthorizationListMemberFilterInput
  $limit: Int
  $nextToken: String
) {
  listMembersByAuthorizationList(
    authorizationListID: $authorizationListID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      authorizationListID
      name
      key
      cpf
      birth
      search
      others
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMembersByAuthorizationListQueryVariables,
  APITypes.ListMembersByAuthorizationListQuery
>;
export const listMembersByAuthorizationListKey = /* GraphQL */ `query ListMembersByAuthorizationListKey(
  $authorizationListID: ID!
  $key: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelAuthorizationListMemberFilterInput
  $limit: Int
  $nextToken: String
) {
  listMembersByAuthorizationListKey(
    authorizationListID: $authorizationListID
    key: $key
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      authorizationListID
      name
      key
      cpf
      birth
      search
      others
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMembersByAuthorizationListKeyQueryVariables,
  APITypes.ListMembersByAuthorizationListKeyQuery
>;
export const listMembersByAuthorizationListCPF = /* GraphQL */ `query ListMembersByAuthorizationListCPF(
  $authorizationListID: ID!
  $cpf: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelAuthorizationListMemberFilterInput
  $limit: Int
  $nextToken: String
) {
  listMembersByAuthorizationListCPF(
    authorizationListID: $authorizationListID
    cpf: $cpf
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      authorizationListID
      name
      key
      cpf
      birth
      search
      others
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMembersByAuthorizationListCPFQueryVariables,
  APITypes.ListMembersByAuthorizationListCPFQuery
>;
export const listMembersByKey = /* GraphQL */ `query ListMembersByKey(
  $key: String!
  $sortDirection: ModelSortDirection
  $filter: ModelAuthorizationListMemberFilterInput
  $limit: Int
  $nextToken: String
) {
  listMembersByKey(
    key: $key
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      authorizationListID
      name
      key
      cpf
      birth
      search
      others
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMembersByKeyQueryVariables,
  APITypes.ListMembersByKeyQuery
>;
export const listMembersByCPF = /* GraphQL */ `query ListMembersByCPF(
  $cpf: String!
  $sortDirection: ModelSortDirection
  $filter: ModelAuthorizationListMemberFilterInput
  $limit: Int
  $nextToken: String
) {
  listMembersByCPF(
    cpf: $cpf
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      authorizationListID
      name
      key
      cpf
      birth
      search
      others
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMembersByCPFQueryVariables,
  APITypes.ListMembersByCPFQuery
>;
export const listMembersVaccinationByAuthorizationList = /* GraphQL */ `query ListMembersVaccinationByAuthorizationList(
  $authorizationListID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAuthorizationListMemberVaccinationFilterInput
  $limit: Int
  $nextToken: String
) {
  listMembersVaccinationByAuthorizationList(
    authorizationListID: $authorizationListID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      authorizationListID
      authorizationListMemberID
      profissionalID
      coren
      lote
      dueDate
      via
      OS
      applicationDate
      applicationTime
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMembersVaccinationByAuthorizationListQueryVariables,
  APITypes.ListMembersVaccinationByAuthorizationListQuery
>;
export const listVaccinationsByAuthorizationListMember = /* GraphQL */ `query ListVaccinationsByAuthorizationListMember(
  $authorizationListMemberID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAuthorizationListMemberVaccinationFilterInput
  $limit: Int
  $nextToken: String
) {
  listVaccinationsByAuthorizationListMember(
    authorizationListMemberID: $authorizationListMemberID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      authorizationListID
      authorizationListMemberID
      profissionalID
      coren
      lote
      dueDate
      via
      OS
      applicationDate
      applicationTime
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListVaccinationsByAuthorizationListMemberQueryVariables,
  APITypes.ListVaccinationsByAuthorizationListMemberQuery
>;
export const listVaccinationsByProfissional = /* GraphQL */ `query ListVaccinationsByProfissional(
  $profissionalID: ID!
  $applicationDate: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelAuthorizationListMemberVaccinationFilterInput
  $limit: Int
  $nextToken: String
) {
  listVaccinationsByProfissional(
    profissionalID: $profissionalID
    applicationDate: $applicationDate
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      authorizationListID
      authorizationListMemberID
      profissionalID
      coren
      lote
      dueDate
      via
      OS
      applicationDate
      applicationTime
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListVaccinationsByProfissionalQueryVariables,
  APITypes.ListVaccinationsByProfissionalQuery
>;
