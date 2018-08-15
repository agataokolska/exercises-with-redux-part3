import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const reducers = combineReducers({
    //TODO put reducers here
})

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)