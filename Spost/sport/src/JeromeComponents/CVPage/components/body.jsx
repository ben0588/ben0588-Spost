import React, { useState, useEffect } from 'react';
import Evaluation from './Evaluation';
import Monthly from './monthly';

import Rating from '@mui/material/Rating';

function Body(props) {
    const [id, setId] = useState({});
    const [news, setNews] = useState({});

    // 傳入news ( news: 資料庫(place)資訊 )
    useEffect( () => {
        if ( props.id != undefined && props.all != undefined ) {
            setId(props.id)
            setNews(props.all)
        }
    }, [props])

    // 更新google地圖
    let address = () => {
        return `https://www.google.com/maps/embed/v1/place?key=AIzaSyB09_GtwzgJdeUBYhUL91I60stBPgC_i4U&q=${news.addr}`
    }

    // table
    let table = () => {
        if ( id != undefined ) {
            if ( id[1] ) {
                return (
                    <thead>
                        <tr>
                            <th scope="row" className='bg-black text-white'>週一</th>
                            <td>&nbsp;{news.mon}</td>
                            <th scope="row" className='bg-black text-white'>週二</th>
                            <td>&nbsp;{news.tue}</td>
                        </tr>
                        <tr>
                            <th scope="row" className='bg-black text-white'>週三</th>
                            <td>&nbsp;{news.wed}</td>
                            <th scope="row" className='bg-black text-white'>週四</th>
                            <td>&nbsp;{news.thu}</td>
                        </tr>
                        <tr>
                            <th scope="row" className='bg-black text-white'>週五</th>
                            <td>&nbsp;{news.fri}</td>
                            <th scope="row" className='bg-black text-white'>週六</th>
                            <td>&nbsp;{news.sat}</td>
                        </tr>
                        <tr>
                            <th scope="row" className='bg-black text-white'>週日</th>
                            <td>&nbsp;{news.sun}</td>
                            <th scope="row"></th>
                            <td></td>
                        </tr>
                    </thead>
                )
            }else {
                return (
                    <thead>
                        <tr>
                            <th scope="row" className='bg-black text-white'>週一</th>
                            <td>&nbsp;{news.mon}</td>
                            <th scope="row" className='bg-black text-white'>週二</th>
                            <td>&nbsp;{news.tue}</td>
                        </tr>
                        <tr>
                            <th scope="row" className='bg-black text-white'>週三</th>
                            <td>&nbsp;{news.wed}</td>
                            <th scope="row" className='bg-black text-white'>週四</th>
                            <td>&nbsp;{news.thu}</td>
                        </tr>
                        <tr>
                            <th scope="row" className='bg-black text-white'>週五</th>
                            <td>&nbsp;{news.fri}</td>
                            <th scope="row" className='bg-black text-white'>週六</th>
                            <td>&nbsp;{news.sat}</td>
                        </tr>
                        <tr>
                            <th scope="row" className='bg-black text-white'>週日</th>
                            <td>&nbsp;{news.sun}</td>
                            <th scope="row"></th>
                            <td></td>
                        </tr>
                    </thead>
                )
            }
        }
    }

    return (
        <div className='container mt-1'>
            <div className='row'>
                <div className='col-lg-8'>
                    {/* 場地簡介 */}
                    <div className='container' data-aos="fade-up">
                        <p id='title' className='container'>場地簡介</p>
                        <div className='container'>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {news.info}
                            </p>
                        </div>
                    </div>
                     {/* "立即租借" 連結 */}
                     <div  id='reserve'></div>
                    <hr />
                    {/* 開放時段 */}
                    <div className='container' data-aos="fade-up">
                        <p id='title' className='container'>開放時段</p>
                        <div className='container'>
                            <table className="table" data-toggle="table">
                                {table()}
                            </table>
                        </div>
                    </div>
                    <hr />
                    {/* 預約狀況 */}
                    <div className='container' data-aos="fade-up">
                        <p id='title' className='container'>預約狀況</p>
                        <Monthly news={news} id={id}/>
                    </div>
                    <hr />
                    {/* 地址 */}
                    <div className='container' data-aos="fade-up">
                        <p id='title' className='container'>地址</p>
                        <div className='row align-items-center m-2'>
                            <h4 className='text-center m-1'>{news.addr}</h4>
                            <iframe src={address()} frameBorder="0" className='col-lg-12 mt-3' height='400vh'></iframe>
                        </div>
                    </div>
                    <hr />
                    {/* 取消政策 */}
                    <div className='container-fluid' data-aos="fade-up">
                        <div className='row'>
                            <div className='col-lg-7'>
                                <p id='title' className='container'>取消政策</p>
                                <div className='container '>
                                    <h5 className='col-lg-5 p-3 w-100'>
                                        <img src={require('./icon/check2.png')} style={{height: '3vh'}}/>
                                        <span className='mx-3'>課程開始1小時前</span>
                                        
                                        <span style={{fontSize: '15px'}}> (可全額退款100%) </span>
                                    </h5>
                                    <h5 className='col-lg-5 p-3 w-100'>
                                        <img src={require('./icon/cross.png')} style={{height: '3vh'}}/>
                                        <span className='mx-3'>課程開始少於1小時</span>
                                        <span style={{fontSize: '15px'}}> (不可退款) </span>
                                    </h5>
                                </div>
                            </div>
                            <div className='col-lg-5'>
                                <p id='title' className='container'>注意事項</p>
                                <h5 className='container'>
                                    <img src={require('./icon/no-smoke.png')} style={{height: '3vh'}}/>
                                    <span className='mx-3'>禁止吸煙</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 課後評價 */}
                <div className='col-lg-3 bg-black'>
                    <h3 className='container text-end m-1 text-white'>課後評價</h3>
                    <div  style={{transform: 'translate(5%, 0)', width: '120%'}} >
                        <Evaluation id={id}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Body;