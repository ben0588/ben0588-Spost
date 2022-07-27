import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

function Footer(props) {
    const [news, setNews] = useState({});
    const [link, setLink] = useState({});
    
    useEffect( () => {
        if ( props.id !== undefined ) {
            get(props.id)
        }
    }, [props])

    let get = async(id) => {
        const Qs = require("qs")
        if ( id[1] ) {
            await axios.post("http://localhost:80/spost/JeromePHP/card.php", Qs.stringify({ id: true }))
            .then( response => {
                setLink([])
                for ( let x=0 ; x<response.data.length ; x++ ) {
                    setLink( old => [...old, `/site/${response.data[x].pid}`])
                }
                setNews(response.data)
            })
        }else {
            await axios.post("http://localhost:80/spost/JeromePHP/card.php", Qs.stringify({ id: false }))
            .then( response => {
                setLink([])
                for ( let x=0 ; x<response.data.length ; x++ ) {
                    setLink( old => [...old, `/lesson/${response.data[x].lid}`])
                }
                setNews(response.data)
            })
        }
    }

    let linkTo = (e) => {
        window.location.href = `${link[e.currentTarget.id]}`
    }

    return (
        <div className='container mt-3'>
            <div className='row mx-4 '>
                <p id='title' className='container'>關聯課程</p>
                <div className='row justify-content-center' >
                    {Object.values(news).map( (val,idx) => {
                        return (
                            <div className="col-lg-3 m-3 border-0 btn" data-aos="zoom-in-up" key={idx} onClick={linkTo} id={idx}>
                                <div class="card h-100">
                                    <img  className="card-img-top" src={`data:image/jpeg;base64,${val.img}`} alt=''
                                        style={{
                                            width:'100%',
                                            height: '18em',
                                            objectFit: 'cover',
                                            objectPosition:'50% 50%'
                                        }} />
                                    <div className="card-body mt-3">
                                        <h5 className="card-title text-nowrap text-truncate">{val.title}</h5>
                                        <p className="card-text">教練名稱</p>
                                        <p className="card-text text-nowrap text-truncate">
                                            <small className="text-muted ">{val.addr}</small>
                                        </p>
                                    </div>
                                    <div className="bg-white card-footer border-top">
                                        <span className="d-flex justify-content-center">
                                            $ {val.price} / {val.pricepertime}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Footer;