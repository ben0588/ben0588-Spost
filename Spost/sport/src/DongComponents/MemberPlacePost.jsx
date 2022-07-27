import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AlertDialog from './AlertDialog';
import Button from '@mui/material/Button';


// import '../scss/all.scss';
class MemberPlacePost extends Component {
    state = {}

    render() {
        let data = this.props.dataList;
        return (
            <>
                {data.map(elm => {
                    return (
                        <div className="border-0 col-xl-3 m-3 card">
                            <div className="border rounded shadow card h-100">
                            <div>
                                    <img style={{
                                        height: '18em',
                                        width: '100%',
                                        background: 'white',
                                        objectFit: 'cover',
                                        objectPosition: '50% 50%'
                                    }} src={`data:image/jpeg;base64,${elm.img}`} className="card-img-top" />
                                </div>
                                <div className="card-body  ">
                                    <div>
                                        <p className="card-title text-nowrap text-truncate">{elm.title}</p>
                                    </div>
                                    <div>
                                        <p className="card-text text-nowrap text-truncate">{elm.nickname}</p>

                                    </div>
                                    <p className="card-text text-nowrap text-truncate"><small className="text-muted">{elm.addr}</small></p>
                                </div>
                                <div className="d-flex bg-white card-footer ">
                                    <span>$&nbsp;{elm.price}</span><span>&nbsp;/&nbsp;</span><span>{elm.pricepertime}</span>
                                </div>
                            </div>
                            <div className="mx-2 mt-3 d-flex justify-content-between bg-white">
                                <Button variant="outlined" color="success">
                                    <NavLink className='text-decoration-none text-success' to={`/member/editp/${elm.id}/${elm.pid}`}>修改</NavLink>
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

export default MemberPlacePost;