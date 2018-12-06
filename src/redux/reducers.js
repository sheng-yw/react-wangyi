import {combineReducers} from 'redux';

import {HOME_DATA} from './action-types';

const init_home_Data = {
  bannerList: [],
  directSupplyList: [],
  selectionList: [],
  newGoodsList: [],
  popularList: [],
  goodTypes: [],
  policyDescList: []
};

function homeData(preState=init_home_Data, action){
  switch (action.type) {
    case HOME_DATA:
      return action.data
    default :
      return preState
  }
}
function home1(preState={}, action){
  switch (action.type) {
    case HOME_DATA:
      return action.data
    default :
      return preState
  }
}
export default combineReducers({
  homeData,
  home1
})
