import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class IndexSiteCard extends Component {
    state = {  } 


  
    render() { 

        return (
            <>
                <div className='BenImgCard'>
                    <Link to={`/lesson/${this.props.pid}`}>
                    {/* <img src="https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNwb3J0fGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=400&q=60" alt="" /> */}
                    <div class='BenImgCardCover '>
                        <img src={`data:image/jpeg;base64,${this.props.img}`} alt="" />
                    </div>
                    <div class='BenImgCardBack'>
                        <div>
                        <h5 className=''>{this.props.title}</h5>
                        </div>
                        
                        <div>
                        <h4 className=''>{this.props.addr}</h4>
                        </div>

                        <div className=''>
                        <p className='border-danger border-3'>{this.props.info.substr(0,40)}</p>
                        <div className='BenImgCardBottom'>
                        <p className=''>查看詳情</p>
                        </div>
                        
                        
                        </div>
                    </div>
                    </Link>
                </div>
            </>
        );
    }
}
 
export default IndexSiteCard;