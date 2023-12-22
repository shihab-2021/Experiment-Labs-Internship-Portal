// components/MessageList.js
import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import settingsMessage from '../../assets/Message/circum_menu-kebab.svg'
import tickImg from '../../assets/Message/ic_baseline-done-all.svg'
import { AuthContext } from '../../Contexts/AuthProvider';

const MessageList = ({ messages, selectedChat, userNamesMap }) => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const { userInfo } = useContext(AuthContext);
  const [groupedMessages, setGroupedMessages] = useState({});

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000); // Update time every second (1000ms)

    return () => clearInterval(intervalID); // Cleanup interval on unmount
  }, []);

  const groupMessagesByDate = (messageList) => {
    const groupedMessages = {};
    messageList.forEach((message) => {
      const dateKey = new Date(message.createdAt).toDateString();
      if (!groupedMessages[dateKey]) {
        groupedMessages[dateKey] = [];
      }
      groupedMessages[dateKey].push(message);
    });

    return groupedMessages;
  };

  useEffect(() => {
    setGroupedMessages(groupMessagesByDate(messages));
  }, [messages])

  const lastMessageRef = useRef(null);
  // useEffect(() => {
  //   // Scroll to the last message
  //   if (lastMessageRef.current) {
  //     lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }, [messages]);
  useLayoutEffect(() => {
    // Scroll to the last message
    const timeout = setTimeout(() => {
      if (lastMessageRef.current) {
        lastMessageRef.current.scrollIntoView({ behavior: 'auto', block: 'end' });
      }
    }, 100); // Adjust the delay if needed

    return () => clearTimeout(timeout);
  }, [messages]);

  return (
    <div>
      {selectedChat?._id && <div className="flex justify-between w-full items-center px-[21.48px] py-0 relative rounded-[0px_12.59px_0px_0px] border-[0.74px] border-solid border-[#cfcfcf]">
        <div className="justify-center gap-[10.37px] px-[3.7px] py-[4.44px] inline-flex items-start relative flex-[0_0_auto]">
          <div className="gap-[14.07px] px-0 py-[2.96px] inline-flex items-start relative flex-[0_0_auto]">
            <div className="flex-col gap-[6.67px] inline-flex items-start relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-0.74px] [font-family:'Raleway-Medium',Helvetica] font-medium text-black text-[14.8px] tracking-[1.48px] leading-[normal] whitespace-nowrap">
                {selectedChat?.isGroupChat ? selectedChat?.chatName :userNamesMap[selectedChat?._id]}
              </div>
              <div className="relative w-fit [font-family:'Raleway-Medium',Helvetica] font-medium text-[#3f3f3f] text-[14.1px] tracking-[1.41px] leading-[normal]">
                {currentTime}
              </div>
            </div>
          </div>
          <div className="relative w-[12.59px] h-[12.59px] bg-secoundary-color-3 rounded-[6.3px]" />
        </div>
        <img
          className="relative w-[29.63px] h-[29.63px] mr-[-4.96px]"
          alt="Circum menu kebab"
          src={settingsMessage}
        />
      </div>}
      <div className="overflow-y-auto max-h-[75vh]">
        {selectedChat?._id && Object?.entries(groupedMessages)?.map(([date, messagesForDate]) => (
          <div key={date} className='px-4'>
            <div className="date-header mx-auto w-40 my-4">{date}</div>
            {messagesForDate?.map((message, index) => (
              <div
                key={message._id}
                ref={index === messagesForDate.length - 1 ? lastMessageRef : null} // Set ref to last message
                className={`flex ${message.senderId === userInfo?._id ? 'justify-end' : 'justify-start'} mb-4`}
              >
                <div
                  className={`p-2 rounded-lg ${message.senderId === userInfo?._id ? 'bg-[#0A98EA] text-white' : 'bg-[#F6F6F6]'}`}
                >
                  <div className="inline-flex flex-col items-end gap-[14.07px] px-[5.19px] py-[7.41px] relative bg-secoundary-color-3 rounded-[7.41px_7.41px_0px_7.41px]">
                    <p className="relative w-[210px] mt-[-0.74px] [font-family:'Raleway-Medium',Helvetica] font-medium text-[13.3px] tracking-[1.33px] leading-[normal]">
                      {message.content}
                    </p>
                    <div className="inline-flex items-center gap-[2.96px] relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-0.33px] [font-family:'Raleway-Medium',Helvetica] font-medium text-[11.9px] tracking-[1.19px] leading-[normal] whitespace-nowrap">
                        {new Date(message.createdAt).toLocaleTimeString()}
                      </div>
                      {message.senderId === userInfo?._id && <img className="relative w-[14.81px] h-[14.81px]" alt="Ic baseline done all" src={tickImg} />}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageList;
