import React, { Component } from 'react';

import '../../scss/all.css';
import 'bootstrap/dist/css/bootstrap.css';
// import './login.css'
import axios from 'axios';

class Login extends Component {
  state = {
    opacity: [0, 1, 0, 0, 0], marginLeft: ['0', '-70vw', '30vw', '0'], visibility: ['hidden','','hidden','hidden'],
    // 載入特效, 文字提示顏色,  背景變換
    class: "", fontcolor: "red", nameA: "asd",

    // 找回密碼 (驗證碼)
    verificationCode: ['', false], 
    // 登入頁( 帳號orEmail, 密碼)
    addressOrEmail: ['', false, ''], password: ['', false], LoginCheck: false,
    //註冊頁( 帳號, email, 密碼, 真實姓名, 電話, 暱稱, 性別 ) , 確認必填欄位
    add: ['', false], ema: ['', false], pas: ['', false], rna: ['', false], cellphone: ['', false], nna:'', gen:'M', 
    registerCheck: false,
    // 密碼暫存
    passwordCheck: ['',''],

    // 帳號or信箱不存在, 驗證碼錯誤, 兩次密碼不相同
    aeh: '', vec: '',  pwd: '',
    // 帳號or信箱錯誤, 密碼錯誤
    aew: '',  pwr: '', cok: '', 
    // 帳號或信箱已註冊,  電話提示, 帳號提示, 密碼提示, 姓名提示
    adr: '',  cel: '', ada: '6位數，且使用一個英文字母和數字', pwa: '6位數，且使用一個英文字母和數字', naa: ''
  }

//------------------------------畫面滑動 //
  back = () => {
    if ( this.state.opacity[1] == 1 ) {
      this.setState({ opacity: [1, 0, 0, 0, 0], marginLeft: ['50vw', '-0', '0', '0'], visibility: ['','hidden','hidden','hidden'],
        className: "animate__animated animate__fadeIn", addressOrEmail: ['', false, ''], password: ['', false],
        passwordCheck: ['',''], pas: ['', true]})
    }
    else if ( this.state.opacity[2] == 1 ) { 
      this.setState({ opacity: [0, 1, 0, 0, 0], marginLeft: ['0', '-70vw', '30vw', '0'], awe: '',
        visibility: ['hidden','','hidden','hidden'], className: "", addressOrEmail: ['', false, ''], password: ['', false]})
    }else {
      this.setState({ opacity: [0, 1, 0, 0, 0], marginLeft: ['0', '-70vw', '30vw', '0'], 
        visibility: ['hidden','','hidden','hidden'], className: "", addressOrEmail: ['', false, ''], password: ['', false]})
    }
  }
  next = () => {
    if ( this.state.opacity[1] == 1 ) {
      this.setState({ opacity: [0, 0, 1, 0, 0], marginLeft: ['-20vw', '-50vw', '-80vw', '-300vw'], visibility: ['hidden','hidden','','hidden'], className: "animate__animated "})
    }
    else if ( this.state.opacity[2] == 1 ) {
      this.setState({ opacity: [0, 0, 0, 1, 0], marginLeft: ['0', '-50vw', '-50vw', '-250vw'], visibility: ['hidden','hidden','hidden',''], className: ""})}
    else { 
      this.setState({ opacity: [0, 1, 0, 0, 0],  marginLeft: ['0', '-70vw', '30vw', '-400vw'], visibility: ['hidden','','hidden','hidden'],
        className: "", adr: ''}) 
    }
  }


//------------------------------必填欄位檢查 //
  // 登入頁(+忘記密碼)
  LoginCheck = (e) => {
    // 帳號 or Email 
    if ( e.target.placeholder == "帳號 or Email" ) {
      this.setState({ cok: '', aeh: '' })
      let add = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/);
      let eml = new RegExp(/^[a-za-z0-9_-]+@[a-za-z0-9_-]+(\.[a-za-z0-9_-]+)+$/);
      if ( e.target.value.length >= 6 ) {
        // 判斷帳號 或 email
        if ( add.test( e.target.value ) ) {
          this.state.addressOrEmail = [e.target.value, true, 'address'];
          this.setState({})
        }else if ( eml.test(e.target.value) ) {
          this.state.addressOrEmail = [e.target.value, true, 'email'];
          this.setState({})
        }else {
          this.state.addressOrEmail = ['', false, ''];
          this.setState({})
        }
      }else {
        this.state.addressOrEmail = ['', false, ''];
        this.setState({})
      }
    }
    // 密碼
    if ( e.target.placeholder == "請輸入密碼" ) {
      this.setState({ cok: '', aeh: '' })
      let password = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/);
      if ( e.target.value.length >= 6 ) {
        if ( password.test( e.target.value ) ) {
          this.state.password = [e.target.value, true];
          this.setState({})
        }else {
          this.state.password[1] = false;
          this.setState({})
        }
      }else {
        this.state.password[1] = false;
        this.setState({})
      }
    }

    // 清除 '請輸入正確 帳號或信箱或密碼'
    this.state.aew = '';
    this.setState({})

    // 帳號密碼是否填寫
    if ( this.state.addressOrEmail[1] == true && this.state.password[1] == true ) {
      this.state.LoginCheck = true;
      this.setState({})
    }else {
      this.state.LoginCheck = false;
      this.setState({})
    }
  }
  
  // 註冊頁
  registerOnCheck = (e) => {
    // 帳號
    if ( e.target.placeholder == "帳號" ) {
      // 正規檢查
      let add = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/);
      if ( e.target.value.length >= 6 ) {
        if ( add.test( e.target.value ) ) {
          this.state.ada = '';
          this.state.adr = '';
          this.state.add = [e.target.value, true ];
          this.setState({})
        }else {
          this.state.ada = '';
          this.state.adr = '帳號格式錯誤';
          this.state.add[1] =  false ;
          this.setState({})
        }
      }else {
        this.state.ada = '6位數，且使用一個英文字母和數字';
        this.state.adr = '';
        this.state.add[1] =  false ;
        this.setState({});
      }
    }

    // Email
    if ( e.target.placeholder == "Email") {
      // 正規檢查
      let eml = new RegExp(/^[a-za-z0-9_-]+@[a-za-z0-9_-]+(\.[a-za-z0-9_-]+)+$/);
      if ( eml.test(e.target.value) ) { 
        this.state.emr = '';
        this.state.ema = [e.target.value, true];
        this.state.addressOrEmail = [e.target.value, false, 'email']
        this.setState({})
      }else if ( e.target.value.length == 0 ) {
        this.state.emr = '';
        this.state.ema[1] = false;
        this.state.addressOrEmail = ['', false, '']
        this.setState({})
      }
      else{ 
        this.state.emr = '請輸入正確Email';
        this.state.ema[1] = false;
        this.state.addressOrEmail = ['', false, '']
        this.setState({})
      };
    }

    // 密碼
    if ( e.target.placeholder == "密碼" ) {
      // 正規檢查
      let password = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/);
      if ( e.target.value.length < 6 ) {
        this.state.pwa = '6位數，且使用一個英文字母和數字';
        this.state.pwr = ''
        this.state.pas[1] = false;
        this.setState({})
      }else {
        // 正規檢查
        if ( password.test( e.target.value ) ) {
          this.state.passwordCheck[0] = e.target.value
          this.state.pwa = '';
          this.state.pwr = '';
          this.setState({})
        }else {
          this.state.pwa = '';
          this.state.pwr = '密碼格式錯誤';
          this.state.pas[1] = false;
          this.setState({})
        };
        // 重複檢查
        if ( this.state.passwordCheck[1].length != 0 ) {
          if ( this.state.passwordCheck[1] == e.target.value ) {
            this.state.pwd = '';
            this.state.pas = [e.target.value, true];
            this.setState({})
          }else {
            this.state.pwd = '兩次密碼不相同';
            this.state.pas[1] = false;
            this.setState({})
          }
        }
      }
    }
    // 再次輸入密碼
    if ( e.target.placeholder == "再次輸入密碼" ) {
      // 重複檢查
      if ( this.state.passwordCheck[0].length != 0 && this.state.passwordCheck[0].length <= e.target.value.length ) {
        if ( this.state.passwordCheck[0] == e.target.value) {
          this.state.pwd = '';
          this.state.pas = [e.target.value, true];
          this.setState({})
        }else {
          this.state.passwordCheck[1] = e.target.value;
          this.state.pwd = '兩次密碼不相同';
          this.state.pas[1] = false;
          this.setState({})
        }
      }else {
        this.state.pwd = '';
        this.setState({}) 
      }
    }

    // 真實姓名
    if ( e.target.placeholder == "真實姓名" ) {
      if ( e.target.value != 0 ) {
        this.state.rna = [e.target.value, true];;
        this.setState({})
      }else {
        this.state.rna[1] = false;
        this.setState({})
      }
    }

    // 連絡電話
    if ( e.target.placeholder == "連絡電話" ) {
      // 正規檢查
      let pho = new RegExp(/^[0][9][0-9]{8}$/)
      if ( e.target.value.length == 10) {
        if ( pho.test(e.target.value) ) { 
          this.state.cel = '';
          this.state.cellphone = [e.target.value, true];
          this.setState({}) 
        }else {
          this.state.cel = '電話格式錯誤';
          this.state.cellphone[1] = false;
          this.setState({}) 
        };
      }else {
        this.state.cel = '';
        this.state.cellphone[1] = false;
        this.setState({});
      }
    }

    // 確認六欄位都有填寫
    if ( this.state.add[1] == true && this.state.ema[1] == true && this.state.pas[1] == true && this.state.rna[1] == true 
        && this.state.cellphone[1] == true) {
      this.state.registerCheck = true;
      this.setState({});
    }else {
      this.state.registerCheck = false;
      this.setState({});
    }
  }


//------------------------------送出表單 //
  // 發送驗證信 
  verificationCode = async(email) => {
    const Qs = require("qs")
    if ( typeof email == 'object' ) {
      var emails = Qs.stringify({ emails: this.state.ema[0]}) ;
    }else {
      var emails = Qs.stringify({ emails: email});
    }
    await axios.post("http://localhost:80/spost/JeromePHP/verificationCode.php", emails)
      .then( (response) => {
        this.state.verificationCode[0] = response.data;
        this.setState({})
        console.log(response.data)
      })
  }

  // 忘記密碼
  fgCheck = (e) => {
    const Qs = require("qs")  //npm i qs
    // 發送驗證信
    if ( e.target.className == 'buttonL' && this.state.addressOrEmail[1] == true ) {
      let fgCheck = '';
      if ( this.state.addressOrEmail[2] == 'address' ){
        fgCheck = Qs.stringify({
          fgCheckAccount: this.state.addressOrEmail[0],
          fgCheckEmail: '',
          newPassWorld: ''
        })
      }else {
        fgCheck = Qs.stringify({
          fgCheckAccount: '',
          fgCheckEmail: this.state.addressOrEmail[0],
          newPassWorld: ''
        })
      }
      axios.post("http://localhost:80/spost/JeromePHP/Forgotpassword.php", fgCheck )
        .then( (response) => {
          if ( response.data.indexOf("null") != '-1' ) {
            // 未註冊帳號
            this.state.aeh = '帳號或Email未註冊'
            this.setState({})
          }else {
            this.verificationCode(response.data);
          }
        })
    }
    // 驗證碼核對
    if ( e.target.placeholder == "請輸入驗證碼" ) {
      if (e.target.value.length == 4 && e.target.value == this.state.verificationCode[0]) {
        this.state.opacity[4] = 1;
        this.state.verificationCode[1] = true;
        this.setState({})
      }else {
        this.state.opacity[4] = 0;
        this.state.verificationCode[1] = false;
        this.setState({})
      }
      // console.log(this.state.verificationCode)
    }
    // 表單送出 
    if ( e.target.type == "button" && this.state.pas[1] == true && this.state.verificationCode[1] == true) {
      let changePassword = '';
      if ( this.state.addressOrEmail[2] == 'address' ){
        changePassword = Qs.stringify({
          fgCheckAccount: this.state.addressOrEmail[0],
          fgCheckEmail: '',
          newPassWorld: this.state.pas[0]
        })
      }else {
        changePassword = Qs.stringify({
          fgCheckAccount: '',
          fgCheckEmail: this.state.addressOrEmail[0],
          newPassWorld: this.state.pas[0]
        })
      }
      axios.post("http://localhost:80/spost/JeromePHP/Forgotpassword.php", changePassword )
        .then( (response) => {
          if ( response.data != 1) {
            console.log("xx")
          }else {
            this.state.cok = '密碼變更成功'
            this.state.verificationCode = ['', false];
            this.state.pas = ['', false];
            this.state.opacity[4] = 0;
            this.setState({});
            this.back();
          }
        })
    }
  }
  
  // 登入頁 (JimmyAccount01, abc123)
  loginPost = () => {
    // 帳號密碼驗證
    const Qs = require("qs")
    if ( this.state.LoginCheck == true ) {
      let singIn = ''
      if ( this.state.addressOrEmail[2] == 'address' ){
        singIn = Qs.stringify({
          singInAccount: this.state.addressOrEmail[0],
          singInEmail: '',
          singInPassword: this.state.password[0]
        })
      }else {
        singIn = Qs.stringify({
          singInAccount: '',
          singInEmail: this.state.addressOrEmail[0],
          singInPassword: this.state.password[0]
        })
      }
      axios.post("http://localhost:80/spost/JeromePHP/login.php", singIn )
        .then( (response) => {
          if ( typeof response.data == 'object' ) {
            localStorage.setItem('id', `${response.data[0]}`);
            localStorage.setItem('info', `${response.data[1]}`);
            window.location.href = '/lesson/l27';
          }else {
            this.state.pwr = '帳號、信箱或密碼錯誤'
            this.setState({})
          }
        })
    }else {
      this.state.aew = '請輸入正確 帳號或信箱或密碼'
      this.setState({})
    }
  }

  // 註冊頁
  registerPost = () => {
    // 發送驗證碼
    const Qs = require("qs") //npm i qs
    if ( this.state.registerCheck == true ) {
      let register = Qs.stringify({
        account: this.state.add[0],
        email: this.state.ema[0],
      });
      axios.post("http://localhost:80/spost/JeromePHP/register.php", register )
      .then( ( response ) => {
        if ( response.data == 1 ) {
          this.next();
          this.verificationCode(this.state.ema[0]);
        }else {
          this.state.adr = '帳號或信箱已註冊';
          this.setState({})
        }
      })
    }
  }

  // Email 
  emailCheck = (e) => {
    // 驗證碼核對
    if ( e.target.placeholder == "請輸入驗證碼" ) {
      if (e.target.value.length == 4 && e.target.value == this.state.verificationCode[0]) {
        this.state.opacity[4] = 1;
        this.state.verificationCode[1] = true;
        this.setState({})
      }else {
        this.state.opacity[4] = 0;
        this.state.verificationCode[1] = false;
        this.setState({})
      }
    }

    // 新增會員資料
    if ( e.target.type == 'button' && this.state.verificationCode[1] == true ) {
      const Qs = require("qs")
      let register = Qs.stringify({
        account: this.state.add[0], 
        password: this.state.pas[0],
        email: this.state.ema[0],
        phone: this.state.cellphone[0],
        realname: this.state.rna[0],
        nickname: this.state.nna,
        gender: this.state.gen
      });
      axios.post("http://localhost:80/spost/JeromePHP/email.php", register )
        .then( ( response ) => {
          if ( response.data == 1) {
            this.state.cok = '請重新登錄'
            this.next();
          }
        })
    }
  }


  render() {
    return (
      <div id='allA'>
        <div className="loginA row" id='all' >
          {/* -- Forgot password -- */}
          <div className='login text-center ' 
            style={{ opacity: this.state.opacity[0], marginLeft: this.state.marginLeft[0], visibility: this.state.visibility[0],
              }}>
            <h2 className='mt-4 text-center' > 忘記密碼 </h2>
            <span className='text-center w-100 my-0' style={{color: 'red'}}>
              {this.state.aeh} &nbsp; {this.state.vec} &nbsp; 
            </span>
            <form className='text-center mt-3' id='fgF' style={{width: "75%"}} >
              <div className='row m-3'>
                <div className={`col-lg-12 w-100 ${this.state.className}`} >
                  <img className='icon mx-3 my-1' src={require('./icon/profile.png')} />
                  <input className="input fpf" type="text" placeholder="帳號 or Email" onChange={ this.LoginCheck } 
                    required="required"/>
                  <button type='button' className='buttonL' onClick={ this.fgCheck }>發送驗證碼</button><br />
                </div>
              </div>
              <div className='row m-3'>
                <div className={`col-lg-12 w-100 ${this.state.className}`} >
                  <img className='icon mx-3 my-1' src={require('./icon/question.png')} />
                  <input className="input fpf" type="text" placeholder="請輸入驗證碼" required="required"
                    onChange={ this.fgCheck }/>
                  <span>
                    <img className='icon mx-3 my-1' src={require('./icon/checked.png')} 
                      style={{ opacity: this.state.opacity[4]}}/>
                  </span>
                </div>
              </div>
              <div className='row m-3 justify-content-center'>
                <div className={`col-lg-4 ${this.state.className}`}>
                  <img className='icon mx-3 my-3' src={require('./icon/password.png')} />
                  <input className="input fpf" type="password" onChange={this.registerOnCheck} placeholder="密碼" 
                    required="required"/><br />
                  <span> &nbsp; {this.state.pwa}</span>
                  <span style={{color: 'red'}}>{this.state.pwr}</span>
                </div>
                <div className={`col-lg-4 ${this.state.className}`} >
                  <img className='icon mx-3 my-3' src={require('./icon/password.png')} />
                  <input className="input fpf" type="password" onChange={this.registerOnCheck} placeholder="再次輸入密碼" 
                    required="required"/><br />
                  <span style={{color: 'red'}}> &nbsp; {this.state.pwd}</span>
                </div>
              </div>
              <button type="button" className='button my-2 mx-3' onClick={ this.fgCheck } >確認變更</button>
              <button type="button" className='button my-2 mx-3' onClick={ this.back }>回到登入頁面</button>
            </form>
          </div>

          {/* -- Login -- */}
          <div className='login text-center' 
            style={{ opacity: this.state.opacity[1], marginLeft: this.state.marginLeft[1], visibility: this.state.visibility[1],
              }}>
            <div className="animate__animated animate__fadeInDown">
              <h2 className='my-4 text-center'>Login</h2>
              <p className='text-center w-100' style={{color: 'red'}}>
                {this.state.aew} &nbsp; {this.state.pwr} <span style={{color: 'green'}}>{this.state.cok}</span>
              </p>
              <div className='container'>
                <div className="row">
                  <form className='container mt-4' >
                    <img className='icon mx-3 my-3' src={require('./icon/profile.png')} />
                    <input autoFocus="autofocus" className="input col-6 m-0 lof" type="text" placeholder="帳號 or Email" 
                      required="required" onChange={ this.LoginCheck }/><br />
                    <img className='icon mx-3 my-3' src={require('./icon/password.png')} />
                    <input className="input col-6 m-0 lof" type="password" placeholder="請輸入密碼" required="required"
                      onChange={ this.LoginCheck }/><br />
                    <div className='mt-5'>
                      <button type="button" className='button my-2 mx-3' onClick={this.loginPost}>登入</button>
                      <button type="button" className='button my-2 mx-3' onClick={this.next}>註冊</button>
                    </div>
                  </form>
                </div>
              </div>
              <button type="button" className='buttonL m-3' onClick={this.back}>忘記密碼 ?</button>
            </div>
          </div>

          {/* -- Sign up -- */}
          <div className='login text-center' 
              style={{ 
                opacity: this.state.opacity[2], marginLeft: this.state.marginLeft[2], visibility: this.state.visibility[2] }}>
            <div className="row w-50 my-0">
              <button id='bti' className='col-1' onClick={this.back}><img id='icon1' src={require('./icon/left.png')} /></button>
              <h2 className='col-10 text-center my-4'>註冊</h2>
              <span style={{color: 'red'}}>&nbsp;{this.state.adr}</span>
            </div >
            <form className='' style={{width: "75%"}}>
              <div className='row justify-content-center my-'>
                <div className={`col-lg-4 ${this.state.className}`}>
                  <img className='icon mx-3 my-1' src={require('./icon/profile.png')} />
                  <input className="input isu" type="text" placeholder="帳號" required="required"
                    onChange={ this.registerOnCheck} /><br />
                  <span> &nbsp; {this.state.ada}</span>
                </div>
                <div className={`col-lg-4 ${this.state.className}`}>
                  <img className='icon mx-3 my-1' src={require('./icon/email.png')} />
                  <input className="input isu" type="e-mail" placeholder="Email" required="required"
                    onChange={ this.registerOnCheck} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/><br />
                  <span> &nbsp; {this.state.emr}</span> 
                </div>
              </div>
              <div className='row justify-content-center my-3'>
                <div className={`col-lg-4 ${this.state.className}`}>
                  <img className='icon mx-3 my-1' src={require('./icon/password.png')} />
                  <input className="input isu" type="password" onChange={ this.registerOnCheck } placeholder="密碼" required="required"
                    pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"/><br />
                  <span > {this.state.pwa} </span>
                  <span style={{color: 'red'}}>{this.state.pwr}</span>
                </div>
                <div className={`col-lg-4 ${this.state.className}`}>
                  <img className='icon mx-3 my-1' src={require('./icon/password.png')} />
                  <input className="input isu" type="password" onChange={ this.registerOnCheck } placeholder="再次輸入密碼" required="required"
                    /><br />
                  <span style={{color: 'red'}}> &nbsp; {this.state.pwd}</span>
                </div>
              </div>
              <div className='row justify-content-center my-3'>
                <div className={`col-lg-4 ${this.state.className}`}>
                  <img className='icon mx-3 my-1' src={require('./icon/account.png')}/>
                  <input className="input isu" type="text" placeholder="真實姓名" required="required"
                    onChange={ this.registerOnCheck }/><br />
                  <span style={{color: 'red'}}> &nbsp; {this.state.naa}</span>
                </div>
                <div className={`col-lg-4 ${this.state.className}`}>
                  <img className='icon mx-3 my-1' src={require('./icon/mobile-app.png')} />
                  <input className="input isu" type="text" placeholder="連絡電話" required="required" maxLength="10"
                    onChange={ this.registerOnCheck } pattern="^[0][9][0-9]{8}$" /><br />
                    <span style={{color: 'red'}}> &nbsp; {this.state.cel}</span>
                </div>
              </div>
              <div className='row justify-content-center my-3'>
                <div className={`col-lg-4 ${this.state.className}`}>
                  <img className='icon mx-3 my-1' src={require('./icon/identity-card.png')} />
                  <input className="input" type="text" placeholder="暱稱 (選填)"
                    onChange={ (e) => { this.setState({ nna: e.target.value })} }/><br />
                </div>
                <div className={`col-lg-4 ${this.state.className}`}>
                  <img className='icon mx-3 my-1' src={require('./icon/sex.png')} />
                  <select className='input text-center' onChange={ (e) => { this.setState({ gen: e.target.value })} }>
                        <option value="M">男</option>
                        <option value="F">女</option>
                        <option value="S">秘密</option>
                  </select>
                </div>
              </div>
              <button type="button" className='button' onClick={this.registerPost} value="singUp">確認註冊</button> 
              {/* <button type="button" className='button' onClick={this.next} value="singUp">確認註冊</button>  */}
            </form>
          </div>

          {/* -- Email 驗證 -- */}
          <div className="login text-center"
              style={{ opacity: this.state.opacity[3], marginLeft: this.state.marginLeft[3], visibility: this.state.visibility[3]}}>
            <div className="row my-4">
              <h2>Email 已送出</h2>
            </div >
            <div className="container animate__animated animate__lightSpeedInRight">
                <p className='m-5' >已向您的信箱 {this.state.ema} 送出驗證信，請至您的信箱查收並完成驗證 </p>
                <input className="input fpf" type="text" placeholder="請輸入驗證碼" required="required"
                  onChange={ this.emailCheck }/>
                <img className='icon mx-3 my-1' src={require('./icon/checked.png')} 
                  style={{ opacity: this.state.opacity[4]}}/>
                <p className='mt-4'>
                  沒收到驗證信 ?
                  <button type="button" className='buttonL' onClick={this.verificationCode}> 再寄送一次</button>
                </p>
            </div>
            <div >
                <button type="button" className='button my-5 mx-3' id='buts' onClick={this.emailCheck}>驗證</button>
            </div>
          </div>
        </div>
      </div>
      
    )
  }
}

export default Login ;