import React, { Component } from 'react';
import '../../scss/all.css';
import 'bootstrap/dist/js/bootstrap';


class BecomeCoach extends Component {
    state = {  } 
    render() { 
        return (
            <header>
            <div className='row HomeHeadBoxStyle '>
                <div className='col-12 col-sm-6 bg-test '  >
            </div>        
     

                <div className='col-12 col-sm-6 bg-test1'>
                    右邊
                </div>
            </div>

            <div className='row HomeHeadBoxStyle'>
                <div className='col-6 bg-test1' >
                測試成為教練
                </div>

                <div className='col-6 bg-test'>
                    右邊
                </div>
            </div>
            </header>
        );
    }
}
 
export default BecomeCoach;