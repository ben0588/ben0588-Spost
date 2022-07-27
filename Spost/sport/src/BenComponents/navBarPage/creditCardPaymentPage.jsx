import React, { Component } from 'react';
import creditCardIcon from '../../imgs/creditCardIcon.png'
import Axios from 'axios'

class CreditCardPaymentPage extends Component {
    state = {  } 

    async componentDidMount(){
        let getUrl = "postgate-stage.ecpay.com.tw";
        let result = await Axios.get(getUrl)
        console.log(result.data)
    }
    render() {  
        return (
            <>
            <div className='container mt-6 p-0'>
            <form class="row g-2 mt-6 " method="POST" action="ECPay.php">
                <h3>信用卡付款</h3> 
                <hr />
                <div style={{color:"#4f8aa8"}}>
                <h4>※ 信用卡交易資訊 Credit Card Transaction Information</h4>
                </div>
                <div className='mb-3 p-0'  >
                    <img src={creditCardIcon} alt="creditCardIcon" style={{width:"250px"}} />
                </div>
                <div>
            </div>
                <div className='row m-auto' style={{lineHeight:"0.2"}}>
                    <table for="CreditCardType" className='col-2 '>
                        <p>信用卡類型</p>
                        <a>Credit Card Type</a>
                    </table>
                    <select name="CreditCardType" id="CreditCardType" className='col-4 ' >
                        <option value="VISA/Mastercard/JCB" className=''>VISA / Mastercard / JCB</option>
                    </select>
                </div>

                <div className='row mt-4 m-auto' style={{lineHeight:"0.2"}}>
                    <table for="CreditCardNumber" className='col-2'>
                        <p>信用卡卡號</p>
                        <a>Credit Card Number</a>
                    </table>
                    <div className='col-1 d-flex align-items-center p-0' >
                    <input type="text" name='CreditCardNumber' id="CreditCardNumber" className="form-control col-12" maxlength="4" pattern="[0-9]{4}" required/>
                    <span className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                    </svg>
                    </span>

                    <input type="text" name='CreditCardNumber' id="CreditCardNumber" className="form-control col-12" maxlength="4" pattern="[0-9]{4}" required/>
                    <span className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                    </svg>
                    </span>

                    <input type="text" name='CreditCardNumber' id="CreditCardNumber" className="form-control col-12" maxlength="4" pattern="[0-9]{4}" required/>
                    <span className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                    </svg>
                    </span>

                    <input type="text" name='CreditCardNumber' id="CreditCardNumber" className="form-control col-12" maxlength="4" pattern="[0-9]{4}" required/>

                    </div>

                </div>

                
                <div className='row mt-4 m-auto' style={{lineHeight:"0.2"}}>
                    <table for="CardValidityPeriod" className='col-2'>
                        <p>卡片有效期間</p>
                        <a>Card Validity Period</a>
                    </table>
                    <input type="text" name='CardValidityPeriod' id="CardValidityPeriod"  placeholder="MM" aria-label="MM"className='col-1' maxlength="2" pattern="[0-9]{2}" required/>
                    <input type="text" name='CardValidityPeriod' id="CardValidityPeriod"  placeholder="YY" aria-label="YY"className='col-1' maxlength="2" pattern="[0-9]{2}" required/>
                </div>

                <div className='row mt-4 m-auto' style={{lineHeight:"0.2"}}>
                    <table for="CardValidityPeriod" className='col-2'>
                        <p>信用卡安全碼</p>
                        <a>CVV Code</a>
                    </table>
                    <input type="text" name='CardValidityPeriod' id="CardValidityPeriod" className='col-2' maxlength="3" pattern="[0-9]{3}" required/>
                </div>

                <div className='mt-4 m-auto' style={{color:"#4f8aa8"}}>
                <h4>※ 持卡人資料 Credit Card Holder Information</h4>
                </div>

                <div className='row mt-4 m-auto' style={{lineHeight:"0.2"}}>
                    <table for="CardholderName" className='col-2'>
                        <p>持卡人姓名</p>
                        <a>Cardholder Name</a>
                    </table>
                    <input type="text" name='CardholderName' id="CardholderName" className='col-2'  placeholder="請輸入信用卡上的姓名" required />
                </div>

                <div className='row mt-4 m-auto' style={{lineHeight:"0.2"}}>
                    <table for="CellphoneNumber" className='col-2'>
                        <p>手機號碼</p>
                        <a>Cellphone Number</a>
                    </table>
                    <input type="text" name='CellphoneNumber' id="CellphoneNumber" className='col-2' maxlength="10" pattern="[0-9]{10}" required/>
                </div>
                
                <button type="submit" className='mt-5 w-25 btn btn-info'>進行付款</button>
                </form>
            </div>
            </>
        );
    }
}
 
export default CreditCardPaymentPage;