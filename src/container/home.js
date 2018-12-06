import {connect} from 'react-redux';

import home from '../components/home';
import {getHomeData} from '../redux/action-creater';


export default connect(
    state=>({homeData:state.homeData}),
    {getHomeData}
    )(home)
