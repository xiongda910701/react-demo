import React from 'react'
import PureRenderMixin  from 'react-addons-pure-render-mixin'
import * as ICON from '../../../utils/icon'
import Slider from '../../../components/slider/index'


import '../index.less'

class HomeAd extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            list: [ICON.SLIDER1,ICON.SLIDER2,ICON.SLIDER3,ICON.SLIDER4,ICON.SLIDER5]
        }
    }
    render() {
        var option = {
            data: this.state.list,
            speed:3000,
            autoPlay:true
        };
        return (
            <Slider option={option}/>
        )
    }
}

export default HomeAd