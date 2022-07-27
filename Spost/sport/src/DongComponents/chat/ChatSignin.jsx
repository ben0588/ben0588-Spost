import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {auth} from './myfirebase';

function ChatSignIn(){
    // function signInWithGoogle(){
    //     const provider = new firebase.auth.GoogleAuthProvider() ;
    //     auth.signInWithPopup(provider)
    // }
    function login(){
        window.location.href='/login';
    }
    return(
        <div>
            {/* <p className="btn btn-primary" onClick={signInWithGoogle}>Sign In With Google</p> */}
            <p className="btn btn-primary" onClick={login}>登入</p>
        </div>
    )
}

export default ChatSignIn;