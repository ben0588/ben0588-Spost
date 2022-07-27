import React, { Component } from 'react';
import Axios from 'axios';
import MemberPage from '../DongComponents/MemberPage.jsx';
import MemberLessonPost from '../DongComponents/MemberLessonPost.jsx';
import MemberPlacePost from '../DongComponents/MemberPlacePost.jsx';

class MemberPost extends Component {
    state = {
        lesson: [], place: []
    }
    async componentDidMount() {
        let resdata = [];
        let resPlaceData = [];
        console.log(window.localStorage);
        let checkInfo = '';
        checkInfo = this.props.match.params.id + ',';
        checkInfo += window.localStorage.info;
        await Axios.post("http://localhost/spost/DongPHP/memberLessonPost.php", checkInfo)
            .then((response) => {
                resdata = response.data;
            });
        console.log(resdata);
        await Axios.post("http://localhost/spost/DongPHP/memberPlacePost.php", checkInfo)
            .then((response) => {
                resPlaceData = response.data;
            });
        if (resdata == 1 || resPlaceData == 1) {
            localStorage.clear();
            window.location = '/login';
        } else {
        }
        this.state.lesson = resdata;
        this.state.place = resPlaceData;
        this.setState({});
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-2 border-end mt-5'>
                        <MemberPage />
                    </div>
                    <div className='col-1'>
                    </div>
                    {/* 已上傳Card */}
                    <div className='col-9 mt-5'>
                        <div className='row'>
                            <MemberLessonPost dataList={this.state.lesson} />
                            <MemberPlacePost dataList={this.state.place} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MemberPost;