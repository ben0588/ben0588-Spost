import React, { Component } from 'react';
import Axios from 'axios';
import InesrtSportList from './InesrtSportList';
import '../scss/all.css';
import pic from '../imgs/user1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
class EditLesson extends Component {
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

        weekTime: [{ eName: 'mon', cName: '週一', required: false, timeBegin: 'monBegin', timeEnd: 'monEnd' },
        { eName: 'tue', cName: '週二', required: false, timeBegin: 'tueBegin', timeEnd: 'tueEnd' },
        { eName: 'wed', cName: '週三', required: false, timeBegin: 'wedBegin', timeEnd: 'wedEnd' },
        { eName: 'thu', cName: '週四', required: false, timeBegin: 'thuBegin', timeEnd: 'thuEnd' },
        { eName: 'fri', cName: '週五', required: false, timeBegin: 'friBegin', timeEnd: 'friEnd' },
        { eName: 'sat', cName: '週六', required: false, timeBegin: 'satBegin', timeEnd: 'satEnd' },
        { eName: 'sun', cName: '週日', required: false, timeBegin: 'sunBegin', timeEnd: 'sunEnd' }],

        data: [], addr: [], week: [{ sun: '' }, { mon: '' }, { tue: '' }, { wed: '' }, { thu: '' }, { fri: '' }, { sat: '' }]
    }
    style = {
        'width': '15%'
    }
    agreeStyle = {
        'width': '15%'
    }
    async componentDidMount() {
        // 資料回傳
        let resdata = [];
        let checkInfo  = '';
        checkInfo = this.props.match.params.lid+',';
        checkInfo += this.props.match.params.id+',';
        checkInfo += window.localStorage.info;
        await Axios.post("http://localhost/spost/DongPHP/editLesson.php", checkInfo)
            .then((response) => {
                resdata = response.data;
            });
        if(resdata == 1){
            localStorage.clear();
            window.location = '/login';
        }else{
            this.state.data = resdata;
            this.setState({});
        }    
        

        // 預設價格
        this.state.data[0].pricepertime = this.state.data[0].pricepertime.replace(' ', '');
        document.getElementsByName('pricePerTime')[0].value = this.state.data[0].pricepertime;
        document.getElementById('spanPrice').innerHTML = this.state.data[0].price;
        document.getElementById('spanTimes').innerHTML = this.state.data[0].pricepertime.replace(' ', '');

        // 預設時間
        this.state.data[0].timelength = this.state.data[0].timelength.replace(' ', '');
        document.getElementsByName('timeLength')[0].value = this.state.data[0].timelength;

        // 預設地址
        this.state.addr = this.state.data[0] && this.state.data[0].addr;

        // 預設星期+時間
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

        // 預設模式
        let modetemp = this.state.data[0] && this.state.data[0].mode
        this.state.peopleList.map(elm => {
            if (elm.value == modetemp) {
                elm.checked = true;
                elm.className = 'text-success';
                elm.labelClass = 'w-100 p-1 shadow rounded border border-success text-center mt-1';
            }
        })

        // 預設類別
        let typetemp = this.state.data[0] && this.state.data[0].type
        this.state.sportList.map(elm => {
            if (elm.value == typetemp) {
                document.querySelectorAll(`input[value=${elm.value}]`)[0].checked = true;
                elm.chkicon = faCheck;
                elm.color = 'text-success';
                elm.class = 'rounded border border-success shadow p-1 mx-2 mt-2';
            }
        })
        this.setState({});
    }
    
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

    // 價格預覽
    spanPrice = (e) => {
        document.getElementById('spanPrice').innerHTML = `${e.target.value}`;
    }
    // debug
    spanTimes = (e) => {
        document.getElementById('spanTimes').innerHTML = e.target.value;
    }

    // 圖片預覽
    fileInput = () => {

        const file1 = document.getElementById('imgInput1').files;
        const file2 = document.getElementById('imgInput2').files;
        const file3 = document.getElementById('imgInput3').files;

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
        e.target.parentElement.childNodes[0].src = pic;
        e.target.parentElement.childNodes[1].value='';
        e.target.parentElement.childNodes[3].value=false;
    }

    render() {
        let selectedOptionId = '';
        return (
            <div className="container mt-6">
                <h3>編輯課程</h3>
                <hr />
                <form id='editLesson' className="was-validated form-group" enctype="multipart/form-data"
                    action="http://localhost/spost/DongPHP/form.php" method='POST'>

                    {/* 編輯圖片 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>編輯圖片 :</b>
                            <span className="mx-3 btn btn-outline-success" onClick={this.addImage}>新增</span>
                        </li>
                    </ul>
                    <div id='imageGroup' className="row">
                        {this.state.data && this.state.data.map((elm, idx) => {
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
                            <input type="hidden" name="imgFlag0" id="imgFlag0" value={false}/>
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
                                className="mt-3 rounded shadow form-control" 
                                />
                            <span onClick={this.deleteImage} className="mt-3 btn btn-outline-danger w-100"><b>刪除</b></span>
                            <input type="hidden" name="imgFlag5" id="imgFlag5" value={false}/>
                        </div>

                    </div>

                    <hr />
                    {/* 課程名稱 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>課程名稱 :</b>
                        </li>
                    </ul>
                    <div className="mb-3 w-50">
                        <input name="title" type="text" defaultValue={this.state.data[0] && this.state.data[0].title} className="rounded shadow form-control" required />
                    </div>
                    <hr />

                    {/* 課程簡介 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>課程介紹 :</b>
                        </li>
                    </ul>
                    <div className="mb-3 w-50">
                        <textarea name="info" className="rounded shadow form-control" rows="3" defaultValue={this.state.data[0] && this.state.data[0].info} required></textarea>
                    </div>
                    <hr />

                    {/* 上課地點 */}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>上課地點 :</b>
                        </li>
                    </ul>
                    <div className="mb-3 mt-1 w-50" >
                        <input name="addr" type="text" defaultValue={this.state.data[0] && this.state.addr} className="rounded shadow mt-2 form-control" placeholder="請請輸入地址" required={false} />
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
                                <option value="30分鐘">30</option>
                                <option value="60分鐘">60</option>
                                <option value="90分鐘">90</option>
                                <option value="120分鐘">120</option>
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
                    {/* { key: 1, checked: false, value: '團體課程', 
                    className: 'd-none text-success', 
                    labelClass: 'w-100 p-1 shadow rounded border border-danger text-center mt-1' } */}
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
                            <input name='price' onInput={this.spanPrice} type="number" className="rounded shadow form-control" defaultValue={this.state.data[0] && this.state.data[0].price} placeholder="請輸入價錢" required />
                            <select name="pricePerTime" onInput={this.spanTimes} className="mt-2 rounded shadow form-control" defaultValue='' required>
                                <option name="" value=""></option>
                                <option name="perTimes" value="次">次</option>
                                <option name="perMin" value="1分鐘">1分鐘</option>
                                <option name="perThirtyMin" value="30分鐘">30分鐘</option>
                                <option name="perHour" value="60分鐘">60分鐘</option>
                                <option name="nintymin" value="90分鐘">90分鐘</option>
                                <option name="perTwoHours" value="120分鐘">120分鐘</option>
                            </select>
                        </label>
                        <p className='text-muted mt-2'>$ <span id='spanPrice'> </span> / <span id='spanTimes'></span></p>
                    </div>
                    <hr />

                    {/* 送出表單 */}
                    <button type="submit" name='lid' value={this.props.match.params.lid} className="btn btn-outline-success">送出</button>
                    <button type="submit" className="btn btn-outline-danger mx-3">取消</button>
                </form>
                <br /><br /><br /><br /><br /><br /><br />
            </div>
        );
    }
}

export default EditLesson;