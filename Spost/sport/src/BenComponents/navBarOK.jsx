import React, { Component } from 'react';
import {  BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import '../scss/all.css';
import axios from 'axios';


// 導覽列物件
import NavBarContent1 from './navBarContentTest';
// 首頁
import Home from './navBarPage/HomeHead.jsx';
// 課程與場地(預設教練頁)
import SearchCoachPage from '../DongComponents/SearchCoachPage.jsx';
import SearchSitePage from '../DongComponents/SearchSitePage.jsx';
import CVPage from '../JeromeComponents/CVPage/CVPage.jsx';

// 會員頁 0709 DONG新增
import MemberInfo from '../DongComponents/MemberInfo';
import MemberPost from '../DongComponents/MemberPost';
import MemberPlan from '../DongComponents/MemberPlan';
import EditLesson from '../DongComponents/EditLesson';
import MemberEval from '../DongComponents/MemberEval';
import EditPlace from '../DongComponents/EditPlace';

// 成為教練
import BeCoach from '../DongComponents/BeCoach.jsx';
// 租場地
import RentPlace from '../DongComponents/RentPlace.jsx';
// 會員登入及註冊
import login from '../JeromeComponents/login/login.jsx';

// 購物車頁面
import ShoppingCart from './navBarPage/shoppingCart1.jsx';
// 購物車結帳頁面 0718 BEN新增
import checkoutPage from './navBarPage/checkoutPage.jsx';
// 購物車結帳信用卡支付 0719 BEN新增
import CreditCardPaymentPage from './navBarPage/creditCardPaymentPage.jsx';

// chat
// import chat from '../DongComponents/chat/Chat.jsx'

class NavBarOK extends Component {
    state = { 
        carData:[], sumPrice:[],carState:[]
    } 

    // 取得購物車商品數量
    async componentDidMount() {
        // 0725 BEN 更新 有登錄才會顯示購物車數量
        if(localStorage.getItem('id') && localStorage.getItem('info')){
            var carId = localStorage.getItem('id');
            await axios.post('http://localhost:80/spost/BenPHP/shoppingCartGet.php',carId)
            .then(result=>{
                this.state.carData = result.data;
            })
            // 購物車狀態碼
            this.state.carState = this.state.carData.filter((value,index)=>{
                return value.State == 0 
            })
            this.setState({});
        }
    }

    render() { 
        return (
            <Router>
                <NavBarContent1 />
                <Switch>
                    <Route path="/" component={Home} exact/>

                    {/* 課程與場地路由,預設課程頁面 */}
                    <Route path="/lesson" component={SearchCoachPage} exact/>
                    <Route path="/lesson/:lid" component={CVPage} exact/>
                    <Route path="/site" component={SearchSitePage} exact/>
                    <Route path="/site/:pid" component={CVPage} exact/>

                    {/* 成為教練 */}
                    <Route path="/BeCoach" component={BeCoach} exact/>

                    {/* 租場地 */}
                    <Route path="/RentPlace" component={RentPlace} exact/>

                    {/* 會員登錄 */}
                    <Route path="/login" component={login} exact/>

                    {/* 購物車 */}
                    <Route path="/shoppingCart" component={ShoppingCart}/>

                    {/* 購物車結帳頁面 0718 BEN新增 */}
                    <Route path="/checkoutPage" component={checkoutPage}/>
                    {/* 購物車結帳信用卡支付 0719 BEN新增 */}
                    <Route path="/CreditCardPaymentPage" component={CreditCardPaymentPage} />

                    {/* 會員頁 0709 DONG新增 */}
                    <Route path="/member/:id" component={MemberPlan} exact/>
                    <Route path="/member/info/:id" component={MemberInfo} exact/>
                    <Route path="/member/post/:id" component={MemberPost} exact/>
                    <Route path="/member/plan/:id" component={MemberPlan} exact/>
                    <Route path="/member/eval/:id" component={MemberEval} exact />
                    <Route path="/member/editl/:id/:lid" component={EditLesson} exact/>
                    <Route path="/member/editp/:id/:pid" component={EditPlace} exact/>

                    {/* Chat */}
                    {/* <Route path="/chat" component={chat} exact /> */}

                </Switch>

                {/* 設定視窗定位按鈕 */}
                <div className='homeRightFixedBox d-flex '>
                    <div className='homeRightFixedBoxV1 container '>
                        {/* 購物車按鈕 */}
                        <div className='mt-2 homeRightFixedBoxV2 rounded-circle container '>
                            <div className='homeRightFixedBoxText mt-2 mb-2'>
                                {/* 設定路由路徑 */}
                                <NavLink to="/shoppingCart">
                                    <svg style={{color:'#a0ac48'}}xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-cart-check-fill" viewBox="0 0 16 16">
                                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                                    </svg>
                                    <span class="position-absolute top-15 start-60 translate-middle badge rounded-pill bg-danger">{this.state.carState.length == 0 ? "":this.state.carState.length}</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}
 
export default NavBarOK;