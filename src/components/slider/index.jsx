import React from 'react'
import PureRenderMixin  from 'react-addons-pure-render-mixin'
import './index.less'

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: 0
        }
    }

    componentWillMount() {
        let speed = this.props.option.speed;
        let autoPlay = this.props.option.autoPlay;
        if (autoPlay) {
            setInterval(()=> {
                this.play();
            }, speed)
        }
    }

    componentDidMount(){

    }



    render() {
        let list = this.props.option.data;
        let indexNum = this.state.index;
        let imagePath = list[indexNum];
        return (
            <div className="slider-box">
                <div className="imageBox"><img src={imagePath} alt=""/></div>
                <ul className="btn-box">
                    {
                        list.map((item, index)=> {
                            return <li className={index===indexNum?"active":""} key={index}></li>
                        })
                    }
                </ul>
            </div>
        )
    }

    //定义播放函数
    play() {
        let len = this.props.option.data.length;
        let index = this.state.index;
        if (index >= len - 1) {
            this.setState({
                index: 0
            });
        } else {
            this.setState({
                index: this.state.index + 1
            });
        }

    }
}

export default Slider