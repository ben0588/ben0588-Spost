import React, { Component } from 'react';
import citycountrydata from '../data/citycountrydata.json'
class Citys extends Component {
    state = {}


    district = (city) => {
        var cityDistrict = citycountrydata.map((val)=>(val));
        switch(city){
            case '臺北市' :var districtList = cityDistrict[0].AreaList;break;
            case '基隆市' :districtList = cityDistrict[1].AreaList;break;
            case '新北市' :districtList = cityDistrict[2].AreaList;break;
            case '連江縣' :districtList = cityDistrict[3].AreaList;break;
            case '宜蘭縣' :districtList = cityDistrict[4].AreaList;break;
            case '新竹市' :districtList = cityDistrict[6].AreaList;break;
            case '新竹縣' :districtList = cityDistrict[7].AreaList;break;
            case '桃園市' :districtList = cityDistrict[8].AreaList;break;
            case '苗栗縣' :districtList = cityDistrict[9].AreaList;break;
            case '臺中市' :districtList = cityDistrict[10].AreaList;break;
            case '彰化縣' :districtList = cityDistrict[11].AreaList;break;
            case '南投縣' :districtList = cityDistrict[12].AreaList;break;
            case '嘉義市' :districtList = cityDistrict[13].AreaList;break;
            case '嘉義縣' :districtList = cityDistrict[14].AreaList;break;
            case '雲林縣' :districtList = cityDistrict[15].AreaList;break;
            case '臺南市' :districtList = cityDistrict[16].AreaList;break;
            case '高雄市' :districtList = cityDistrict[17].AreaList;break;
            case '澎湖縣' :districtList = cityDistrict[19].AreaList;break;
            case '金門縣' :districtList = cityDistrict[20].AreaList;break;
            case '屏東縣' :districtList = cityDistrict[21].AreaList;break;
            case '臺東縣' :districtList = cityDistrict[22].AreaList;break;
            case '線上視訊教學' :districtList = cityDistrict[23].AreaList;break;
            case '花蓮縣' :districtList = cityDistrict[24].AreaList;break;
        }
        let district = document.getElementById('district');
        district.innerHTML = `<option value="">縣市</option>`;
        districtList.map((val,idx) => {
            district.innerHTML += `<option key=${idx} value=${val.AreaName}>${val.AreaName}</option>`
        });
        this.setState({});
    }
    check = (e) => {
        let district = document.getElementById('district');
        if(district.innerHTML){
            district.innerHTML = '';
        }
        this.district(e.target.value);
        this.setState({});
    }
    render() {
        let inputBoxStyle = this.props.style;
        let required = this.props.required;
        let selectedOptionId = '';
        return (
            <>
                <select name="city" style={inputBoxStyle} className='shadow form-control' id="city" 
                defaultValue={selectedOptionId} onChange={this.check} required={required}>
                    <option value="">縣市</option>
                    <option value="線上視訊教學">線上視訊教學</option>                    
                    {citycountrydata.map((val,idx)=>
                        <option key={idx} value={val.CityName}>{val.CityName}</option>
                        )}
                </select >
                <select name="district" style={inputBoxStyle} className='shadow mt-2 form-control' id="district" required={required}>
                    
                </select>
            </>

        )

    }

}

export default Citys;