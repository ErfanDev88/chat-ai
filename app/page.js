'use client'
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  console.log(messages)

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const res = await axios.post("/api/chat", { message: input });
      setMessages([...newMessages, { role: "bot", text: res.data.reply }]);
    } catch {
      setMessages([...newMessages, { role: "bot", text: "Error getting response" }]);
    }
  };
  console.log(messages)

  return (

    <div style={{ padding: 20, maxWidth: 500, margin: "auto" }}>
      <h1>Erfan AI Chat</h1>
      <div style={{ border: "1px solid #ccc", padding: 10, height: 400, overflowY: "auto" }}>
        {messages.map((m, i) => (
          <div key={i} style={{ textAlign: m.role === "user" ? "right" : "left" }}>
            <b>{m.role === "user" ? "You" : "Bot"}: </b>{m.text}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 10, display: "flex" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          style={{ flex: 1, padding: 5 }}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage} style={{ marginLeft: 5 }}>Send</button>
      </div>
    </div>
  );
}