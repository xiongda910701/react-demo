import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Home from  '../containers/home/index';
import List from  '../containers/list/index';
import Detail from  '../containers/detail/index';
import ShoppingCar from  '../containers/shoppingCar/index';
import Person from  '../containers/person/index';
import Login from  '../containers/login/index';
import Search from  '../containers/search/index';
import SelectCity from  '../containers/selectCity/index';

class RouteMap extends React.Component{
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/home" exact component={Home}></Route>
                    <Route path="/list" exact component={List}></Route>
                    <Route path="/detail" exact component={Detail}></Route>
                    <Route path="/cart" exact component={ShoppingCar}></Route>
                    <Route path="/person" exact component={Person}></Route>
                    <Route path="/login" exact component={Login}></Route>
                    <Route path="/search" exact component={Search}></Route>
                    <Route path="/city" exact component={SelectCity}></Route>
                </Switch>
            </Router>
        )
    }
}

export default RouteMap