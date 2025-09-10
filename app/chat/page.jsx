"use client";
import RequestText from "@/components/RequestText";
import ResponseText from "@/components/ResponseText";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { RingLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/layout/Sidebar";

export default function page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");
  const [input, setInput] = useState(query);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);



  useEffect(() => {
    if (query) {
      handleSubmit();
      router.replace("/chat");
    }
  }, [query]);

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!input.trim()) {
      setError("This field cannot be empty!");
    } else {
      setError("");
      const newMessages = [...messages, { role: "user", text: input }];
      setMessages(newMessages);
      setInput("");
      setLoading(true);

      try {
        const res = await axios.post("/api/chat", { message: input });
        setMessages([...newMessages, { role: "bot", text: res.data.reply }]);
      } catch {
        setMessages([
          ...newMessages,
          { role: "bot", text: "Error getting response" },
        ]);
      } finally {
        setLoading(false);
      }
    }
  };
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  return (
    <>
      <Sidebar />
      <main className="w-full max-w-[1600px] h-full m-auto p-[100px] overflow-y-auto">
        <div className="h-full h-full flex flex-col justify-between items-center">
          <div className="w-full flex flex-col justify-center items-end gap-y-[25px]">
            {messages.map((m, index) => {
              if (m.role === "user") {
                return <RequestText text={m.text} key={index} />;
              } else if (m.role === "bot") {
                return <ResponseText text={m.text} key={index} />;
              }
            })}
            {loading && <RingLoader color="#393E46" size={20} />}
          </div>
          <form
            className="flex flex-col justify-between items-center gap-y-[30px] fixed bottom-[30px]"
            onSubmit={handleSubmit}
          >
            <div className="flex justify-center items-center bg-[#393E46] px-[16px] py-[13px] gap-x-[10px] input">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 1.59961V16.5996M16.5 9.09961H1.5"
                  stroke="#DFD0B8"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                type="text"
                placeholder="Ask anything"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="text-[#DFD0B8] bg-transparent border-none text-[15px] font-[300] w-[500px]"
              />
              <button
                type="submit"
                className="border-none rounded-full shadow-none bg-[#DFD0B8] flex justify-center items-center w-[30px] h-[30px] hover:bg-[#DFD0B8] cursor-pointer"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.79908 7.09961L1 1.09961C5.3036 2.38412 9.36191 4.41327 13 7.09961C9.36212 9.78589 5.30404 11.815 1.00066 13.0996L2.79908 7.09961ZM2.79908 7.09961H7.73979"
                    stroke="#393E46"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            {error && (
              <span className="-mt-[13px] text-[14px] font-[300] text-[#972508]">
                {error}
              </span>
            )}
            <div ref={messagesEndRef} />
          </form>
        </div>
      </main>
    </>
  );
}
