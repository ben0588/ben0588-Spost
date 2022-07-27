import React, { useState, useEffect } from 'react';
import { db, auth } from './myfirebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import axios from 'axios';

function SendMessage() {
    const [msg, setMsg] = useState('');
    const [info, setInfo] = useState([]);
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
    async function sendMessage(e) {
        e.preventDefault();
        await db.collection('Messages').add({
            text: msg,
            mid:localStorage.id,
            nickname:info[0].nickname,
            createAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <input value={msg} onChange={(e) => setMsg(e.target.value)} placeholder='type' />
                <button type="submit" className='btn btn-outline-success'>Send</button>
            </form>
        </div>
    )
}

export default SendMessage;