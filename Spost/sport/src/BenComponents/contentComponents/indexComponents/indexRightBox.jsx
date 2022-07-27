import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../../scss/all.css';

class IndexRightBox extends Component {
    state = { 
     } 
    render() { 
        return (
            <div className='rightBox'>
                {/* 修改圖片區塊方向top/bottom */}
            <div className={this.props.imgAlign}>
                {/* 圖片src */}
                <img className="" src={this.props.src} alt="img" /> 
            </div>
                {/* 修改文字區塊方向top/bottom */}
            <div className={this.props.textAlign} >
                <div className='rightBoxBottomTextV1'>
                        <NavLink to={this.props.to}>
                            <h1>{this.props.value}</h1>
                        </NavLink>


                        <NavLink to={this.props.to}>
                            <p>{this.props.value1}</p>
                        </NavLink>
                    
                    
                </div>
            </div>
        </div>
        );
    }
}
 
export default IndexRightBox;