import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../../scss/all.css';

class IndexLeftBox extends Component {
    state = {  } 
    render() { 
        return (
                <div className='col-12 col-sm-5 HomeHeadBoxLeft img-fluid' >
                    <div className='HomeHeadBoxLeftImgBox'
                    
                >
                    <img src={this.props.src} className="HomeHeadBoxImgStyle"alt="" />
                        <div className='HomeHeadBoxText'>
                            <div className="text-center" >
                                <h1 className='rounded-top'>{this.props.title}</h1>
                                <p className='rounded-bottom'>{this.props.value}</p>
                                <div className="btnRegister rounded-bottom">
                                    <NavLink className="nav-link" to="/login" exact >{this.props.BottomText}</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        );
    }
}
 
export default IndexLeftBox;