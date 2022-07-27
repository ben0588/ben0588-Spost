import React, { Component } from 'react';
import '../../scss/all.css';
import Axios from 'axios';
import $ from "jquery";
// import SearchSitePage from '../siteSearch/SearchSitePage.jsx'
// import Card from "../siteSearch/Card.jsx";
import CardTest from "../siteSearch/CardTest.jsx";
import Card from "../siteSearch/Card.jsx"

class ShoppingCart extends Component {
    state = { 
        // commodityValue:[
        //     localStorage.getItem("place"),
        //     // JSON.parse(localStorage.getItem("place",JSON.stringify(this.props.place)))
        // ],
        placeData:[
            {pid:null,titles:"",addrs:"",infos:"",sun:"",mon:"",tue:"",wed:"",thu:"",fri:"",sat:"",prices:""}
        ],
        placeData1:this.props.value,

        

        
    }

    async componentDidMount(){
        await Axios.get(`http://localhost:80/spost/Benphp/lessonGet.php`).then(response =>{
            var coursesAndVenue = response.data;
            this.setState({coursesAndVenue});
            // var coursesAndVenues =coursesAndVenue.map((function(){
            //     return(<div>
            //         <li>123</li>
            //         <li>123</li>
            //         <li>123</li>
            //     </div>
            //     )
            // }))
            // this.setState({})
            // console.log(typeof(coursesAndVenues));
            // console.log(coursesAndVenues);
            // $("#test").text(coursesAndVenue);
            $("#test").html(coursesAndVenue);
            // $("#test").val(coursesAndVenues);
            // $("#test").on('Click',function(){
            //     alert('OK');
            // })
    })}

            addShoppingCartCount =()=>{
            var a= localStorage.setItem("place",JSON.stringify(this.state.place));
                // var a= localStorage.setItem("place",this.state.place);
                // localStorage.setItem("Test",JSON.stringify(this.state.commodity));
                // localStorage.setItem("Test",this.state.commodity);
            this.setState({selectedProduct:a}) 
            }
    
    render() { 
        let dataList = this.props.dataList;
       



        return (
            <>
                測試購物車頁面
                <hr />
                {/* {dataList.map(elm =>{
                    return (
                        <div>{elm.title}</div>
                    )
                })} */}

                {console.log(this.props.match.params.id)}
                <hr/>
                {/* {localStorage.key(this.id)} */}
                {/* {localStorage.key(this.localId)} */}
                <hr />
                {/* {JSON.parse(retrievedObject)} */}
                {/* {localStorage.key(localStorage.title.data)} */}
                {/* {test2} */}


                {/* 撈取php資料顯示 */}
                {/* <div id="test">123</div>
                 */}
                <button id="test2" onClick={()=>{ return alert("OK")}} >測試按鈕</button>
                {/* {retrievedObjectA.id} */}
                {/* {this.state.commodityValue} */}
                {/* {JSON.parse(this.state.commodityValue)} */}
                
            </>
        );
    }
}
 
export default ShoppingCart;