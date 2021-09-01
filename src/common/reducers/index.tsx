import { combineReducers } from 'redux';
import homeReducer from '../../containers/Home/reducers/homeReducer';

const rootReducer = combineReducers({
    issues: homeReducer
  });
  
  export type RootState = ReturnType<typeof rootReducer>;
  
  export default rootReducer;