import React, { Component } from 'react';
import '../../scss/all.css';

class RentSpace extends Component {
    state = {  } 
    render() { 
        return (
<header>
            <div className='row HomeHeadBoxStyle'>
                <div className='col-md-12 col-xl-6 bg-test' >
                測試租場地
                </div>

                <div className='col-md-12 col-xl-6 bg-test1'>
                    右邊
                </div>
            </div>

            <div className='row HomeHeadBoxStyle'>
                <div className='col-md-12 col-xl-6 bg-test1' >
                測試租場地
                </div>

                <div className='col-md-12 col-xl-6 bg-test'>
                    右邊
                </div>
            </div>
            </header>
        );
    }
}
 
export default RentSpace;