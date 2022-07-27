import React, { Component } from 'react';
import Axios from 'axios';
import InesrtSportList from './InesrtSportList';
import '../scss/all.css';
import pic from '../imgs/user1.png';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
class EditPlace extends Component {
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

        agreeBox: [{ spanClass: '', pClass: 'text-danger', iconClass: 'd-none', labelClass: 'text-center shadow rounded border border-danger w-100 p-1' }],


        weekTime: [{ eName: 'mon', cName: '週一', required: false, timeBegin: 'monBegin', timeEnd: 'monEnd' },
        { eName: 'tue', cName: '週二', required: false, timeBegin: 'tueBegin', timeEnd: 'tueEnd' },
        { eName: 'wed', cName: '週三', required: false, timeBegin: 'wedBegin', timeEnd: 'wedEnd' },
        { eName: 'thu', cName: '週四', required: false, timeBegin: 'thuBegin', timeEnd: 'thuEnd' },
        { eName: 'fri', cName: '週五', required: false, timeBegin: 'friBegin', timeEnd: 'friEnd' },
        { eName: 'sat', cName: '週六', required: false, timeBegin: 'satBegin', timeEnd: 'satEnd' },
        { eName: 'sun', cName: '週日', required: false, timeBegin: 'sunBegin', timeEnd: 'sunEnd' }],
        src: [pic, pic, pic],
        data: [], addr: [], week: [{ sun: '' }, { mon: '' }, { tue: '' }, { wed: '' }, { thu: '' }, { fri: '' }, { sat: '' }]


    }
    agreeStyle = {
        'width': '15%'
    }

    async componentDidMount() {
        let resdata = [];
        let checkInfo  = '';
        // console.log(this.props.match.params.pid);
        checkInfo = this.props.match.params.pid+',';
        checkInfo += this.props.match.params.id+',';
        checkInfo += window.localStorage.info;
        await Axios.post("http://localhost/spost/DongPHP/editPlace.php", checkInfo)
            .then((response) => {
                resdata = response.data;
            });
            // console.log(resdata);
            if(resdata == 1){
                localStorage.clear();
                window.location = '/login';
            }else{
                this.state.data = resdata;
                this.setState({});
            }
        // 原場地名稱
        document.querySelectorAll('input[name="title"]')[0].value = this.state.data[0].title;
        // 原場地資訊
        document.querySelectorAll('textarea[name="info"]')[0].value = this.state.data[0].info;
        // 原地址
        document.querySelectorAll('input[name="addr"]')[0].value = this.state.data[0].addr;
        // 原星期+時間
        this.state.week[0].sun = this.state.data[0] && this.state.data[0].sun; this.state.week[1].mon = this.state.data[0] && this.state.data[0].mon;
        this.state.week[2].tue = this.state.data[0] && this.state.data[0].tue; this.state.week[3].wed = this.state.data[0] && this.state.data[0].wed;
        this.state.week[4].thu = this.state.data[0] && this.state.data[0].thu; this.state.week[5].fri = this.state.data[0] && this.state.data[0].fri;
        this.state.week[6].sat = this.state.data[0] && this.state.data[0].sat;

        this.state.week.map((elm, idx) => {
            if (Object.values(elm)[0] !== '') {
                document.getElementById(Object.keys(elm)[0]).checked = true;
                let timetemp = '';
                timetemp = Object.values(elm)[0].replace(' ', '').replace(' ', '');
                document.querySelectorAll(`div[name=${Object.keys(elm)[0]}]`)[0].className = 'mt-2';
                document.querySelectorAll(`select[name='${Object.keys(elm)[0]}Begin']`)[0].value = timetemp.split('～')[0]
                document.querySelectorAll(`select[name='${Object.keys(elm)[0]}End']`)[0].value = timetemp.split('～')[1]
            }
        })

        // 原類別
        let typetemp = this.state.data[0] && this.state.data[0].type
        typetemp.split(';').map(typeelm => {
            this.state.sportList.map(elm => {
                if (elm.value == typeelm) {
                    document.querySelectorAll(`input[value=${elm.value}]`)[0].checked = true;
                    elm.chkicon = faCheck;
                    elm.color = 'text-success';
                    elm.class = 'rounded border border-success shadow p-1 mx-2 mt-2';
                }
            })
        })

        // 價錢+單位
        document.querySelectorAll('input[name="price"]')[0].value = this.state.data[0].price;
        document.querySelectorAll('select[name="pricePerTime"]')[0].value = this.state.data[0].pricepertime.replace(' ', '');
        document.getElementById('spanPrice').innerHTML = this.state.data[0].price;
        document.getElementById('spanTimes').innerHTML = this.state.data[0].pricepertime.replace(' ', '');

        this.setState({});
    }

    // 運動類別更動
    sportListOnclick = (e) => {
        let sportList = this.state.sportList

        sportList.map(elm => {
            if (e.target.id == elm.value) {
                // 若icon為 XX
                if (e.target.checked == true) {
                    document.querySelectorAll(`span[name=${elm.value}]`).innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"></path></svg>&nbsp;';
                    elm.chkicon = faCheck;
                    elm.color = 'text-success';
                    elm.class = 'rounded border border-success shadow p-1 mx-2';
                }// 若icon為 vv
                else if (e.target.checked == false) {
                    document.querySelectorAll(`span[name=${elm.value}]`).innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" class="svg-inline--fa fa-xmark " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"></path></svg>&nbsp;';
                    elm.chkicon = faTimes;
                    elm.color = 'text-danger';
                    elm.class = 'rounded border border-danger shadow p-1 mx-2';
                }
                this.setState({});
            }
        })
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
            text.innerHTML = '可以'
        } else {
            agreeBox.spanClass = 'mx-1';
            agreeBox.pClass = 'text-danger';
            agreeBox.iconClass = 'd-none';
            agreeBox.labelClass = 'text-center shadow rounded border border-danger w-100 p-1';
            text.innerHTML = 'Check this checkbox to continue.'
        }
        this.setState({});
    }

    // 價格預覽
    spanPrice = (e) => {
        // console.log(e.target.value);
        document.getElementById('spanPrice').innerHTML = `${e.target.value}`;
        // console.log(document.getElementsByName('moneyPerTimes')[0]);
    }
    spanTimes = (e) => {
        document.getElementById('spanTimes').innerHTML = e.target.value;
    }

    // 圖片預覽
    // fileInput = () => {
    //     const file = document.getElementById('imgInput').files;
    //     for (var i = 0; i < file.length; i++) {
    //         if (file[i]) {
    //             this.state.src[i] = URL.createObjectURL(file[i]);
    //             this.setState({});
    //         }
    //     }
    // }

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

    editImage = (e) => {
        if (e.target.files[0]) {
            e.target.parentElement.childNodes[0].src = URL.createObjectURL(e.target.files[0]);
        }
        let flagNum = e.target.name.replace('img','');
        document.getElementById(`imgFlag${flagNum}`).value = true;
    }

    addImage = (e) => {
        var i = 0;
        document.getElementById('imageGroup').childNodes.forEach((node, idx) => {
            if (node.className == 'col-3') {
                i++
            }
        })        
        if (i == 1) {
            document.getElementById('imageGroup').childNodes[1].children[3].id='imgFlag2'
            document.getElementById('imageGroup').childNodes[1].children[3].name='imgFlag2'
            document.getElementById('imageGroup').childNodes[1].children[1].id = 'imgInput2'
            document.getElementById('imageGroup').childNodes[1].children[1].name = 'img2'
            document.getElementById('imageGroup').childNodes[1].className = 'col-3';
        }
        
        if (i == 2) {
            document.getElementById('imageGroup').childNodes[2].children[3].id='imgFlag3'
            document.getElementById('imageGroup').childNodes[2].children[3].name='imgFlag3'
            document.getElementById('imageGroup').childNodes[2].children[1].id = 'imgInput3'
            document.getElementById('imageGroup').childNodes[2].children[1].name = 'img3'
            document.getElementById('imageGroup').childNodes[2].className = 'col-3';
        }
    }

    deleteImage = (e) => {
        e.target.parentElement.childNodes[0].src = pic
        e.target.parentElement.childNodes[3].value=false;
        e.target.parentElement.childNodes[1].value='';
    }

    render() {
        let selectedOptionId = '';
        return (

            <div className="container mt-6">
                <h3>上傳場地</h3>
                <hr />
                <form id='rentPlace' className="was-validated form-group" enctype="multipart/form-data"
                    action="http://localhost/spost/DongPHP/form.php" method='POST'>

                    {/* 編輯圖片 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>編輯圖片 :</b>
                            <span className="mx-3 btn btn-outline-success" onClick={this.addImage}>新增</span>
                        </li>
                    </ul>
                    <div id='imageGroup' className="row">
                        {this.state.data.map((elm, idx) => {
                            return (
                                <>
                                    <div className="col-3">
                                        <img style={{
                                            width: '260px',
                                            height: '280px',
                                            background: 'white',
                                            objectFit: 'contain'
                                        }} src={`data:image/jpeg;base64,${elm.img}`} className="mt-3 mx-2" />
                                        <input name={`img${idx+1}`} id={`imgInput${idx+1}`}
                                            accept="image/gif, image/jpeg, image/png"
                                            type="file" onChange={this.editImage} className="mt-3 rounded shadow form-control" />
                                        <span onClick={this.deleteImage} className="mt-3 btn btn-outline-danger w-100"><b>刪除</b></span>
                                        <input type="hidden" name={`imgFlag${idx+1}`} id={`imgFlag${idx+1}`} value={false}/>
                                    </div>
                                </>
                            )
                        })}
                        <div className="col-3 d-none">
                            <img style={{
                                width: '260px',
                                height: '280px',
                                background: 'white',
                                objectFit: 'contain'
                            }} src={pic} className="mt-3 mx-2" />
                            <input name='img0' id='imgInput0'
                                accept="image/gif, image/jpeg, image/png"
                                type="file" onChange={this.editImage}
                                className="mt-3 rounded shadow form-control" />
                            <span onClick={this.deleteImage} className="mt-3 btn btn-outline-danger w-100"><b>刪除</b></span>
                            <input type="hidden" name="imgflag0" id="imgFlag0" value={false}/>
                        </div>

                        <div className="col-3 d-none">
                            <img style={{
                                width: '260px',
                                height: '280px',
                                background: 'white',
                                objectFit: 'contain'
                            }} src={pic} className="mt-3 mx-2" />

                            <input name='img5' id='imgInput5'
                                accept="image/gif, image/jpeg, image/png"
                                type="file" onChange={this.editImage}
                                className="mt-3 rounded shadow form-control" />
                            <span onClick={this.deleteImage} className="mt-3 btn btn-outline-danger w-100"><b>刪除</b></span>
                            <input type="hidden" name="imgflag5" id="imgFlag5" value={false}/>
                        </div>

                    </div>

                    <hr />

                    {/* 場地名稱 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>場地名稱 :</b>
                        </li>
                    </ul>
                    <div className="mb-3 mt-1 w-50">
                        <input name="title" type="text" className="rounded shadow form-control" placeholder="請輸入場地名稱" required />
                    </div>
                    <hr />

                    {/* 場地簡介 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>場地介紹 :</b>
                        </li>
                    </ul>
                    <div className="mb-3 mt-1 w-50">
                        <textarea name="info" class="rounded shadow form-control" rows="3" placeholder="輸入場地簡介" required></textarea>
                    </div>
                    <hr />

                    {/* 場地地址 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>地址 :</b>
                        </li>
                    </ul>
                    <div className="mb-3 mt-1 w-50" >
                        <input name="addr" type="text" className="rounded shadow mt-2 form-control" placeholder="請請輸入地址" required />
                    </div>
                    <hr />

                    {/* 開放時間 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>開放租賃時間 :</b>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="mb-4 d-flex flex-wrap">
                        {this.state.weekTime.map(elm => {
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
                    </div>
                    <hr />

                    {/* 人數限制 */}
                    {/* <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>場地人數限制 :</b>
                        </li>
                    </ul>
                    <div className="mb-3 mt-1">
                        <label>
                            <input name="plimit" type="number" className="rounded shadow form-control" placeholder="請輸入人數限制" required />
                        </label>
                    </div>
                    <hr /> */}

                    {/* 適用課程類別 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>適用課程類別 :</b>
                        </li>
                    </ul>
                    <InesrtSportList datas={this.state.sportList}
                        sportListOnclick={(e) => this.sportListOnclick(e)}
                        clearSportType={this.clearSportType} />
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
                                <option name="perTimes" value="次">次</option>
                                <option name="perMin" value="1分鐘">1分鐘</option>
                                <option name="perThirtyMin" value="30分鐘">30分鐘</option>
                                <option name="perHour" value="60分鐘">60分鐘</option>
                            </select>
                        </label>
                        <p className='text-muted mt-2'>$ <span id='spanPrice'> </span> / <span id='spanTimes'></span></p>
                    </div>
                    <hr />

                    <button type="submit" onClick={this.submitOnClick} className="btn btn-outline-success">送出</button>
                    <button type="submit" className="btn btn-outline-danger mx-3">取消</button>
                </form>
                <br /><br /><br /><br /><br /><br /><br />
            </div>

        );
    }
}

export default EditPlace;