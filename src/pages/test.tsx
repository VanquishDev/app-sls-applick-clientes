import { Layout } from 'components/common'
import { Container, Loading } from 'components/ui'
import { useUserAuth } from 'components/userAuth/context'
import { ChatWindow } from "components/chat/ChatWindow";

export default function HomePage(): JSX.Element {
  const { isAuthenticating } = useUserAuth()


  return <Container>
    {isAuthenticating && <Loading />}
    <ChatWindow
      endpoint="/api/chat/retrieval"
      showIngestForm={false}
      placeholder="Como posso ajudar?"
    ></ChatWindow>

  </Container>
}

HomePage.Layout = Layout
