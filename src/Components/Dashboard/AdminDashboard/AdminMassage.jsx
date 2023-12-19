import React, { useState } from "react";
import MessageList from "../../Message/MessageList";
import MessageInput from "../../Message/MessageInput";
import ChatList from "../../Message/ChatList";

const AdminMassage = () => {
  const [read, setRead] = useState(true);
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState({});
  const [messages, setMessages] = useState([]);
  const [userNamesMap, setUserNamesMap] = useState({});
  const [lastMessage, setLastMessage] = useState("");

  return (
    <div className="flex justify-center items-start min-h-screen max-h-screen">
      <ChatList
        read={read}
        setRead={setRead}
        chats={chats}
        selectedChat={selectedChat}
        setChats={setChats}
        setSelectedChat={setSelectedChat}
        messages={messages}
        setMessages={setMessages}
        userNamesMap={userNamesMap}
        setUserNamesMap={setUserNamesMap}
        lastMessage={lastMessage}
        setLastMessage={setLastMessage}
      />
      <div className="w-3/4 bg-white flex flex-col justify-between rounded-[0px_12.59px_0px_0px] border-[0.74px] border-solid border-[#cfcfcf] max-h-[95vh] min-h-[95vh] my-auto mr-10">
        <MessageList
          selectedChat={selectedChat}
          messages={messages}
          userNamesMap={userNamesMap}
        />
        <MessageInput 
          setLastMessage={setLastMessage}
          messages={messages}
          setMessages={setMessages}
          selectedChat={selectedChat}
        />
      </div>
    </div>
  );
};

export default AdminMassage;
