import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function Evaluation(props) {
    const [news, setNews] = useState();

    useEffect( () => {
        if ( props.id[0] != undefined ) { post(props.id[0]) }
    }, [props])

    let post = async(id) => {
        setNews([])
        const Qs = require("qs")
        await axios.post("http://localhost:80/spost/JeromePHP/Evaluation.php", Qs.stringify({ oid: id }))
        .then( response => {
            for (let i=0 ; i<8 ; i++ ) {
                setNews( old => [...old, response.data[i]])
            }
        })
    }


    return (
        <>
            {news && news.map( (value, index) => {
                return (
                    <div className="card m-2" key={index} style={{border: '2px black solid' }} data-aos="fade-left">
                        <div className='card-body text-center'>
                            <div className='w-100 mt-3'>
                                <p>{value.nickname}</p>
                            </div>
                            <div className='row text-center'>
                                <div className='col-lg-6'>
                                    <Stack>
                                        <Rating defaultValue={value.rate} precision={0.5} readOnly />
                                    </Stack>
                                </div>
                                <div className='col-lg-6'>
                                    <p>{value.time}</p>
                                </div>
                                <div className='text-start'>
                                    <p>{value.info}。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>

    );
}

export default Evaluation;