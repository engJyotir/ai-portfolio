"use client";

import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

import { askPortfolioAI } from "@/src/services/chat-service";
import { Message } from "@/src/types/chat";

export default function ChatSection() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  const suggestions = [
    "What AI projects has he built?",
    "Tell me about his Financial Agent System",
    "What technologies does he use?",
    "Why should I hire him?",
  ];

  useEffect(() => {
    if (!chatContainerRef.current || messages.length === 0) return;

    chatContainerRef.current.scrollTop =
      chatContainerRef.current.scrollHeight;
  }, [messages, loading]);

  const sendMessage = async (customQuestion?: string) => {
    const q = customQuestion || question;

    if (!q.trim() || loading) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: q,
      },
    ]);

    setQuestion("");
    setLoading(true);

    try {
      const response = await askPortfolioAI(q);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: response.answer,
          sources: response.sources,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong while generating the response.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="chat"
      className="
      min-h-screen
      bg-black
      text-white
      flex
      items-center
      justify-center
      px-8
      py-16
      "
    >
      <div
        className="
        w-full
        max-w-6xl
        "
      >
        <div className="mb-6">
          <h2 className="text-5xl md:text-6xl font-bold">
            Talk With My AI
          </h2>

          <p className="mt-4 text-zinc-500 text-lg">
            Ask anything about my projects, experience, skills, and future
            vision.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-6">
          {suggestions.map((item) => (
            <button
              key={item}
              onClick={() => sendMessage(item)}
              disabled={loading}
              className="
              px-5
              py-3
              rounded-full
              border
              border-zinc-800
              hover:border-zinc-600
              transition
              disabled:opacity-50
              "
            >
              {item}
            </button>
          ))}
        </div>

        <div
          ref={chatContainerRef}
          data-lenis-prevent
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          className="
          h-[500px]
          overflow-y-scroll
          overscroll-contain
          rounded-[32px]
          border
          border-zinc-900
          bg-black
          p-6
          "
        >
          <div className="flex flex-col gap-6">
            {messages.length === 0 && !loading && (
              <div
                className="
                h-[420px]
                flex
                items-center
                justify-center
                text-zinc-600
                text-lg
                "
              >
                Start a conversation...
              </div>
            )}

            {messages.map((message, index) => (
              <div
                key={index}
                className={
                  message.role === "user"
                    ? "flex justify-end"
                    : "flex justify-start"
                }
              >
                <div
                  className={
                    message.role === "user"
                      ? `
                      max-w-[75%]
                      rounded-3xl
                      bg-white
                      text-black
                      px-6
                      py-4
                      text-base
                      leading-relaxed
                      `
                      : `
                      max-w-[82%]
                      rounded-3xl
                      border
                      border-zinc-800
                      bg-zinc-950
                      px-6
                      py-4
                      text-base
                      leading-relaxed
                      `
                  }
                >
                  {message.role === "assistant" ? (
                    <div className="prose prose-invert max-w-none">
                      <ReactMarkdown>{message.content}</ReactMarkdown>

                      {message.sources && message.sources.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {message.sources.map((source) => (
                            <span
                              key={source}
                              className="
                              text-xs
                              px-3
                              py-1
                              rounded-full
                              border
                              border-zinc-800
                              text-zinc-500
                              "
                            >
                              {source}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    message.content
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div
                  className="
                  rounded-3xl
                  border
                  border-zinc-800
                  bg-zinc-950
                  px-6
                  py-4
                  text-zinc-400
                  "
                >
                  Thinking...
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 flex gap-4">
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
            placeholder="Ask about my work..."
            className="
            flex-1
            h-16
            rounded-full
            border
            border-zinc-900
            bg-black
            px-8
            text-lg
            outline-none
            "
          />

          <button
            onClick={() => sendMessage()}
            disabled={loading}
            className="
            h-16
            px-10
            rounded-full
            bg-white
            text-black
            font-medium
            hover:opacity-90
            transition
            disabled:opacity-50
            "
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
}