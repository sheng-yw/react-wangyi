import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './index.styl'
class DirectSupply extends Component {
  static propTypes = {
    directSupplyList: PropTypes.array.isRequired
  }
  render() {
    const {directSupplyList} = this.props;
    return (
      <div className="direct-supply">
        <div className="direct-title">
          <p>品牌制造商直供</p>
          <span>更多></span>
        </div>
        <div className="direct-list">
          {
            directSupplyList.map((item)=>
              <a className="direct-item" href="javascript:;" key={item.id}
                 style={{backgroundImage: 'url('+item.picUrl+')'}}>
                <p>{item.name}</p>
                <span>{item.floorPrice}元起</span>
              </a>
            )
          }

        </div>
      </div>
    )
  }
}

export default DirectSupply
