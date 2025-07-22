
import React, { useState } from "react";
import ChatPopup from "./ChatPopup";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const users = [
  {
    id: 1,
    name: "Usama Tahir",
    message: "We are raising funds...",
    time: "04:00 PM",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Matt Schenck",
    message: "Scholarship Invitation",
    time: "03:45 PM",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    id: 3,
    name: "Farah",
    message: "Where are you?",
    time: "02:20 PM",
    image: "https://randomuser.me/api/portraits/women/41.jpg",
  },
  {
    id: 4,
    name: "Lilit",
    message: "How are you doing?",
    time: "01:10 PM",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
  },
];

export default function Chat() {
  const [openChats, setOpenChats] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleUserClick = (user) => {
    if (!openChats.some((chat) => chat.id === user.id)) {
      setOpenChats((prev) => [...prev, user]);
    }
  };

  const closeChat = (id) => {
    setOpenChats((prev) => prev.filter((chat) => chat.id !== id));
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
      {/* Dropdown */}
      <div className="relative">
        <button
          className="bg-white/30 backdrop-blur text-black shadow-md px-4 py-2 rounded-md flex items-center gap-2 font-semibold"
          onClick={() => setDropdownOpen((prev) => !prev)}
        >
          Messaging
          <ChevronDownIcon className="w-4 h-4" />
        </button>
        {dropdownOpen && (
          <div className="absolute bottom-12 right-0 w-80 bg-white/30 backdrop-blur text-black shadow-lg rounded-md overflow-hidden">
            {users.map((user) => (
              <div
                key={user.id}
                onClick={() => handleUserClick(user)}
                className="flex items-center px-4 py-3 hover:bg-white/40 cursor-pointer"
              >
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-black">{user.name}</span>
                  <span className="text-sm text-gray-700">{user.message}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Open chat popups */}
      <div className="flex gap-2">
        {openChats.map((user) => (
          <ChatPopup key={user.id} contact={user} onClose={() => closeChat(user.id)} />
        ))}
      </div>
    </div>
  );
}