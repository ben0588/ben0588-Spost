import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import rightarrow from '../imgs/rightArrow.png';

class MemberPage extends Component {
    state = { path:'' }

    componentDidMount() {
        this.state.path = window.location.pathname.replace('/member/','').substring(0,4);
    }

    mouseOver = (e) => {
        e.target.parentElement.children[0].style.opacity = 1;        
    }

    onMouseOut = (e) => {
        if(e.target.id == this.state.path){
            e.target.parentElement.children[0].style.opacity = 1;
        }else{
            e.target.parentElement.children[0].style.opacity = 0;
        }
    }
    onClick = (e) => {
        e.target.parentElement.children[0].style.opacity = 1;
    }

    render() {
        return (
            <>
            {/* {`/member/plan/${window.localStorage.id}`} */}
                <NavLink to={`/member/info/${window.localStorage.id}`} className="text-decoration-none text-dark">
                    <div className="d-flex">
                        <img style={{ width: '30px', opacity: 0 }} src={rightarrow} />
                        <p id='info' onClick={this.onClick} onMouseOut={this.onMouseOut} onMouseOver={this.mouseOver}
                            className='h5'>會員資料</p>
                    </div>
                </NavLink>

                <NavLink to={`/member/post/${window.localStorage.id}`} className="text-decoration-none text-dark">
                    <div className="mt-3 d-flex">
                        <img style={{ width: '30px', opacity: 0 }} src={rightarrow} />
                        <p id='post' onClick={this.onClick} onMouseOut={this.onMouseOut} onMouseOver={this.mouseOver}
                            className='h5'>課程與場地</p>
                    </div>
                </NavLink>

                <NavLink to={`/member/plan/${window.localStorage.id}`} className="text-decoration-none text-dark">
                    <div className="mt-3 d-flex">
                        <img style={{ width: '30px', opacity: 0 }} src={rightarrow} />
                        <p id='plan' onClick={this.onClick} onMouseOut={this.onMouseOut} onMouseOver={this.mouseOver}
                            className='h5'>行事曆</p>
                    </div>
                </NavLink>
                <NavLink to={`/member/eval/${window.localStorage.id}`} className="text-decoration-none text-dark">
                    <div className="mt-3 d-flex">
                        <img style={{ width: '30px', opacity: 0 }} src={rightarrow} />
                        <p id='eval' onClick={this.onClick} onMouseOut={this.onMouseOut} onMouseOver={this.mouseOver}
                            className='h5'>評價</p>
                    </div>
                </NavLink>
            </>
        );
    }
}

export default MemberPage;