import React, { Component } from 'react';
import '../../scss/all.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Axios from 'axios';
import { NavLink } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'


// 輪播課程卡片
import CarouselCard from '../contentComponents/carouselCard/carouselCard.jsx'
// 7/18 BEN 新增輪播場地卡片 
import CarouselPlaceCard from '../contentComponents/carouselCard/carouselPlaceCard.jsx'

// 首頁左側區塊
import IndexLeftBox from '../contentComponents/indexComponents/indexLeftBox.jsx';
// 首頁左側區塊一張方形圖片
import leftImg from '../../imgs/ben01.jpg';

// 首頁右側區塊
import IndexRightBox from '../contentComponents/indexComponents/indexRightBox.jsx';
// 首頁右側區塊四張長型圖片
import rightImg2 from '../../imgs/ben004.jpg';
import rightImg4 from '../../imgs/ben002.jpg';
import rightimg2 from '../img/index/072302.jpg';
import rightimg3 from '../img/index/072303.jpg';

// 7/25 BEN 新增下方評論區卡片
import CommentCard from '../contentComponents/CommentCard.jsx'

// 7/25 BEN 新增下方首頁場地卡片
import IndexSiteCard from '../contentComponents/indexSiteCard.jsx'

// 7/27 BEN 新增footer頁尾
import Footer from '../navBarPage/footer.jsx'
class HomeHead extends Component {
    state = {
        // header 左側區塊設定
        oneLeftBoxStyle:[
            {id:1,title:"開啟你的運動旅程",value:"彈指間找到附近的課程、教練、訓練空間",BottomText:"立即加入",src1:leftImg,to:"/login"},
        ],
        // header 右側區塊設定
        oneRightBoxStyle:[
            {id:1,value:"多功能訓練",value1:"一對一課程",src:rightimg3,imgAlign:"rightBoxTopImg",TextAlign:"rightBoxBottomText",to:"/lesson"},
            {id:2,value:"多功能教室",value1:"室內運動",src:rightImg4,imgAlign:"rightBoxBottomImg",TextAlign:"rightBoxTopText",to:"/site"},
            {id:3,value:"間歇訓練",value1:"團體課程",src:rightImg2,imgAlign:"rightBoxTopImg",TextAlign:"rightBoxBottomText",to:"/lesson"},
            {id:4,value:"瑜珈空間",value1:"皮拉提斯",src:rightimg2,imgAlign:"rightBoxBottomImg",TextAlign:"rightBoxTopText",to:"/site"},
        ],
        CommentCard:[
            {id:1,name:"郡婕",date:"2022/6/01",star:5,value:'親切、活潑、專業、我會想再繼續購課!初學也很適合，強度老師會分級說明',img:'https://images.unsplash.com/photo-1521227889351-bf6f5b2e4e37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80'},
            {id:2,name:"林辰翰",date:"2022/6/29",star:5,value:'推薦，有不同老師不同類型，可以訓練不同部位，很適合想每天動一下的人',img:'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80'},
            {id:3,name:"蓋兒",date:"2022/7/22",star:5,value:'很多課程教練都很不錯，初學跟想動一動伸展及小練一下肌力的都很適合✨',img:'https://images.unsplash.com/photo-1513738817443-e91e222031fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80'},
            {id:4,name:"曾千侑",date:"2022/7/25",star:5,value:'課程種類豐富~ 提供的運動場地也很多，這樣就可以多邀約朋友一起運動健康!',img:'https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80'},
        ],
        indexSiteCard:[
            {id:1,name:"郡婕",date:"2022/6/01",star:5,value:'親切、活潑、專業、我會想再繼續購課!初學也很適合，強度老師會分級說明',img:'https://images.unsplash.com/photo-1521227889351-bf6f5b2e4e37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80'},
            {id:2,name:"林辰翰",date:"2022/6/29",star:5,value:'推薦，有不同老師不同類型，可以訓練不同部位，很適合想每天動一下的人',img:'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80'},
            {id:3,name:"大直大教室/空瑜/瑜珈/舞蹈教室",date:"2022/7/22",star:5,value:'位於大直站3號出口步行8分鐘距離。停車方便。位於商場內，旁邊有咖啡廳、麵包店等。教室環境舒適乾淨，多功能使用。',img:'https://images.unsplash.com/photo-1513738817443-e91e222031fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80'},
            {id:4,name:"大直大教室/空瑜/瑜珈/舞蹈教室",date:"2022/7/22",star:5,value:'位於大直站3號出口步行8分鐘距離。停車方便。位於商場內，旁邊有咖啡廳、麵包店等。教室環境舒適乾淨，多功能使用。',img:'https://images.unsplash.com/photo-1513738817443-e91e222031fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80'},
            {id:5,name:"大直大教室/空瑜/瑜珈/舞蹈教室",date:"2022/7/22",star:5,value:'位於大直站3號出口步行8分鐘距離。停車方便。位於商場內，旁邊有咖啡廳、麵包店等。教室環境舒適乾淨，多功能使用。',img:'https://images.unsplash.com/photo-1513738817443-e91e222031fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80'},
        ],
        lessonData:[],
        placeData:[],
        lessonV1:[],
        lessonV2:[],
        lessonV3:[],
        placeV1:[],
        
    }
              
    async componentDidMount() {
        AOS.init()

        // 取得課程lesson
        var url = `http://localhost:80/spost/BenPHP/lessonGet.php`;
        await Axios.get(url).then( result => {
            this.state.lessonData = [];
            let dateLesson = [];
            Object.keys(result.data).map( (values)=> {
                dateLesson.push(result.data[values])
                
                if ( dateLesson.length == 5 ) {
                    this.state.lessonData.push(dateLesson)
                    dateLesson = []
                    
                }
                
            })
            
        })
    
        // 取得場地place
        var url = `http://localhost:80/spost/BenPHP/placeGet.php`;
        await Axios.get(url).then( result => {
            this.state.placeData = [];
            let datePlace = [];
            Object.keys(result.data).map( (values)=> {
                datePlace.push(result.data[values])
                this.state.placeV1 = this.state.placeData[0]
                if ( datePlace.length == 5 ) {
                    this.state.placeData.push(datePlace)
                    datePlace = []
                }
                // console.log(this.state.placeV1)
            })
        })
        this.setState({});
    }

    render() {
        return (
            <div>
                {/* 第一層header */}
                <header className=''>
                    {/* header第一段左邊 */}
                    <div className='HomeHeadBoxStyle row m-0 w-100'                                                             
                        // data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" 
                        >
                        {this.state.oneLeftBoxStyle.map((e,index)=>{return <IndexLeftBox 
                                id={e.id} key={index} title={e.title} value={e.value} src={e.src1}
                                to={e.to} BottomText={e.BottomText} />
                        })}

                        {/* header第一段右邊圖片牆 */}
                        <div className='col-12 col-sm-7 HomeHeadBoxRight'>
                            <div className='HomeHeadBoxRightImgBox'>
                                <div className='HomeHeadBoxRightText row-cols-4 ' >  
                                    {this.state.oneRightBoxStyle.map((e,index)=>{return <IndexRightBox 
                                        id={e.id} key={index} value={e.value} value1={e.value1} src={e.src} imgAlign={e.imgAlign}
                                        textAlign={e.TextAlign}to={e.to}/>
                                    })}
                                </div>
                            </div>     
                        </div>
                    </div>
                </header>
                
                {/* 第一層section(設定滿版標語) */}
                <section>
                    <div className='oneSectionBox'>
                        <div className='row container m-auto'>
                            <div className='col-3 oneSectionBoxCol'
                                data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0" 
                                
                                >
                            <h1 className='container text-center mt-4 text-white'>30,000+</h1>
                            <h4 className='container text-center text-white'>運動愛好者</h4>
                                <div className='oneSectionBoxButton'>
                                    <NavLink to="/login" className="container btn bg-white w-50 mt-3" activeStyle={{color:'red'}}>
                                        立即加入
                                    </NavLink>
                                </div>
                            </div>

                            <div className='col-3 oneSectionBoxCol'
                                data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0" >
                            <h1 className='container text-center mt-4 text-white'>1000+</h1>
                            <h4 className='container text-center text-white'>專業教練老師</h4>
                                <div className='oneSectionBoxButton'>
                                    <NavLink to="/lesson" className="container btn bg-white w-50 mt-3">
                                        前往探索
                                    </NavLink>
                                </div>
                            </div>

                            <div className='col-3 oneSectionBoxCol'
                                data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0" >
                            <h1 className='container text-center mt-4 text-white'>1,600+</h1>
                            <h4 className='container text-center text-white'>實體/線上課程</h4>
                                <div className='oneSectionBoxButton'>
                                    <NavLink to="/lesson" className="container btn bg-white w-50 mt-3">
                                        前往探索
                                    </NavLink>
                                </div>
                            </div>

                            <div className='col-3 oneSectionBoxCol'
                                data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0" >
                            <h1 className='container text-center mt-4 text-white'>100+</h1>
                            <h4 className='container text-center text-white'>運動訓練空間</h4>
                                <div className='oneSectionBoxButton'>
                                    <NavLink to="/site" className="container btn bg-white w-50 mt-3">
                                        前往探索    
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 第二層section(輪播Carousel設定) 課程頁面*/}
                <section>
                    <div className='mt-3 m-5 h-100' 
                    
                    // data-aos="fade-up" 
                    // data-aos-easing="linear" 
                    // data-aos-duration="1500" 
                    
                    >
                        <div className='carouselBoxBigText container mb-3'  >
                            <h1>全台超過1000位專業教練</h1>
                            <div 
                                data-aos="fade-up" 
                                data-aos-easing="linear" 
                                data-aos-duration="1500" >
                            <a>健身、重訓、瑜珈、有氧、皮拉提斯、舞蹈都有</a>
                            </div>
                            
                        </div>
                    <Carousel interval={5000} indicators={false} nextLabel={false} prevLabel={false} fade
                        pause={'hover'} slide={true} touch={true} controls={false} className="mt-5 container m-auto">
                        {this.state.lessonData.map( (value, idx) => {
                            return (
                                <Carousel.Item className='w-100 d-flex' key={idx}>
                                    {value.map( (values, index) => {
                                        return (
                                            <CarouselCard 
                                                key={index}
                                                lid={values.lid} 
                                                title={values.title} 
                                                img={values.img} />  
                                        )
                                    })}
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>

                    <div className='carouselBoxBottomText container' 
                        data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" >   
                        <div className='carouselBoxBottomTextV1 mt-3'>
                            <div className='carouselBoxBottomTextV1Right'>
                                <NavLink to="/lesson">
                                    <a className='carouselBoxBottomTextV2'>探索更多教練
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15%" height="15%" fill="currentColor" 
                                            class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                                            <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                                        </svg>
                                    </a>
                                </NavLink>
                            </div>
                        </div>
                    </div>

                
                    </div>
                </section>
                
                {/* 第三層section(輪播Carousel設定) 場地頁面 */}
                <section>
                    <div className='mt-0 m-5 row-sm-12' 
                    data-aos="fade-up" 
                    data-aos-easing="linear" 
                    data-aos-duration="1500" 
                    >
                        <div className='carouselBoxBigText container mb-3' 
                            data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
                            <h1>各類運動訓練空間</h1>

                            <div 
                                data-aos="fade-up" 
                                data-aos-easing="linear" 
                                data-aos-duration="1500" >
                            <a>室內運動、室內健身、戶外運動、戶外健身</a>
                            </div>
                        </div>
                        <Carousel interval={5000} indicators={false} nextLabel={false} prevLabel={false} fade
                            pause={'hover'} slide={true} touch={true} controls={false} className="mt-5 container m-auto">
                            {this.state.placeData.map( (value, idx) => {
                                return (
                                    <Carousel.Item className='w-100 d-flex' key={idx}>
                                        {value.map( (values, index) => {
                                            return (
                                                <CarouselPlaceCard 
                                                    key={index}
                                                    pid={values.pid}
                                                    title={values.title} 
                                                    img={values.img} />
                                            )
                                        })}
                                    </Carousel.Item>
                                )
                            })}
                        </Carousel>
                        <div className='carouselBoxBottomText cont container' data-aos="fade-up" >   
                            <div className='carouselBoxBottomTextV1 mt-3'>
                                <div className='carouselBoxBottomTextV1Right'>
                                    <NavLink to="/site">
                                        <a className='carouselBoxBottomTextV2'>探索更多場地
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15%" height="15%" fill="currentColor" 
                                                class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                                                <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                                            </svg>
                                        </a>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* 第三層section設定固定底圖 */}
                <section className='mt-6 mb-5'>
                    <div className='threeSectionBox mt-6'>
                        <div className='threeSectionBoxBottomImg h-100 w-100'>
                            <div className='threeSectionBoxContentText'
                                    data-aos="fade-up" 
                                    data-aos-easing="linear" 
                                    data-aos-duration="1500" 
                                    >
                                <h2>Spost+陪你從訓練到改變!</h2>

                            </div>

                            <div className='threeSectionBoxContentBox'>    
                            {this.state.CommentCard.map((value,index)=>{
                                return(
                                    <CommentCard 
                                    key={index} 
                                    name={value.name}
                                    date={value.date}
                                    title={value.title}
                                    star={value.star}
                                    value={value.value}
                                    img={value.img}/>
                                )

                            })}
                            </div>
                        </div>
                    </div> 

                    {/* 第四層section設定固定底圖 */}
                    <div className='threeSectionBoxV1'>
                        <div className='threeSectionBoxBottomImgV1 h-100 w-100'>
                                <div className='threeSectionBoxContentTextV1'>
                                    <div className="container-text">
                                    <h2>想揪團運動時</h2>
                                        <div className="text-wrapper">
                                            <div className="text" ><h2>天氣狀況不好時怎麼辦</h2></div>
                                            <div className="text" ><h2>立即查看各式室內場地</h2></div>
                                            <div className="text"><h2></h2></div>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className='threeSectionBoxV1Card container '>
                                <div className=' threeSectionBoxV1CardContent'>
                                    
                                    {this.state.placeV1.map((value,index)=>{
                                return(
                                    <IndexSiteCard 
                                    title={value.title} 
                                    key={index}
                                    pid={value.pid}
                                    addr={value.addr}
                                    info={value.info}
                                    img={value.img}
                                    
                                        />
                                )})}
                
                                </div>
                                
                                </div>
                        </div>
                    </div> 
                </section>

                {/* 結尾footer處 */}
                <footer className='mt-6 footer'>
                    <div>
                        <Footer/>
                    </div>
                </footer>
            </div>
        );
    }
}
 
export default HomeHead;