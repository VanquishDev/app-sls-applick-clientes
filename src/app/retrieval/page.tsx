import { ChatWindow } from "components/chat/ChatWindow";

export default function AgentsPage() {
  return (
    <ChatWindow
      emptyStateComponent={<div></div>}
      endpoint="/api/chat/retrieval"
      showIngestForm={false}
      placeholder="Como posso ajudar?"
    ></ChatWindow>
  );
}
