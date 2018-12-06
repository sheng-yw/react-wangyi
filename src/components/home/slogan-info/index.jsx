import React, {Component} from 'react';
import PropTypes from 'prop-types'

import './index.styl'

class SloganInfo extends Component {
  static propTypes = {
    policyDescList: PropTypes.array.isRequired
  }

  render() {
    const {policyDescList} = this.props;
    return (
      <div className="wy-slogan-info">
        <ul>
          {
            policyDescList.map((item,index)=>
              <li  key={index}>
                <a href="javascript:;">
                  <i></i>
                  <span>{item.desc}</span>
                </a>
              </li>
            )
          }

      </ul>
  </div>
    )
  }
}

export default SloganInfo
