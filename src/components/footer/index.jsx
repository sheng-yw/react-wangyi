import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'

import './index.styl'

class Footer extends Component {
/*  static propTypes={
    pathUrl: PropTypes.string.isRequired
  }*/

  render() {
    const {pathUrl} = this.props;
    return (

      <div className="footer">
        <ul className="footer-nav">
          <li>
            <NavLink  to="/home" className="home">
              <i ></i>
              <span>首页</span>
            </NavLink>
        </li>
          <li>
            <NavLink  to="/type" className="type" >
              <i ></i>
              <span>分类</span>
            </NavLink>
          </li>
          <li>
              <NavLink  to="/distinction" className="distinction">
              <i ></i>
              <span>识物</span>
              </NavLink>
          </li>
          <li>
              <NavLink  to="/cart"  className="cart">
                <i ></i>
                <span>购物车</span>
              </NavLink>
          </li>
          <li>
              <NavLink  to="/personal" className="personal">
                <i></i>
                <span>个人</span>
              </NavLink>
          </li>
        </ul>
      </div>
    )
  }
}

export default Footer
