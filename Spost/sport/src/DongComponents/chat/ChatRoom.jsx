import React, { useState, useEffect } from 'react';
import ChatSignOut from './ChatSignOut';
import SendMessage from './SendMessage';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore'
import { db } from './myfirebase';
import axios from 'axios';

function ChatRoom() {
    const [Messages, setMessages] = useState([]);
    const [info, setInfo] = useState([]);
    useEffect(() => {
      db.collection("Messages")
        .orderBy("createAt")
        .limit(50)
        .onSnapshot((snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }, []);

    useEffect(()=>{
        var toPHP = localStorage.id + ',';
        toPHP += localStorage.info;
        async function post(){
            await axios.post("http://localhost:80/spost/DongPHP/chat.php",toPHP)
            .then(res=>{
                setInfo(res.data);
            })
        }
        post()
    },[]);
    return (
        <div className="border">
            <ChatSignOut />
            {Messages.map(({text, id, photoURL, uid})=>(
                <div className='msg'>
                    {/* {console.log(id +' : '+photoURL+' : '+uid)} */}
                    {text}
                </div>
            ))}
            <SendMessage />
        </div>
    )
}

export default ChatRoom;