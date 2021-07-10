import {loadingReducer} from './loadingReducer';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {themeReducer} from '../../h12/bll/themeReducer';
import thunk from 'redux-thunk'
import {checkboxReducer} from '../../h13/bll/checkboxReducer';

const reducers = combineReducers({
    loadingState: loadingReducer,
    themeState: themeReducer,
    checkboxState: checkboxReducer,

});

const store = createStore(reducers, applyMiddleware(thunk));

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store; // for dev
