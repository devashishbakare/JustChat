import React from 'react'
import {useState, useEffect} from "react";
import axios from "axios";
function ChatPage() {

    const [chats, setChats] = useState([]);
    
    const fetchChat = async () => {
        const { data } = await axios.get("/api/chat");
        console.log("data", data);
        setChats(data);
    }
    useEffect(() => {
        fetchChat();
    }, []);

  return (
    <>
         <div>
           
            {chats.map((chat) => (
                <div key ={chat._id}>{chat.chatName}</div>
            ))}
        </div>
    </>
  );
}

export default ChatPage
