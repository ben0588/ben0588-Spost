import React, { Component } from 'react';
import Axios from 'axios';
import $ from 'jquery';

class ShoppingCartPage extends Component {
    state = { 
        place:[{
            "id":1,
            "Title": "健身房包場租借",
            "Host": "Charlie 查理",
    }],
        commodityValue:[
            localStorage.getItem("place"),
            // JSON.parse(localStorage.getItem("place",JSON.stringify(this.props.place)))
        ]
     } 

    // componentDidMount(){
    //     var retrievedObject =localStorage.getItem('place');
    //     var retrievedObjectA = JSON.parse(retrievedObject);
    //         // console.log(retrievedObjectA[0].id)
    //     var a = retrievedObjectA[0].id;
    //     $("#test").text(a);

    // };


     // var a =[];
        // a = localStorage.getItem("place");
        // this.setState({commodityValue:a.map((e) => <li>{e.id}</li>)})
        // this.setState({a})
        // var b = this.state.commodityValue.map((e) => <li>{e.id}</li>);
        // console.log(a);
        // console.log(b);

        // 點擊加入購物車取得商品localStorage資料 
        // var retrievedObject = JSON.parse(localStorage.getItem('place'));
        // var retrievedObject =localStorage.getItem('place');
        // var retrievedObjectA = JSON.parse(retrievedObject);
        // console.log(retrievedObjectA[0].id)
        // var a = retrievedObjectA[0].id;
        // $("#test").val(a);
    
        // console.log(typeof(retrievedObject));
        // console.log(retrievedObject[0].id);
        // var pid = retrievedObject[0].id;
        // console.log(retrievedObject[1].id);

        // $("#test").text(retrievedObject[0].id);
        // $("#test").val(retrievedObject[0].id);
        // $("#test").html(retrievedObject[0].id);

        // console.log('place:', JSON.parse(retrievedObject));
        // console.log(typeof(retrievedObject));

        // var retrievedObject = localStorage.getItem('name');
        // var test2 = retrievedObject.forEach();

        // var localId = localStorage.id = this.props.id;
        // localStorage.title = this.props.title   ;

        // $('#test2').on('click',function(){
        //     alert("OK");
        // });

    render() {
        
        

        return (
            <>
            
            <div id="test">123</div>
                            {/* {this.state.commodityValue} */}
                {/* <input type="text" value={localStorage.getItem("place")} /> */}
                {/* {this.state.commodityValue.map((e,index)=>{
                    return {e}
                })} */}


                {/* {this.state.placeData1.value} */}

                {/* {localStorage.place} */}
                <hr/>
                {/* {localStorage.key(this.id)} */}
                {/* {localStorage.key(this.localId)} */}
                <hr />
                {/* {JSON.parse(retrievedObject)} */}
                {/* {localStorage.key(localStorage.title.data)} */}
                {/* {test2} */}
                {/* <div id="test">123</div>
                <button id="test2" onClick={()=>{ return alert("OK")}} >測試按鈕</button> */}
                {/* {retrievedObjectA.id} */}
                {/* {this.state.commodityValue} */}
                {/* {JSON.parse(this.state.commodityValue)} */}
            </>
        );
    }
}
 
export default ShoppingCartPage;