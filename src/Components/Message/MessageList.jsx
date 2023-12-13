// components/MessageList.js
import React from 'react';
import settingsMessage from '../../assets/Message/circum_menu-kebab.svg'
import tickImg from '../../assets/Message/ic_baseline-done-all.svg'

const MessageList = () => {
  // Assuming messages are stored in a state or received as props
  const messages = [
    { id: 1, text: 'Hello!', sender: 'user' },
    { id: 2, text: 'Hi there!', sender: 'other' },
    // Add more messages as needed
  ];

  return (
    <div className="overflow-y-auto">
      <div className="flex justify-between w-full items-center px-[21.48px] py-0 relative rounded-[0px_12.59px_0px_0px] border-[0.74px] border-solid border-[#cfcfcf]">
        <div className="justify-center gap-[10.37px] px-[3.7px] py-[4.44px] inline-flex items-start relative flex-[0_0_auto]">
          <div className="gap-[14.07px] px-0 py-[2.96px] inline-flex items-start relative flex-[0_0_auto]">
            <div className="flex-col gap-[6.67px] inline-flex items-start relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-0.74px] [font-family:'Raleway-Medium',Helvetica] font-medium text-black text-[14.8px] tracking-[1.48px] leading-[normal] whitespace-nowrap">
                Anjali
              </div>
              <div className="relative w-fit [font-family:'Raleway-Medium',Helvetica] font-medium text-[#3f3f3f] text-[14.1px] tracking-[1.41px] leading-[normal]">
                UI AND UX
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
      </div>
      <div className='p-4'>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-2`}
          >
            <div
              className={`p-2 rounded-lg ${message.sender === 'user' ? 'bg-[#0A98EA] text-white' : 'bg-[#F6F6F6]'
                }`}
            >

              <div className="inline-flex flex-col items-end gap-[14.07px] px-[5.19px] py-[7.41px] relative bg-secoundary-color-3 rounded-[7.41px_7.41px_0px_7.41px]">
                <p className="relative w-[420px] mt-[-0.74px] [font-family:'Raleway-Medium',Helvetica] font-medium text-[13.3px] tracking-[1.33px] leading-[normal]">
                  {message.text}
                </p>
                <div className="inline-flex items-center gap-[2.96px] relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-0.33px] [font-family:'Raleway-Medium',Helvetica] font-medium text-[11.9px] tracking-[1.19px] leading-[normal] whitespace-nowrap">
                    12:00 pm
                  </div>
                  {message.sender === 'user' && <img className="relative w-[14.81px] h-[14.81px]" alt="Ic baseline done all" src={tickImg} />}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageList;
