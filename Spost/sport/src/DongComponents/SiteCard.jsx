import { Component } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Link, NavLink } from "react-router-dom";
// npm i react-animated-css
// npm install aos
class SiteCard extends Component {
    state = {
    };
    componentDidMount() {
        AOS.init({
            duration: 1000
        });
    }
    cardOnClick = (event) =>{
        let e = event;
        this.props.cardOnClick(e);
    }
    render() {
        let dataList = this.props.dataList;
        return (
            <>
                {
                    dataList.map(elm => {
                        return (
                            <div data-aos="zoom-in" className="border-0 col-xl-3 col-lg-5 col-md-5 card m-3">
                                <div className="border rounded shadow card h-100">
                                    <div className="h-100">
                                        <Link onClick={this.cardOnClick} to={`/site/${elm.pid}`}>
                                            <img style={{
                                                height: '18em',
                                                width: '100%',
                                                background: 'white',
                                                objectFit: 'cover',
                                                objectPosition: '50% 50%'
                                            }} src={`data:image/jpeg;base64,${elm.img}`} className="card-img-top" />
                                        </Link>
                                    </div>
                                    <div className="card-body row ">
                                        <Link onClick={this.cardOnClick} to={`/site/${elm.pid}`}>
                                            <div className="col-12">
                                                <p className="card-title text-nowrap text-truncate">{elm.title}</p>
                                            </div>
                                        </Link>

                                        <p className="card-text text-nowrap text-truncate"><small className="text-muted">{elm.addr}</small></p>
                                    </div>
                                    <div className="d-flex bg-white card-footer ">
                                        <span>$&nbsp;{elm.price}</span><span>&nbsp;/&nbsp;</span><span>{elm.pricepertime}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </>
        )
    }

}

export default SiteCard;