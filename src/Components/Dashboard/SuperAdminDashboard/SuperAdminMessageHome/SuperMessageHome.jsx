//messageHome
import React, { useState } from "react";
import SuperMessageChatList from "./SuperMessageChatList";
import SuperMessageList from "./SuperMessageList";
import SuperMessageInput from "./SuperMessageInput";

 
const SuperMessageHome = () => {
  const [read, setRead] = useState(true);
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState({});
  const [messages, setMessages] = useState([]);
  const [userNamesMap, setUserNamesMap] = useState({});
  const [lastMessage, setLastMessage] = useState("");
  const [socketConnected, setSocketConnected] = useState(false);
  const [typing, setTyping] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  return (
    <div className="flex justify-center items-start min-h-screen max-h-screen">
      <SuperMessageChatList
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
        socketConnected={socketConnected}
        setSocketConnected={setSocketConnected}
      />
      <div className="w-3/4 bg-white flex flex-col justify-between rounded-[0px_12.59px_0px_0px] border-[0.74px] border-solid border-[#cfcfcf] max-h-[95vh] min-h-[95vh] my-auto mr-10">
        <SuperMessageList
          selectedChat={selectedChat}
          messages={messages}
          userNamesMap={userNamesMap}
          lastMessage={lastMessage}
          read={read}
        />
        <SuperMessageInput
          setLastMessage={setLastMessage}
          messages={messages}
          setMessages={setMessages}
          selectedChat={selectedChat}
          socketConnected={socketConnected}
          setSocketConnected={setSocketConnected}
          read={read}
          setRead={setRead}
        />
      </div>
    </div>
  );
};

export default SuperMessageHome;
