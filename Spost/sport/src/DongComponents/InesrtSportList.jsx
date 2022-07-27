import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome


class InesrtSportList extends Component {
    state = {

    }

    sportListOnclick = (event) => {
        let e = event
        this.props.sportListOnclick(e)
    }

    render() {
        return (
            <div id='sportList'>
                {this.props.datas.map((elm) => {
                    return (
                        <React.Fragment>
                            <input onChange={this.sportListOnclick} value={elm.value} className='d-none' type="checkbox" id={elm.value} name="type[]"/>
                            <label htmlFor={elm.value} className={elm.class}><span name={elm.value}><FontAwesomeIcon className={elm.color} icon={elm.chkicon} />&nbsp;</span>{elm.cName}</label>
                        </React.Fragment>
                    )
                })}

            </div>
        );
    }
}

export default InesrtSportList;