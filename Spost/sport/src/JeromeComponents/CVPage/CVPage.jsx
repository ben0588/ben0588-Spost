import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../scss/all.css';
// import './abc.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

import Head from './components/head';
import Scroll from './components/scroll';
import Body from './components/body';
import Footer from './components/footer';

AOS.init()

function CVPage(props) {
    const [id, setId] = useState();
    const [news, setNews] = useState();

    useEffect( () => {
        if ( props.match.params.pid ) {
            setId([props.match.params.pid, true])
        }else {
            setId([props.match.params.lid, false])
        }
    }, [])

    useEffect( () => {
        if ( id != undefined ) { post(id) }
    }, [id])

    let post = async(id) => {
        const Qs = require("qs")
        if ( id[1] ) {
            await axios.post("http://localhost:80/spost/JeromePHP/course.php", Qs.stringify({ pid: id[0] }))
            .then( response => {
                setNews(response.data)
            })
        }else {
            await axios.post("http://localhost:80/spost/JeromePHP/venues.php", Qs.stringify({ lid: id[0] }))
            .then( response => {
                setNews(response.data)
            })
        }
    }

    return (
        <div style={{marginTop: '9vh'}}>
            <Head id={id} all={news && news}/>
            <Scroll />
            <Body id={id && id} all={news && news[0]}/>
            <Footer id={id && id}/>
        </div>
    )
}
export default CVPage;