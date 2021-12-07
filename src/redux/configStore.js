import { combineReducers, createStore } from 'redux';
import BaiTapGameBauCuaReducer from './reducers/BaiTapGameBauCuaReducer';

//store tổng ứng dụng
const rootReducer = combineReducers({
    //Nơi sẽ chứa các reducer cho nghiệp vụ (store con)
    BaiTapGameBauCuaReducer

})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());