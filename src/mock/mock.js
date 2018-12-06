import Mock from 'mockjs'

import datahome from './datas/datahome.json'
import datanav from './datas/datanav.json'
import datatopic from './datas/datatopic.json'

Mock.mock('/dataHome',{code:0, data: datahome })
Mock.mock('/dataType',{code:0, data: datanav })
Mock.mock('/dataDistinction',{code:0, data: datatopic })

