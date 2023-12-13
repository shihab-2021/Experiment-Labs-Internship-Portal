import React from "react";
import MessageList from "../../Message/MessageList";
import MessageInput from "../../Message/MessageInput";
import ChatList from "../../Message/ChatList";

const AdminMassage = () => {
  return (
    <div className="flex justify-center items-start min-h-screen max-h-screen">
      <ChatList />
      <div className="w-3/4 bg-white flex flex-col justify-between rounded-[0px_12.59px_0px_0px] border-[0.74px] border-solid border-[#cfcfcf] max-h-[95vh] min-h-[95vh] my-auto mr-10">
        <MessageList />
        <MessageInput />
      </div>
    </div>
  );
};

export default AdminMassage;
