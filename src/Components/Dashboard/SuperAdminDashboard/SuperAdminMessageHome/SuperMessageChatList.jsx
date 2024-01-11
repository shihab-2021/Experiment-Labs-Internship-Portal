//SuperMessageChatList

import React, { useContext, useEffect, useState } from 'react';

import axios from 'axios';
import './style.css';
import { getPerson } from './SuperUtils';
import io from "socket.io-client";
import { AuthContext } from '../../../../Contexts/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';
const ENDPOINT = `${import.meta.env.VITE_APP_SERVER_API}`;
let socket, selectedChatCompare;


const SuperMessageChatList = ({ chats, setChats, read, setRead, setSelectedChat, selectedChat, setMessages, userNamesMap, setUserNamesMap, lastMessage, setLastMessage, messages, socketConnected, setSocketConnected }) => {
    const { userInfo } = useContext(AuthContext);

    useEffect(() => {
        socket = io(ENDPOINT);
        socket.emit("setup", userInfo);
        socket.on("connection", () => setSocketConnected(true));

        // eslint-disable-next-line
    }, []);

    // console.log(chats)

    const fetchChat = async () => {
        const SuperMessageChatList = await axios.get(`${import.meta.env.VITE_APP_SERVER_API}/api/v1/chats`);
        setChats(SuperMessageChatList?.data?.userChats);
        Loading().close();
    }

    useEffect(() => {
        Loading();
        fetchChat();
        // console.log(chats);
    }, [userInfo]);

    useEffect(() => {
        Loading();
        fetchChat();
    }, [lastMessage]);


    useEffect(() => {
        const fetchMessage = async () => {
            const messageList = await axios.get(`${import.meta.env.VITE_APP_SERVER_API}/api/v1/messages/chatId/${selectedChat?._id}`);
            setMessages(messageList?.data?.messages);
        }
        fetchMessage();
        selectedChatCompare = selectedChat;

    }, [selectedChat]);


    useEffect(() => {
        const interval = setInterval(() => {
            const fetchMessage = async () => {
                const messageList = await axios.get(`${import.meta.env.VITE_APP_SERVER_API}/api/v1/messages/chatId/${selectedChat?._id}`);
                setMessages(messageList?.data?.messages);
            }
            fetchMessage();
            selectedChatCompare = selectedChat;
        }, 10000); // Interval in milliseconds

        // Clear the interval on component unmount to avoid memory leaks
        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        socket.on("message received", (newMessageReceived) => {
            // console.log("New message Receive now");
            // console.log(messages[0].chat._id);
            // console.log(selectedChat._id);
            if (newMessageReceived.chat._id === selectedChatCompare._id && messages[0]?.chat._id === newMessageReceived.chat._id) {
                // console.log(selectedChat._id);
                // console.log(newMessageReceived.chat._id);
                setMessages([...messages, newMessageReceived]);
                setLastMessage(newMessageReceived);
            } else {
                console.log("Didn't went inside");
            }
        });
    });





    useEffect(() => {
        const fetchUserNames = async () => {
            const namesPromises = chats.map(async chat => {
                const userName = await getPerson(chat.users, userInfo?._id);
                return { [chat._id]: userName }; // Creating an object with chat ID as key and user name as value
            });

            const namesArray = await Promise.all(namesPromises);
            const namesMap = namesArray.reduce((acc, curr) => ({ ...acc, ...curr }), {});
            setUserNamesMap(namesMap);
        };

        fetchUserNames();
    }, [chats]);

    const handleRead = async (chat) => {
        const res = await axios.put(`${import.meta.env.VITE_APP_SERVER_API}/api/v1/chats/chatId/${chat?._id}`,
            { userId: userInfo?._id }
        );
    }


    return (
        <div className="inline-flex flex-col min-h-[95vh] max-h-[95vh] my-auto items-start gap-[5.19px] px-[3.7px] py-[5.19px] relative border-[0.74px] border-solid border-[#c6c6c6]">
            <div className="flex items-start gap-[8.15px] px-[3.7px] py-[10.37px] self-stretch w-full border-[0.74px] border-solid border-[#dedede] relative flex-[0_0_auto]">
                <div onClick={() => {
                    setRead(!read),
                        setMessages([]),
                        setSelectedChat({}),
                        fetchChat()
                }} className={`cursor-pointer inline-flex items-center justify-center gap-[7.41px] px-[11.85px] py-[7.41px] 
                ${read ? "bg-[#4555ba] text-white" : "border-[0.74px] border-solid border-neutral-500 text-[#3f3f3f]"} rounded-[25.19px] relative flex-[0_0_auto]`}>
                    <div className="relative w-fit mt-[-0.74px] [font-family:'Raleway-SemiBold',Helvetica] font-semibold text-[17.8px] text-center tracking-[1.78px] leading-[normal] whitespace-nowrap">
                        All
                    </div>
                </div>
                <div onClick={() => {
                    setRead(!read),
                        setMessages([]),
                        setSelectedChat({}),
                        fetchChat()
                }} className={`cursor-pointer inline-flex items-center justify-center gap-[7.41px] px-[13.33px] py-[7.41px] rounded-[25.19px] border-[0.74px] border-solid ${!read ? "bg-[#4555ba] text-white" : "border-neutral-500 text-[#3f3f3f]"} relative flex-[0_0_auto]`}>
                    <div className="relative w-fit mt-[-0.74px] [font-family:'Raleway-SemiBold',Helvetica] font-semibold text-[17.8px] text-center tracking-[1.78px] leading-[normal] whitespace-nowrap">
                        Unread
                    </div>
                </div>
            </div>
            <div class="overflow-y-auto">
                <div className="inline-flex flex-col items-start gap-[4.44px] relative flex-[0_0_auto]">

                    {
                        read && userNamesMap && chats && chats?.map(
                            (chat, i) =>
                                <div
                                    onClick={() => {
                                        setSelectedChat(chat),
                                            socket.emit('join chat', chat?._id)
                                    }}
                                    key={i}
                                    className={`flex flex-col w-[323.7px] items-start gap-[15.56px] px-[5.93px] py-[11.11px] rounded-[5.19px] border-[0.74px] border-solid border-[#c5c5c5] relative flex-[0_0_auto] cursor-pointer ${chat?._id === selectedChat?._id && "bg-[#aec9e58a]"}`}>
                                    <div className="inline-flex flex-col items-start gap-[7.41px] relative flex-[0_0_auto]">
                                        <div className="flex w-[266.67px] items-start gap-[58.52px] relative flex-[0_0_auto]">
                                            <p className="relative flex-1 mt-[-0.74px] [font-family:'Raleway-Medium',Helvetica] font-medium text-transparent text-[14.8px] tracking-[1.48px] leading-[normal]">
                                                <span className="text-black">
                                                    {
                                                        chat?.users?.[0]?.organizationInfo?.orgName
                                                    }
                                                    {"("}
                                                    {
                                                        chat?.users?.[0]?.firstName
                                                    }
                                                    {" "}
                                                    {
                                                        chat?.users?.[0]?.lastName
                                                    }
                                                    {")"}
                                                    {" <> "}
                                                    {
                                                        chat?.users?.[1]?.firstName
                                                    }
                                                    {" "}
                                                    {
                                                        chat?.users?.[1]?.lastName
                                                    }

                                                    {/* {chat?.isGroupChat ? chat?.chatName : userNamesMap[chat._id]} */}
                                                </span>
                                                {/* <span className="text-[#4555ba]">900</span>
                                        <span className="text-black">p</span> */}
                                            </p>
                                            <div className="relative w-fit mt-[-0.74px] [font-family:'Raleway-Medium',Helvetica] font-medium text-black text-[12.6px] tracking-[1.26px] leading-[normal] whitespace-nowrap">
                                                {
                                                    new Date(chat?.latestMessage?.createdAt).toLocaleDateString() !== "Invalid Date" &&
                                                    new Date(chat?.latestMessage?.createdAt).toLocaleDateString()
                                                }
                                            </div>
                                        </div>
                                        {/* <div className="relative w-fit [font-family:'Raleway-Medium',Helvetica] font-medium text-[#3f3f3f] text-[14.1px] tracking-[1.41px] leading-[normal]">
                                            Animation task
                                        </div> */}
                                    </div>
                                    {
                                        chat?.latestMessage?.senderId &&
                                        <p className="relative w-fit [font-family:'Raleway-Medium',Helvetica] font-medium text-[#3f3f3f] text-[12.6px] tracking-[1.26px] leading-[normal] whitespace-nowrap">
                                            {
                                                chat?.isGroupChat ? "New Message" :
                                                    chat?.latestMessage?.senderId === userInfo?._id ? "you" : userNamesMap[chat._id]} :{chat?.latestMessage?.content.length > 10 ? chat?.latestMessage?.content.slice(0, 10) + '...' : chat?.latestMessage?.content
                                            }
                                        </p>
                                    }
                                    {
                                        !chat?.latestMessage?.senderId &&
                                        <p className="relative w-fit [font-family:'Raleway-Medium',Helvetica] font-medium text-[#3f3f3f] text-[12.6px] tracking-[1.26px] leading-[normal] whitespace-nowrap">
                                            No Messages
                                        </p>
                                    }
                                </div>
                        )
                    }
                    {
                        !read && userNamesMap && chats && chats?.map(
                            (chat, i) =>
                            (((chat.latestMessage.senderId !== userInfo._id) && (!chat?.latestMessage?.readBy?.includes(userInfo?._id)) && chat?.latestMessage?.senderId) && <div
                                onClick={() => {
                                    setSelectedChat(chat),
                                        socket.emit('join chat', chat?._id),
                                        handleRead(chat)
                                }}
                                key={i}
                                className={`flex flex-col w-[323.7px] items-start gap-[15.56px] px-[5.93px] py-[11.11px] rounded-[5.19px] border-[0.74px] border-solid border-[#c5c5c5] relative flex-[0_0_auto] cursor-pointer ${chat?._id === selectedChat?._id && "bg-[#aec9e58a]"}`}>
                                <div className="inline-flex flex-col items-start gap-[7.41px] relative flex-[0_0_auto]">
                                    <div className="flex w-[266.67px] items-start gap-[58.52px] relative flex-[0_0_auto]">
                                        <p className="relative flex-1 mt-[-0.74px] [font-family:'Raleway-Medium',Helvetica] font-medium text-transparent text-[14.8px] tracking-[1.48px] leading-[normal]">
                                            <span className="text-black">
                                                {chat?.isGroupChat ? chat?.chatName : userNamesMap[chat._id]}
                                            </span>
                                            {/* <span className="text-[#4555ba]">900</span>
                                        <span className="text-black">p</span> */}
                                        </p>
                                        <div className="relative w-fit mt-[-0.74px] [font-family:'Raleway-Medium',Helvetica] font-medium text-black text-[12.6px] tracking-[1.26px] leading-[normal] whitespace-nowrap">
                                            {
                                                new Date(chat?.latestMessage?.createdAt).toLocaleDateString() !== "Invalid Date" &&
                                                new Date(chat?.latestMessage?.createdAt).toLocaleDateString()
                                            }
                                        </div>
                                    </div>
                                    {/* <div className="relative w-fit [font-family:'Raleway-Medium',Helvetica] font-medium text-[#3f3f3f] text-[14.1px] tracking-[1.41px] leading-[normal]">
                                            Animation task
                                        </div> */}
                                </div>
                                {
                                    chat?.latestMessage?.senderId &&
                                    <p className="relative w-fit [font-family:'Raleway-Medium',Helvetica] font-medium text-[#3f3f3f] text-[12.6px] tracking-[1.26px] leading-[normal] whitespace-nowrap">
                                        {
                                            chat?.isGroupChat ? "New Message" :
                                                chat?.latestMessage?.senderId === userInfo?._id ? "you" : userNamesMap[chat._id]} :{chat?.latestMessage?.content.length > 10 ? chat?.latestMessage?.content.slice(0, 10) + '...' : chat?.latestMessage?.content
                                        }
                                    </p>
                                }
                                {
                                    !chat?.latestMessage?.senderId &&
                                    <p className="relative w-fit [font-family:'Raleway-Medium',Helvetica] font-medium text-[#3f3f3f] text-[12.6px] tracking-[1.26px] leading-[normal] whitespace-nowrap">
                                        No Messages
                                    </p>
                                }
                            </div>)
                        )
                    }

                </div>
            </div>
        </div>
    );
};

export default SuperMessageChatList;
