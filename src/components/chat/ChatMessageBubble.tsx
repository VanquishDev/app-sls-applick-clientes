import type { Message } from "ai/react";
import { useUserAuth } from "components/userAuth/context";
import { useScreen } from "hooks/useScreen";
import Image from 'next/image'

export function ChatMessageBubble(props: { message: Message, sources: any[] }) {

  const { user } = useUserAuth()

  const alignmentClassName =
    props.message.role === "user" ? "ml-auto" : "mr-auto font-semibold";

  return (
    <div
      className={`${alignmentClassName} rounded flex items-start`}
    >
      {props.message.role === "assistant" && <div style={{ minWidth: 64 }}>
        <Image
          src='/user/ia.png'
          alt=""
          width={55}
          height={55}
          className="rounded-full shadow-lg"
        />
      </div>}
      <div className="whitespace-pre-wrap flex flex-col">
        <span>{props.message.content}</span>
        {(process.env.DEBUG_MODE === '1' && props.sources && props.sources.length) ? <>
          <code className="mt-4 mr-auto bg-slate-600 px-2 py-1 rounded">
            <h2>
              🔍 Sources:
            </h2>
          </code>
          <code className="mt-1 mr-2 bg-slate-600 px-2 py-1 rounded text-xs">
            {props.sources?.map((source, i) => (
              <div className="mt-2" key={"source:" + i}>
                {i + 1}. &quot;{source.pageContent}&quot;{
                  source.metadata?.loc?.lines !== undefined
                    ? <div><br />Lines {source.metadata?.loc?.lines?.from} to {source.metadata?.loc?.lines?.to}</div>
                    : ""
                }
              </div>
            ))}
          </code>
        </> : ""}
      </div>
      {props.message.role === "user" && <div className="ml-3" style={{ minWidth: 64 }}>
        <Image
          src={`${process.env.MIDIA_CLOUDFRONT}${user.avatar}`}
          alt=""
          width={50}
          height={50}
          className="rounded-full shadow-lg"
          onError={(e: any) => {
            e.target.onerror = null
            e.target.src = '/user/user.png'
          }}
        />
      </div>}
    </div>
  );
}
