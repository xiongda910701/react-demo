import React from 'react'
import queryString from 'query-string';
import TabFooter from '../../components/tabFooter/index'
import './index.less'
class List extends React.Component {
    render() {
        return (
            <div>
                <h2>List Page</h2>
                <ul className="list">
                    <li className="item" onClick={this.goDetail.bind(this,1)}>1</li>
                    <li className="item" onClick={this.goDetail.bind(this,2)}>2</li>
                    <li className="item" onClick={this.goDetail.bind(this,3)}>3</li>
                    <li className="item" onClick={this.goDetail.bind(this,4)}>4</li>
                    <li className="item" onClick={this.goDetail.bind(this,5)}>5</li>
                </ul>
                <TabFooter/>
            </div>
        )
    }

    goDetail(id) {
        console.log(id);
        var obj={name:"aa",age:20,sex:"boy"};
        this.props.history.push("/detail?"+queryString.stringify(obj));
    }
}

export default List