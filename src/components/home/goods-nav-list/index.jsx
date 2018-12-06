import React, {Component} from 'react';
import PropTypes from 'prop-types'
import BScroll from 'better-scroll'

import './index.styl'
class GoodsNavList extends Component {
  static propTypes = {
    goodsNavList: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired
  }
  componentDidUpdate(){
    new BScroll(this.refs[this.props.type],{
      scrollX: true
    })
  }
  render() {
    const {goodsNavList,type} = this.props;
    return (
      <div className="goods-nav" ref={type}>
        <ul className="goods-list" >
          {
            goodsNavList.map((good,index)=>
              <li className="goods-item"  key={index}>
                <a href="javascript;">
                  <div>
                    <img src={good.primaryPicUrl} alt=""/>
                  </div>
                  <p className="good-name">{good.name}</p>
                  <p className="good-info">{good.simpleDesc}</p>
                  <span className="good-price">¥{good.retailPrice}</span>
                </a>
              </li>
            )
          }
          <li className="goods-item">
            <div>
              <a href="javascript;">
                查看全部
              </a>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default GoodsNavList
