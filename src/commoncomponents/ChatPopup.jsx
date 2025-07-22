
import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

const getStoredMessages = (userId) => {
  const data = localStorage.getItem(`chat_${userId}`);
  return data ? JSON.parse(data) : [];
};

const saveMessages = (userId, messages) => {
  localStorage.setItem(`chat_${userId}`, JSON.stringify(messages));
};

const ChatPopup = ({ contact, onClose }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const saved = getStoredMessages(contact.id);
    if (saved.length === 0) {
      const defaultMessage = {
        sender: "other",
        text: contact.message,
        time: contact.time,
      };
      setMessages([defaultMessage]);
      saveMessages(contact.id, [defaultMessage]);
    } else {
      setMessages(saved);
    }
  }, [contact]);

  const sendMessage = (text) => {
    if (!text.trim()) return;
    const newMsg = {
      sender: "me",
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    const updated = [...messages, newMsg];
    setMessages(updated);
    saveMessages(contact.id, updated);
    setInput("");
  };

  return (
    <div className="w-80 rounded-xl shadow-lg bg-white/30 backdrop-blur border border-white/20 text-black overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-white/20 bg-white/20 backdrop-blur-sm">
        <div>
          <h4 className="font-semibold">{contact.name}</h4>
          <p className="text-sm text-green-600">Online</p>
        </div>
        <button onClick={onClose}>
          <X size={18} />
        </button>
      </div>

      {/* Messages */}
      <div className="p-3 space-y-2 max-h-52 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex flex-col max-w-[70%] ${
              msg.sender === "me" ? "ml-auto items-end" : "items-start"
            }`}
          >
            <div
              className={`px-3 py-2 rounded-xl text-sm ${
                msg.sender === "me"
                  ? "bg-blue-500 text-white"
                  : "bg-white/60 text-black"
              }`}
            >
              {msg.text}
            </div>
            <span className="text-xs text-gray-600 mt-1">{msg.time}</span>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-3 border-t border-white/20 bg-white/20 backdrop-blur-sm">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage(input)}
          placeholder="Write a message..."
          className="w-full resize-none border rounded p-2 text-sm text-black"
          rows={1}
        ></textarea>

        {/* Quick replies + Send button */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex gap-2">
            <button
              onClick={() => sendMessage("Thanks")}
              className="px-2 py-1 rounded bg-white/60 text-black text-sm hover:bg-white/80"
            >
              Thanks
            </button>
            <button
              onClick={() => sendMessage("👍")}
              className="px-2 py-1 rounded bg-white/60 text-black text-sm hover:bg-white/80"
            >
              👍
            </button>
            <button
              onClick={() => sendMessage("Okay")}
              className="px-2 py-1 rounded bg-white/60 text-black text-sm hover:bg-white/80"
            >
              Okay
            </button>
          </div>
          <button
            onClick={() => sendMessage(input)}
            className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPopup;