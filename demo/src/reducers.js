import { combineReducers } from 'redux'
import { filterReducer } from '../../src'
import RankParamReducer from '../../src/store/RankParamReducer';


const reducers = combineReducers({
  filters: filterReducer,
  rankparam: RankParamReducer
  
})

export default reducers
