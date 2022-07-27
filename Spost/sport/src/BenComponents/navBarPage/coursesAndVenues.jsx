import React, { Component,NavLink,Link } from 'react';
import '../../scss/all.css';
import Card from "../siteSearch/Card.jsx";
import Axios from 'axios';
import $ from "jquery";
class CoursesAndVenues extends Component {
    state = { 
        // lessonData:[
        //     {lid:0,title:"",name:"",addr:"",info:"",sun:"",mon:"",tue:"",wed:"",thu:"",fri:"",sat:"",prices:""}
        // ],
        data:[],
        lessonList:[
            {lid:0,title:"",name:"",addr:"",info:"",sun:"",mon:"",tue:"",wed:"",thu:"",fri:"",sat:"",prices:""}
        ],
        // place:[],
        // employee: [],


        // place:[{
        //     "id":1,
        //     "Title": "健身房包場租借",
        //     "Host": "Charlie 查理",
        //     "Address": "桃園市中壢區中豐路160號",
        //     "Info": "四站式/滑輪下拉/坐姿划船/龍門架cable/深蹲架/史密斯/舉重台/腿推機/啞鈴1～25kg/各式手把/配件/每次只租借一組 隱私足夠",
        //     "Time": [
        //         "每周日：10:00 ～ 22:00",
        //         "每周一：10:00 ～ 22:00",
        //         "每周二：10:00 ～ 22:00",
        //         "每周三：10:00 ～ 22:00",
        //         "每周四：10:00 ～ 22:00",
        //         "每周五：10:00 ～ 22:00",
        //         "每周六：10:00 ～ 22:00"
        //     ],
        //     "Price": "300 / 90 分鐘",
        //     "Img": [
        //         "https://picsum.photos/500/400?random=2",
    
        //     ],
        //     "Stype": [
        //         "拳擊格鬥",
        //         "混合健身",
        //         "有氧訓練",
        //         "重量訓練"
        //     ],"money":[
        //         999
        //     ]},
        //     {
        //         "id":2,
        //         "Title": "身體秘境",
        //         "Host": "Clare",
        //         "Address": "臺北市大安區光復南路240 巷5號2F",
        //         "Info": "身體秘境｜場地租借優惠|平日14:00-18:30，租借ABC教室（8/12/9坪）分別為400/500/400元／小時。假日12:00-18:00，租借ABC教室（8/12/9坪）分別為500/600/500元／小時。會議形式場租另議（含投影機及布幕）|嶄新裝潢、鄰近捷運國父紀念館站、三面採光，管理良好，適合瑜珈課程（教室有瑜珈墊及磚）、、兒童繪本、兒童律動、赤腳舞蹈、靈性課程、團體包班練習。",
        //         "Time": [
        //             "每周日：14:00 ～ 18:00",
        //             "每周一：14:00 ～ 18:00",
        //             "每周二：14:00 ～ 18:00",
        //             "每周三：14:00 ～ 18:00",
        //             "每周四：14:00 ～ 18:00",
        //             "每周五：14:00 ～ 18:00",
        //             "每周六：14:00 ～ 18:00"
        //         ],
        //         "Price": "600 / 60 分鐘",
        //         "Img": [
        //             "https://picsum.photos/500/400?random=2"
        //         ],
        //         "Stype": [
        //             "舞蹈",
        //             "皮拉提斯",
        //             "瑜珈",
        //             "高強度間歇訓練",
        //             "有氧訓練"
        //         ]
        //         ,"money":[
        //             599

        //         ]
        // }]
    
    } 

        // async componentDidMount (){
        // // var result = await Axios.get("http://localhost:8000/lessonGet.php");
        // // console.log(result);
        // // console.log(result.data);
        // // this.setState({ lessonList:result.data})

        // var result = await Axios.get("http://localhost:8000/lessonGet.php/").then(function(response){
        //     console.log(response);
        //     console.log(response.data);

        // });



        async componentDidMount() {
            // var url = `http://localhost/lessonGet.php`;
            // var result = await Axios.get(url);
            // this.state.lessonList = result.data;
            // this.setState({});
        }
        
        
        
        // fetch('http://localhost:8000/sport/lessonGet.php/').then((response)=>{
        //     console.log(response);
        //     return response.json();
        // }).then((result)=>{
        //     console.log(result);
        // })
    
        // };
        // chk = ()=>{console.log(this.state.todoList)
        // };


        // componentDidMount () {
        //     fetch('http://localhost/spost/src/php/lessonGet.php/').then(response => {
        //         console.log(response);
        //         return response.json();
        //       }).then(result => {
        //         // Work with JSON data here
        //         console.log(result);
        //         this.setState({
        //             employee_rs:result
        //         }); 
        //       }).catch(err => {
        //         // Do something for an error here
        //         console.log("Error Reading data " + err);
        //       });

        // }

            // addShoppingCartCount =()=>{
            //     var a= localStorage.setItem("place",JSON.stringify(this.state.place));
            //     // var a= localStorage.setItem("place",this.state.place);
            //     // localStorage.setItem("Test",JSON.stringify(this.state.commodity));
            //     // localStorage.setItem("Test",this.state.commodity);
            //     this.setState({selectedProduct:a}) 
            // }





    render() { 
        return (
            <header>
            <div className='row coursesAndVenuesBoxStyle m-auto'>
                <div className='col-md-12 col-xl-12 bg-test ' >
                
                {/* {this.state.place.map((e,index)=>{return  <Link to={`/coursesAndVenues/${e.id}`}><Card id={e.id} key={index} value={e.value}/>
                </Link>})}  */}
               
                {this.state.place.map((e,index)=>{return <Card id={e.id} key={index} 
                value={e.value} 
                title={e.Title}
                host={e.Host}
                address={e.Address}
                money={e.money}
                src={e.Img}
                onClick={this.addShoppingCartCount}
                
                />})}
                {/* <button onClick={this.chk}>測試中</button> */}
                {/* {this.state.lessonList.map((e,index)=>{return <Card id={e.id} key={index} 
                title={e.title}
                />})} */}
                </div>

                {/* {this.state.lessonList.map((e,key)=>{
                    return  <Card lid={e.lid} title={e.title}/>
                    
                    
                    
                    
                    
                    
                    })} */}
                

                <div>
                    {/* {<Card laceData={this.state.place} />} */}
                    {/* {this.state.data.lid} */}
                    {/* {this.state.data.map()} */}
                </div>
            </div>
            </header>
        );
    }
}
 
export default CoursesAndVenues;