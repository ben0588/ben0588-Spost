import React, { Component } from 'react';

import '../scss/all.css';
import 'bootstrap/dist/js/bootstrap';
import { NavLink } from 'react-router-dom';

class NavBarContent extends Component {
    state = { 
        navStyle:{
            // position: 'sticky'
        }
    } 
    render() { 
        return (
            <div className="sticky-top">
                <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top" >
                    {/* 左右對齊則用container-fluid  */}
                    <div class="container"> 
                        <div className=''><NavLink  to="/" exact><img src="https://dummyimage.com/200x50/000/fff" alt='test2' /></NavLink></div>
                        <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mb-2 mb-lg-0 ms-auto">    
                            <li class="nav-item">
                            <div id=""><NavLink className="nav-link col-lg" to="/coursesAndVenues" exact >課程與場地</NavLink></div>
                            </li>
                            <li class="nav-item">
                            <div id="" ><NavLink className="nav-link col-lg " to="/becomeCoach" exact >成為教練</NavLink></div>
                            </li>
                            <li class="nav-item dropdown">
                            <div id="" ><NavLink className="nav-link col-lg " to="/rentSpace" exact >租場地</NavLink></div>
                            </li>
                            <li class="nav-item">
                            <div id="" ><NavLink className="nav-link col-lg" to="/loginRegister" exact >登入/註冊</NavLink></div>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
             </div>
        );
    }
}


export default NavBarContent