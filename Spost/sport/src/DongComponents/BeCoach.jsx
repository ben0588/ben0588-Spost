import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Citys from './Citys';
import InesrtSportList from './InesrtSportList';
import '../scss/all.css';
import pic from '../imgs/user1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
class BeCoach extends Component {
    state = {
        sportList: [{ id: 1, value: '其他', cName: '其他', chkicon: faTimes, color: 'text-danger', class: 'rounded border border-danger shadow p-1 mx-2 mt-2' },
        { id: 2, value: '重量訓練', cName: '重量訓練', chkicon: faTimes, color: 'text-danger', class: 'rounded border border-danger shadow p-1 mx-2 mt-2' },
        { id: 3, value: '有氧訓練', cName: '有氧訓練', chkicon: faTimes, color: 'text-danger', class: 'rounded border border-danger shadow p-1 mx-2 mt-2' },
        { id: 4, value: '高強度間歇訓練', cName: '高強度間歇訓練', chkicon: faTimes, color: 'text-danger', class: 'rounded border border-danger shadow p-1 mx-2 mt-2' },
        { id: 5, value: '混合健身', cName: '混合健身', chkicon: faTimes, color: 'text-danger', class: 'rounded border border-danger shadow p-1 mx-2 mt-2' },
        { id: 6, value: '瑜珈', cName: '瑜珈', chkicon: faTimes, color: 'text-danger', class: 'rounded border border-danger shadow p-1 mx-2 mt-2' },
        { id: 7, value: '皮拉提斯', cName: '皮拉提斯', chkicon: faTimes, color: 'text-danger', class: 'rounded border border-danger shadow p-1 mx-2 mt-2' },
        { id: 8, value: '懸吊運動', cName: '懸吊運動', chkicon: faTimes, color: 'text-danger', class: 'rounded border border-danger shadow p-1 mx-2 mt-2' },
        { id: 9, value: '舞蹈', cName: '舞蹈', chkicon: faTimes, color: 'text-danger', class: 'rounded border border-danger shadow p-1 mx-2 mt-2' },
        { id: 10, value: '拳擊格鬥', cName: '拳擊格鬥', chkicon: faTimes, color: 'text-danger', class: 'rounded border border-danger shadow p-1 mx-2 mt-2' },
        { id: 11, value: '球類運動', cName: '球類運動', chkicon: faTimes, color: 'text-danger', class: 'rounded border border-danger shadow p-1 mx-2 mt-2' },
        { id: 12, value: '極限運動', cName: '極限運動', chkicon: faTimes, color: 'text-danger', class: 'rounded border border-danger shadow p-1 mx-2 mt-2' },],
        // 其他 重量訓練 有氧訓練 高強度間歇訓練 混合健身 瑜珈 皮拉提斯 懸吊運動 舞蹈 拳擊格鬥 球類運動 極限運動

        peopleList: [{ key: 0, checked: false, value: '一對一課程', className: 'd-none text-success', labelClass: 'w-100 p-1 shadow rounded border border-danger text-center mt-1' },
        { key: 1, checked: false, value: '團體課程', className: 'd-none text-success', labelClass: 'w-100 p-1 shadow rounded border border-danger text-center mt-1' }],

        agreeBox: [{ spanClass: '', pClass: 'text-danger', iconClass: 'd-none', labelClass: 'text-center shadow rounded border border-danger w-100 p-1' }],
        src: [pic, pic, pic],

        weekTime: [{ eName: 'monTime', cName: '週一', required: false, timeBegin: 'monBegin', timeEnd: 'monEnd' },
        { eName: 'tuesTime', cName: '週二', required: false, timeBegin: 'tuesBegin', timeEnd: 'tuesEnd' },
        { eName: 'wedTime', cName: '週三', required: false, timeBegin: 'wedBegin', timeEnd: 'wedEnd' },
        { eName: 'thurTime', cName: '週四', required: false, timeBegin: 'thurBegin', timeEnd: 'thurEnd' },
        { eName: 'friTime', cName: '週五', required: false, timeBegin: 'friBegin', timeEnd: 'friEnd' },
        { eName: 'satTime', cName: '週六', required: false, timeBegin: 'satBegin', timeEnd: 'satEnd' },
        { eName: 'sunTime', cName: '週日', required: false, timeBegin: 'sunBegin', timeEnd: 'sunEnd' }],
    }
    style = {
        'width': '15%'
    }
    agreeStyle = {
        'width': '15%'
    }

    componentDidMount(){
        if(window.localStorage.id){
            document.getElementById('danger').className = 'd-none';
        }else{
            document.querySelectorAll('button[type=submit]')[0].className = 'd-none'
            document.querySelectorAll('button[type=submit]')[1].className = 'd-none'
        }
    }
    // 運動類別變更
    // sportListOnclick = (e) => {
    //     let sportList = this.state.sportList

    //     sportList.map(elm => {
    //         if (e.target.id == elm.value) {
    //             // 若icon為 XX
    //             if (e.target.checked == true) {
    //                 document.querySelectorAll(`span[name=${elm.value}]`).innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path></svg>&nbsp;';
    //                 elm.chkicon = faCheck;
    //                 elm.color = 'text-success';
    //                 elm.class = 'rounded border border-success shadow p-1 mx-2';
    //             }// 若icon為 vv
    //             else if (e.target.checked == false) {
    //                 document.querySelectorAll(`span[name=${elm.value}]`).innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" class="svg-inline--fa fa-xmark " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"></path></svg>&nbsp;';
    //                 elm.chkicon = faTimes;
    //                 elm.color = 'text-danger';
    //                 elm.class = 'rounded border border-danger shadow p-1 mx-2';
    //             }
    //             this.setState({});
    //         }
    //     })
    // }
    sportListOnclick = (e) => {
        let sportList = this.state.sportList
        sportList.map(elm => {
            if (e.target.id == elm.value) {
                // 若icon為 XX
                let inputLength = document.querySelectorAll('input[name="type[]"]').length;
                for(var j=0; j < inputLength; j++) {
                    document.querySelectorAll('input[name="type[]"]')[j].checked=false
                }
                e.target.checked = true;
                elm.chkicon = faCheck;
                elm.color = 'text-success';
                elm.class = 'rounded border border-success shadow p-1 mx-2 mt-2';
            } else {
                elm.chkicon = faTimes;
                elm.color = 'text-danger';
                elm.class = 'rounded border border-danger shadow p-1 mx-2 mt-2';
            }
        })
        this.setState({});
    }

    // 人數更動
    setPeople = (e) => {
        this.state.peopleList.map((elm) => {
            if (e.target.value == elm.value) {
                elm.checked = true;
                elm.className = 'text-success';
                elm.labelClass = 'w-100 p-1 shadow rounded border border-success text-center mt-1';
            } else {
                elm.checked = false;
                elm.className = 'd-none text-success';
                elm.labelClass = 'w-100 p-1 shadow rounded border border-danger text-center mt-1'
            }
        })
        this.setState({})
    }

    // button我同意
    agreeOnclick = (e) => {
        let agreeBox = this.state.agreeBox[0];
        let text = document.getElementById('myCheckText');
        if (e.target.checked) {
            agreeBox.spanClass = 'mx-1';
            agreeBox.pClass = 'text-success';
            agreeBox.iconClass = 'text-success';
            agreeBox.labelClass = 'text-center shadow rounded border border-success w-100 p-1';
            text.innerHTML = '本人已閱讀及同意遵守上述條款及細則'
        } else {
            agreeBox.spanClass = 'mx-1';
            agreeBox.pClass = 'text-danger';
            agreeBox.iconClass = 'd-none';
            agreeBox.labelClass = 'text-center shadow rounded border border-danger w-100 p-1';
            text.innerHTML = '本人已閱讀及同意遵守上述條款及細則'
        }
        this.setState({});
    }

    // 價格預覽
    spanPrice = (e) => {
        // console.log(e.target.value);
        document.getElementById('spanPrice').innerHTML = `${e.target.value}`;
        // console.log(document.getElementsByName('moneyPerTimes')[0]);
    }
    // debug
    spanTimes = (e) => {
        // console.log(e.target.value);
        // var spanTime = document.querySelectorAll(`option[name=${e.target.value}]`)[0].innerText;
        document.getElementById('spanTimes').innerHTML = e.target.value;
    }

    // 圖片預覽
    fileInput = () => {
        
        const file1 = document.getElementById('imgInput1').files;
        const file2 = document.getElementById('imgInput2').files;
        const file3 = document.getElementById('imgInput3').files;
        // console.log(file3);
        if (file1) {
            this.state.src[0] = URL.createObjectURL(file1[0]);
            this.setState({});
        }
        if (file2) {
            this.state.src[1] = URL.createObjectURL(file2[0]);
            this.setState({});
        }
        if (file3) {
            this.state.src[2] = URL.createObjectURL(file3[0]);
            this.setState({});
        }
        
    }

    // 星期+時間
    weekTimeChange = (e) => {
        if (e.target.checked) {
            e.target.parentElement.parentElement.childNodes[1].className = 'mt-3';
            e.target.parentElement.parentElement.childNodes[1].children[0].required = true;
            e.target.parentElement.parentElement.childNodes[1].children[2].required = true;
        } else {
            e.target.parentElement.parentElement.childNodes[1].className = 'mt-2 d-none';
            e.target.parentElement.parentElement.childNodes[1].children[0].required = false;
            e.target.parentElement.parentElement.childNodes[1].children[2].required = false;
            e.target.parentElement.parentElement.childNodes[1].children[0].value = '';
            e.target.parentElement.parentElement.childNodes[1].children[2].value = '';
        }
    }


    render() {
        let selectedOptionId = '';
        return (
            <div className="container mt-6">
                <h3>上傳課程</h3>
                <hr />
                <form id='beCoach' className="was-validated form-group" enctype="multipart/form-data"
                    action="http://localhost/spost/form.php" method='POST'>

                    {/* 上傳圖片 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>上傳圖片 :</b>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="row">
                        <div className="col-3 mb-3 d-flex">
                            <input name='img1' id='imgInput1' accept="image/gif, image/jpeg, image/png" type="file" onChange={this.fileInput} className="rounded shadow form-control" required />
                        </div>
                        <div className="col-3 mb-3 d-flex">
                            <input name='img2' id='imgInput2' accept="image/gif, image/jpeg, image/png" type="file" onChange={this.fileInput} className="rounded shadow form-control" required />
                        </div>
                        <div className="col-3 mb-3 d-flex">
                            <input name='img3' id='imgInput3' accept="image/gif, image/jpeg, image/png" type="file" onChange={this.fileInput} className="rounded shadow form-control" required />
                        </div>
                    </div>


                    {/* 預覽圖 */}
                    <div className="row">
                        {this.state.src.map((elm, idx) => {
                            return (
                                <div className="col-3">
                                    <img style={{
                                        width: '260px',
                                        height: '280px',
                                        background: 'white',
                                        objectFit: 'contain'
                                    }} src={this.state.src[idx]} className="mt-3 mx-2" />
                                </div>
                            )
                        })}
                    </div>

                    <hr />

                    {/* 課程名稱 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>課程名稱 :</b>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    建議輸入較有區別性與特色的名稱，而非一對一教練課程
                                </li>
                                <li className="list-group-item">
                                    好的課程名稱除了可以讓您的課程更突出外，也會讓消費者在Google瀏覽器搜尋時更容易看到您的課程。
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="mb-3 w-50">
                        <input name="title" type="text" className="rounded shadow form-control" placeholder="請輸入課程名稱" required />
                    </div>
                    <hr />

                    {/* 課程簡介 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>課程介紹 :</b>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    簡介可敘述課程進行的模式，您與其他課程的區隔以及獨到之處，越豐富詳細的介紹，會讓您在Google等搜尋引擎中的自然排名有效提升。
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="mb-3 w-50">
                        <textarea name="info" className="rounded shadow form-control" rows="3" placeholder="輸入課程簡介" required></textarea>
                    </div>
                    <hr />

                    {/* 上課地點 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>上課地點 :</b>
                        </li>
                    </ul>
                    <div className="mb-3 mt-1 w-50" >
                        <Citys required={true} />
                        <input name="addr" type="text" className="rounded shadow mt-2 form-control" placeholder="請請輸入地址" required />
                    </div>
                    <hr />

                    {/* 開課時間 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>開課時間 :</b>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="mb-4 d-flex flex-wrap">
                        {this.state.weekTime.map(elm => {
                            // { eName: 'monTime', cName: '週一', required: false, timeBegin: 'monBegin', timeEnd: 'monEnd' }
                            return (
                                <div className="mb-3 mx-1">
                                    <div className="mx-3 form-check form-switch">
                                        <input className="form-check-input" type="checkbox" id={elm.eName} onChange={this.weekTimeChange} />
                                        <label className="form-check-label" htmlFor={elm.eName}>{elm.cName}</label>
                                    </div>
                                    <div name={elm.eName} className="mt-2 d-none">
                                        <select name={elm.timeBegin} defaultValue={selectedOptionId} className="rounded shadow form-control" required={elm.required}>
                                            <option value=''></option>
                                            <option value='00:00'>00:00</option><option value='01:00'>01:00</option><option value='02:00'>02:00</option><option value='03:00'>03:00</option>
                                            <option value='04:00'>04:00</option><option value='05:00'>05:00</option><option value='06:00'>06:00</option><option value='07:00'>07:00</option>
                                            <option value='08:00'>08:00</option><option value='09:00'>09:00</option><option value='10:00'>10:00</option><option value='11:00'>11:00</option>
                                            <option value='12:00'>12:00</option><option value='13:00'>13:00</option><option value='14:00'>14:00</option><option value='15:00'>15:00</option>
                                            <option value='16:00'>16:00</option><option value='17:00'>17:00</option><option value='18:00'>18:00</option><option value='19:00'>19:00</option>
                                            <option value='20:00'>20:00</option><option value='21:00'>21:00</option><option value='22:00'>22:00</option><option value='23:00'>23:00</option>
                                        </select>
                                        <p className="mt-2 mb-2">至</p>
                                        <select name={elm.timeEnd} defaultValue={selectedOptionId} className="rounded shadow form-control" required={elm.required}>
                                            <option value=''></option>
                                            <option value='00:00'>00:00</option><option value='01:00'>01:00</option><option value='02:00'>02:00</option><option value='03:00'>03:00</option>
                                            <option value='04:00'>04:00</option><option value='05:00'>05:00</option><option value='06:00'>06:00</option><option value='07:00'>07:00</option>
                                            <option value='08:00'>08:00</option><option value='09:00'>09:00</option><option value='10:00'>10:00</option><option value='11:00'>11:00</option>
                                            <option value='12:00'>12:00</option><option value='13:00'>13:00</option><option value='14:00'>14:00</option><option value='15:00'>15:00</option>
                                            <option value='16:00'>16:00</option><option value='17:00'>17:00</option><option value='18:00'>18:00</option><option value='19:00'>19:00</option>
                                            <option value='20:00'>20:00</option><option value='21:00'>21:00</option><option value='22:00'>22:00</option><option value='23:00'>23:00</option>
                                        </select>
                                    </div>
                                </div>

                            )
                        })}
                        {/* <div className="mb-3 mx-1">
                            <div className="mx-3 form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="monTime" onChange={this.weekTimeChange} />
                                <label className="form-check-label" htmlFor="monTime">週一</label>
                            </div>
                            <label className='mt-2'>
                                <input name="monTime" type="time" className="rounded shadow form-control" required={false} />
                            </label>
                            <p className="mt-2 mb-2">至</p>
                            <label>
                                <input name="monTime" type="time" className="rounded shadow form-control" required={false} />
                            </label>
                        </div>*/}
                    </div>
                    <hr />

                    {/* 分類 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>分類 :</b>
                        </li>
                    </ul>
                    <InesrtSportList datas={this.state.sportList}
                        sportListOnclick={(e) => this.sportListOnclick(e)}
                        clearSportType={this.clearSportType} />
                    <hr />

                    {/* 上課時間 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>課程時間長度 :</b>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="form-group mb-3">
                        <label>
                            <select className="custom-select rounded shadow form-control" name="timeLength" required>
                                <option value="" className='d-none'>請選擇課程長度</option>
                                <option value="30">30</option>
                                <option value="60">60</option>
                                <option value="90">90</option>
                                <option value="120">120</option>
                            </select>
                        </label>
                        <p className='text-muted mt-2'>(分鐘)</p>
                    </div>
                    <hr />

                    {/* 人數 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>模式 :</b>
                        </li>
                    </ul>
                    {this.state.peopleList.map(elm => {
                        return (
                            <div style={this.style}>
                                <label name='mode' className={elm.labelClass}>
                                    <input onClick={this.setPeople} key={elm.key} value={elm.value} type="radio" name='mode' className='form-control d-none' checked={elm.checked} required />
                                    <span><FontAwesomeIcon className={elm.className} icon={faCheck} />&nbsp;</span>{elm.value}</label><br />
                            </div>
                        )
                    })}
                    <hr />


                    {/* 價錢 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>價錢 :</b>
                        </li>
                    </ul>
                    <div className="mb-3 mt-1">
                        <label>
                            <input name='price' onInput={this.spanPrice} type="number" className="rounded shadow form-control" placeholder="請輸入價錢" required />
                            <select name="pricePerTime" onInput={this.spanTimes} className="mt-2 rounded shadow form-control" defaultValue={selectedOptionId} required>
                                <option name="" value=""></option>
                                <option name="perTimes" value="1次">1次</option>
                                <option name="perMin" value="1分鐘">1分鐘</option>
                                <option name="perThirtyMin" value="30分鐘">30分鐘</option>
                                <option name="perHour" value="60分鐘">60分鐘</option>
                            </select>
                        </label>
                        <p className='text-muted mt-2'>$ <span id='spanPrice'> </span> / <span id='spanTimes'></span></p>
                    </div>
                    <hr />

                    {/* 我同意 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>是否同意 :</b>
                        </li>
                    </ul>
                    <div className="mb-2" style={this.agreeStyle}>
                        <input onChange={this.agreeOnclick} className='form-control d-none' type="checkbox" id="myCheck" required />
                        <label htmlFor='myCheck' className={this.state.agreeBox[0].labelClass}>
                            <FontAwesomeIcon className={this.state.agreeBox[0].iconClass} icon={faCheck} /><span className={this.state.agreeBox[0].spanClass}>我同意</span></label><br />
                    </div>
                    <p className={this.state.agreeBox[0].pClass} id='myCheckText'>本人已閱讀及同意遵守上述條款及細則</p>
                    <hr />

                    {/* 送出表單 */}
                    <button type="submit" name='id' value={window.localStorage.id} className="btn btn-outline-success" >送出</button>
                    <button type="submit" className="btn btn-outline-danger mx-3">取消</button>
                    <NavLink to='/login' id='danger' className="btn btn-lg btn-outline-danger mx-3">請先登入</NavLink>
                </form>
                <br /><br /><br /><br /><br /><br /><br />
            </div>
        );
    }
}

export default BeCoach;