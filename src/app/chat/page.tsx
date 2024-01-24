import { ChatWindow } from "components/chat/ChatWindow";

export default function Home() {

  return (
    <ChatWindow
      emptyStateComponent={<div></div>}
      endpoint="/api/chat"
      placeholder="Como posso ajudar?"
    ></ChatWindow>
  );
}
