import React, {Component} from 'react';
import BScroll from 'better-scroll'

import HomeHeaderNav from '../home/home-header-nav'
import Banner from './banner'
import SloganInfo from './slogan-info'
import Split from '../split'
import UserWelfare from './user-welfare'
import DirectSupply from './direct-supply'
import NewGoods from './new-goods'
import GoodsNavList from './goods-nav-list'

import './index.styl'

class Home extends Component {

  componentDidMount(){
    this.props.getHomeData(()=>{
      new BScroll(this.refs.homeWrap,{
        scrollY: true
      })
    });
  }

  render() {
    const {goodTypes, bannerList,policyDescList,directSupplyList,newGoodsList} = this.props.homeData;
    return (
      <div>
        <HomeHeaderNav goodTypes={goodTypes}/>
        <section className="wrap" ref="homeWrap">
          <div className="container">
            <Banner bannerList={bannerList}/>
            <SloganInfo policyDescList={policyDescList}/>
            <Split/>
            <UserWelfare/>
            <Split/>
            <DirectSupply directSupplyList={directSupplyList}/>
            <Split/>
            <NewGoods />
            <GoodsNavList goodsNavList={newGoodsList} type="newGoodsList"/>
            <Split/>

          </div>
        </section>
      </div>
    )
  }
}

export default Home
