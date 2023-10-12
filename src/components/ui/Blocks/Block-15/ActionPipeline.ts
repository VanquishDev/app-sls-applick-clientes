import { useRelation } from 'hooks/useRelation'
import { useRelationLink } from 'hooks/useRelationLink'
import { useMessage } from 'hooks/useMessage'

import {
  RelationTypes,
  RelationModes,
  RelationStatus,
  MessagesTypes,
} from 'models'

export default async function ActionsPipeline(props: any) {
  const { userID, name, email, phone, title, data } = props

  const { createRelation } = useRelation()
  const { createRelationLink } = useRelationLink()
  const { createMessage } = useMessage()

  const createdRelation = await createRelation({
    type: RelationTypes.CONTACT,
    mode: RelationModes.GROUP,
    status: RelationStatus.STANDBY,
    name: `${title} - ${name}`,
    description: ``,
    reference: `${title}`,
    search: `${name.toLowerCase()}`,
    members: [userID],
    admins: [userID],
    updatedAt: new Date().toISOString(),
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
    type: MessagesTypes.ALERT,
    content: 'Grupo criado.',
  })

  return null
}
