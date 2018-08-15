import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import fetchUsers,{setUsersAction, usersStartedLoadingAction, usersStoppedLoadingAction} from './state/fetchUsers'

const reducer = combineReducers({
    fetchUsers
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

store.dispatch(usersStartedLoadingAction())
fetch('https://randomuser.me/api?results=10')
.then(response => response.json())
.then(data =>{
    store.dispatch(setUsersAction(data))
    store.dispatch(usersStoppedLoadingAction())
 })