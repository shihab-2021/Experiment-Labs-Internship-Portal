// components/MessageInput.js
import React, { useState } from 'react';
import attachmentImg from '../../assets/Message/material-symbols-light_attach-file.svg';

const MessageInput = () => {
  const [newMessage, setNewMessage] = useState('');

  const handleMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const sendMessage = () => {
    // Logic to send the message
    console.log('Sending message:', newMessage);
    setNewMessage('');
  };

  return (
    <div className="flex justify-center w-full items-start gap-[56.37px] px-[17.04px] py-[8.89px] relative mb-4">
      <div className="gap-[29.63px] px-[18px] py-[8px] rounded-[7.41px] border-[0.74px] border-solid border-[#c6c6c6] inline-flex items-center justify-center relative flex-[0_0_auto] shadow-[0px_2.96px_2.96px_#00000040]">
        <input className="relative min-w-[39vw] [font-family:'Raleway-Medium',Helvetica] font-medium text-[#828282] text-[14.8px] tracking-[1.48px] leading-[normal] focus:outline-none" placeholder='Write a Message'/>
        <img
          className="relative w-[29.63px] h-[29.63px]"
          alt="Material symbols"
          src={attachmentImg}
        />
      </div>
      <div className="gap-[7.41px] px-[18.52px] py-[10.37px] mr-[-1.07px] bg-[#4555ba] rounded-[2.96px] inline-flex items-center justify-center relative flex-[0_0_auto] shadow-[0px_2.96px_2.96px_#00000040]">
        <but className="relative w-fit mt-[-0.74px] [font-family:'Raleway-Bold',Helvetica] font-bold text-white text-[14.8px] tracking-[1.48px] leading-[normal] whitespace-nowrap">
          Send
        </but>
      </div>
    </div>
  );
};

export default MessageInput;
