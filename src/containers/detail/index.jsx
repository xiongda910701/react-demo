import React from 'react'
import queryString from 'query-string';

class Detail extends React.Component {
    constructor(props){
        super(props);
        this.state={
            userInfo:{}
        }
    }
    componentWillMount(){
        var obj=queryString.parse(this.props.location.search);
        console.log(obj);
        this.setState({
             userInfo:{
                 name:obj.name,
                 age:obj.age,
                 sex:obj.sex
             }
        });

    }
    render() {
        return (
            <div className="detailPage">
                <h2>Detail Page</h2>
                <span>姓名：{this.state.userInfo.name}</span> <br/>
                <span>年龄：{this.state.userInfo.age}</span> <br/>
                <span>性别：{this.state.userInfo.sex}</span> <br/>
            </div>
        )
    }
}




export default Detail