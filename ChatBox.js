
import React, { useState } from "react";

export default function ChatBox() {
  const [messages, setMessages] = useState([
    { from: "Sophie", text: "Hey there! 😊" },
    { from: "me", text: "Hi! How are you?" }
  ]);
  const [text, setText] = useState("");

  const send = () => {
    if (!text.trim()) return;
    setMessages([...messages, { from: "me", text }]);
    setText("");
  };

  return (
    <div className="chat">
      <h2>💬 Chat</h2>
      <div className="messages">
        {messages.map((m, i) => (
          <div key={i} className={"message " + (m.from === "me" ? "me" : "")}>
            <strong>{m.from === "me" ? "You" : m.from}:</strong> {m.text}
          </div>
        ))}
      </div>
      <div className="input-row">
        <input
          placeholder="Type your message…"
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={e => e.key === "Enter" && send()}
        />
        <button onClick={send}>Send</button>
      </div>
      <p className="footer-note">This is a static demo chat (no server).</p>
    </div>
  );
}
