import React, {Component} from 'react';

import './index.styl'

class HomeHeader extends Component {

  render() {

    return (
        <header className="header">
          <div className="header-left">
            <h1 className="logo"></h1>
          </div>
          <div className="header-center">
            <div>
              <i className="search"></i>
              <span>搜索商品,共19661件商品</span>
            </div>
          </div>
          <div className="header-right">
            <a href="javascript:;">登录</a>
          </div>
        </header>
    )
  }
}

export default HomeHeader
