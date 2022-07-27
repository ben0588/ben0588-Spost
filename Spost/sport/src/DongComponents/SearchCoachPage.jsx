import React, { Component } from 'react';
import Axios from 'axios';
import LessonCard from './LessonCard';
import Citys from './Citys';
import SportList from './SportList'
import WeekList from './WeekList';
import '../scss/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Link, NavLink } from "react-router-dom";

class SearchCoachPage extends Component {
    state = {
        priceList: [{ key: 0, checked: false, price: '$0 ~ $500', className: 'd-none text-success' },
        { key: 1, checked: false, price: '$501 ~ $1000', className: 'd-none text-success' },
        { key: 2, checked: false, price: '$1001 ~ $2000', className: 'd-none text-success' },
        { key: 3, checked: false, price: '$2001 ~ $3000', className: 'd-none text-success' },
        { key: 4, checked: false, price: '$3001 ~ 以上', className: 'd-none text-success' }],

        peopleList: [{ key: 0, checked: false, value: '一對一課程', className: 'd-none text-success' },
        { key: 1, checked: false, value: '團體課程', className: 'd-none text-success' }],

        weekList: [{ key: 1, id: 'mon', value: '星期一', className: 'd-none text-success', chkicon: faTimes, color: 'text-black' },
        { key: 2, id: 'tue', value: '星期二', className: 'd-none text-success', chkicon: faTimes, color: 'text-black' },
        { key: 3, id: 'wed', value: '星期三', className: 'd-none text-success', chkicon: faTimes, color: 'text-black' },
        { key: 4, id: 'thu', value: '星期四', className: 'd-none text-success', chkicon: faTimes, color: 'text-black' },
        { key: 5, id: 'fri', value: '星期五', className: 'd-none text-success', chkicon: faTimes, color: 'text-black' },
        { key: 6, id: 'sat', value: '星期六', className: 'd-none text-success', chkicon: faTimes, color: 'text-black' },
        { key: 7, id: 'sun', value: '星期日', className: 'd-none text-success', chkicon: faTimes, color: 'text-black' }],

        rangeValue: [0, 100], timeValue: ['00 : 00', '24 : 00'],

        data: [],sportType:[],

    }
    inputBoxStyle = {
        'color': 'balck',
        'padding': '5px',
        'border': '1px solid #00000050'
    }
    timeRangeStyle = {
        'color': 'balck',
        'padding': '5px',
        'border': '1px solid #00000050',
        'width': '32%'
    }
    submitStyle = {
        'padding': '5px',
        'border': '1px solid #00000050',
        'fontSize': '20px',
        'fontWeight': 'bold',
    }
    // 課程預設
    async componentDidMount() {
        var url = `http://localhost/spost/DongPHP/lesson.php`;
        var result = await Axios.get(url);
        this.state.data = result.data;
        this.state.data.map(elm=>{
            elm.rate = (3+Math.random()*2).toFixed(1)
        })

        var url1 = `http://localhost/spost/DongPHP/sportType.php`;
        var result1 = await Axios.get(url1);
        this.state.sportType = result1.data;
        let sportType = this.state.sportType;
        sportType.map((elm,idx)=>{
            elm.className = 'text-black';
            elm.chkicon = faTimes;
            elm.id = `type${idx}`;
            elm.checked = false;
        })
        this.setState({});
    }

    // 取結果
    searchResult = async () => {
        let resdata = [];
        var fd = new FormData(document.querySelector("form"));
        await Axios.post("http://localhost/spost/DongPHP/searchLesson.php", fd )
        .then( (response) => {
            resdata = response.data;
        });
        // console.log(resdata);
        this.state.data = resdata;
        this.state.data.map(elm=>{
            elm.rate = (3+Math.random()*2).toFixed(1)
        })
        this.setState({});        
    }

    // 清除縣市
    clearCity = () => {
        document.getElementById('city').value = '';
        document.getElementById('district').value = '';
        
        this.setState({});
    }

    // 清除星期
    clearWeek = () => {
        let weekList = this.state.weekList
        weekList.map(elm => {
            elm.chkicon = faTimes;
            elm.color = 'text-black';
        })
        
        this.setState({});
    }
    // weeklistonchange
    weekListOnclick = (e) => {
        let weekList = this.state.weekList;
        weekList.map(elm => {
            if (e.target.id == elm.id) {
                // 若icon為 XX
                if (e.target.checked == true) {
                    elm.chkicon = faCheck;
                    elm.color = 'text-success';
                }// 若icon為 vv
                else if (e.target.checked == false) {
                    elm.chkicon = faTimes;
                    elm.color = 'text-black';
                }
                this.setState({});
            }
        })
    }
    // 清除日期
    clearTime = () => {
        document.getElementsByName('weekBegin')[0].value = '';
        document.getElementsByName('weekEnd')[0].value = '';
        
        this.setState({});
    }

    // 清除所選價格
    clearPrice = () => {
        this.state.priceList.map((elm) => {
            elm.checked = false;
            elm.className = 'd-none text-success';
        })
        
        this.setState({});
    }

    // 點選價格更改樣式
    setPrice = (e) => {
        this.state.priceList.map((elm) => {
            // console.log(e.target.value);
            if (e.target.value == elm.price) {
                elm.checked = true;
                elm.className = 'text-success';
            } else {
                elm.checked = false;
                elm.className = 'd-none text-success';
            }
        })
        this.setState({})
    }

    // 更改運動類別 icon
    sportListOnclick = (e) => {
        let sportType = this.state.sportType;
        sportType.map(elm => {
            if(e.target.id == elm.id) {
                if(e.target.checked){
                    elm.checked = true;
                    elm.className = 'text-success';
                    elm.chkicon = faCheck;
                }else{
                    elm.checked = false;
                    elm.className = 'text-black';
                    elm.chkicon = faTimes;
                }
                this.setState({});                
            }
        })
    }

    // 清除sportType
    clearSportType = () => {
        let sportType = this.state.sportType;
        sportType.map(elm => {
            elm.chkicon = faTimes;
            elm.className = 'text-black';
            elm.checked = false;
        })
        
        this.setState({});
    }


    // 清除所選人數
    clearPeople = () => {
        this.state.peopleList.map((elm) => {
            elm.checked = false;
            elm.className = 'd-none text-success';
        })
        
        this.setState({});
    }

    setPeople = (e) => {
        this.state.peopleList.map((elm) => {
            if (e.target.value == elm.value) {
                elm.checked = true;
                elm.className = 'text-success';
            } else {
                elm.checked = false;
                elm.className = 'd-none text-success';
            }
        })
        this.setState({})
    }


    // 清除總表單
    clearForm = async () => {
        this.clearCity();
        this.clearForm();
        this.clearPeople();
        this.clearPrice();
        this.clearRange();
        this.clearSportType();
        this.clearTime();
        this.clearWeek();
        this.searchResult();
        this.setState({});
    }

    // 清除所選時間範圍
    clearRange = () => {
        this.state.rangeValue[0] = 0;
        this.state.rangeValue[1] = 100;
        this.state.timeValue[0] = '00 : 00';
        this.state.timeValue[1] = '24 : 00';
        this.setState({});
    }

    handleChange = (e) => {
        this.state.rangeValue[0] = e.target.value[0];
        this.state.rangeValue[1] = e.target.value[1];
        this.state.timeValue[0] = `${Math.floor((24 * (e.target.value[0] / 100)))} : 00`;
        this.state.timeValue[1] = `${Math.floor((24 * (e.target.value[1] / 100)))} : 00`;
        this.setState({});
    }


    // searchChange = (e) => {
    //     console.log(e);
    // }

    render() {

        return (
            <div className='container mt-6'>
                <span>教練</span><span> / </span><span className='text-danger'>探索</span>
                <div className='row mt-3'>
                    <div className='col-3'>
                        <form name='formInfo' method="post" className='mt-3 form-group'>
                            <div className='d-flex justify-content-between mt-3'>
                                <h3>篩選</h3>
                                <span onClick={this.clearForm} className='btn text-secondary'>全部清除</span>
                            </div>
                            <input name="search" style={this.inputBoxStyle} className='shadow form-control' type="search" placeholder="搜尋" />


                            {/* 縣市 */}
                            <div className='d-flex justify-content-between mt-3'>
                                <span>地區</span>
                                <span onClick={this.clearCity} className='btn text-secondary'>清除</span>
                            </div>
                            <Citys style={this.inputBoxStyle} required={false} />

                            {/* 日期範圍 */}
                            <div className='d-flex justify-content-between mt-3'><span>日期</span><span onClick={this.clearTime} className='btn text-secondary'>清除</span></div>
                            <input style={this.inputBoxStyle} className='shadow form-control' name='weekBegin' type="date" /> ~<input style={this.inputBoxStyle} className='shadow form-control' name='weekEnd' type="date" />

                            {/* 星期幾 */}
                            <WeekList datas={this.state.weekList}
                                style={this.inputBoxStyle}
                                weekListOnclick={(e) => this.weekListOnclick(e)}
                                clearWeek={this.clearWeek} />

                            {/* 所選時段 */}
                            <div className='d-flex justify-content-between mt-3'><span>時段</span><span onClick={this.clearRange} className='btn text-secondary'>清除</span></div>
                            <Box sx={{ width: 'auto' }}>
                                <br />
                                <Slider
                                    getAriaLabel={() => 'Temperature range'}
                                    value={this.state.rangeValue}
                                    onChange={this.handleChange}
                                    valueLabelDisplay="off"
                                    getAriaValueText={this.valuetext}
                                    color="success"
                                />
                            </Box>
                            <div className='d-flex justify-content-between mt-3'>
                                <input name='timeRangeBegin' type="text" className='shadow rounded' style={this.timeRangeStyle} value={this.state.timeValue[0]} />
                                <input name='timeRangeEnd' type="text" className='shadow rounded' style={this.timeRangeStyle} value={this.state.timeValue[1]} />
                            </div>
                            {/* <div className='d-flex justify-content-between mt-3'><span className='shadow rounded' style={this.inputBoxStyle}>{this.state.timeValue[0]}</span><span className='shadow rounded' style={this.inputBoxStyle}>{this.state.timeValue[1]}</span></div> */}
                            {/* @mui/material/styles/createPalette.d.ts */}
                            {/* primary: PaletteColor;
                            secondary: PaletteColor;
                            error: PaletteColor;
                            warning: PaletteColor;
                            info: PaletteColor;
                            success: PaletteColor; */}
                            {/* https://mui.com/zh/material-ui/customization/palette/ */}

                            {/* 價錢 */}
                            <div className='d-flex justify-content-between mt-3'><span>價錢</span><span onClick={this.clearPrice} className='btn text-secondary'>清除</span></div>
                            <div className='w-100'>
                                {this.state.priceList.map(elm => {
                                    return (
                                        <>
                                            <label style={this.inputBoxStyle} name='price' className='w-100 shadow rounded text-center mt-1'>
                                                <input value={elm.price} onClick={this.setPrice} key={elm.key} type="radio" name='price' className='d-none' checked={elm.checked} />
                                                <span ><FontAwesomeIcon className={elm.className} icon={faCheck} />&nbsp;</span>{elm.price}</label><br />
                                        </>
                                    )
                                })}
                            </div>

                            {/* 運動類別 */}
                            <div className='text-center'>
                                <SportList datas={this.state.sportType}
                                    style={this.inputBoxStyle}
                                    sportListOnclick={(e) => this.sportListOnclick(e)}
                                    clearSportType={this.clearSportType}/>
                            </div>
                            {/* 上課模式 */}
                            <div className='d-flex justify-content-between mt-3'><span>上課模式</span><span onClick={this.clearPeople} className='btn text-secondary'>清除</span></div>
                            <div className='w-100'>
                                {this.state.peopleList.map(elm => {
                                    return (
                                        <>
                                            <label style={this.inputBoxStyle} name='people' className="w-100 shadow rounded text-center mt-1">
                                                <input onClick={this.setPeople} key={elm.key} value={elm.value} type="radio" name='mode' className='d-none' checked={elm.checked} />
                                                <span><FontAwesomeIcon className={elm.className} icon={faCheck} />&nbsp;</span>{elm.value}</label><br />
                                        </>
                                    )
                                })}
                            </div>
                            
                            {/* 送出表單 */}
                            <input type="button" value="顯示結果" style={this.submitStyle} onClick={this.searchResult} 
                            className='w-100 shadow rounded text-success btn mt-3'/>
                            

                            <br /><br /><br />
                        </form>
                    </div>


                    {/* 檢視結果 */}
                    <div className='col-9 border-end border-start'>
                        <div className='row text-center'>
                            <Link className='col-6 shadow btn bg-black text-white' to={"/lesson"}>找課程</Link>
                            <Link className='col-6 shadow btn' to={"/site"}>找場地</Link>
                        </div>
                        <div className='row mt-5 justify-content-center'>
                            <LessonCard onClick={this.cardOnClick} dataList={this.state.data} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default SearchCoachPage;