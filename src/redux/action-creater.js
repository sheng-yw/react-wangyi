import {reqDataHome, reqDataType, reqDistinctionData} from '../api'
import {HOME_DATA} from './action-types'



export const getHomeData=(cb)=>{

  return async dispatch=>{
    const {data} = await reqDataHome()
    const homeData = {
      bannerList: data.focusList,
      directSupplyList: data.tagList.filter((item,index)=> index<4),
      selectionList: data.topicList,
      newGoodsList: data.newItemNewUserList,
      popularList: data.popularItemList,
      goodTypes: data.cateList,
      policyDescList: data.policyDescList
    }
    dispatch({type:HOME_DATA, data:homeData})
    typeof cb ==='function' && cb();
  }
};
