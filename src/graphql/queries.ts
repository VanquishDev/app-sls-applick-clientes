/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
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
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
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
`;
export const getProfile = /* GraphQL */ `
  query GetProfile($userID: ID!) {
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
`;
export const listFolders = /* GraphQL */ `
  query ListFolders(
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
`;
export const getVaccinationCard = /* GraphQL */ `
  query GetVaccinationCard($id: ID!) {
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
`;
export const listVaccinationCardItems = /* GraphQL */ `
  query ListVaccinationCardItems(
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
        campaignID
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
`;
export const getUserByEmail = /* GraphQL */ `
  query GetUserByEmail(
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
`;
export const getUserByPhone = /* GraphQL */ `
  query GetUserByPhone(
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
`;
export const getProfileByDoc = /* GraphQL */ `
  query GetProfileByDoc(
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
`;
export const listProfilesByCompany = /* GraphQL */ `
  query ListProfilesByCompany(
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
`;
export const listAddressesByUser = /* GraphQL */ `
  query ListAddressesByUser(
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
`;
export const listPayMethodsByUser = /* GraphQL */ `
  query ListPayMethodsByUser(
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
`;
export const listLogsByUserCreatedAt = /* GraphQL */ `
  query ListLogsByUserCreatedAt(
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
`;
export const listLogsByUserTagCreatedAt = /* GraphQL */ `
  query ListLogsByUserTagCreatedAt(
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
`;
export const listLogsByTagCreatedAt = /* GraphQL */ `
  query ListLogsByTagCreatedAt(
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
`;
export const listLogsBySourceCreatedAt = /* GraphQL */ `
  query ListLogsBySourceCreatedAt(
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
`;
export const listFoldersByName = /* GraphQL */ `
  query ListFoldersByName(
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
`;
export const listVaccinationCardsByUser = /* GraphQL */ `
  query ListVaccinationCardsByUser(
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
`;
export const listVaccinationCardsItemsByVaccinationCard = /* GraphQL */ `
  query ListVaccinationCardsItemsByVaccinationCard(
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
        campaignID
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
`;
export const listVaccinationCardsItemsByOrder = /* GraphQL */ `
  query ListVaccinationCardsItemsByOrder(
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
        campaignID
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
`;
export const listVaccinationCardsItemsByCampaign = /* GraphQL */ `
  query ListVaccinationCardsItemsByCampaign(
    $campaignID: ID!
    $applicationDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelVaccinationCardItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVaccinationCardsItemsByCampaign(
      campaignID: $campaignID
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
        campaignID
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
`;
export const listVaccinationCardsItemsByCompany = /* GraphQL */ `
  query ListVaccinationCardsItemsByCompany(
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
        campaignID
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
`;
export const listVaccinationCardsItemsByProfissional = /* GraphQL */ `
  query ListVaccinationCardsItemsByProfissional(
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
        campaignID
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
`;
export const listVaccinationCardsItemsByStatus = /* GraphQL */ `
  query ListVaccinationCardsItemsByStatus(
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
        campaignID
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
`;
export const getTempAux = /* GraphQL */ `
  query GetTempAux($id: ID!) {
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
`;
export const listUsersByGroup = /* GraphQL */ `
  query ListUsersByGroup(
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
`;
export const listGroupsByUser = /* GraphQL */ `
  query ListGroupsByUser(
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
`;
export const getConfig = /* GraphQL */ `
  query GetConfig($id: ID!) {
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
`;
export const listInvites = /* GraphQL */ `
  query ListInvites(
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
`;
export const listInvitesByEmail = /* GraphQL */ `
  query ListInvitesByEmail(
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
`;
export const listInvitesByPhone = /* GraphQL */ `
  query ListInvitesByPhone(
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
`;
export const listInvitesByStatusCreatedAt = /* GraphQL */ `
  query ListInvitesByStatusCreatedAt(
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
`;
export const getCoupon = /* GraphQL */ `
  query GetCoupon($id: ID!) {
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
`;
export const listCoupons = /* GraphQL */ `
  query ListCoupons(
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
`;
export const listCouponsByCode = /* GraphQL */ `
  query ListCouponsByCode(
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
`;
export const listProductsByCoupon = /* GraphQL */ `
  query ListProductsByCoupon(
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
`;
export const listUsedByCoupon = /* GraphQL */ `
  query ListUsedByCoupon(
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
`;
export const listUsedByCouponUser = /* GraphQL */ `
  query ListUsedByCouponUser(
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
`;
export const listMidias = /* GraphQL */ `
  query ListMidias(
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
`;
export const listMidiaByKey = /* GraphQL */ `
  query ListMidiaByKey(
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
`;
export const getRelation = /* GraphQL */ `
  query GetRelation($id: ID!) {
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
`;
export const listRelations = /* GraphQL */ `
  query ListRelations(
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
`;
export const listRelationsByTypeUpdatedAt = /* GraphQL */ `
  query ListRelationsByTypeUpdatedAt(
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
`;
export const listRelationsByTypeModeUpdatedAt = /* GraphQL */ `
  query ListRelationsByTypeModeUpdatedAt(
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
`;
export const listRelationsByTypeStatusUpdatedAt = /* GraphQL */ `
  query ListRelationsByTypeStatusUpdatedAt(
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
`;
export const listRelationsByStatusUpdatedAt = /* GraphQL */ `
  query ListRelationsByStatusUpdatedAt(
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
`;
export const listRelationsLink = /* GraphQL */ `
  query ListRelationsLink(
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
`;
export const listRelationsLinkByUserTypeNotifyUpdatedAt = /* GraphQL */ `
  query ListRelationsLinkByUserTypeNotifyUpdatedAt(
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
`;
export const listRelationsLinkByRelationUser = /* GraphQL */ `
  query ListRelationsLinkByRelationUser(
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
`;
export const listMessagesByRelationCreatedAt = /* GraphQL */ `
  query ListMessagesByRelationCreatedAt(
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
`;
export const listMessagesByUserCreatedAt = /* GraphQL */ `
  query ListMessagesByUserCreatedAt(
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
`;
export const listMessagesByStatusCreatedAt = /* GraphQL */ `
  query ListMessagesByStatusCreatedAt(
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
`;
export const getMenu = /* GraphQL */ `
  query GetMenu($id: ID!) {
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
`;
export const listMenus = /* GraphQL */ `
  query ListMenus(
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
`;
export const listMenusByAliasOrder = /* GraphQL */ `
  query ListMenusByAliasOrder(
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
`;
export const getPage = /* GraphQL */ `
  query GetPage($id: ID!) {
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
`;
export const listPages = /* GraphQL */ `
  query ListPages(
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
`;
export const listPagesByAliasCreatedAt = /* GraphQL */ `
  query ListPagesByAliasCreatedAt(
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
`;
export const listPagesByStatusMenuOrder = /* GraphQL */ `
  query ListPagesByStatusMenuOrder(
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
`;
export const listPagesByMenuOrder = /* GraphQL */ `
  query ListPagesByMenuOrder(
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
`;
export const getBlock = /* GraphQL */ `
  query GetBlock($id: ID!) {
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
`;
export const listBlocks = /* GraphQL */ `
  query ListBlocks(
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
`;
export const listBlocksByPage = /* GraphQL */ `
  query ListBlocksByPage(
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
`;
export const listBlocksByPageOrder = /* GraphQL */ `
  query ListBlocksByPageOrder(
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
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
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
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
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
`;
export const listCategoryByAliasOrder = /* GraphQL */ `
  query ListCategoryByAliasOrder(
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
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
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
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
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
`;
export const listProductsByAliasCreatedAt = /* GraphQL */ `
  query ListProductsByAliasCreatedAt(
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
`;
export const listProductsByStatusCategoryName = /* GraphQL */ `
  query ListProductsByStatusCategoryName(
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
`;
export const listProductsByCategorySubCategoryName = /* GraphQL */ `
  query ListProductsByCategorySubCategoryName(
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
`;
export const listKitItemsByProduct = /* GraphQL */ `
  query ListKitItemsByProduct(
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
`;
export const getOption = /* GraphQL */ `
  query GetOption($id: ID!) {
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
`;
export const listOptions = /* GraphQL */ `
  query ListOptions(
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
`;
export const listOptionsByProduct = /* GraphQL */ `
  query ListOptionsByProduct(
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
`;
export const listCarts = /* GraphQL */ `
  query ListCarts(
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
        campaignToken
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listCartsByUser = /* GraphQL */ `
  query ListCartsByUser(
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
        campaignToken
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listOptionsByCart = /* GraphQL */ `
  query ListOptionsByCart(
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
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
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
      campaignID
      campaignName
      campaignOrientation
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
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
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
        campaignID
        campaignName
        campaignOrientation
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
`;
export const listOrdersByUserStatusCreatedAt = /* GraphQL */ `
  query ListOrdersByUserStatusCreatedAt(
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
        campaignID
        campaignName
        campaignOrientation
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
`;
export const listOrdersByUserCreatedAt = /* GraphQL */ `
  query ListOrdersByUserCreatedAt(
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
        campaignID
        campaignName
        campaignOrientation
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
`;
export const listOrdersByStatusCreatedAt = /* GraphQL */ `
  query ListOrdersByStatusCreatedAt(
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
        campaignID
        campaignName
        campaignOrientation
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
`;
export const listOrdersByCampaignCreatedAt = /* GraphQL */ `
  query ListOrdersByCampaignCreatedAt(
    $campaignID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrdersByCampaignCreatedAt(
      campaignID: $campaignID
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
        campaignID
        campaignName
        campaignOrientation
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
`;
export const listItemsByOrder = /* GraphQL */ `
  query ListItemsByOrder(
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
`;
export const listOptionsByOrderItem = /* GraphQL */ `
  query ListOptionsByOrderItem(
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
`;
export const listDeliveryOrders = /* GraphQL */ `
  query ListDeliveryOrders(
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
`;
export const listDeliveryByOrder = /* GraphQL */ `
  query ListDeliveryByOrder(
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
`;
export const listDeliveryByDateUser = /* GraphQL */ `
  query ListDeliveryByDateUser(
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
`;
export const listDeliveryByUserDate = /* GraphQL */ `
  query ListDeliveryByUserDate(
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
`;
export const listDeliveryByCompanyDate = /* GraphQL */ `
  query ListDeliveryByCompanyDate(
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
`;
export const listDeliveryByStatusDate = /* GraphQL */ `
  query ListDeliveryByStatusDate(
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
`;
export const listDeliveryMethodOrders = /* GraphQL */ `
  query ListDeliveryMethodOrders(
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
`;
export const getCampaign = /* GraphQL */ `
  query GetCampaign($id: ID!) {
    getCampaign(id: $id) {
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
      orientation
      orderMessage
      zipCodeCoverage
      search
      products {
        nextToken
        __typename
      }
      campaignUsed {
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
`;
export const listCampaigns = /* GraphQL */ `
  query ListCampaigns(
    $id: ID
    $filter: ModelCampaignFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCampaigns(
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
`;
export const listCampaignByCode = /* GraphQL */ `
  query ListCampaignByCode(
    $code: String!
    $sortDirection: ModelSortDirection
    $filter: ModelCampaignFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCampaignByCode(
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
`;
export const listUsedByCampaign = /* GraphQL */ `
  query ListUsedByCampaign(
    $campaignID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCampaignUsedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsedByCampaign(
      campaignID: $campaignID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        campaignID
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
`;
export const listUsedByCampaignUser = /* GraphQL */ `
  query ListUsedByCampaignUser(
    $campaignID: ID!
    $userID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCampaignUsedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsedByCampaignUser(
      campaignID: $campaignID
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        campaignID
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
`;
export const listProductsByCampaign = /* GraphQL */ `
  query ListProductsByCampaign(
    $campaignID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCampaignProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductsByCampaign(
      campaignID: $campaignID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        campaignID
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
`;
export const listCompaniesByCampaign = /* GraphQL */ `
  query ListCompaniesByCampaign(
    $campaignID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCampaignCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompaniesByCampaign(
      campaignID: $campaignID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        campaignID
        companyID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
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
`;
export const listCompanies = /* GraphQL */ `
  query ListCompanies(
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
`;
export const listCompanyByCNPJ = /* GraphQL */ `
  query ListCompanyByCNPJ(
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
`;
export const listCompanyByEnableRetail = /* GraphQL */ `
  query ListCompanyByEnableRetail(
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
`;
export const listAuthorizationList = /* GraphQL */ `
  query ListAuthorizationList(
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
        campaignCode
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
`;
export const listAuthorizationListsByCampaignCode = /* GraphQL */ `
  query ListAuthorizationListsByCampaignCode(
    $campaignCode: String!
    $sortDirection: ModelSortDirection
    $filter: ModelAuthorizationListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuthorizationListsByCampaignCode(
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
        campaignCode
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
`;
export const listAuthorizationListsByStatus = /* GraphQL */ `
  query ListAuthorizationListsByStatus(
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
        campaignCode
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
`;
export const listClosuresByAuthorizationList = /* GraphQL */ `
  query ListClosuresByAuthorizationList(
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
`;
export const listAuthorizationListMembers = /* GraphQL */ `
  query ListAuthorizationListMembers(
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
`;
export const listMembersByAuthorizationList = /* GraphQL */ `
  query ListMembersByAuthorizationList(
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
`;
export const listMembersByAuthorizationListKey = /* GraphQL */ `
  query ListMembersByAuthorizationListKey(
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
`;
export const listMembersByAuthorizationListCPF = /* GraphQL */ `
  query ListMembersByAuthorizationListCPF(
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
`;
export const listMembersByKey = /* GraphQL */ `
  query ListMembersByKey(
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
`;
export const listMembersByCPF = /* GraphQL */ `
  query ListMembersByCPF(
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
`;
export const listMembersVaccinationByAuthorizationList = /* GraphQL */ `
  query ListMembersVaccinationByAuthorizationList(
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
`;
export const listVaccinationsByAuthorizationListMember = /* GraphQL */ `
  query ListVaccinationsByAuthorizationListMember(
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
`;
export const listVaccinationsByProfissional = /* GraphQL */ `
  query ListVaccinationsByProfissional(
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
`;
export const getCounter = /* GraphQL */ `
  query GetCounter($id: String!) {
    getCounter(id: $id) {
      id
      qty
      createdAt
      updatedAt
      __typename
    }
  }
`;
