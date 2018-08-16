import React from 'react'
import { connect } from 'react-redux'
import {onEmailChangeAction,
    onPasswordChangeAction,
    onLoginClickAction} from '../state/auth'
import LoginByEmailAndPassword from './LoginByEmailAndPassword'

const Auth = (props) => (

    <div>
        <LoginByEmailAndPassword
        emailValue={props._emailValue}
        onEmailChange={props._onEmailChange}
        passwordValue={props._passwordValue}
        onPasswordChange={props._onPasswordChange}
        onLoginClick={props._onLoginClick}

        />
    </div>
)
const mapStateToProps = state => ({
_emailValue: state.auth.email,
_passwordValue: state.auth.password
})

const mapDispatchToProps = dispatch => ({
_onEmailChange: event => dispatch(onEmailChangeAction(event.target.value)),
_onPasswordChange: event => dispatch(onPasswordChangeAction(event.target.value)),
_onLoginClick: () => dispatch(onLoginClickAction())
})

export default connect(mapStateToProps,
    mapDispatchToProps)(Auth)