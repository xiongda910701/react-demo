import React from 'react'
import PureRenderMixin  from 'react-addons-pure-render-mixin'
import HomeHeader from '././../../components/homeHeader/index'
import HomeAd from './pages/ad'
import TabFooter from '../../components/tabFooter/index'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <HomeHeader/>
                <HomeAd/>
                <TabFooter/>
            </div>
        )
    }
}

export default Home