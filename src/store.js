import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import subscribeActionMiddleware from 'redux-subscribe-action'
import rootReducer from './reducers'

const initialState = {}

const middleware = [thunk, subscribeActionMiddleware]

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store