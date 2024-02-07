import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};


export const getUserCustom = /* GraphQL */ `
  query GetUserCustom($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      phone
      status
      active
      avatar
      profile {
        doc
        docType
        docProfession
        allowViewEmail
        allowViewPhone
        customerPagarmeID
        birth
        company {
          id
          name
        }
      }
    }
  }
`
export const listRelationsByTypeUpdatedAtCustom = /* GraphQL */ `
  query ListRelationsByTypeUpdatedAtCustom(
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
        relationsLink {
          nextToken
        }
        messages {
          nextToken
        }
      }
      nextToken
    }
  }
`
export const listRelationsByTypeModeUpdatedAtCustom = /* GraphQL */ `
  query ListRelationsByTypeModeUpdatedAtCustom(
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
        relationsLink {
          nextToken
        }
        messages {
          nextToken
        }
      }
      nextToken
    }
  }
`
export const getRelationCustom = /* GraphQL */ `
  query GetRelationCustom($id: ID!) {
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
      createdAt
    }
  }
`
export const listRelationsByTypeStatusUpdatedAtCustom = /* GraphQL */ `
  query ListRelationsByTypeStatusUpdatedAtCustom(
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
        createdAt
        messages {
          items {
            content
            createdAt
            id
            type
            userID
            user {
              id
              email
              name
              phone
            }
          }
          nextToken
        }
        relationsLink {
          items {
            id
          }
        }
      }
      nextToken
    }
  }
`
export const listLogsByTagCreatedAtCustom = /* GraphQL */ `
  query ListLogsByTagCreatedAtCustom(
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
        user {
          name
          email
          phone
          active
          avatar
        }
      }
      nextToken
    }
  }
`
export const listLogsBySourceCreatedAtCustom = /* GraphQL */ `
  query ListLogsBySourceCreatedAtCustom(
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
        user {
          name
          email
          phone
          active
          avatar
        }
      }
      nextToken
    }
  }
`
export const listLogsByUserTagCreatedAtCustom = /* GraphQL */ `
  query ListLogsByUserTagCreatedAtCustom(
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
        user {
          name
          email
          phone
          active
          avatar
        }
      }
      nextToken
    }
  }
`
export const listLogsByUserCreatedAtCustom = /* GraphQL */ `
  query ListLogsByUserCreatedAtCustom(
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
        user {
          name
          email
          phone
          active
          avatar
        }
      }
      nextToken
    }
  }
`
export const getPageCustom = /* GraphQL */ `
  query GetPageCustom($id: ID!) {
    getPage(id: $id) {
      id
      alias
      status
      type
      menu
      order
      title
      description
      content
      contentPadX
      contentPadY
      tags
      thumbnail
      changeFreq
      priority
      optionTitle
      titlePadX
      titlePadY
      sideColumn
      sideColumnPadX
      sideColumnPadY
      sideColumnContent
      optionSideColumn
      hideFooter
      hideInMenu
      createdAt
      updatedAt
      blocks {
        items {
          component
          config
          content
          order
        }
      }
    }
  }
`
export const listPagesByAliasCreatedAtCustom = /* GraphQL */ `
  query ListPagesByAliasCreatedAtCustom(
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
        menuProps {
          orderDesc
          showThumbnailPage
          showDescriptionPage
        }
        order
        title
        description
        content
        contentPadX
        contentPadY
        tags
        thumbnail
        changeFreq
        priority
        optionTitle
        titlePadX
        titlePadY
        sideColumn
        sideColumnPadX
        sideColumnPadY
        sideColumnContent
        optionSideColumn
        hideFooter
        hideInMenu
        createdAt
        updatedAt
        blocks {
          items {
            component
            config
            content
            order
          }
        }
      }
      nextToken
    }
  }
`
export const listPagesByStatusMenuOrderCustom = /* GraphQL */ `
  query ListPagesByStatusMenuOrderCustom(
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
        title
        description
        thumbnail
        hideInMenu
        order
      }
      nextToken
    }
  }
`
export const listPagesByStatusMenuOrderCustom2 = /* GraphQL */ `
  query ListPagesByStatusMenuOrderCustom2(
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
        blocks {
          items {
            component
            config
            content
            order
          }
        }
      }
      nextToken
    }
  }
`
export const getProductCustom = /* GraphQL */ `
  query GetProductCustom($id: ID!) {
    getProduct(id: $id) {
      id
      alias
      status
      category
      code
      name
      description
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
      hideInSearch
      createdAt
      updatedAt
      options {
        items {
          id
          name
          price
        }
      }
      kitItems {
        items {
          productID
          product {
            name
          }
        }
      }
    }
  }
`
export const listProductsByAliasCreatedAtCustom = /* GraphQL */ `
  query ListProductsByAliasCreatedAtCustom(
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
        code
        name
        description
        contentTitle
        contentTitle2
        contentTitle3
        content
        content2
        content3
        type
        tags
        changeFreq
        priority
        price_of
        price
        qty
        stockControl
        photo1
        photo2
        photo3
        photo4
        photo5
        thumbnail
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
        hideInSearch
        createdAt
        updatedAt
        options {
          items {
            id
            name
            price
          }
        }
        kitItems {
          items {
            productID
            product {
              name
            }
          }
        }
      }
      nextToken
    }
  }
`
export const listProductsByStatusCategoryNameCustom = /* GraphQL */ `
  query ListProductsByStatusCategoryNameCustom(
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
        name
        description
        hideInMenu
        price_of
        price
        qty
        stockControl
        photo1
        thumbnail
        subCategory
        subCategoryProps {
          id
          title
        }
        kitItems {
          items {
            productID
            product {
              name
            }
          }
        }
      }
      nextToken
    }
  }
`
export const listCartsByUserCustom = /* GraphQL */ `
  query ListCartsByUserCustom(
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
        product {
          thumbnail
          photo1
          name
          description
          code
          price
          qty
          stockControl
          categoryProps {
            title
          }
          kitItems {
            items {
              productID
              product {
                name
              }
            }
          }
        }
        options {
          items {
            id
            optionID
            option {
              name
              price
            }
          }
        }
      }
      nextToken
    }
  }
`
export const listProductsByCategorySubCategoryNameCustom = /* GraphQL */ `
  query ListProductsByCategorySubCategoryNameCustom(
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
        description
        contentTitle
        contentTitle2
        contentTitle3
        content
        content2
        content3
        type
        tags
        changeFreq
        priority
        price_of
        price
        qty
        stockControl
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
        categoryProps {
          id
          title
          description
          thumbnail
        }
      }
      nextToken
    }
  }
`
export const listProductsByStatusCategoryNameCustom2 = /* GraphQL */ `
  query ListProductsByStatusCategoryNameCustom2(
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
        description
        contentTitle
        contentTitle2
        contentTitle3
        content
        content2
        content3
        type
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
        subCategoryProps {
          id
          title
          description
          thumbnail
        }
        kitItems {
          items {
            productID
            product {
              name
            }
          }
        }
      }
      nextToken
    }
  }
`
export const listUsersCustom = /* GraphQL */ `
  query ListUsersCustom(
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
        groups {
          items {
            group
          }
        }
        addresses {
          items {
            name
            street
            number
            complement
            zipcode
            neighborhood
            city
            state
            country
            reference
          }
        }
        carts {
          items {
            product {
              name
              categoryProps {
                title
              }
              code
              alias
              price
            }
            createdAt
            qty
          }
        }
        ordersByCreatedAt(sortDirection: DESC) {
          items {
            id
            status
            total
          }
        }
        profile {
          schedulesFriday
          schedulesMonday
          schedulesSaturday
          schedulesSunday
          schedulesThursday
          schedulesTuesday
          schedulesWednesday
          zipCodeCoverage
          subSpecialties
          specialties
          profession
          notes
          gender
          birth
          pix
          doc
          customerPagarmeID
        }
      }
      nextToken
    }
  }
`
export const listUsersByGroupCustom = /* GraphQL */ `
  query ListUsersByGroupCustom(
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
        userID
        user {
          id
          name
          phone
          email
          avatar
          active
          createdAt
        }
        profile {
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
          zipCodeCoverage
          schedulesSunday
          schedulesMonday
          schedulesTuesday
          schedulesWednesday
          schedulesThursday
          schedulesFriday
          schedulesSaturday
          companyHomeCare
          companyCampaign
          companyID
          regionsConfig
          regionSunday
          regionMonday
          regionTuesday
          regionWednesday
          regionThursday
          regionFriday
          regionSaturday
          customerPagarmeID
        }
      }
      nextToken
    }
  }
`
export const listOrdersByUserCreatedAtCustom = /* GraphQL */ `
  query ListOrdersByUserCreatedAtCustom(
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
        updatedAt
        adherenceID
        adherenceName
        adherenceOrientation
        companyID
        companyName
        companyPhone
        companyOpeningHours
        company {
          name
          phones
          street
          number
          complement
          zipcode
          neighborhood
          city
          state
          status
        }
        notes
        qrCodePix
        qrCodePixUrl
        payMethod
        installments
        homeCareOrRetail
        user {
          name
          email
          phone
          avatar
          createdAt
        }
        items {
          items {
            id
            qty
            code
            name
            description
            price
            photo1
            changeName
            changeDescription
            changeNameAdmin
            product {
              categoryProps {
                title
              }
              name
              kitItems {
                items {
                  productID
                  product {
                    name
                  }
                }
              }
            }
            optionsItem {
              items {
                option {
                  name
                  price
                }
              }
            }
          }
        }
      }
      nextToken
    }
  }
`
export const listOrdersByStatusCreatedAtCustom = /* GraphQL */ `
  query ListOrdersByStatusCreatedAtCustom(
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
        updatedAt
        adherenceID
        adherenceName
        adherenceOrientation
        companyID
        companyName
        companyPhone
        companyOpeningHours
        company {
          name
          phones
          street
          number
          complement
          zipcode
          neighborhood
          city
          state
        }
        notes
        qrCodePix
        qrCodePixUrl
        payMethod
        installments
        homeCareOrRetail
        user {
          name
          email
          phone
          avatar
          createdAt
          addresses {
            items {
              street
              number
              complement
              zipcode
              neighborhood
              city
              state
            }
          }
        }
        profile {
          doc
        }
        items {
          items {
            id
            qty
            code
            name
            description
            price
            photo1
            changeName
            changeDescription
            changeNameAdmin
            product {
              categoryProps {
                title
              }
              name
              kitItems {
                items {
                  productID
                  product {
                    name
                  }
                }
              }
            }
            optionsItem {
              items {
                option {
                  name
                  price
                }
              }
            }
          }
        }
      }
      nextToken
    }
  }
`
export const listAdherenceByCodeCustom = /* GraphQL */ `
  query ListAdherenceByCodeCustom(
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
        start
        expiration
        discountPercentage
        discountValue
        qtyLimit
        qtyUsed
        orientation
        orderMessage
        zipCodeCoverage
        createdAt
        updatedAt
        products {
          items {
            price
            limit
            product {
              id
              name
            }
          }
        }
      }
      nextToken
    }
  }
`
export const listDeliveryByOrderCustom = /* GraphQL */ `
  query ListDeliveryByOrderCustom(
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
        deliveryUser {
          name
          email
          phone
          avatar
        }
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`
export const listDeliveryByDateUserCustom = /* GraphQL */ `
  query ListDeliveryByDateUserCustom(
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
        status
        createdAt
        updatedAt
        deliveryUser {
          name
          email
          phone
          avatar
        }
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
          updatedAt
          notes
          user {
            name
            email
            phone
            avatar
            createdAt
          }
          items {
            items {
              qty
              code
              name
              description
              price
              photo1
              changeName
              changeDescription
              changeNameAdmin
              product {
                categoryProps {
                  title
                }
                name
              }
              optionsItem {
                items {
                  option {
                    name
                    price
                  }
                }
              }
            }
          }
        }
      }
      nextToken
    }
  }
`
export const listDeliveryByCompanyDateCustom = /* GraphQL */ `
  query ListDeliveryByCompanyDateCustom(
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
        status
        createdAt
        updatedAt
        deliveryUser {
          name
          email
          phone
          avatar
          profile {
            docProfession
          }
        }
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
          updatedAt
          notes
          user {
            name
            email
            phone
            avatar
            createdAt
            profile {
              doc
            }
          }
          items {
            items {
              qty
              code
              name
              description
              price
              photo1
              changeName
              changeDescription
              changeNameAdmin
              product {
                categoryProps {
                  title
                }
                name
              }
              optionsItem {
                items {
                  option {
                    name
                    price
                  }
                }
              }
            }
          }
        }
      }
      nextToken
    }
  }
`
export const listDeliveryByUserDateCustom = /* GraphQL */ `
  query ListDeliveryByUserDateCustom(
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
        status
        createdAt
        updatedAt
        deliveryUser {
          name
          email
          phone
          avatar
        }
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
          updatedAt
          notes
          user {
            name
            email
            phone
            avatar
            createdAt
          }
          items {
            items {
              qty
              code
              name
              description
              price
              photo1
              changeName
              changeDescription
              changeNameAdmin
              product {
                categoryProps {
                  title
                }
                name
              }
              optionsItem {
                items {
                  option {
                    name
                    price
                  }
                }
              }
            }
          }
        }
      }
      nextToken
    }
  }
`
export const listDeliveryOrdersCustom = /* GraphQL */ `
  query ListDeliveryOrdersCustom(
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
        status
        createdAt
        updatedAt
        deliveryUser {
          name
          email
          phone
          avatar
        }
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
          updatedAt
          notes
          user {
            name
            email
            phone
            avatar
            createdAt
          }
          items {
            items {
              qty
              code
              name
              description
              price
              photo1
              changeName
              changeDescription
              changeNameAdmin
              product {
                categoryProps {
                  title
                }
                name
              }
              optionsItem {
                items {
                  option {
                    name
                    price
                  }
                }
              }
            }
          }
        }
      }
      nextToken
    }
  }
`
export const listDeliveryByStatusDateCustom = /* GraphQL */ `
  query ListDeliveryByStatusDateCustom(
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
        status
        createdAt
        updatedAt
        deliveryUser {
          name
          email
          phone
          avatar
        }
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
          updatedAt
          notes
          user {
            name
            email
            phone
            avatar
            createdAt
          }
          items {
            items {
              qty
              code
              name
              description
              price
              photo1
              changeName
              changeDescription
              changeNameAdmin
              product {
                categoryProps {
                  title
                }
                name
              }
              optionsItem {
                items {
                  option {
                    name
                    price
                  }
                }
              }
            }
          }
        }
      }
      nextToken
    }
  }
`

export const listProductsCustom = /* GraphQL */ `
  query ListProductsCustom(
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
        description
        contentTitle
        contentTitle2
        contentTitle3
        content
        content2
        content3
        type
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
        hideInSearch
        createdAt
        search
        updatedAt
        subCategoryProps {
          id
          title
          description
          thumbnail
        }
        kitItems {
          items {
            productID
            product {
              name
            }
          }
        }
      }
      nextToken
    }
  }
`
export const listProductsCustomNAPP = /* GraphQL */ `
  query ListProductsCustomNAPP(
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
        name
        description
        manufacturer
        price
        qty
        status
      }
      nextToken
    }
  }
`
export const listUsedByAdherenceCustom = /* GraphQL */ `
  query ListUsedByAdherenceCustom(
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
        createdAt
        updatedAt
        qty
        user {
          name
          email
          phone
          avatar
        }
      }
      nextToken
    }
  }
`
export const listUsedByCouponCustom = /* GraphQL */ `
  query ListUsedByCouponCustom(
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
        createdAt
        updatedAt
        user {
          name
          email
          phone
          avatar
        }
      }
      nextToken
    }
  }
`
export const getOrderCustom = /* GraphQL */ `
  query GetOrderCustom($id: ID!) {
    getOrder(id: $id) {
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
      updatedAt
      adherenceID
      adherenceName
      adherenceOrientation
      companyID
      companyName
      companyPhone
      companyOpeningHours
      company {
        name
        phones
        street
        number
        complement
        zipcode
        neighborhood
        city
        state
        status
      }
      notes
      qrCodePix
      qrCodePixUrl
      payMethod
      installments
      homeCareOrRetail
      user {
        name
        email
        phone
        avatar
        createdAt
        addresses {
          items {
            street
            number
            complement
            zipcode
            neighborhood
            city
            state
          }
        }
      }
      profile {
        doc
      }
      items {
        items {
          id
          qty
          code
          name
          description
          price
          photo1
          changeName
          changeDescription
          changeNameAdmin
          product {
            id
            categoryProps {
              title
            }
            name
            kitItems {
              items {
                productID
                product {
                  name
                }
              }
            }
          }
          optionsItem {
            items {
              option {
                name
                price
              }
            }
          }
        }
      }
    }
  }
`
export const listVaccinationCardsItemsByVaccinationCardCustom = /* GraphQL */ `
  query ListVaccinationCardsItemsByVaccinationCardCustom(
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
        order {
          createdAt
        }
        orderItemID
        orderItem {
          name
          description
          price
          changeName
          changeDescription
          changeNameAdmin
        }
        lote
        profissionalID
        profissionalName
        coren
        dueDate
        applicationDate
        createdAt
        updatedAt
        userID
      }
      nextToken
    }
  }
`
export const getAdherenceCustom = /* GraphQL */ `
  query GetAdherenceCustom($id: ID!) {
    getAdherence(id: $id) {
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
      orientation
      zipCodeCoverage
      products {
        nextToken
      }
      adherenceUsed {
        nextToken
      }
      companies {
        items {
          company {
            id
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
            enableRetail
            schedulesSunday
            schedulesMonday
            schedulesTuesday
            schedulesWednesday
            schedulesThursday
            schedulesFriday
            schedulesSaturday
            status
          }
        }
      }
      createdAt
      updatedAt
    }
  }
`
export const listProfilesByCompanyCustom = /* GraphQL */ `
  query ListProfilesByCompanyCustom(
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
        user {
          name
          email
          phone
          avatar
        }
      }
      nextToken
    }
  }
`
export const listOrdersByAdherenceCreatedAtCustom = /* GraphQL */ `
  query ListOrdersByAdherenceCreatedAtCustom(
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
        status
        createdAt
        total
        user {
          name
          email
          phone
        }
        profile {
          doc
        }
        company {
          name
          city
          state
        }
        items {
          items {
            qty
            name
            price
          }
        }
        vaccinationCardItems {
          items {
            vaccinationCard {
              person
              doc
              birth
              relationship
            }
          }
        }
      }
      nextToken
    }
  }
`
export const listCompaniesByAdherenceCustom = /* GraphQL */ `
  query ListCompaniesByAdherenceCustom(
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
        company {
          id
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
          enableRetail
          schedulesSunday
          schedulesMonday
          schedulesTuesday
          schedulesWednesday
          schedulesThursday
          schedulesFriday
          schedulesSaturday
          status
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`
export const listVaccinationCardsItemsByOrderCustom = /* GraphQL */ `
  query ListVaccinationCardsItemsByOrderCustom(
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
        vaccinationCard {
          person
          doc
          birth
          avatar
        }
        order {
          id
          createdAt
        }
        orderItem {
          name
        }
        adherence {
          name
        }
        company {
          name
        }
        orderID
        orderItemID
        adherenceID
        companyID
        lote
        profissionalID
        profissionalName
        coren
        dueDate
        applicationDate
        createdAt
        updatedAt
        userID
      }
      nextToken
    }
  }
`
export const listVaccinationCardsItemsByAdherenceCustom = /* GraphQL */ `
  query ListVaccinationCardsItemsByAdherenceCustom(
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
        vaccinationCard {
          person
          doc
          birth
        }
        order {
          createdAt
        }
        orderItem {
          name
        }
        company {
          name
        }
        lote
        profissionalName
        profissional {
          profile {
            company {
              name
            }
          }
        }
        coren
        dueDate
        applicationDate
      }
      nextToken
    }
  }
`
export const listVaccinationCardItemsCustom = /* GraphQL */ `
  query ListVaccinationCardItemsCustom(
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
        companyID
        lote
        profissionalID
        profissionalName
        coren
        dueDate
        applicationDate
        createdAt
        updatedAt
        userID
        vaccinationCard {
          person
          doc
          birth
          avatar
        }
        order {
          id
          createdAt
          addressCity
          addressState
        }
        adherence {
          name
        }
        company {
          name
        }
      }
      nextToken
    }
  }
`
export const listVaccinationCardsItemsByProfissionalCustom = /* GraphQL */ `
  query ListVaccinationCardsItemsByProfissionalCustom(
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
        companyID
        lote
        profissionalID
        profissionalName
        coren
        dueDate
        applicationDate
        vaccinationCard {
          person
          doc
          birth
          avatar
        }
        order {
          id
          createdAt
        }
        orderItem {
          name
        }
        adherence {
          name
        }
        company {
          name
        }
      }
      nextToken
    }
  }
`
export const listVaccinationCardsItemsByStatusCustom = /* GraphQL */ `
  query ListVaccinationCardsItemsByStatusCustom(
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
        companyID
        lote
        profissionalID
        profissionalName
        coren
        dueDate
        applicationDate
        vaccinationCard {
          person
          doc
          birth
          avatar
        }
        order {
          id
          createdAt
        }
        orderItem {
          name
        }
        adherence {
          name
        }
        company {
          name
        }
      }
      nextToken
    }
  }
`
export const listVaccinationCardsItemsByStatusCustomNAPP = /* GraphQL */ `
  query ListVaccinationCardsItemsByStatusCustomNAPP(
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
        applicationDate
        status
        orderItem {
          price
          qty
          product {
            name
            id
            manufacturer
          }
        }
      }
      nextToken
    }
  }
`
export const listVaccinationCardsItemsByStatusCustomNAPP2 = /* GraphQL */ `
  query ListVaccinationCardsItemsByStatusCustomNAPP2(
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
        lote
        dueDate
        orderItem {
          id
          name
          qty
        }
      }
      nextToken
    }
  }
`
export const listMembersVaccinationByAuthorizationListCustom = /* GraphQL */ `
  query ListMembersVaccinationByAuthorizationListCustom(
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
        authorizationListMember {
          id
          key
          name
          cpf
          birth
          others
        }
        profissional {
          name
          profile {
            doc
            company {
              name
            }
          }
        }
        coren
        lote
        dueDate
        OS
        applicationDate
        applicationTime
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`
export const listVaccinationCardsByUserCustom = /* GraphQL */ `
  query ListVaccinationCardsByUserCustom(
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
        vaccinationCardItem {
          items {
            orderItem {
              name
            }
            adherence {
              name
            }
            company {
              name
            }
            lote
            profissionalName
            coren
            dueDate
            applicationDate
            status
          }
        }
      }
      nextToken
    }
  }
`
export const getUserByEmailCustom = /* GraphQL */ `
  query GetUserByEmailCustom(
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
        groups {
          items {
            group
          }
        }
        addresses {
          items {
            name
            street
            number
            complement
            zipcode
            neighborhood
            city
            state
            country
            reference
          }
        }
        carts {
          items {
            product {
              name
              categoryProps {
                title
              }
              code
              alias
              price
            }
            createdAt
            qty
          }
        }
        ordersByCreatedAt(sortDirection: DESC) {
          items {
            id
            status
            total
          }
        }
        profile {
          schedulesFriday
          schedulesMonday
          schedulesSaturday
          schedulesSunday
          schedulesThursday
          schedulesTuesday
          schedulesWednesday
          zipCodeCoverage
          subSpecialties
          specialties
          profession
          notes
          gender
          birth
          pix
          doc
          customerPagarmeID
        }
      }
      nextToken
    }
  }
`
export const getUserByPhoneCustom = /* GraphQL */ `
  query GetUserByPhoneCustom(
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
        groups {
          items {
            group
          }
        }
        addresses {
          items {
            name
            street
            number
            complement
            zipcode
            neighborhood
            city
            state
            country
            reference
          }
        }
        carts {
          items {
            product {
              name
              categoryProps {
                title
              }
              code
              alias
              price
            }
            createdAt
            qty
          }
        }
        ordersByCreatedAt(sortDirection: DESC) {
          items {
            id
            status
            total
          }
        }
        profile {
          schedulesFriday
          schedulesMonday
          schedulesSaturday
          schedulesSunday
          schedulesThursday
          schedulesTuesday
          schedulesWednesday
          zipCodeCoverage
          subSpecialties
          specialties
          profession
          notes
          gender
          birth
          pix
          doc
          customerPagarmeID
        }
      }
      nextToken
    }
  }
`
export const listCouponsByCodeCustom = /* GraphQL */ `
  query ListCouponsByCodeCustom(
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
        products {
          items {
            price
            limit
            product {
              id
              name
            }
          }
        }
      }
      nextToken
    }
  }
`
export const listVaccinationCardsItemsByCompanyCustom = /* GraphQL */ `
  query ListVaccinationCardsItemsByCompanyCustom(
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
        vaccinationCard {
          person
          doc
          birth
        }
        order {
          createdAt
        }
        orderItem {
          name
        }
        company {
          name
          city
        }
        lote
        profissionalName
        profissional {
          profile {
            userID
            company {
              name
            }
          }
        }
        coren
        dueDate
        via
        applicationDate
      }
      nextToken
    }
  }
`
export const listRelationsLinkByRelationUserCustom = /* GraphQL */ `
  query ListRelationsLinkByRelationUserCustom(
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
        updatedAt
        createdAt
        user {
          name
          email
          phone
          avatar
        }
      }
      nextToken
    }
  }
`
export const listMessagesByRelationCreatedAtCustom = /* GraphQL */ `
  query ListMessagesByRelationCreatedAtCustom(
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
        userID
        type
        content
        search
        identityId
        createdAt
        status
        user {
          name
          avatar
        }
      }
      nextToken
    }
  }
`
export const listRelationsLinkByUserTypeNotifyUpdatedAtCustom = /* GraphQL */ `
  query ListRelationsLinkByUserTypeNotifyUpdatedAtCustom(
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
        createdAt
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
          createdAt
        }
      }
      nextToken
    }
  }
`
export const getProfileByDocCustom = /* GraphQL */ `
  query GetProfileByDocCustom(
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
        birth
        customerPagarmeID
        user {
          name
          email
          phone
          avatar
          addresses {
            items {
              id
              street
              number
              complement
              zipcode
              neighborhood
              city
              state
            }
          }
        }
      }
      nextToken
    }
  }
`
export const getOrderCustom2 = /* GraphQL */ `
  query GetOrderCustom2($id: ID!) {
    getOrder(id: $id) {
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
      updatedAt
      adherenceID
      adherenceName
      adherenceOrientation
      companyID
      companyName
      companyPhone
      companyOpeningHours
      company {
        name
        phones
        street
        number
        complement
        zipcode
        neighborhood
        city
        state
        status
      }
      notes
      qrCodePix
      qrCodePixUrl
      payMethod
      installments
      homeCareOrRetail
      items {
        items {
          id
          qty
          code
          name
          description
          price
          photo1
          changeName
          changeDescription
          changeNameAdmin
          product {
            id
            categoryProps {
              title
            }
            name
            kitItems {
              items {
                productID
                product {
                  name
                }
              }
            }
          }
          optionsItem {
            items {
              option {
                name
                price
              }
            }
          }
        }
      }
    }
  }
`
export const listMembersByCPFCustom = /* GraphQL */ `
  query ListMembersByCPFCustom(
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
        authorizationList {
          name
          start
          expiration
        }
      }
      nextToken
    }
  }
`
export const listMembersByKeyCustom = /* GraphQL */ `
  query ListMembersByKeyCustom(
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
        authorizationList {
          name
          start
          expiration
        }
      }
      nextToken
    }
  }
`
export const listAuthorizationListMembersCustom = /* GraphQL */ `
  query ListAuthorizationListMembersCustom(
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
        authorizationList {
          name
          start
          expiration
        }
      }
      nextToken
    }
  }
`
export const listMembersByAuthorizationListKeyCustom = /* GraphQL */ `
  query ListMembersByAuthorizationListKeyCustom(
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
        authorizationList {
          name
          start
          expiration
        }
      }
      nextToken
    }
  }
`
export const listMembersByAuthorizationListCPFCustom = /* GraphQL */ `
  query ListMembersByAuthorizationListCPFCustom(
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
        authorizationList {
          name
          start
          expiration
        }
      }
      nextToken
    }
  }
`
export const listAdherencesCustom = /* GraphQL */ `
  query ListAdherencesCustom(
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
        products {
          items {
            price
            limit
            product {
              id
              name
            }
          }
        }
      }
      nextToken
    }
  }
`
export const listVaccinationsByAuthorizationListMemberCustom = /* GraphQL */ `
  query ListVaccinationsByAuthorizationListMemberCustom(
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
        authorizationList {
          name
        }
        authorizationListMember {
          name
        }
      }
      nextToken
    }
  }
`
export const listOSsCustom = /* GraphQL */ `query ListOSsCustom(
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
      client {
          name
          code
          eligibles {
            items {
              id
            }
          }
        }
        clientUnit {
          code
          name
          street
          number
          complement
          zipcode
          neighborhood
          city
          state
          country
          notes
          search
          contactName
          contactEmail
          contactPhone
        }
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListOSsQueryVariables, APITypes.ListOSsQuery>;
export const listOSsByNumberCustom = /* GraphQL */ `query ListOSsByNumberCustom(
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
      client {
          name
          code
          eligibles {
            items {
              id
            }
          }
        }
        clientUnit {
          code
          name
          street
          number
          complement
          zipcode
          neighborhood
          city
          state
          country
          notes
          search
          contactName
          contactEmail
          contactPhone
        }
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
export const listOSsByStatusNumberCustom = /* GraphQL */ `query ListOSsByStatusNumberCustom(
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
      client {
          name
          code
          eligibles {
            items {
              id
            }
          }
        }
        clientUnit {
          code
          name
          street
          number
          complement
          zipcode
          neighborhood
          city
          state
          country
          notes
          search
          contactName
          contactEmail
          contactPhone
        }
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
export const listClientUserByClientCustom = /* GraphQL */ `query ListClientUserByClientCustom(
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
      user {
        name
        avatar
        email
        phone
        active
      }
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
export const listOrdersCustom = /* GraphQL */ `query ListOrdersCustom(
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
        updatedAt
        adherenceID
        adherenceName
        adherenceOrientation
        companyID
        companyName
        companyPhone
        companyOpeningHours
        company {
          name
          phones
          street
          number
          complement
          zipcode
          neighborhood
          city
          state
        }
        notes
        qrCodePix
        qrCodePixUrl
        payMethod
        installments
        homeCareOrRetail
        user {
          name
          email
          phone
          avatar
          createdAt
          addresses {
            items {
              street
              number
              complement
              zipcode
              neighborhood
              city
              state
            }
          }
        }
        profile {
          doc
        }
        items {
          items {
            id
            qty
            code
            name
            description
            price
            photo1
            changeName
            changeDescription
            changeNameAdmin
            product {
              categoryProps {
                title
              }
              name
              kitItems {
                items {
                  productID
                  product {
                    name
                  }
                }
              }
            }
            optionsItem {
              items {
                option {
                  name
                  price
                }
              }
            }
          }
        }
      }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrdersQueryVariables,
  APITypes.ListOrdersQuery
>;
export const listClientCampaignsByStatusCreatedAtCustom = /* GraphQL */ `query ListClientCampaignsByStatusCreatedAtCustom(
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
      client {
        name
        logo
      }
      products {
        items {
          productID
          price
          limit
          product {
            name
          }
        }
      }
      units {
        items {
          unitID
          unit {
            name
          }
        }
      }
      companies {
        items {
          companyID
          company {
            name
          }
        }
      }
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
export const listClientCampaignsByIdxCreatedAtCustom = /* GraphQL */ `query ListClientCampaignsByIdxCreatedAtCustom(
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
      client {
        name
        logo
      }
      products {
        items {
          productID
          price
          limit
          product {
            name
          }
        }
      }
      units {
        items {
          unitID
          unit {
            name
          }
        }
      }
      companies {
        items {
          companyID
          company {
            name
          }
        }
      }
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
export const listClientUserByUser = /* GraphQL */ `query ListClientUserByUserCustom(
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
      client {
        id
        name
        notes
        status
      }
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListClientUserByUserQueryVariables,
  APITypes.ListClientUserByUserQuery
>;
export const listVaccinationsByClientCampaign = /* GraphQL */ `query ListVaccinationsByClientCampaignCustom(
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
      clientEligible {
        name
        key
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
      }
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
export const listUnitsByClient = /* GraphQL */ `query ListUnitsByClientCustom(
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
      oss {
        items {
          number
          start
          status
          clientCampaign {
            name
          }
        }
      }
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
export const listOSsByClientCampaign = /* GraphQL */ `query ListOSsByClientCampaignCustom(
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
