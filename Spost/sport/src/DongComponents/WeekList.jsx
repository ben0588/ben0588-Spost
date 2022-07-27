import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome


class WeekList extends Component {
    state = {

    }

    boxsize = {
        'width': '100%'
    }
    weekListOnclick = (event) => {
        let e = event
        this.props.weekListOnclick(e)
    }
    clearWeek = () => {
        this.props.clearWeek()
    }
    render() {
        let inputBoxStyle = this.props.style;
        return (
            <>
                <div className='d-flex justify-content-between mt-3'><span>星期</span><span onClick={this.clearWeek} className='btn text-secondary'>清除</span></div>
                <div style={this.boxsize} className='text-center'>
                    {this.props.datas.map((elm) => {
                        return (
                            <>
                                <input onChange={this.weekListOnclick} value={elm.id} className='d-none' type="checkbox" id={elm.id} name="week[]" required={false}/>
                                <label htmlFor={elm.id} style={inputBoxStyle} className='rounded shadow m-1 mx-2'><span name={elm.id}>
                                    <FontAwesomeIcon className={elm.color} icon={elm.chkicon} />&nbsp;</span>{elm.value}</label>
                            </>
                        )
                    })}
                </div>
            </>
        );
    }
}

export default WeekList;