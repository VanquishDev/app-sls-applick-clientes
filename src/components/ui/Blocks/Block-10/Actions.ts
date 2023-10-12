import { toast } from 'react-toast'
import { formatPhoneNumber } from 'react-phone-number-input'

import { useUser } from 'hooks/useUser'
import { useRelation } from 'hooks/useRelation'
import { useRelationLink } from 'hooks/useRelationLink'
import { useMessage } from 'hooks/useMessage'

import {
  RelationTypes,
  RelationModes,
  RelationStatus,
  MessagesTypes,
} from 'models'

export default async function Actions(data: any) {
  const { name, email, phone, type, subject, message } = data

  const { userExists, adminCreateUser } = useUser()
  const { createRelation } = useRelation()
  const { createRelationLink } = useRelationLink()
  const { createMessage } = useMessage()

  const userExistsResult = await userExists({ email, phone })
  let userID = userExistsResult.id

  if (!userID) {
    const { createdUser } = await adminCreateUser({ name, email, phone })
    userID = createdUser.id
  }

  if (!userID) {
    toast.error(`Houve um problema com a criação ou identificação do usuário.`)
    return null
  }

  const createdRelation = await createRelation({
    type: RelationTypes.CONTACT,
    mode: RelationModes.GROUP,
    status: RelationStatus.STANDBY,
    name: `${type ? type : 'Contato'} - ${
      userExistsResult.name ? userExistsResult.name : name
    }`,
    description: ``,
    reference: `${subject}`,
    search: `${name.toLowerCase()} ${
      userExistsResult.name && userExistsResult.name.toLowerCase()
    } `,
    members: [userID],
    admins: [userID],
  })

  const relationID = createdRelation.id

  await createRelationLink({
    userID,
    relationID,
    type: '',
    notify: 0,
  })

  await createMessage({
    relationID,
    userID,
    type: MessagesTypes.TEXT,
    content: message,
  })

  return null
}
