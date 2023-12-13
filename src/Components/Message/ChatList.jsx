// components/ChatList.js
import React from 'react';

const ChatList = () => {
    const unreadChats = [
        { id: 1, sender: 'John', message: 'Hey, how are you?' },
        // Add more unread chats as needed
    ];

    const allChats = [
        { id: 1, sender: 'Alice', message: 'Hi there!' },
        { id: 2, sender: 'Bob', message: 'What are you up to?' },
        // Add more all chats as needed
    ];

    return (
        <div className="inline-flex flex-col min-h-[95vh] max-h-[95vh] my-auto items-start gap-[5.19px] px-[3.7px] py-[5.19px] relative border-[0.74px] border-solid border-[#c6c6c6]">
            <div className="flex items-start gap-[8.15px] px-[3.7px] py-[10.37px] self-stretch w-full border-[0.74px] border-solid border-[#dedede] relative flex-[0_0_auto]">
                <div className="inline-flex items-center justify-center gap-[7.41px] px-[11.85px] py-[7.41px] bg-[#4555ba] rounded-[25.19px] relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-0.74px] [font-family:'Raleway-SemiBold',Helvetica] font-semibold text-white text-[17.8px] text-center tracking-[1.78px] leading-[normal] whitespace-nowrap">
                        All Message
                    </div>
                </div>
                <div className="inline-flex items-center justify-center gap-[7.41px] px-[13.33px] py-[7.41px] rounded-[25.19px] border-[0.74px] border-solid border-neutral-500 relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-0.74px] [font-family:'Raleway-SemiBold',Helvetica] font-semibold text-[#3f3f3f] text-[17.8px] text-center tracking-[1.78px] leading-[normal] whitespace-nowrap">
                        Unread
                    </div>
                </div>
            </div>
            <div className="inline-flex flex-col items-start gap-[4.44px] relative flex-[0_0_auto]">
                <div className="flex flex-col w-[323.7px] items-start gap-[15.56px] px-[5.93px] py-[11.11px] rounded-[5.19px] border-[0.74px] border-solid border-[#c5c5c5] relative flex-[0_0_auto]">
                    <div className="inline-flex flex-col items-start gap-[7.41px] relative flex-[0_0_auto]">
                        <div className="flex w-[266.67px] items-start gap-[58.52px] relative flex-[0_0_auto]">
                            <p className="relative flex-1 mt-[-0.74px] [font-family:'Raleway-Medium',Helvetica] font-medium text-transparent text-[14.8px] tracking-[1.48px] leading-[normal]">
                                <span className="text-black">ansh </span>
                                <span className="text-[#4555ba]">900</span>
                                <span className="text-black">p</span>
                            </p>
                            <div className="relative w-fit mt-[-0.74px] [font-family:'Raleway-Medium',Helvetica] font-medium text-black text-[12.6px] tracking-[1.26px] leading-[normal] whitespace-nowrap">
                                1/1/2023
                            </div>
                        </div>
                        <div className="relative w-fit [font-family:'Raleway-Medium',Helvetica] font-medium text-[#3f3f3f] text-[14.1px] tracking-[1.41px] leading-[normal]">
                            Animation task
                        </div>
                    </div>
                    <p className="relative w-fit [font-family:'Raleway-Medium',Helvetica] font-medium text-[#3f3f3f] text-[12.6px] tracking-[1.26px] leading-[normal] whitespace-nowrap">
                        you:heey ansh we like your animation....
                    </p>
                </div>
                <div className="flex flex-col w-[323.7px] items-start gap-[15.56px] px-[5.93px] py-[11.11px] rounded-[5.19px] border-[0.74px] border-solid border-[#c5c5c5] relative flex-[0_0_auto]">
                    <div className="inline-flex flex-col items-start gap-[7.41px] relative flex-[0_0_auto]">
                        <div className="flex w-[266.67px] items-start gap-[58.52px] relative flex-[0_0_auto]">
                            <p className="relative flex-1 mt-[-0.74px] [font-family:'Raleway-Medium',Helvetica] font-medium text-transparent text-[14.8px] tracking-[1.48px] leading-[normal]">
                                <span className="text-black">Preet&nbsp;&nbsp;8</span>
                                <span className="text-[#4555ba]">00</span>
                                <span className="text-black">p</span>
                            </p>
                            <div className="relative w-fit mt-[-0.74px] [font-family:'Raleway-Medium',Helvetica] font-medium text-black text-[12.6px] tracking-[1.26px] leading-[normal] whitespace-nowrap">
                                27/12/2022
                            </div>
                        </div>
                        <div className="relative w-fit [font-family:'Raleway-Medium',Helvetica] font-medium text-[#3f3f3f] text-[14.1px] tracking-[1.41px] leading-[normal]">
                            logo design
                        </div>
                    </div>
                    <p className="relative w-fit [font-family:'Raleway-Medium',Helvetica] font-medium text-[#3f3f3f] text-[12.6px] tracking-[1.26px] leading-[normal] whitespace-nowrap">
                        you:Your logo looks very good and we.......
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ChatList;
