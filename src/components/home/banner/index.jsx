import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Swiper from 'swiper'

import 'swiper/dist/css/swiper.min.css'


class Banner extends Component {
  static propTypes = {
    bannerList: PropTypes.array.isRequired
  }
  componentDidUpdate () {
      new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
        }
      });
  }
  render() {
    const {bannerList} = this.props;
    return (
      <div className="swiper-container" >
        <div className="swiper-wrapper">
          {
            bannerList.map((item,index)=>
              <div className="swiper-slide" key={item.id}>
                <a href={item.targetUrl}>
                  <img className="swiper-slide" src={item.picUrl} alt=""/>
                </a>
              </div>
            )
          }

        </div>
        <div className="swiper-pagination"></div>
      </div>
    )
  }
}

export default Banner
