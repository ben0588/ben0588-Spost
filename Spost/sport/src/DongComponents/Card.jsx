import { Component } from "react";
import Axios from 'axios';
import pic from '../imgs/user1.png';
import brad from '../imgs/user.png';
import { toHtml } from "@fortawesome/fontawesome-svg-core";
class Card extends Component {
    state = {
        src: [pic, brad, pic]
    };
    render() {
        // this.getData();
        let dataList = this.props.dataList;
        // console.log(dataList);
        return (
            <>
                {
                    dataList.map(elm => {
                        return (
                            <>
                                <div className="border-0 col-xl-3 col-lg-5 col-md-5 card m-3">
                                    <div className="border rounded shadow card h-100">
                                        <div className="h-100">
                                            <img style={{
                                                height: '18em',
                                                width: '100%',
                                                background: 'white',
                                                objectFit: 'cover',
                                                objectPosition: '50% 50%'
                                            }} src={`data:image/jpeg;base64,${elm.img1}`} className="card-img-top" />
                                        </div>
                                        <div className="card-body row ">
                                            <div className="col-12">
                                                <p className="card-title text-nowrap text-truncate">{elm.title}</p>
                                            </div>
                                            <div className="col-12">
                                                <p className="card-text text-nowrap text-truncate">{elm.cname}</p>

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
                                            <span>評價</span>
                                            <span>${elm.price}</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })
                }
            </>
        )
    }

}

export default Card;