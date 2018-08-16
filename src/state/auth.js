import { auth as firebaseAuth } from '../firebaseConfig'

const EMAIL_CHANGE = 'auth/EMAIL_CHANGE'
const PASSWORD_CHANGE = 'auth/PASSWORD_CHANGE'
const SET_USER = 'auth/SET_USER'

export const onEmailChangeAction = value => ({ type: EMAIL_CHANGE, value })
export const onPasswordChangeAction = value => ({ type: PASSWORD_CHANGE, value })
export const setUserAction = user => ({ type: SET_USER, user })

export const initAuthStateListening = () => (dispatch, getState) => {
    firebaseAuth.onAuthStateChanged(user => {
        if (user) {
           //here is a good place to dispatch after login actions
        } else {
            //here is good place to dispatch after logOut actions
        }
        dispatch(setUserAction(user)) //user is null if user is logged out
    })
}

export const onLoginClickAction = () => (dispatch, getState) => {
    const state = getState()

    firebaseAuth.signInWithEmailAndPassword(
        state.auth.email,
        state.auth.password)
        .then(() => console.log('LOGIN OK'))
        .catch(() => console.log('LOGIN ERROR'))
}

const initialState = {
    email: '',
    password: '',
    user: null

}

export default (state = initialState, action) => {
    switch (action.type) {
        case EMAIL_CHANGE:
            return {
                ...state,
                email: action.value
            }
        case PASSWORD_CHANGE:
            return {
                ...state,
                password: action.value
            }
        case SET_USER:
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}