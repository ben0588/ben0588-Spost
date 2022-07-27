import React, { Component } from 'react';
import ChatSignin from './ChatSignin';
import ChatRoom from './ChatRoom';
// import {auth} from './myfirebase'
// import {useAuthState} from "react-firebase-hooks/auth";
// import {useCollectionData} from 'react-firebase-hooks/firestore'
function Chat(){
    // const [user] = useAuthState(auth);
    return (
        <>
            {localStorage.id ? <ChatRoom /> : <ChatSignin />}
        </>
    );
}
 
export default Chat;
