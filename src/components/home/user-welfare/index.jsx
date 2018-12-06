import React, {Component} from 'react';

import './index.styl'
class UserWelfare extends Component {

  render() {

    return (
      <div className="new-user-welfare">
        <h2>— 新人专享礼 —</h2>
        <div className="welfare-wrap">
          <div className="welfare-left">
            <p>新人专享礼包</p>
            <div>
              <a href="javascript:;">
                <img src="http://yanxuan.nosdn.127.net/d074d02fb86bff9bfbf4fa3010d1e1e6.png" alt=""/>
              </a>
            </div>
          </div>
          <div className="welfare-right">
            <div className="welfare-r-t">
              <a href="javascript:;">
                <p>福利社 <br/>
                  <span>今日特价</span>
                </p>
                <img src="http://yanxuan.nosdn.127.net/995c238dea8fea5e9cd92d07ebf73856.png" alt=""/>
                  <div className="discounts">
                    <p>￥54 <br/>￥68</p>
                  </div>
              </a>
            </div>
            <div className="welfare-split"></div>
            <div className="welfare-r-b">
              <a href="javascript:;">
                <p>新人拼团 <br/>
                  <span>1元起包邮</span>
                </p>
                <img src="http://yanxuan.nosdn.127.net/d59eacdaaf45cff38c59ecae3845b8d6.png" alt=""/>
                  <div className="discounts">
                    <p>￥54 <br/>￥68</p>
                  </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserWelfare
