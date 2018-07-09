import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import PureRenderMixin  from 'react-addons-pure-render-mixin'
import './index.less'
import * as ICON from '../../utils/icon'

class HomeHeader extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="home-header-box">
                <Link to="./city">
                    <span>杭州</span>
                    <img src={ ICON.DOWN } alt=""/>
                </Link>
                <input type="text" placeholder="搜索" onClick={this.goPage.bind(this)}/>
            </div>
        )
    }
    goPage(){
        this.props.history.push('/search');
    }
}

export default withRouter(HomeHeader)