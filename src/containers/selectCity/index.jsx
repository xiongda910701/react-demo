import React from 'react'
//import {Link} from "react-router"
import PureRenderMixin  from 'react-addons-pure-render-mixin'


class SelectCity extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    componentDidMount(){
        this.getLocation();
    }

    render() {
        return (
            <div className="select-city-page">
                <h2>选择城市</h2>
            </div>
        )
    }

    //获取用户位置
    getLocation(){
        var geolocation=navigator.geolocation;
        console.error(geolocation);
        if (geolocation){
            geolocation.getCurrentPosition(function(position){
                console.info(position);
                console.log('位置精度:' + position.coords.accuracy);
                console.log('维度：' + position.coords.latitude);
                console.log('经度：' + position.coords.longitude);
            }, function(error){
                console.error(error);
                var msg = '';
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        msg = "用户拒绝对获取地理位置的请求。";
                        break;
                    case error.POSITION_UNAVAILABLE:
                        msg = "位置信息是不可用的。";
                        break;
                    case error.TIMEOUT:
                        msg = "请求用户地理位置超时。";
                        break;
                    case error.UNKNOWN_ERROR:
                        msg = "未知错误。";
                        break;
                    default:
                        console.log("其他");
                }
                console.log(msg);
            },{
                enableHighAccuracy:true
            });
        } else {
            console.log('你的浏览器不支持地理定位');
        }
    }
}

export default SelectCity