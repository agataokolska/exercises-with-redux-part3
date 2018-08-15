import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import fetchUsers from './state/fetchUsers'

const reducer = combineReducers({
    fetchUsers
})

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)