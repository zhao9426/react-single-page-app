import React, { Component, Fragment } from 'react';
import { Router, Switch, Route, Link, NavLink, Redirect} from 'react-router-dom';
import Home from './Home';
import Dufu from './Dufu';
import LSY from './LSY';
export default class Root extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Router history={this.props.history}>
                <Fragment>
                <h1>Simple SAP</h1>
                <ul className="header">
                    <li><NavLink activeClassName="active" to={"/home"} >李白</NavLink></li>
                    <li><NavLink activeClassName="active" to={"/df"}>杜甫</NavLink></li>
                    <li><NavLink activeClassName="active" to="/lsy">李商隐</NavLink></li>
                </ul>
                <div className="content">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Redirect  from="/home" to="/"/>
                        <Route exact path="/df" component={Dufu}/>
                        <Route path="/lsy" component={LSY}/>
                    </Switch>
                
                  
                </div>
                </Fragment>
            </Router>
        );
    }
}

