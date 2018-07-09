import React from 'react'
import { withRouter } from 'react-router-dom'
import '../../styles/index.less'
import './index.less'
import * as Icon from '../../utils/icon';

class TabFooter extends React.Component {
    constructor(props) {
        super(props);
        this.pageGo=this.pageGo.bind(this);
        this.state={
            pageInfo:[
                {pageUrl:"home",text:"首页",isActive:false,icon:Icon.HOME_ICON,icon_select:Icon.HOME_ICON_ACTIVE},
                {pageUrl:"list",text:"分类",isActive:false,icon:Icon.SORT_ICON,icon_select:Icon.SORT_ICON_ACTIVE},
                {pageUrl:"cart",text:"购物车",isActive:false,icon:Icon.CART_ICON,icon_select:Icon.CART_ICON_ACTIVE},
                {pageUrl:"person",text:"我的",isActive:false,icon:Icon.PERSON_ICON,icon_select:Icon.PERSON_ICON_ACTIVE}
            ]
        }
    }

    componentDidMount() {
        //拿到当前页面的pageUrl，循环state中的pageInfo，把当前页的isActive设置为true
        let currentPage =window.location.pathname.replace("/","");
        let data=this.state.pageInfo;
        data.forEach((item,index)=>{
              item.isActive=false;
              if(item.pageUrl===currentPage){
                  data[index].isActive=true;
                  this.setState({
                      pageInfo: data
                    });
              }
        })
    }

    render() {
        let data=this.state.pageInfo;
        let ClassName="";
        let imgPath="";
        return (
            <ul className="tab_footer_box">
                {
                    data.map((item,index)=>{
                        if(item.isActive){
                            ClassName="selected";
                            imgPath=item.icon_select
                        }else{
                            ClassName="";
                            imgPath=item.icon
                        }
                        return(
                            <li className={ClassName} key={index} data-to={item.pageUrl} onClick={this.pageGo}>
                                <img src={imgPath} alt=""/>
                                <p>{item.text}</p>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    //定义点击跳转页面函数
    pageGo (event){
        let page=event.currentTarget.getAttribute("data-to");
        this.props.history.push(page);
    }
}

export default withRouter(TabFooter)






