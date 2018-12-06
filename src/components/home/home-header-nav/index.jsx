import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BScroll from 'better-scroll'

import HomeHeader from '../../header/home-header'
import './index.styl'

class HomeHeaderNav extends Component {
  static propTypes = {
    goodTypes: PropTypes.array.isRequired
  }
  state={
    currentIndex:0,
    isShow: false,

  }
  toggleShow=()=>{
    const show = !this.state.isShow;
    this.setState({
      isShow: show
    })
    if (!show){
      this.show= true;
    }
  }
  changeActive = (index)=>{
    this.setState({
      currentIndex: index
    })
  }
  componentDidMount(){
    this.BScroll = new BScroll(this.refs.bScroll,{
      scrollX: true
    })
  }
  componentDidUpdate(){
    if (this.show){

      this.BScroll = new BScroll(this.refs.bScroll,{
        scrollX: true
      })
      const {currentIndex} = this.state;
      const ul = this.refs.scrollUl;
      this.BScroll.scrollToElement(ul.children[currentIndex],300);
      this.show = false;
    }
  }
  render() {
    const {goodTypes} = this.props;
    const {currentIndex,isShow} = this.state;
    return (
      <div>
        {
          isShow?<div className="shade" ></div> : null
        }

        <div className="home-header">
          <HomeHeader />
          <div className="nav-wrap1" ref="bScroll">
            {
              isShow?
                <p  className="all-item">全部频道</p>
                :
                <ul className="nav" ref="scrollUl">
                  <li><a href="javascript:;" className={currentIndex===0? 'active':''} onClick={()=> this.changeActive(0)}>推荐</a></li>
                  {
                    goodTypes.map((item,index)=> <li  key={index}
                                                      onClick={()=> this.changeActive(index+1)}>
                      <a href="javascript:;" className={currentIndex===index+1 ? 'active': ''}>{item.name}</a>
                    </li>)
                  }
                  <li><a href="javascript:;"></a></li>
                </ul>
            }

          </div>
          <div className="nav-right-pull-down"  onClick={this.toggleShow}>
            <span className={isShow? 'active':''}></span>
          </div>
        {
          isShow?
            <div  className="nav-list">
              <ul className="list" >
                <li><a href="javascript:;" onClick={()=> this.changeActive(0)} className={currentIndex===0?'active':''}>推荐</a></li>
                {
                  goodTypes.map((item,index)=> <li  key={index} onClick={()=> this.changeActive(index+1)}>
                    <a href="javascript:;" className={currentIndex===index+1 ? 'active': ''}>{item.name}</a>
                  </li>)
                }
              </ul>
            </div>
          : null

        }

      </div>
      </div>
    )
  }
}

export default HomeHeaderNav
