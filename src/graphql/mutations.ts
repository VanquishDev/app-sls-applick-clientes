/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const adminDeleteUser = /* GraphQL */ `mutation AdminDeleteUser($id: String) {
  adminDeleteUser(id: $id)
}
` as GeneratedMutation<
  APITypes.AdminDeleteUserMutationVariables,
  APITypes.AdminDeleteUserMutation
>;
export const adminCreateUser = /* GraphQL */ `mutation AdminCreateUser(
  $name: String
  $email: String
  $phone: String
  $id: String
  $messageAction: String
  $passwordLength: Int
  $resendTempPass: Int
  $confirmSignUp: Int
) {
  adminCreateUser(
    name: $name
    email: $email
    phone: $phone
    id: $id
    messageAction: $messageAction
    passwordLength: $passwordLength
    resendTempPass: $resendTempPass
    confirmSignUp: $confirmSignUp
  )
}
` as GeneratedMutation<
  APITypes.AdminCreateUserMutationVariables,
  APITypes.AdminCreateUserMutation
>;
export const adminAddUserToGroup = /* GraphQL */ `mutation AdminAddUserToGroup($username: String, $groups: String) {
  adminAddUserToGroup(username: $username, groups: $groups)
}
` as GeneratedMutation<
  APITypes.AdminAddUserToGroupMutationVariables,
  APITypes.AdminAddUserToGroupMutation
>;
export const adminUpdateUserAttributes = /* GraphQL */ `mutation AdminUpdateUserAttributes($username: String, $attributes: String) {
  adminUpdateUserAttributes(username: $username, attributes: $attributes)
}
` as GeneratedMutation<
  APITypes.AdminUpdateUserAttributesMutationVariables,
  APITypes.AdminUpdateUserAttributesMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const updateProfile = /* GraphQL */ `mutation UpdateProfile(
  $input: UpdateProfileInput!
  $condition: ModelProfileConditionInput
) {
  updateProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProfileMutationVariables,
  APITypes.UpdateProfileMutation
>;
export const deleteProfile = /* GraphQL */ `mutation DeleteProfile(
  $input: DeleteProfileInput!
  $condition: ModelProfileConditionInput
) {
  deleteProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProfileMutationVariables,
  APITypes.DeleteProfileMutation
>;
export const createGroupUser = /* GraphQL */ `mutation CreateGroupUser(
  $input: CreateGroupUserInput!
  $condition: ModelGroupUserConditionInput
) {
  createGroupUser(input: $input, condition: $condition) {
    id
    group
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
    profileID
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateGroupUserMutationVariables,
  APITypes.CreateGroupUserMutation
>;
export const deleteGroupUser = /* GraphQL */ `mutation DeleteGroupUser(
  $input: DeleteGroupUserInput!
  $condition: ModelGroupUserConditionInput
) {
  deleteGroupUser(input: $input, condition: $condition) {
    id
    group
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
    profileID
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteGroupUserMutationVariables,
  APITypes.DeleteGroupUserMutation
>;
export const createAddress = /* GraphQL */ `mutation CreateAddress(
  $input: CreateAddressInput!
  $condition: ModelAddressConditionInput
) {
  createAddress(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.CreateAddressMutationVariables,
  APITypes.CreateAddressMutation
>;
export const updateAddress = /* GraphQL */ `mutation UpdateAddress(
  $input: UpdateAddressInput!
  $condition: ModelAddressConditionInput
) {
  updateAddress(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.UpdateAddressMutationVariables,
  APITypes.UpdateAddressMutation
>;
export const deleteAddress = /* GraphQL */ `mutation DeleteAddress(
  $input: DeleteAddressInput!
  $condition: ModelAddressConditionInput
) {
  deleteAddress(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.DeleteAddressMutationVariables,
  APITypes.DeleteAddressMutation
>;
export const createPayMethod = /* GraphQL */ `mutation CreatePayMethod(
  $input: CreatePayMethodInput!
  $condition: ModelPayMethodConditionInput
) {
  createPayMethod(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.CreatePayMethodMutationVariables,
  APITypes.CreatePayMethodMutation
>;
export const updatePayMethod = /* GraphQL */ `mutation UpdatePayMethod(
  $input: UpdatePayMethodInput!
  $condition: ModelPayMethodConditionInput
) {
  updatePayMethod(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.UpdatePayMethodMutationVariables,
  APITypes.UpdatePayMethodMutation
>;
export const deletePayMethod = /* GraphQL */ `mutation DeletePayMethod(
  $input: DeletePayMethodInput!
  $condition: ModelPayMethodConditionInput
) {
  deletePayMethod(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.DeletePayMethodMutationVariables,
  APITypes.DeletePayMethodMutation
>;
export const createLog = /* GraphQL */ `mutation CreateLog(
  $input: CreateLogInput!
  $condition: ModelLogConditionInput
) {
  createLog(input: $input, condition: $condition) {
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
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateLogMutationVariables,
  APITypes.CreateLogMutation
>;
export const createConfig = /* GraphQL */ `mutation CreateConfig(
  $input: CreateConfigInput!
  $condition: ModelConfigConditionInput
) {
  createConfig(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateConfigMutationVariables,
  APITypes.CreateConfigMutation
>;
export const updateConfig = /* GraphQL */ `mutation UpdateConfig(
  $input: UpdateConfigInput!
  $condition: ModelConfigConditionInput
) {
  updateConfig(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateConfigMutationVariables,
  APITypes.UpdateConfigMutation
>;
export const createInvite = /* GraphQL */ `mutation CreateInvite(
  $input: CreateInviteInput!
  $condition: ModelInviteConditionInput
) {
  createInvite(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.CreateInviteMutationVariables,
  APITypes.CreateInviteMutation
>;
export const deleteInvite = /* GraphQL */ `mutation DeleteInvite(
  $input: DeleteInviteInput!
  $condition: ModelInviteConditionInput
) {
  deleteInvite(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.DeleteInviteMutationVariables,
  APITypes.DeleteInviteMutation
>;
export const createCoupon = /* GraphQL */ `mutation CreateCoupon(
  $input: CreateCouponInput!
  $condition: ModelCouponConditionInput
) {
  createCoupon(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCouponMutationVariables,
  APITypes.CreateCouponMutation
>;
export const deleteCoupon = /* GraphQL */ `mutation DeleteCoupon(
  $input: DeleteCouponInput!
  $condition: ModelCouponConditionInput
) {
  deleteCoupon(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCouponMutationVariables,
  APITypes.DeleteCouponMutation
>;
export const createFolder = /* GraphQL */ `mutation CreateFolder(
  $input: CreateFolderInput!
  $condition: ModelFolderConditionInput
) {
  createFolder(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFolderMutationVariables,
  APITypes.CreateFolderMutation
>;
export const updateFolder = /* GraphQL */ `mutation UpdateFolder(
  $input: UpdateFolderInput!
  $condition: ModelFolderConditionInput
) {
  updateFolder(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFolderMutationVariables,
  APITypes.UpdateFolderMutation
>;
export const deleteFolder = /* GraphQL */ `mutation DeleteFolder(
  $input: DeleteFolderInput!
  $condition: ModelFolderConditionInput
) {
  deleteFolder(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFolderMutationVariables,
  APITypes.DeleteFolderMutation
>;
export const createMidia = /* GraphQL */ `mutation CreateMidia(
  $input: CreateMidiaInput!
  $condition: ModelMidiaConditionInput
) {
  createMidia(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.CreateMidiaMutationVariables,
  APITypes.CreateMidiaMutation
>;
export const updateMidia = /* GraphQL */ `mutation UpdateMidia(
  $input: UpdateMidiaInput!
  $condition: ModelMidiaConditionInput
) {
  updateMidia(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.UpdateMidiaMutationVariables,
  APITypes.UpdateMidiaMutation
>;
export const deleteMidia = /* GraphQL */ `mutation DeleteMidia(
  $input: DeleteMidiaInput!
  $condition: ModelMidiaConditionInput
) {
  deleteMidia(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.DeleteMidiaMutationVariables,
  APITypes.DeleteMidiaMutation
>;
export const createMenu = /* GraphQL */ `mutation CreateMenu(
  $input: CreateMenuInput!
  $condition: ModelMenuConditionInput
) {
  createMenu(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateMenuMutationVariables,
  APITypes.CreateMenuMutation
>;
export const updateMenu = /* GraphQL */ `mutation UpdateMenu(
  $input: UpdateMenuInput!
  $condition: ModelMenuConditionInput
) {
  updateMenu(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMenuMutationVariables,
  APITypes.UpdateMenuMutation
>;
export const deleteMenu = /* GraphQL */ `mutation DeleteMenu(
  $input: DeleteMenuInput!
  $condition: ModelMenuConditionInput
) {
  deleteMenu(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMenuMutationVariables,
  APITypes.DeleteMenuMutation
>;
export const updatePage = /* GraphQL */ `mutation UpdatePage(
  $input: UpdatePageInput!
  $condition: ModelPageConditionInput
) {
  updatePage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePageMutationVariables,
  APITypes.UpdatePageMutation
>;
export const deletePage = /* GraphQL */ `mutation DeletePage(
  $input: DeletePageInput!
  $condition: ModelPageConditionInput
) {
  deletePage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePageMutationVariables,
  APITypes.DeletePageMutation
>;
export const createBlock = /* GraphQL */ `mutation CreateBlock(
  $input: CreateBlockInput!
  $condition: ModelBlockConditionInput
) {
  createBlock(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBlockMutationVariables,
  APITypes.CreateBlockMutation
>;
export const updateBlock = /* GraphQL */ `mutation UpdateBlock(
  $input: UpdateBlockInput!
  $condition: ModelBlockConditionInput
) {
  updateBlock(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBlockMutationVariables,
  APITypes.UpdateBlockMutation
>;
export const deleteBlock = /* GraphQL */ `mutation DeleteBlock(
  $input: DeleteBlockInput!
  $condition: ModelBlockConditionInput
) {
  deleteBlock(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBlockMutationVariables,
  APITypes.DeleteBlockMutation
>;
export const createCategory = /* GraphQL */ `mutation CreateCategory(
  $input: CreateCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  createCategory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCategoryMutationVariables,
  APITypes.CreateCategoryMutation
>;
export const updateCategory = /* GraphQL */ `mutation UpdateCategory(
  $input: UpdateCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  updateCategory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCategoryMutationVariables,
  APITypes.UpdateCategoryMutation
>;
export const deleteCategory = /* GraphQL */ `mutation DeleteCategory(
  $input: DeleteCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  deleteCategory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCategoryMutationVariables,
  APITypes.DeleteCategoryMutation
>;
export const createLaboratory = /* GraphQL */ `mutation CreateLaboratory(
  $input: CreateLaboratoryInput!
  $condition: ModelLaboratoryConditionInput
) {
  createLaboratory(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateLaboratoryMutationVariables,
  APITypes.CreateLaboratoryMutation
>;
export const updateLaboratory = /* GraphQL */ `mutation UpdateLaboratory(
  $input: UpdateLaboratoryInput!
  $condition: ModelLaboratoryConditionInput
) {
  updateLaboratory(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateLaboratoryMutationVariables,
  APITypes.UpdateLaboratoryMutation
>;
export const deleteLaboratory = /* GraphQL */ `mutation DeleteLaboratory(
  $input: DeleteLaboratoryInput!
  $condition: ModelLaboratoryConditionInput
) {
  deleteLaboratory(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteLaboratoryMutationVariables,
  APITypes.DeleteLaboratoryMutation
>;
export const createProduct = /* GraphQL */ `mutation CreateProduct(
  $input: CreateProductInput!
  $condition: ModelProductConditionInput
) {
  createProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateProductMutationVariables,
  APITypes.CreateProductMutation
>;
export const updateProduct = /* GraphQL */ `mutation UpdateProduct(
  $input: UpdateProductInput!
  $condition: ModelProductConditionInput
) {
  updateProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProductMutationVariables,
  APITypes.UpdateProductMutation
>;
export const deleteProduct = /* GraphQL */ `mutation DeleteProduct(
  $input: DeleteProductInput!
  $condition: ModelProductConditionInput
) {
  deleteProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProductMutationVariables,
  APITypes.DeleteProductMutation
>;
export const createKitItem = /* GraphQL */ `mutation CreateKitItem(
  $input: CreateKitItemInput!
  $condition: ModelKitItemConditionInput
) {
  createKitItem(input: $input, condition: $condition) {
    id
    productID
    kitItemProductID
    product {
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateKitItemMutationVariables,
  APITypes.CreateKitItemMutation
>;
export const deleteKitItem = /* GraphQL */ `mutation DeleteKitItem(
  $input: DeleteKitItemInput!
  $condition: ModelKitItemConditionInput
) {
  deleteKitItem(input: $input, condition: $condition) {
    id
    productID
    kitItemProductID
    product {
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteKitItemMutationVariables,
  APITypes.DeleteKitItemMutation
>;
export const createOption = /* GraphQL */ `mutation CreateOption(
  $input: CreateOptionInput!
  $condition: ModelOptionConditionInput
) {
  createOption(input: $input, condition: $condition) {
    id
    productID
    name
    price
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateOptionMutationVariables,
  APITypes.CreateOptionMutation
>;
export const updateOption = /* GraphQL */ `mutation UpdateOption(
  $input: UpdateOptionInput!
  $condition: ModelOptionConditionInput
) {
  updateOption(input: $input, condition: $condition) {
    id
    productID
    name
    price
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateOptionMutationVariables,
  APITypes.UpdateOptionMutation
>;
export const deleteOption = /* GraphQL */ `mutation DeleteOption(
  $input: DeleteOptionInput!
  $condition: ModelOptionConditionInput
) {
  deleteOption(input: $input, condition: $condition) {
    id
    productID
    name
    price
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteOptionMutationVariables,
  APITypes.DeleteOptionMutation
>;
export const deleteCart = /* GraphQL */ `mutation DeleteCart(
  $input: DeleteCartInput!
  $condition: ModelCartConditionInput
) {
  deleteCart(input: $input, condition: $condition) {
    id
    userID
    productID
    product {
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
    options {
      nextToken
      __typename
    }
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
}
` as GeneratedMutation<
  APITypes.DeleteCartMutationVariables,
  APITypes.DeleteCartMutation
>;
export const deleteCartOption = /* GraphQL */ `mutation DeleteCartOption(
  $input: DeleteCartOptionInput!
  $condition: ModelCartOptionConditionInput
) {
  deleteCartOption(input: $input, condition: $condition) {
    id
    cartID
    optionID
    option {
      id
      productID
      name
      price
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    userID
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCartOptionMutationVariables,
  APITypes.DeleteCartOptionMutation
>;
export const deleteOrder = /* GraphQL */ `mutation DeleteOrder(
  $input: DeleteOrderInput!
  $condition: ModelOrderConditionInput
) {
  deleteOrder(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteOrderMutationVariables,
  APITypes.DeleteOrderMutation
>;
export const createDeliveryMethodOrder = /* GraphQL */ `mutation CreateDeliveryMethodOrder(
  $input: CreateDeliveryMethodOrderInput!
  $condition: ModelDeliveryMethodOrderConditionInput
) {
  createDeliveryMethodOrder(input: $input, condition: $condition) {
    id
    name
    zipCode
    price
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateDeliveryMethodOrderMutationVariables,
  APITypes.CreateDeliveryMethodOrderMutation
>;
export const updateDeliveryMethodOrder = /* GraphQL */ `mutation UpdateDeliveryMethodOrder(
  $input: UpdateDeliveryMethodOrderInput!
  $condition: ModelDeliveryMethodOrderConditionInput
) {
  updateDeliveryMethodOrder(input: $input, condition: $condition) {
    id
    name
    zipCode
    price
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateDeliveryMethodOrderMutationVariables,
  APITypes.UpdateDeliveryMethodOrderMutation
>;
export const deleteDeliveryMethodOrder = /* GraphQL */ `mutation DeleteDeliveryMethodOrder(
  $input: DeleteDeliveryMethodOrderInput!
  $condition: ModelDeliveryMethodOrderConditionInput
) {
  deleteDeliveryMethodOrder(input: $input, condition: $condition) {
    id
    name
    zipCode
    price
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteDeliveryMethodOrderMutationVariables,
  APITypes.DeleteDeliveryMethodOrderMutation
>;
export const updateNotify = /* GraphQL */ `mutation UpdateNotify(
  $input: UpdateNotifyInput!
  $condition: ModelNotifyConditionInput
) {
  updateNotify(input: $input, condition: $condition) {
    id
    userID
    createdAt
    content
    link
    viewed
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateNotifyMutationVariables,
  APITypes.UpdateNotifyMutation
>;
export const createAdherence = /* GraphQL */ `mutation CreateAdherence(
  $input: CreateAdherenceInput!
  $condition: ModelAdherenceConditionInput
) {
  createAdherence(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAdherenceMutationVariables,
  APITypes.CreateAdherenceMutation
>;
export const deleteAdherence = /* GraphQL */ `mutation DeleteAdherence(
  $input: DeleteAdherenceInput!
  $condition: ModelAdherenceConditionInput
) {
  deleteAdherence(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAdherenceMutationVariables,
  APITypes.DeleteAdherenceMutation
>;
export const createVaccinationCard = /* GraphQL */ `mutation CreateVaccinationCard(
  $input: CreateVaccinationCardInput!
  $condition: ModelVaccinationCardConditionInput
) {
  createVaccinationCard(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateVaccinationCardMutationVariables,
  APITypes.CreateVaccinationCardMutation
>;
export const updateVaccinationCard = /* GraphQL */ `mutation UpdateVaccinationCard(
  $input: UpdateVaccinationCardInput!
  $condition: ModelVaccinationCardConditionInput
) {
  updateVaccinationCard(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateVaccinationCardMutationVariables,
  APITypes.UpdateVaccinationCardMutation
>;
export const deleteVaccinationCard = /* GraphQL */ `mutation DeleteVaccinationCard(
  $input: DeleteVaccinationCardInput!
  $condition: ModelVaccinationCardConditionInput
) {
  deleteVaccinationCard(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteVaccinationCardMutationVariables,
  APITypes.DeleteVaccinationCardMutation
>;
export const updateVaccinationCardItem = /* GraphQL */ `mutation UpdateVaccinationCardItem(
  $input: UpdateVaccinationCardItemInput!
  $condition: ModelVaccinationCardItemConditionInput
) {
  updateVaccinationCardItem(input: $input, condition: $condition) {
    id
    vaccinationCardID
    vaccinationCard {
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
    orderID
    order {
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
    orderItemID
    orderItem {
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
    adherenceID
    adherence {
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
    clientCampaignID
    clientCampaign {
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
      totalVaccinationsDependent
      totalVaccinationsThird
      search
      responsible
      number
      contactName
      contactEmail
      contactPhone
      createdAt
      allowOffList
      leafDiscount
      idx
      campaignCode
      status
      updatedAt
      __typename
    }
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
    lote
    profissionalID
    profissional {
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
}
` as GeneratedMutation<
  APITypes.UpdateVaccinationCardItemMutationVariables,
  APITypes.UpdateVaccinationCardItemMutation
>;
export const deleteVaccinationCardItem = /* GraphQL */ `mutation DeleteVaccinationCardItem(
  $input: DeleteVaccinationCardItemInput!
  $condition: ModelVaccinationCardItemConditionInput
) {
  deleteVaccinationCardItem(input: $input, condition: $condition) {
    id
    vaccinationCardID
    vaccinationCard {
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
    orderID
    order {
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
    orderItemID
    orderItem {
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
    adherenceID
    adherence {
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
    clientCampaignID
    clientCampaign {
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
      totalVaccinationsDependent
      totalVaccinationsThird
      search
      responsible
      number
      contactName
      contactEmail
      contactPhone
      createdAt
      allowOffList
      leafDiscount
      idx
      campaignCode
      status
      updatedAt
      __typename
    }
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
    lote
    profissionalID
    profissional {
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
}
` as GeneratedMutation<
  APITypes.DeleteVaccinationCardItemMutationVariables,
  APITypes.DeleteVaccinationCardItemMutation
>;
export const createCompany = /* GraphQL */ `mutation CreateCompany(
  $input: CreateCompanyInput!
  $condition: ModelCompanyConditionInput
) {
  createCompany(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCompanyMutationVariables,
  APITypes.CreateCompanyMutation
>;
export const updateCompany = /* GraphQL */ `mutation UpdateCompany(
  $input: UpdateCompanyInput!
  $condition: ModelCompanyConditionInput
) {
  updateCompany(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCompanyMutationVariables,
  APITypes.UpdateCompanyMutation
>;
export const deleteCompany = /* GraphQL */ `mutation DeleteCompany(
  $input: DeleteCompanyInput!
  $condition: ModelCompanyConditionInput
) {
  deleteCompany(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCompanyMutationVariables,
  APITypes.DeleteCompanyMutation
>;
export const createClient = /* GraphQL */ `mutation CreateClient(
  $input: CreateClientInput!
  $condition: ModelClientConditionInput
) {
  createClient(input: $input, condition: $condition) {
    id
    name
    cnpj
    fullName
    notes
    group
    origin
    status
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
` as GeneratedMutation<
  APITypes.CreateClientMutationVariables,
  APITypes.CreateClientMutation
>;
export const updateClient = /* GraphQL */ `mutation UpdateClient(
  $input: UpdateClientInput!
  $condition: ModelClientConditionInput
) {
  updateClient(input: $input, condition: $condition) {
    id
    name
    cnpj
    fullName
    notes
    group
    origin
    status
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
` as GeneratedMutation<
  APITypes.UpdateClientMutationVariables,
  APITypes.UpdateClientMutation
>;
export const deleteClient = /* GraphQL */ `mutation DeleteClient(
  $input: DeleteClientInput!
  $condition: ModelClientConditionInput
) {
  deleteClient(input: $input, condition: $condition) {
    id
    name
    cnpj
    fullName
    notes
    group
    origin
    status
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
` as GeneratedMutation<
  APITypes.DeleteClientMutationVariables,
  APITypes.DeleteClientMutation
>;
export const createClientCampaignUnit = /* GraphQL */ `mutation CreateClientCampaignUnit(
  $input: CreateClientCampaignUnitInput!
  $condition: ModelClientCampaignUnitConditionInput
) {
  createClientCampaignUnit(input: $input, condition: $condition) {
    id
    clientCampaignID
    name
    notes
    search
    contactName
    contactEmail
    contactPhone
    totalEligibles
    totalContractedVaccines
    qtyVisits
    qtyVisitsConfirmed
    routingRegionID
    code
    oss {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateClientCampaignUnitMutationVariables,
  APITypes.CreateClientCampaignUnitMutation
>;
export const updateClientCampaignUnit = /* GraphQL */ `mutation UpdateClientCampaignUnit(
  $input: UpdateClientCampaignUnitInput!
  $condition: ModelClientCampaignUnitConditionInput
) {
  updateClientCampaignUnit(input: $input, condition: $condition) {
    id
    clientCampaignID
    name
    notes
    search
    contactName
    contactEmail
    contactPhone
    totalEligibles
    totalContractedVaccines
    qtyVisits
    qtyVisitsConfirmed
    routingRegionID
    code
    oss {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateClientCampaignUnitMutationVariables,
  APITypes.UpdateClientCampaignUnitMutation
>;
export const deleteClientCampaignUnit = /* GraphQL */ `mutation DeleteClientCampaignUnit(
  $input: DeleteClientCampaignUnitInput!
  $condition: ModelClientCampaignUnitConditionInput
) {
  deleteClientCampaignUnit(input: $input, condition: $condition) {
    id
    clientCampaignID
    name
    notes
    search
    contactName
    contactEmail
    contactPhone
    totalEligibles
    totalContractedVaccines
    qtyVisits
    qtyVisitsConfirmed
    routingRegionID
    code
    oss {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteClientCampaignUnitMutationVariables,
  APITypes.DeleteClientCampaignUnitMutation
>;
export const createClientCampaignEligible = /* GraphQL */ `mutation CreateClientCampaignEligible(
  $input: CreateClientCampaignEligibleInput!
  $condition: ModelClientCampaignEligibleConditionInput
) {
  createClientCampaignEligible(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.CreateClientCampaignEligibleMutationVariables,
  APITypes.CreateClientCampaignEligibleMutation
>;
export const updateClientCampaignEligible = /* GraphQL */ `mutation UpdateClientCampaignEligible(
  $input: UpdateClientCampaignEligibleInput!
  $condition: ModelClientCampaignEligibleConditionInput
) {
  updateClientCampaignEligible(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.UpdateClientCampaignEligibleMutationVariables,
  APITypes.UpdateClientCampaignEligibleMutation
>;
export const deleteClientCampaignEligible = /* GraphQL */ `mutation DeleteClientCampaignEligible(
  $input: DeleteClientCampaignEligibleInput!
  $condition: ModelClientCampaignEligibleConditionInput
) {
  deleteClientCampaignEligible(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.DeleteClientCampaignEligibleMutationVariables,
  APITypes.DeleteClientCampaignEligibleMutation
>;
export const createClientCampaignEligibleVaccination = /* GraphQL */ `mutation CreateClientCampaignEligibleVaccination(
  $input: CreateClientCampaignEligibleVaccinationInput!
  $condition: ModelClientCampaignEligibleVaccinationConditionInput
) {
  createClientCampaignEligibleVaccination(
    input: $input
    condition: $condition
  ) {
    id
    osID
    os {
      id
      clientID
      clientCampaignID
      clientCampaignUnitID
      driverID
      professionals
      collaborators
      companies
      number
      start
      expiration
      orientation
      notes
      status
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
      search
      createdAt
      updatedAt
      __typename
    }
    clientCampaignID
    clientCampaign {
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
      totalVaccinationsDependent
      totalVaccinationsThird
      search
      responsible
      number
      contactName
      contactEmail
      contactPhone
      createdAt
      allowOffList
      leafDiscount
      idx
      campaignCode
      status
      updatedAt
      __typename
    }
    clientCampaignEligibleID
    clientEligible {
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
    profissionalID
    profissional {
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
}
` as GeneratedMutation<
  APITypes.CreateClientCampaignEligibleVaccinationMutationVariables,
  APITypes.CreateClientCampaignEligibleVaccinationMutation
>;
export const updateClientCampaignEligibleVaccination = /* GraphQL */ `mutation UpdateClientCampaignEligibleVaccination(
  $input: UpdateClientCampaignEligibleVaccinationInput!
  $condition: ModelClientCampaignEligibleVaccinationConditionInput
) {
  updateClientCampaignEligibleVaccination(
    input: $input
    condition: $condition
  ) {
    id
    osID
    os {
      id
      clientID
      clientCampaignID
      clientCampaignUnitID
      driverID
      professionals
      collaborators
      companies
      number
      start
      expiration
      orientation
      notes
      status
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
      search
      createdAt
      updatedAt
      __typename
    }
    clientCampaignID
    clientCampaign {
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
      totalVaccinationsDependent
      totalVaccinationsThird
      search
      responsible
      number
      contactName
      contactEmail
      contactPhone
      createdAt
      allowOffList
      leafDiscount
      idx
      campaignCode
      status
      updatedAt
      __typename
    }
    clientCampaignEligibleID
    clientEligible {
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
    profissionalID
    profissional {
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
}
` as GeneratedMutation<
  APITypes.UpdateClientCampaignEligibleVaccinationMutationVariables,
  APITypes.UpdateClientCampaignEligibleVaccinationMutation
>;
export const deleteClientCampaignEligibleVaccination = /* GraphQL */ `mutation DeleteClientCampaignEligibleVaccination(
  $input: DeleteClientCampaignEligibleVaccinationInput!
  $condition: ModelClientCampaignEligibleVaccinationConditionInput
) {
  deleteClientCampaignEligibleVaccination(
    input: $input
    condition: $condition
  ) {
    id
    osID
    os {
      id
      clientID
      clientCampaignID
      clientCampaignUnitID
      driverID
      professionals
      collaborators
      companies
      number
      start
      expiration
      orientation
      notes
      status
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
      search
      createdAt
      updatedAt
      __typename
    }
    clientCampaignID
    clientCampaign {
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
      totalVaccinationsDependent
      totalVaccinationsThird
      search
      responsible
      number
      contactName
      contactEmail
      contactPhone
      createdAt
      allowOffList
      leafDiscount
      idx
      campaignCode
      status
      updatedAt
      __typename
    }
    clientCampaignEligibleID
    clientEligible {
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
    profissionalID
    profissional {
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
}
` as GeneratedMutation<
  APITypes.DeleteClientCampaignEligibleVaccinationMutationVariables,
  APITypes.DeleteClientCampaignEligibleVaccinationMutation
>;
export const createEligibleVaccination = /* GraphQL */ `mutation CreateEligibleVaccination(
  $input: CreateEligibleVaccinationInput!
  $condition: ModelEligibleVaccinationConditionInput
) {
  createEligibleVaccination(input: $input, condition: $condition) {
    id
    osID
    clientEligibleID
    clientEligible {
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
    clientID
    profissionalID
    profissional {
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
    profissionalDoc
    coren
    applicationDate
    reason
    search
    vaccination
    status
    localCity
    localState
    os {
      id
      clientID
      clientCampaignID
      clientCampaignUnitID
      driverID
      professionals
      collaborators
      companies
      number
      start
      expiration
      orientation
      notes
      status
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
      search
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEligibleVaccinationMutationVariables,
  APITypes.CreateEligibleVaccinationMutation
>;
export const updateEligibleVaccination = /* GraphQL */ `mutation UpdateEligibleVaccination(
  $input: UpdateEligibleVaccinationInput!
  $condition: ModelEligibleVaccinationConditionInput
) {
  updateEligibleVaccination(input: $input, condition: $condition) {
    id
    osID
    clientEligibleID
    clientEligible {
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
    clientID
    profissionalID
    profissional {
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
    profissionalDoc
    coren
    applicationDate
    reason
    search
    vaccination
    status
    localCity
    localState
    os {
      id
      clientID
      clientCampaignID
      clientCampaignUnitID
      driverID
      professionals
      collaborators
      companies
      number
      start
      expiration
      orientation
      notes
      status
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
      search
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEligibleVaccinationMutationVariables,
  APITypes.UpdateEligibleVaccinationMutation
>;
export const deleteEligibleVaccination = /* GraphQL */ `mutation DeleteEligibleVaccination(
  $input: DeleteEligibleVaccinationInput!
  $condition: ModelEligibleVaccinationConditionInput
) {
  deleteEligibleVaccination(input: $input, condition: $condition) {
    id
    osID
    clientEligibleID
    clientEligible {
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
    clientID
    profissionalID
    profissional {
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
    profissionalDoc
    coren
    applicationDate
    reason
    search
    vaccination
    status
    localCity
    localState
    os {
      id
      clientID
      clientCampaignID
      clientCampaignUnitID
      driverID
      professionals
      collaborators
      companies
      number
      start
      expiration
      orientation
      notes
      status
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
      search
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEligibleVaccinationMutationVariables,
  APITypes.DeleteEligibleVaccinationMutation
>;
export const createClientEligible = /* GraphQL */ `mutation CreateClientEligible(
  $input: CreateClientEligibleInput!
  $condition: ModelClientEligibleConditionInput
) {
  createClientEligible(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.CreateClientEligibleMutationVariables,
  APITypes.CreateClientEligibleMutation
>;
export const updateClientEligible = /* GraphQL */ `mutation UpdateClientEligible(
  $input: UpdateClientEligibleInput!
  $condition: ModelClientEligibleConditionInput
) {
  updateClientEligible(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.UpdateClientEligibleMutationVariables,
  APITypes.UpdateClientEligibleMutation
>;
export const deleteClientEligible = /* GraphQL */ `mutation DeleteClientEligible(
  $input: DeleteClientEligibleInput!
  $condition: ModelClientEligibleConditionInput
) {
  deleteClientEligible(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.DeleteClientEligibleMutationVariables,
  APITypes.DeleteClientEligibleMutation
>;
export const createAuthorizationList = /* GraphQL */ `mutation CreateAuthorizationList(
  $input: CreateAuthorizationListInput!
  $condition: ModelAuthorizationListConditionInput
) {
  createAuthorizationList(input: $input, condition: $condition) {
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
    members {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAuthorizationListMutationVariables,
  APITypes.CreateAuthorizationListMutation
>;
export const updateAuthorizationList = /* GraphQL */ `mutation UpdateAuthorizationList(
  $input: UpdateAuthorizationListInput!
  $condition: ModelAuthorizationListConditionInput
) {
  updateAuthorizationList(input: $input, condition: $condition) {
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
    members {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAuthorizationListMutationVariables,
  APITypes.UpdateAuthorizationListMutation
>;
export const deleteAuthorizationList = /* GraphQL */ `mutation DeleteAuthorizationList(
  $input: DeleteAuthorizationListInput!
  $condition: ModelAuthorizationListConditionInput
) {
  deleteAuthorizationList(input: $input, condition: $condition) {
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
    members {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAuthorizationListMutationVariables,
  APITypes.DeleteAuthorizationListMutation
>;
export const createAuthorizationListClosure = /* GraphQL */ `mutation CreateAuthorizationListClosure(
  $input: CreateAuthorizationListClosureInput!
  $condition: ModelAuthorizationListClosureConditionInput
) {
  createAuthorizationListClosure(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.CreateAuthorizationListClosureMutationVariables,
  APITypes.CreateAuthorizationListClosureMutation
>;
export const updateAuthorizationListClosure = /* GraphQL */ `mutation UpdateAuthorizationListClosure(
  $input: UpdateAuthorizationListClosureInput!
  $condition: ModelAuthorizationListClosureConditionInput
) {
  updateAuthorizationListClosure(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.UpdateAuthorizationListClosureMutationVariables,
  APITypes.UpdateAuthorizationListClosureMutation
>;
export const deleteAuthorizationListClosure = /* GraphQL */ `mutation DeleteAuthorizationListClosure(
  $input: DeleteAuthorizationListClosureInput!
  $condition: ModelAuthorizationListClosureConditionInput
) {
  deleteAuthorizationListClosure(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.DeleteAuthorizationListClosureMutationVariables,
  APITypes.DeleteAuthorizationListClosureMutation
>;
export const createAuthorizationListMember = /* GraphQL */ `mutation CreateAuthorizationListMember(
  $input: CreateAuthorizationListMemberInput!
  $condition: ModelAuthorizationListMemberConditionInput
) {
  createAuthorizationListMember(input: $input, condition: $condition) {
    id
    authorizationListID
    name
    key
    cpf
    birth
    search
    others
    vaccinations {
      nextToken
      __typename
    }
    authorizationList {
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAuthorizationListMemberMutationVariables,
  APITypes.CreateAuthorizationListMemberMutation
>;
export const deleteAuthorizationListMember = /* GraphQL */ `mutation DeleteAuthorizationListMember(
  $input: DeleteAuthorizationListMemberInput!
  $condition: ModelAuthorizationListMemberConditionInput
) {
  deleteAuthorizationListMember(input: $input, condition: $condition) {
    id
    authorizationListID
    name
    key
    cpf
    birth
    search
    others
    vaccinations {
      nextToken
      __typename
    }
    authorizationList {
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAuthorizationListMemberMutationVariables,
  APITypes.DeleteAuthorizationListMemberMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const createProfile = /* GraphQL */ `mutation CreateProfile(
  $input: CreateProfileInput!
  $condition: ModelProfileConditionInput
) {
  createProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateProfileMutationVariables,
  APITypes.CreateProfileMutation
>;
export const createTempAux = /* GraphQL */ `mutation CreateTempAux(
  $input: CreateTempAuxInput!
  $condition: ModelTempAuxConditionInput
) {
  createTempAux(input: $input, condition: $condition) {
    id
    name
    doc
    birth
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTempAuxMutationVariables,
  APITypes.CreateTempAuxMutation
>;
export const deleteTempAux = /* GraphQL */ `mutation DeleteTempAux(
  $input: DeleteTempAuxInput!
  $condition: ModelTempAuxConditionInput
) {
  deleteTempAux(input: $input, condition: $condition) {
    id
    name
    doc
    birth
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTempAuxMutationVariables,
  APITypes.DeleteTempAuxMutation
>;
export const updateInvite = /* GraphQL */ `mutation UpdateInvite(
  $input: UpdateInviteInput!
  $condition: ModelInviteConditionInput
) {
  updateInvite(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.UpdateInviteMutationVariables,
  APITypes.UpdateInviteMutation
>;
export const updateCoupon = /* GraphQL */ `mutation UpdateCoupon(
  $input: UpdateCouponInput!
  $condition: ModelCouponConditionInput
) {
  updateCoupon(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCouponMutationVariables,
  APITypes.UpdateCouponMutation
>;
export const createCouponProduct = /* GraphQL */ `mutation CreateCouponProduct(
  $input: CreateCouponProductInput!
  $condition: ModelCouponProductConditionInput
) {
  createCouponProduct(input: $input, condition: $condition) {
    id
    couponID
    productID
    price
    limit
    product {
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCouponProductMutationVariables,
  APITypes.CreateCouponProductMutation
>;
export const updateCouponProduct = /* GraphQL */ `mutation UpdateCouponProduct(
  $input: UpdateCouponProductInput!
  $condition: ModelCouponProductConditionInput
) {
  updateCouponProduct(input: $input, condition: $condition) {
    id
    couponID
    productID
    price
    limit
    product {
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCouponProductMutationVariables,
  APITypes.UpdateCouponProductMutation
>;
export const deleteCouponProduct = /* GraphQL */ `mutation DeleteCouponProduct(
  $input: DeleteCouponProductInput!
  $condition: ModelCouponProductConditionInput
) {
  deleteCouponProduct(input: $input, condition: $condition) {
    id
    couponID
    productID
    price
    limit
    product {
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCouponProductMutationVariables,
  APITypes.DeleteCouponProductMutation
>;
export const createCouponUsed = /* GraphQL */ `mutation CreateCouponUsed(
  $input: CreateCouponUsedInput!
  $condition: ModelCouponUsedConditionInput
) {
  createCouponUsed(input: $input, condition: $condition) {
    id
    couponID
    coupon {
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
    qty
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCouponUsedMutationVariables,
  APITypes.CreateCouponUsedMutation
>;
export const createRelation = /* GraphQL */ `mutation CreateRelation(
  $input: CreateRelationInput!
  $condition: ModelRelationConditionInput
) {
  createRelation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRelationMutationVariables,
  APITypes.CreateRelationMutation
>;
export const updateRelation = /* GraphQL */ `mutation UpdateRelation(
  $input: UpdateRelationInput!
  $condition: ModelRelationConditionInput
) {
  updateRelation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRelationMutationVariables,
  APITypes.UpdateRelationMutation
>;
export const deleteRelation = /* GraphQL */ `mutation DeleteRelation(
  $input: DeleteRelationInput!
  $condition: ModelRelationConditionInput
) {
  deleteRelation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRelationMutationVariables,
  APITypes.DeleteRelationMutation
>;
export const createRelationLink = /* GraphQL */ `mutation CreateRelationLink(
  $input: CreateRelationLinkInput!
  $condition: ModelRelationLinkConditionInput
) {
  createRelationLink(input: $input, condition: $condition) {
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
    relationID
    relation {
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
    type
    notify
    updatedAt
    search
    percentage
    createdAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRelationLinkMutationVariables,
  APITypes.CreateRelationLinkMutation
>;
export const updateRelationLink = /* GraphQL */ `mutation UpdateRelationLink(
  $input: UpdateRelationLinkInput!
  $condition: ModelRelationLinkConditionInput
) {
  updateRelationLink(input: $input, condition: $condition) {
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
    relationID
    relation {
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
    type
    notify
    updatedAt
    search
    percentage
    createdAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRelationLinkMutationVariables,
  APITypes.UpdateRelationLinkMutation
>;
export const deleteRelationLink = /* GraphQL */ `mutation DeleteRelationLink(
  $input: DeleteRelationLinkInput!
  $condition: ModelRelationLinkConditionInput
) {
  deleteRelationLink(input: $input, condition: $condition) {
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
    relationID
    relation {
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
    type
    notify
    updatedAt
    search
    percentage
    createdAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRelationLinkMutationVariables,
  APITypes.DeleteRelationLinkMutation
>;
export const createMessage = /* GraphQL */ `mutation CreateMessage(
  $input: CreateMessageInput!
  $condition: ModelMessageConditionInput
) {
  createMessage(input: $input, condition: $condition) {
    id
    relationID
    relation {
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
    type
    content
    search
    identityId
    createdAt
    status
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMessageMutationVariables,
  APITypes.CreateMessageMutation
>;
export const deleteMessage = /* GraphQL */ `mutation DeleteMessage(
  $input: DeleteMessageInput!
  $condition: ModelMessageConditionInput
) {
  deleteMessage(input: $input, condition: $condition) {
    id
    relationID
    relation {
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
    type
    content
    search
    identityId
    createdAt
    status
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMessageMutationVariables,
  APITypes.DeleteMessageMutation
>;
export const createPage = /* GraphQL */ `mutation CreatePage(
  $input: CreatePageInput!
  $condition: ModelPageConditionInput
) {
  createPage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePageMutationVariables,
  APITypes.CreatePageMutation
>;
export const createCart = /* GraphQL */ `mutation CreateCart(
  $input: CreateCartInput!
  $condition: ModelCartConditionInput
) {
  createCart(input: $input, condition: $condition) {
    id
    userID
    productID
    product {
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
    options {
      nextToken
      __typename
    }
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
}
` as GeneratedMutation<
  APITypes.CreateCartMutationVariables,
  APITypes.CreateCartMutation
>;
export const updateCart = /* GraphQL */ `mutation UpdateCart(
  $input: UpdateCartInput!
  $condition: ModelCartConditionInput
) {
  updateCart(input: $input, condition: $condition) {
    id
    userID
    productID
    product {
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
    options {
      nextToken
      __typename
    }
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
}
` as GeneratedMutation<
  APITypes.UpdateCartMutationVariables,
  APITypes.UpdateCartMutation
>;
export const createCartOption = /* GraphQL */ `mutation CreateCartOption(
  $input: CreateCartOptionInput!
  $condition: ModelCartOptionConditionInput
) {
  createCartOption(input: $input, condition: $condition) {
    id
    cartID
    optionID
    option {
      id
      productID
      name
      price
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    userID
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCartOptionMutationVariables,
  APITypes.CreateCartOptionMutation
>;
export const updateCartOption = /* GraphQL */ `mutation UpdateCartOption(
  $input: UpdateCartOptionInput!
  $condition: ModelCartOptionConditionInput
) {
  updateCartOption(input: $input, condition: $condition) {
    id
    cartID
    optionID
    option {
      id
      productID
      name
      price
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    userID
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCartOptionMutationVariables,
  APITypes.UpdateCartOptionMutation
>;
export const createOrder = /* GraphQL */ `mutation CreateOrder(
  $input: CreateOrderInput!
  $condition: ModelOrderConditionInput
) {
  createOrder(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateOrderMutationVariables,
  APITypes.CreateOrderMutation
>;
export const updateOrder = /* GraphQL */ `mutation UpdateOrder(
  $input: UpdateOrderInput!
  $condition: ModelOrderConditionInput
) {
  updateOrder(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateOrderMutationVariables,
  APITypes.UpdateOrderMutation
>;
export const createOrderItem = /* GraphQL */ `mutation CreateOrderItem(
  $input: CreateOrderItemInput!
  $condition: ModelOrderItemConditionInput
) {
  createOrderItem(input: $input, condition: $condition) {
    id
    orderID
    productID
    product {
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
    optionsItem {
      nextToken
      __typename
    }
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
}
` as GeneratedMutation<
  APITypes.CreateOrderItemMutationVariables,
  APITypes.CreateOrderItemMutation
>;
export const updateOrderItem = /* GraphQL */ `mutation UpdateOrderItem(
  $input: UpdateOrderItemInput!
  $condition: ModelOrderItemConditionInput
) {
  updateOrderItem(input: $input, condition: $condition) {
    id
    orderID
    productID
    product {
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
    optionsItem {
      nextToken
      __typename
    }
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
}
` as GeneratedMutation<
  APITypes.UpdateOrderItemMutationVariables,
  APITypes.UpdateOrderItemMutation
>;
export const deleteOrderItem = /* GraphQL */ `mutation DeleteOrderItem(
  $input: DeleteOrderItemInput!
  $condition: ModelOrderItemConditionInput
) {
  deleteOrderItem(input: $input, condition: $condition) {
    id
    orderID
    productID
    product {
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
    optionsItem {
      nextToken
      __typename
    }
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
}
` as GeneratedMutation<
  APITypes.DeleteOrderItemMutationVariables,
  APITypes.DeleteOrderItemMutation
>;
export const createOrderItemOption = /* GraphQL */ `mutation CreateOrderItemOption(
  $input: CreateOrderItemOptionInput!
  $condition: ModelOrderItemOptionConditionInput
) {
  createOrderItemOption(input: $input, condition: $condition) {
    id
    orderItemID
    optionID
    option {
      id
      productID
      name
      price
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateOrderItemOptionMutationVariables,
  APITypes.CreateOrderItemOptionMutation
>;
export const updateOrderItemOption = /* GraphQL */ `mutation UpdateOrderItemOption(
  $input: UpdateOrderItemOptionInput!
  $condition: ModelOrderItemOptionConditionInput
) {
  updateOrderItemOption(input: $input, condition: $condition) {
    id
    orderItemID
    optionID
    option {
      id
      productID
      name
      price
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateOrderItemOptionMutationVariables,
  APITypes.UpdateOrderItemOptionMutation
>;
export const deleteOrderItemOption = /* GraphQL */ `mutation DeleteOrderItemOption(
  $input: DeleteOrderItemOptionInput!
  $condition: ModelOrderItemOptionConditionInput
) {
  deleteOrderItemOption(input: $input, condition: $condition) {
    id
    orderItemID
    optionID
    option {
      id
      productID
      name
      price
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteOrderItemOptionMutationVariables,
  APITypes.DeleteOrderItemOptionMutation
>;
export const createDeliveryOrder = /* GraphQL */ `mutation CreateDeliveryOrder(
  $input: CreateDeliveryOrderInput!
  $condition: ModelDeliveryOrderConditionInput
) {
  createDeliveryOrder(input: $input, condition: $condition) {
    id
    orderID
    order {
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
    date
    deliveryUserID
    deliveryUser {
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
    deliveryCompanyID
    deliveryCompany {
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
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateDeliveryOrderMutationVariables,
  APITypes.CreateDeliveryOrderMutation
>;
export const updateDeliveryOrder = /* GraphQL */ `mutation UpdateDeliveryOrder(
  $input: UpdateDeliveryOrderInput!
  $condition: ModelDeliveryOrderConditionInput
) {
  updateDeliveryOrder(input: $input, condition: $condition) {
    id
    orderID
    order {
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
    date
    deliveryUserID
    deliveryUser {
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
    deliveryCompanyID
    deliveryCompany {
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
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateDeliveryOrderMutationVariables,
  APITypes.UpdateDeliveryOrderMutation
>;
export const deleteDeliveryOrder = /* GraphQL */ `mutation DeleteDeliveryOrder(
  $input: DeleteDeliveryOrderInput!
  $condition: ModelDeliveryOrderConditionInput
) {
  deleteDeliveryOrder(input: $input, condition: $condition) {
    id
    orderID
    order {
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
    date
    deliveryUserID
    deliveryUser {
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
    deliveryCompanyID
    deliveryCompany {
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
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteDeliveryOrderMutationVariables,
  APITypes.DeleteDeliveryOrderMutation
>;
export const createNotify = /* GraphQL */ `mutation CreateNotify(
  $input: CreateNotifyInput!
  $condition: ModelNotifyConditionInput
) {
  createNotify(input: $input, condition: $condition) {
    id
    userID
    createdAt
    content
    link
    viewed
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateNotifyMutationVariables,
  APITypes.CreateNotifyMutation
>;
export const deleteNotify = /* GraphQL */ `mutation DeleteNotify(
  $input: DeleteNotifyInput!
  $condition: ModelNotifyConditionInput
) {
  deleteNotify(input: $input, condition: $condition) {
    id
    userID
    createdAt
    content
    link
    viewed
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteNotifyMutationVariables,
  APITypes.DeleteNotifyMutation
>;
export const updateAdherence = /* GraphQL */ `mutation UpdateAdherence(
  $input: UpdateAdherenceInput!
  $condition: ModelAdherenceConditionInput
) {
  updateAdherence(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAdherenceMutationVariables,
  APITypes.UpdateAdherenceMutation
>;
export const createAdherenceUsed = /* GraphQL */ `mutation CreateAdherenceUsed(
  $input: CreateAdherenceUsedInput!
  $condition: ModelAdherenceUsedConditionInput
) {
  createAdherenceUsed(input: $input, condition: $condition) {
    id
    adherenceID
    adherence {
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
    qty
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAdherenceUsedMutationVariables,
  APITypes.CreateAdherenceUsedMutation
>;
export const createAdherenceProduct = /* GraphQL */ `mutation CreateAdherenceProduct(
  $input: CreateAdherenceProductInput!
  $condition: ModelAdherenceProductConditionInput
) {
  createAdherenceProduct(input: $input, condition: $condition) {
    id
    adherenceID
    productID
    price
    limit
    product {
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAdherenceProductMutationVariables,
  APITypes.CreateAdherenceProductMutation
>;
export const updateAdherenceProduct = /* GraphQL */ `mutation UpdateAdherenceProduct(
  $input: UpdateAdherenceProductInput!
  $condition: ModelAdherenceProductConditionInput
) {
  updateAdherenceProduct(input: $input, condition: $condition) {
    id
    adherenceID
    productID
    price
    limit
    product {
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAdherenceProductMutationVariables,
  APITypes.UpdateAdherenceProductMutation
>;
export const deleteAdherenceProduct = /* GraphQL */ `mutation DeleteAdherenceProduct(
  $input: DeleteAdherenceProductInput!
  $condition: ModelAdherenceProductConditionInput
) {
  deleteAdherenceProduct(input: $input, condition: $condition) {
    id
    adherenceID
    productID
    price
    limit
    product {
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAdherenceProductMutationVariables,
  APITypes.DeleteAdherenceProductMutation
>;
export const createAdherenceCompany = /* GraphQL */ `mutation CreateAdherenceCompany(
  $input: CreateAdherenceCompanyInput!
  $condition: ModelAdherenceCompanyConditionInput
) {
  createAdherenceCompany(input: $input, condition: $condition) {
    id
    adherenceID
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAdherenceCompanyMutationVariables,
  APITypes.CreateAdherenceCompanyMutation
>;
export const updateAdherenceCompany = /* GraphQL */ `mutation UpdateAdherenceCompany(
  $input: UpdateAdherenceCompanyInput!
  $condition: ModelAdherenceCompanyConditionInput
) {
  updateAdherenceCompany(input: $input, condition: $condition) {
    id
    adherenceID
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAdherenceCompanyMutationVariables,
  APITypes.UpdateAdherenceCompanyMutation
>;
export const deleteAdherenceCompany = /* GraphQL */ `mutation DeleteAdherenceCompany(
  $input: DeleteAdherenceCompanyInput!
  $condition: ModelAdherenceCompanyConditionInput
) {
  deleteAdherenceCompany(input: $input, condition: $condition) {
    id
    adherenceID
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAdherenceCompanyMutationVariables,
  APITypes.DeleteAdherenceCompanyMutation
>;
export const createVaccinationCardItem = /* GraphQL */ `mutation CreateVaccinationCardItem(
  $input: CreateVaccinationCardItemInput!
  $condition: ModelVaccinationCardItemConditionInput
) {
  createVaccinationCardItem(input: $input, condition: $condition) {
    id
    vaccinationCardID
    vaccinationCard {
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
    orderID
    order {
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
    orderItemID
    orderItem {
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
    adherenceID
    adherence {
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
    clientCampaignID
    clientCampaign {
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
      totalVaccinationsDependent
      totalVaccinationsThird
      search
      responsible
      number
      contactName
      contactEmail
      contactPhone
      createdAt
      allowOffList
      leafDiscount
      idx
      campaignCode
      status
      updatedAt
      __typename
    }
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
    lote
    profissionalID
    profissional {
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
}
` as GeneratedMutation<
  APITypes.CreateVaccinationCardItemMutationVariables,
  APITypes.CreateVaccinationCardItemMutation
>;
export const createCounter = /* GraphQL */ `mutation CreateCounter(
  $input: CreateCounterInput!
  $condition: ModelCounterConditionInput
) {
  createCounter(input: $input, condition: $condition) {
    id
    qty
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCounterMutationVariables,
  APITypes.CreateCounterMutation
>;
export const updateCounter = /* GraphQL */ `mutation UpdateCounter(
  $input: UpdateCounterInput!
  $condition: ModelCounterConditionInput
) {
  updateCounter(input: $input, condition: $condition) {
    id
    qty
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCounterMutationVariables,
  APITypes.UpdateCounterMutation
>;
export const deleteCounter = /* GraphQL */ `mutation DeleteCounter(
  $input: DeleteCounterInput!
  $condition: ModelCounterConditionInput
) {
  deleteCounter(input: $input, condition: $condition) {
    id
    qty
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCounterMutationVariables,
  APITypes.DeleteCounterMutation
>;
export const createClientUser = /* GraphQL */ `mutation CreateClientUser(
  $input: CreateClientUserInput!
  $condition: ModelClientUserConditionInput
) {
  createClientUser(input: $input, condition: $condition) {
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
    clientID
    client {
      id
      name
      cnpj
      fullName
      notes
      group
      origin
      status
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateClientUserMutationVariables,
  APITypes.CreateClientUserMutation
>;
export const deleteClientUser = /* GraphQL */ `mutation DeleteClientUser(
  $input: DeleteClientUserInput!
  $condition: ModelClientUserConditionInput
) {
  deleteClientUser(input: $input, condition: $condition) {
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
    clientID
    client {
      id
      name
      cnpj
      fullName
      notes
      group
      origin
      status
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteClientUserMutationVariables,
  APITypes.DeleteClientUserMutation
>;
export const createClientCampaign = /* GraphQL */ `mutation CreateClientCampaign(
  $input: CreateClientCampaignInput!
  $condition: ModelClientCampaignConditionInput
) {
  createClientCampaign(input: $input, condition: $condition) {
    id
    clientID
    client {
      id
      name
      cnpj
      fullName
      notes
      group
      origin
      status
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
    totalVaccinationsDependent
    totalVaccinationsThird
    search
    responsible
    number
    contactName
    contactEmail
    contactPhone
    createdAt
    allowOffList
    leafDiscount
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
` as GeneratedMutation<
  APITypes.CreateClientCampaignMutationVariables,
  APITypes.CreateClientCampaignMutation
>;
export const updateClientCampaign = /* GraphQL */ `mutation UpdateClientCampaign(
  $input: UpdateClientCampaignInput!
  $condition: ModelClientCampaignConditionInput
) {
  updateClientCampaign(input: $input, condition: $condition) {
    id
    clientID
    client {
      id
      name
      cnpj
      fullName
      notes
      group
      origin
      status
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
    totalVaccinationsDependent
    totalVaccinationsThird
    search
    responsible
    number
    contactName
    contactEmail
    contactPhone
    createdAt
    allowOffList
    leafDiscount
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
` as GeneratedMutation<
  APITypes.UpdateClientCampaignMutationVariables,
  APITypes.UpdateClientCampaignMutation
>;
export const deleteClientCampaign = /* GraphQL */ `mutation DeleteClientCampaign(
  $input: DeleteClientCampaignInput!
  $condition: ModelClientCampaignConditionInput
) {
  deleteClientCampaign(input: $input, condition: $condition) {
    id
    clientID
    client {
      id
      name
      cnpj
      fullName
      notes
      group
      origin
      status
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
    totalVaccinationsDependent
    totalVaccinationsThird
    search
    responsible
    number
    contactName
    contactEmail
    contactPhone
    createdAt
    allowOffList
    leafDiscount
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
` as GeneratedMutation<
  APITypes.DeleteClientCampaignMutationVariables,
  APITypes.DeleteClientCampaignMutation
>;
export const createClientCampaignProduct = /* GraphQL */ `mutation CreateClientCampaignProduct(
  $input: CreateClientCampaignProductInput!
  $condition: ModelClientCampaignProductConditionInput
) {
  createClientCampaignProduct(input: $input, condition: $condition) {
    id
    clientCampaignID
    productID
    price
    limit
    product {
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateClientCampaignProductMutationVariables,
  APITypes.CreateClientCampaignProductMutation
>;
export const updateClientCampaignProduct = /* GraphQL */ `mutation UpdateClientCampaignProduct(
  $input: UpdateClientCampaignProductInput!
  $condition: ModelClientCampaignProductConditionInput
) {
  updateClientCampaignProduct(input: $input, condition: $condition) {
    id
    clientCampaignID
    productID
    price
    limit
    product {
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateClientCampaignProductMutationVariables,
  APITypes.UpdateClientCampaignProductMutation
>;
export const deleteClientCampaignProduct = /* GraphQL */ `mutation DeleteClientCampaignProduct(
  $input: DeleteClientCampaignProductInput!
  $condition: ModelClientCampaignProductConditionInput
) {
  deleteClientCampaignProduct(input: $input, condition: $condition) {
    id
    clientCampaignID
    productID
    price
    limit
    product {
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteClientCampaignProductMutationVariables,
  APITypes.DeleteClientCampaignProductMutation
>;
export const createClientCampaignCompany = /* GraphQL */ `mutation CreateClientCampaignCompany(
  $input: CreateClientCampaignCompanyInput!
  $condition: ModelClientCampaignCompanyConditionInput
) {
  createClientCampaignCompany(input: $input, condition: $condition) {
    id
    clientCampaignID
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateClientCampaignCompanyMutationVariables,
  APITypes.CreateClientCampaignCompanyMutation
>;
export const updateClientCampaignCompany = /* GraphQL */ `mutation UpdateClientCampaignCompany(
  $input: UpdateClientCampaignCompanyInput!
  $condition: ModelClientCampaignCompanyConditionInput
) {
  updateClientCampaignCompany(input: $input, condition: $condition) {
    id
    clientCampaignID
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateClientCampaignCompanyMutationVariables,
  APITypes.UpdateClientCampaignCompanyMutation
>;
export const deleteClientCampaignCompany = /* GraphQL */ `mutation DeleteClientCampaignCompany(
  $input: DeleteClientCampaignCompanyInput!
  $condition: ModelClientCampaignCompanyConditionInput
) {
  deleteClientCampaignCompany(input: $input, condition: $condition) {
    id
    clientCampaignID
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteClientCampaignCompanyMutationVariables,
  APITypes.DeleteClientCampaignCompanyMutation
>;
export const createOS = /* GraphQL */ `mutation CreateOS($input: CreateOSInput!, $condition: ModelOSConditionInput) {
  createOS(input: $input, condition: $condition) {
    id
    clientID
    clientCampaignID
    clientCampaignUnitID
    driverID
    professionals
    collaborators
    companies
    number
    start
    expiration
    orientation
    notes
    status
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
    search
    eligiblesVaccination {
      nextToken
      __typename
    }
    client {
      id
      name
      cnpj
      fullName
      notes
      group
      origin
      status
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
    clientCampaign {
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
      totalVaccinationsDependent
      totalVaccinationsThird
      search
      responsible
      number
      contactName
      contactEmail
      contactPhone
      createdAt
      allowOffList
      leafDiscount
      idx
      campaignCode
      status
      updatedAt
      __typename
    }
    clientCampaignUnit {
      id
      clientCampaignID
      name
      notes
      search
      contactName
      contactEmail
      contactPhone
      totalEligibles
      totalContractedVaccines
      qtyVisits
      qtyVisitsConfirmed
      routingRegionID
      code
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateOSMutationVariables,
  APITypes.CreateOSMutation
>;
export const updateOS = /* GraphQL */ `mutation UpdateOS($input: UpdateOSInput!, $condition: ModelOSConditionInput) {
  updateOS(input: $input, condition: $condition) {
    id
    clientID
    clientCampaignID
    clientCampaignUnitID
    driverID
    professionals
    collaborators
    companies
    number
    start
    expiration
    orientation
    notes
    status
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
    search
    eligiblesVaccination {
      nextToken
      __typename
    }
    client {
      id
      name
      cnpj
      fullName
      notes
      group
      origin
      status
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
    clientCampaign {
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
      totalVaccinationsDependent
      totalVaccinationsThird
      search
      responsible
      number
      contactName
      contactEmail
      contactPhone
      createdAt
      allowOffList
      leafDiscount
      idx
      campaignCode
      status
      updatedAt
      __typename
    }
    clientCampaignUnit {
      id
      clientCampaignID
      name
      notes
      search
      contactName
      contactEmail
      contactPhone
      totalEligibles
      totalContractedVaccines
      qtyVisits
      qtyVisitsConfirmed
      routingRegionID
      code
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateOSMutationVariables,
  APITypes.UpdateOSMutation
>;
export const deleteOS = /* GraphQL */ `mutation DeleteOS($input: DeleteOSInput!, $condition: ModelOSConditionInput) {
  deleteOS(input: $input, condition: $condition) {
    id
    clientID
    clientCampaignID
    clientCampaignUnitID
    driverID
    professionals
    collaborators
    companies
    number
    start
    expiration
    orientation
    notes
    status
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
    search
    eligiblesVaccination {
      nextToken
      __typename
    }
    client {
      id
      name
      cnpj
      fullName
      notes
      group
      origin
      status
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
    clientCampaign {
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
      totalVaccinationsDependent
      totalVaccinationsThird
      search
      responsible
      number
      contactName
      contactEmail
      contactPhone
      createdAt
      allowOffList
      leafDiscount
      idx
      campaignCode
      status
      updatedAt
      __typename
    }
    clientCampaignUnit {
      id
      clientCampaignID
      name
      notes
      search
      contactName
      contactEmail
      contactPhone
      totalEligibles
      totalContractedVaccines
      qtyVisits
      qtyVisitsConfirmed
      routingRegionID
      code
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteOSMutationVariables,
  APITypes.DeleteOSMutation
>;
export const createRoutingRegion = /* GraphQL */ `mutation CreateRoutingRegion(
  $input: CreateRoutingRegionInput!
  $condition: ModelRoutingRegionConditionInput
) {
  createRoutingRegion(input: $input, condition: $condition) {
    id
    name
    zipCode
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRoutingRegionMutationVariables,
  APITypes.CreateRoutingRegionMutation
>;
export const updateRoutingRegion = /* GraphQL */ `mutation UpdateRoutingRegion(
  $input: UpdateRoutingRegionInput!
  $condition: ModelRoutingRegionConditionInput
) {
  updateRoutingRegion(input: $input, condition: $condition) {
    id
    name
    zipCode
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRoutingRegionMutationVariables,
  APITypes.UpdateRoutingRegionMutation
>;
export const deleteRoutingRegion = /* GraphQL */ `mutation DeleteRoutingRegion(
  $input: DeleteRoutingRegionInput!
  $condition: ModelRoutingRegionConditionInput
) {
  deleteRoutingRegion(input: $input, condition: $condition) {
    id
    name
    zipCode
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRoutingRegionMutationVariables,
  APITypes.DeleteRoutingRegionMutation
>;
export const createRouting = /* GraphQL */ `mutation CreateRouting(
  $input: CreateRoutingInput!
  $condition: ModelRoutingConditionInput
) {
  createRouting(input: $input, condition: $condition) {
    id
    start
    end
    regionID
    qty
    title
    description
    backgroundColor
    textColor
    borderColor
    notes
    search
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRoutingMutationVariables,
  APITypes.CreateRoutingMutation
>;
export const updateRouting = /* GraphQL */ `mutation UpdateRouting(
  $input: UpdateRoutingInput!
  $condition: ModelRoutingConditionInput
) {
  updateRouting(input: $input, condition: $condition) {
    id
    start
    end
    regionID
    qty
    title
    description
    backgroundColor
    textColor
    borderColor
    notes
    search
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRoutingMutationVariables,
  APITypes.UpdateRoutingMutation
>;
export const deleteRouting = /* GraphQL */ `mutation DeleteRouting(
  $input: DeleteRoutingInput!
  $condition: ModelRoutingConditionInput
) {
  deleteRouting(input: $input, condition: $condition) {
    id
    start
    end
    regionID
    qty
    title
    description
    backgroundColor
    textColor
    borderColor
    notes
    search
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRoutingMutationVariables,
  APITypes.DeleteRoutingMutation
>;
export const createRoutingOSs = /* GraphQL */ `mutation CreateRoutingOSs(
  $input: CreateRoutingOSsInput!
  $condition: ModelRoutingOSsConditionInput
) {
  createRoutingOSs(input: $input, condition: $condition) {
    id
    routingID
    routing {
      id
      start
      end
      regionID
      qty
      title
      description
      backgroundColor
      textColor
      borderColor
      notes
      search
      createdAt
      updatedAt
      __typename
    }
    osID
    os {
      id
      clientID
      clientCampaignID
      clientCampaignUnitID
      driverID
      professionals
      collaborators
      companies
      number
      start
      expiration
      orientation
      notes
      status
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
      search
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRoutingOSsMutationVariables,
  APITypes.CreateRoutingOSsMutation
>;
export const updateRoutingOSs = /* GraphQL */ `mutation UpdateRoutingOSs(
  $input: UpdateRoutingOSsInput!
  $condition: ModelRoutingOSsConditionInput
) {
  updateRoutingOSs(input: $input, condition: $condition) {
    id
    routingID
    routing {
      id
      start
      end
      regionID
      qty
      title
      description
      backgroundColor
      textColor
      borderColor
      notes
      search
      createdAt
      updatedAt
      __typename
    }
    osID
    os {
      id
      clientID
      clientCampaignID
      clientCampaignUnitID
      driverID
      professionals
      collaborators
      companies
      number
      start
      expiration
      orientation
      notes
      status
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
      search
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRoutingOSsMutationVariables,
  APITypes.UpdateRoutingOSsMutation
>;
export const deleteRoutingOSs = /* GraphQL */ `mutation DeleteRoutingOSs(
  $input: DeleteRoutingOSsInput!
  $condition: ModelRoutingOSsConditionInput
) {
  deleteRoutingOSs(input: $input, condition: $condition) {
    id
    routingID
    routing {
      id
      start
      end
      regionID
      qty
      title
      description
      backgroundColor
      textColor
      borderColor
      notes
      search
      createdAt
      updatedAt
      __typename
    }
    osID
    os {
      id
      clientID
      clientCampaignID
      clientCampaignUnitID
      driverID
      professionals
      collaborators
      companies
      number
      start
      expiration
      orientation
      notes
      status
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
      search
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRoutingOSsMutationVariables,
  APITypes.DeleteRoutingOSsMutation
>;
export const updateAuthorizationListMember = /* GraphQL */ `mutation UpdateAuthorizationListMember(
  $input: UpdateAuthorizationListMemberInput!
  $condition: ModelAuthorizationListMemberConditionInput
) {
  updateAuthorizationListMember(input: $input, condition: $condition) {
    id
    authorizationListID
    name
    key
    cpf
    birth
    search
    others
    vaccinations {
      nextToken
      __typename
    }
    authorizationList {
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAuthorizationListMemberMutationVariables,
  APITypes.UpdateAuthorizationListMemberMutation
>;
export const createAuthorizationListMemberVaccination = /* GraphQL */ `mutation CreateAuthorizationListMemberVaccination(
  $input: CreateAuthorizationListMemberVaccinationInput!
  $condition: ModelAuthorizationListMemberVaccinationConditionInput
) {
  createAuthorizationListMemberVaccination(
    input: $input
    condition: $condition
  ) {
    id
    authorizationListID
    authorizationList {
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
    authorizationListMemberID
    authorizationListMember {
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
    profissionalID
    profissional {
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
}
` as GeneratedMutation<
  APITypes.CreateAuthorizationListMemberVaccinationMutationVariables,
  APITypes.CreateAuthorizationListMemberVaccinationMutation
>;
export const updateAuthorizationListMemberVaccination = /* GraphQL */ `mutation UpdateAuthorizationListMemberVaccination(
  $input: UpdateAuthorizationListMemberVaccinationInput!
  $condition: ModelAuthorizationListMemberVaccinationConditionInput
) {
  updateAuthorizationListMemberVaccination(
    input: $input
    condition: $condition
  ) {
    id
    authorizationListID
    authorizationList {
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
    authorizationListMemberID
    authorizationListMember {
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
    profissionalID
    profissional {
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
}
` as GeneratedMutation<
  APITypes.UpdateAuthorizationListMemberVaccinationMutationVariables,
  APITypes.UpdateAuthorizationListMemberVaccinationMutation
>;
export const deleteAuthorizationListMemberVaccination = /* GraphQL */ `mutation DeleteAuthorizationListMemberVaccination(
  $input: DeleteAuthorizationListMemberVaccinationInput!
  $condition: ModelAuthorizationListMemberVaccinationConditionInput
) {
  deleteAuthorizationListMemberVaccination(
    input: $input
    condition: $condition
  ) {
    id
    authorizationListID
    authorizationList {
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
    authorizationListMemberID
    authorizationListMember {
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
    profissionalID
    profissional {
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
}
` as GeneratedMutation<
  APITypes.DeleteAuthorizationListMemberVaccinationMutationVariables,
  APITypes.DeleteAuthorizationListMemberVaccinationMutation
>;
