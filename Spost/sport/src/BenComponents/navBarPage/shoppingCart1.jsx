import React, { Component } from 'react';
import Axios from 'axios';
import { NavLink } from 'react-router-dom';


// [{"carid":"10","oid":"p01","id":"1","title":"123","date":"2022-07-15","time":"10:00 ~ 11:00","price":"300"},

class ShoppingCart extends Component {
    state = { 
        carData:[],
        carid:[],
        sumPrice:0,
        ChoosePayment:"",
        carDataTitle:[],
        oid:[],
        pid:"",
        carState:[],
     } 

    async componentDidMount() {

        // 07/22 BEN 新增
        if(localStorage.getItem('id')){

        var carId = localStorage.getItem('id');
        await Axios.post('http://localhost:80/spost/BenPHP/shoppingCartGet.php',carId)
        .then(result=>{
            // console.log(result.data);
            this.state.carData = result.data;
        })
        // console.log(this.state.carData);
        

        // 07/22 BEN 新增 判斷購物車狀態碼 0 = 未結帳 , 1 = 已結帳 , 2 = 交易取消
        this.state.carState = this.state.carData.filter((value,index)=>{
            return value.State == 0 
        })

        this.state.sumPrice=0;
        for(var i=0;i<this.state.carState.length;i++){
            this.state.sumPrice += Number(this.state.carState[i].price);
        }

        this.setState({});

        }else  {
            window.location.href = '/login'
        }



       
        
        
    }
    deleCar= async (e)=>{
        // 取得點擊商品的value.carid的數字
        const carID = e.target.getAttribute('data_car');

        // 將值送進PHP資料庫當作刪除的唯一key(carid)值  (用QS 或者改用from表單傳送)
        // 使用QS傳送字串到PHP內
        const Qs = require('qs')
        let tempData ='';   //新增變數初始化字串
        await Axios.post(`http://localhost:/spost/BenPHP/shoppingCartDele.php`,Qs.stringify({ carID:carID}))
        .then((response)=>{
            // console.log(response.data); //查看回傳的內容是個字串
            tempData = response.data;      //放到外層變數,用於外層判斷
            // this.setState({});    
        })
        // 查看撈回來的資料是陣列,所以要使用while、for、map、forEach做尋訪,前兩者要自己寫索引值所以不推薦
        // 在下方判斷後做新增或刪除處理,最後在下setState更新內容
        this.state.carData.map((elm,idx)=>{
            // console.log(elm)  //在裡面看是物件,但是要處理的是外面的值(陣列),所以沒關係
            // console.log('tenp :' + tempData) 

            // 要做到php刪除資料後連同React畫面更新,將回傳的carid做判斷,當==時做刪除
            if (tempData == elm.carid){
                this.state.sumPrice -= elm.price  // -=刪除金額時更新狀態
                // console.log(idx);
                // console.log(this.state.carData[idx]) //這邊查看的是外部陣列[0,1,2,3]
                this.state.carData.splice(idx,1)
                this.setState({})
            }
            // console.log("NO")
            // console.log(this.state.sumPrice)
            
        })

    };

   
    
    render() { 

    
        return (
            <>
                <div className='mt-6 container'>
                        <h3>購物車</h3>
                        <hr />
                <form action="http://localhost:80/spost/BenPHP/ECPay.php" method="post" enctype="application/x-www-form-urlencoded" name="cartData" >

                {this.state.carState.map((value,index,array)=>{
                    return(
                        <>
                        <div className='container border-bottom' >
                        {/* 送購物車訂單號 */}
                        <input class="" name="MerchantTradeNo" type="hidden" value={value.carid} />
                        {/* 送當前下單時間 */}
                        {/* <input class="form-control" name="MerchantTradeDate" type="text" value={new Date()} /> */}
                        <input class="form-control" name="MerchantTradeDate" type="hidden" value={"2009/07/12 12:34:56"} />
                        {/* 送結帳總金額 */}
                        <input class="form-control" name="TotalAmount" type="hidden" value={this.state.sumPrice} />
                        {/* 送商品描述 */}
                        <input class="form-control" name="TradeDesc" type="hidden" value={"Spost專屬商品"} />
                        {/* 送商品資訊 */}
                        <input class="form-control" name="ItemName[]" type="hidden" value={JSON.stringify(this.state.carData)} />
                        {/* <input class="form-control" name="ItemName[]" type="hidden" value={this.state.carData} /> */}
                        {/* 商品單價 */}
                        <input class="form-control" name="ItemPrice" type="hidden" value={value.price} />
                        {/* 取得課程判斷 */}
                        <input class="form-control" name="ItemType" type="hidden" value={value.oid[0] =='l'? "(課程)":"(場地)"} />
                        {/* 送當前會員ID */}
                        <input class="form-control" name="MemberID" type="hidden" value={value.id} />

                            <div className='row mt-2 '>
                                <div className="cartitle col">
                                    <h5>{value.title}{value.oid[0] =='l'? "(課程)":"(場地)"}</h5>
                                    
                            
                                </div>
                                <div className="cardata col " style={{lineHeight:"0.3"}}>
                                <p >{value.date}</p>
                                <a >{value.time}</a>
                                    
                                    </div>
                                <div className="carprice col">NT${value.price}</div>
                                {/* {this.state.sumPrice = this.state.carData[0].price} */}
                                {/* {value.carid} 點擊時對應當與資料庫中的carid */}
                                
                                <button className='col-1 btn' name="deleCar" onClick={this.deleCar} type="button" data_car={value.carid} ><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                    </svg></button>
                            

                                
                            </div>
                        </div>
                        </>
                    )
                })}
   
                    <div className='mt-3 d-md-flex justify-content-md-end text-danger' >
                        <h5>總金額:NT${this.state.sumPrice}</h5>
                    </div> 
       


                <div className=' d-md-flex justify-content-md-end row cols-2'>
 
                    <div className='col-12'>
                        <a>選擇付款方式:</a>
                        <select className='' id="ChoosePaymentSelect" onChange={(e)=>{
                            // console.log(e.target.value)
                            this.state.ChoosePayment = e.target.value
                            this.setState({});
                            console.log(this.state.ChoosePayment)
                        }}>
                    {/* 送出交易方式 */}
                    <input name="ChoosePayment" type="hidden" value={this.state.ChoosePayment} />

        
                            {/* 選擇付款方式 */}
                            {/* 綠界提供下列付款方式，請於建立訂單時傳送過來:
                                Credit:信用卡及銀聯卡
                                UnionPay:銀聯卡(需申請開通)
                                WebATM:網路ATM
                                ATM:自動櫃員機
                                CVS:超商代碼
                                BARCODE:超商條碼
                                ALL:不指定付款方式，由綠界顯示付款方式選擇頁面。 */}
                            <option name="" type="text" value="" selected="selected" >請選擇支付方式</option>
                            <option name="" type="text" value="Credit">信用卡付款</option>
                            <option name="" type="text" value="ATM">銀行轉帳</option>
                            <option name="" type="text" value="CVS">超商代碼</option>
                            
                        </select>
                    </div>
                </div>

                <div className='mt-3 d-md-flex justify-content-md-end'>
                    <div className='m-2 d-flex align-items-center'>
                    <a href="javascript:history.back()">選擇更多</a>
                    </div>
                    {/* <NavLink to="/checkoutPage" className=""> */}
                    {/* <NavLink to="/CreditCardPaymentPage" className="">
                    </NavLink> */}
                    
                    <button className='btn btn-outline-dark me-md-2'  type="submit">確認付款</button>
                    </div>
                    </form>




                    

                </div>


            </>
        );
    }
}
 
export default ShoppingCart;