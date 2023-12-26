// components/MessageInput.js
import React, { useContext, useEffect, useState } from 'react';
import attachmentImg from '../../assets/Message/material-symbols-light_attach-file.svg';
import { AuthContext } from '../../Contexts/AuthProvider';
import axios from 'axios';
// import Lottie from "react-lottie";
// import animationData from "../animations/typing.json";

import io from "socket.io-client";
const ENDPOINT = `${import.meta.env.VITE_APP_SERVER_API}`;
let socket, selectedChatCompare;

const MessageInput = ({ selectedChat, messages, setMessages, setLastMessage, socketConnected, setSocketConnected, read , setRead}) => {
  const [newContent, setNewContent] = useState('');
  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("setup", userInfo);
    socket.on("connection", () => setSocketConnected(true));

    // eslint-disable-next-line
  }, []);


  useEffect(() => {
    setNewContent("");
  }, [selectedChat?._id])

  const handleMessageChange = (e) => {
    setNewContent(e.target.value);
  };

  const sendMessage = async (event) => {
    event.preventDefault();
    
    const newMessage = {
      senderId: userInfo?._id,
      content: newContent,
      contentType: "text",
      chatId: selectedChat?._id
    };
    
    const res = await axios.post(`${import.meta.env.VITE_APP_SERVER_API}/api/v1/messages`, newMessage);

    if (res?.data?.success) {
      const currentDate = new Date().toLocaleString();
      const chat = selectedChat;
      newMessage.createdAt = currentDate;
      newMessage.chat = chat;
      socket.emit("new message", newMessage);
      setMessages([...messages, newMessage]);
      setLastMessage(newContent);
      setNewContent("");
      setRead(true);
    }

  };

  const handleKeyDown = async (event) => {
    if (event.key = 'Enter' && newContent) {
      await sendMessage();
    }
  }



  return (
    <>
      {/* {isTyping && <div className='ml-4 my-2'>Loading....</div>} */}
      {selectedChat._id && <form onSubmit={sendMessage} onKeyDown={handleKeyDown} className="flex justify-between w-full items-center px-[17.04px] py-[8.89px] relative mb-4">
        <div className="gap-[29.63px] px-[18px] py-[8px] rounded-[7.41px] border-[0.74px] border-solid border-[#c6c6c6] inline-flex items-center justify-center relative flex-[0_0_auto] shadow-[0px_2.96px_2.96px_#00000040]">
          <input onChange={handleMessageChange} value={newContent} className="relative min-w-[39vw] [font-family:'Raleway-Medium',Helvetica] font-medium text-[#828282] text-[14.8px] tracking-[1.48px] leading-[normal] focus:outline-none" placeholder='Write a Message' />
          <img
            className="relative w-[29.63px] h-[29.63px]"
            alt="Material symbols"
            src={attachmentImg}
          />
        </div>
        <div className="gap-[7.41px] px-[18.52px] py-[10.37px] mr-[-1.07px] bg-[#4555ba] rounded-[2.96px] inline-flex items-center justify-center relative flex-[0_0_auto] shadow-[0px_2.96px_2.96px_#00000040]">
          <input className="relative w-fit text-white font-bold whitespace-nowrap cursor-pointer" placeholder='Send' type='submit' />
        </div>
      </form>}
    </>
  );
};

export default MessageInput;
