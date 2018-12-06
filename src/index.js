import React from "react";
import ReactDom from 'react-dom';
import {HashRouter, Route, Switch, Router} from "react-router-dom";
import {Provider} from 'react-redux'

import Main from './components/main'
import store from './redux/store'

import './mock/mock'

//引入五个一级路由


// 第一个参数为虚拟dom对象 ()包裹，第二个参数为渲染的页面区域
ReactDom.render((
  <div>

    <Provider store={store}>
      <HashRouter>
        <Switch>
          {/*<Route  component={home}/>*/}
          <Route  component={Main}/>
        </Switch>
      </HashRouter>
    </Provider>
  </div>

),document.getElementById('root'))
