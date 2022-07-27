import React, { Component } from 'react';
import MemberPage from '../DongComponents/MemberPage.jsx';
import axios from 'axios';

import Rating from '@mui/material/Rating';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

class MemberPlan extends Component {
    state = {
        // 會員訂單, 無訂單紀錄
        oderListInfo: [], oderNone: '',
        // 會員帳號Id, 會員帳號
        accountId: undefined, account: '', newId: [],
        // 評論id, 評論內容, 評論星數, 評論完成
        id: '', info: '', value: '', reactionOK: ''

    }

    // 取得會員Id
    componentDidMount = () => {
        this.state.accountId = this.props.match.params.id;
        this.MemberOrderList(this.props.match.params.id)
        this.setState({})
    }

    // 取得會員訂單資料
    MemberOrderList = async(memberId) => {
        const Qs = require("qs");
        await axios.post("http://localhost:80/spost/JeromePHP/memberOrderList.php", Qs.stringify({ 
            id: memberId,
            info: window.localStorage.info
        }))
        .then( response => {
            this.state.oderListInfo = [];
            this.state.oderNone = '';
            this.state.newId = [];
            this.setState({})
            if ( typeof response.data == 'object' ) {
                let lessonInfo = [];
                let placeInfo = [];
                if ( response.data.length != 0 ) {
                    Object.values(response.data).map( val => {
                        this.state.newId.push(val.oid)
                        this.setState({})
                        if ( val.oid.indexOf('p') ) { // -1 true / 0 false
                            // lesson
                            lessonInfo.push(val)
                        }else {
                            // place
                            placeInfo.push(val)
                        }
                    })
                    this.state.oderListInfo.push(lessonInfo, placeInfo)
                    this.setState({})
                }else {
                    // 查無訂單 ( 未付款 )
                    this.state.oderNone = '無訂單紀錄';
                    this.setState({})
                }
            }
        })
    }

    // 無訂單紀錄
    oderNoneCheck = ( value ) => { if (value.length == 0) { return '無訂單紀錄' } }

    // 變化 Accordion 圖片
    accChange = (e) => {
        this.state.reactionOK = '';
        this.setState({})
        if ( e.currentTarget.getAttribute('aria-expanded') == 'false') {
            e.currentTarget.querySelector('img').src = require('../imgs/up-arrow.png')
        }else {
            e.currentTarget.querySelector('img').src = require('../imgs/down-arrow.png')
        }
    }

    // 資料暫存 localStorage
    onChangeForm = (e, newValue) => {
        if ( e.target.rows ) {
            this.state.id = e.currentTarget.parentElement.getAttribute('value')
            this.state.info = e.target.value
            this.setState({})
        }else {
            this.state.id = e.currentTarget.parentElement.parentElement.getAttribute('value')
            this.state.value = newValue
            this.setState({})
        }
        window.localStorage.setItem(this.state.id, `${this.state.info},${this.state.value}`)
    }

    // 評論寫入自料庫
    formPost = () => {
        let time = new Date()
        const Qs = require("qs");
        this.state.newId.map( val => {
            if ( window.localStorage.getItem(val) ) {
                axios.post("http://localhost:80/spost/JeromePHP/reaction.php", Qs.stringify({
                    id: window.localStorage.id,
                    info: window.localStorage.info,
                    PLId: val,
                    rate: window.localStorage.getItem(val).split(',')[1],
                    reactionInfo: window.localStorage.getItem(val).split(',')[0],
                    time: `${time.getFullYear()}-${time.getMonth()}-${time.getDay()}`
                }))
                .then( response => {
                    if ( response.data == 1) {
                        this.state.reactionOK = '評論成功'
                        this.setState({})
                    }
                })
            }
        })
    }

    // 清除 localStorage
    componentWillUnmount = () => {
        this.state.newId.map( val => {
            window.localStorage.removeItem(val)
        })
    }

    render() {
        return (
            <div className='container'> 
                <div className='row' id='ok'>
                    <div className='col-2 mt-5 border-end'>
                        <MemberPage />
                    </div>
                    <div className='col-1'></div>
                    <div className='col-9 mt-4 shadow'>
                    <p className='text-center'>{this.state.oderNone}</p>
                    {this.state.oderListInfo.map( (value, index) => {
                        return (
                        <div className='my-4' key={index}>
                            <h3 className='text-start'>{index ? '場地' : '課程'}</h3>
                            <p className='text-center'>{this.oderNoneCheck(value)}</p>
                            {value.map( (val, idx) => {
                                return (
                                <div key={idx}>
                                    <Accordion className='mt-3'>
                                        <AccordionSummary id="panel1bh-header" onClick={this.accChange}>
                                            <Typography sx={{ width: '53%', flexShrink: 0 }}> {val.title} </Typography>
                                            <Typography sx={{ width: '45%', color: 'text.secondary' }}> {val.date} </Typography>
                                            <Typography sx={{ width: '2%' }}>
                                                <img className='w-100' src={ require('../imgs/down-arrow.png') }/>
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                <div className='row'>
                                                    <div className='col-lg-7'>
                                                        <form value={val.oid}> 
                                                            <textarea className="w-100" rows='5' onChange={this.onChangeForm} />
                                                            <div className='row align-items-center mt-2'>
                                                                <div id='val' className="col-lg-8" value={val.oid} data-val={1}>
                                                                    <Rating onChange={this.onChangeForm} />
                                                                </div>
                                                                <div className='col-lg-4'>
                                                                    <button className='btn btn-outline-info w-100' type='button'
                                                                        onClick={this.formPost}>
                                                                        送出評論
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className='col-lg-5'>
                                                        <p className='text-center text-success'>{this.state.reactionOK}</p>
                                                    </div>
                                                </div>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                                )
                            })}
                        </div>
                        )
                    })}
                    </div>
                </div>
                <br /><br /><br />
            </div>
        );
    }
}

export default MemberPlan;