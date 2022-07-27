import React from 'react';
import {auth} from './myfirebase'

function ChatSignOut(){
    function logout(){
        localStorage.clear();
        window.location.href = 'http://localhost:3000/login'
    }
    return(
        <div>
            {/* <p className="btn btn-primary" onClick={()=>auth.signOut()}>登出</p> */}
            <p className="btn btn-primary" onClick={logout}>登出</p>
        </div>
    )
}

export default ChatSignOut;