import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AlertDialog from './AlertDialog';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';


// import '../scss/all.scss';

/*

addr: "臺中市西屯區龍門路39號二樓"
id: "39"
img: "/9j/4AAQSkZJRgABAQEAYABgAAD//gA7Q1JFQVRPUjogZ2Qta
info: "依照客戶需求做調整。以功能性訓練為主。利用自身負重、啞鈴、彈力帶為基礎。建構身體的基本穩定與控制。"
lid: "l42"
mode: "一對一課程"
nickname: "Real01"
price: "1300"
title: "一對一/一對二私人訓練"
type: "重量訓練"

*/


class MemberLessonPost extends Component {
    state = {}

    render() {
        let data = this.props.dataList;
        // console.log(data);
        return (
            <>
                {data.map(elm => {
                    return (
                        <div className="border-0 col-xl-3 m-3 card">
                            <div className="border rounded shadow card h-100">
                                <div className="h-100">
                                    <img style={{
                                        height: '18em',
                                        width: '100%',
                                        background: 'white',
                                        objectFit: 'cover',
                                        objectPosition: '50% 50%'
                                    }} src={`data:image/jpeg;base64,${elm.img}`} className="card-img-top" />
                                </div>
                                <div className="card-body row ">
                                    <div className="col-12">
                                        <p className="card-title text-nowrap text-truncate">{elm.title}</p>
                                    </div>
                                    <div className="col-12">
                                        <p className="card-text text-nowrap text-truncate">{elm.nickname}</p>

                                    </div>
                                    <p className="card-text text-nowrap text-truncate"><small className="text-muted">{elm.addr}</small></p>
                                    <div className="col-12">
                                        <p><span className="p-1 rounded border border-dark fw-bold">{elm.type}</span></p>
                                    </div>
                                    <div className="col-12">
                                        <p><span className="p-1 rounded border border-dark fw-bold">{elm.mode}</span></p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between bg-white card-footer ">
                                    <Stack className='w-100' >
                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.1} readOnly />
                                    </Stack>
                                    <span>${elm.price}</span>
                                </div>
                            </div>
                            <div className="mx-2 mt-3 d-flex justify-content-between bg-white">
                                <Button variant="outlined" color="success">
                                    <NavLink className='text-decoration-none text-success' to={`/member/editl/${elm.id}/${elm.lid}`}>修改</NavLink>
                                </Button>
                                <AlertDialog />
                            </div>
                        </div>
                    )
                })}
            </>
        );
    }
}

export default MemberLessonPost;