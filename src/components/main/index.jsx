import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'

import Home from '../../container/home'
import Type from '../../components/type'
import Footer from './footer'

class Main extends Component {

  render() {

    return (
      <div>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/type" component={Type}/>
          <Redirect to="/home"/>
        </Switch>
        <Footer/>
      </div>
    )
  }
}

export default Main
