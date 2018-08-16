import React from 'react'
import { connect } from 'react-redux'
import {onEmailChangeAction,
    onPasswordChangeAction,
    onLoginClickAction} from '../state/auth'

const Auth = (props) => (

    <div>
        <div>
            <input type="email" 
            onChange={props._onEmailChange}
            />
        </div>
        <div>
            <input type="password" 
            onChange={props._onPasswordChange}
            />
        </div>
        <div>
            <button
            oncClick={props._onLoginClick}>
                LOGIN!
            </button>
        </div>
    </div>
)
const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
_onEmailChange: event => dispatch(onEmailChangeAction(event.target.value)),
_onPasswordChange: event => dispatch(onPasswordChangeAction(event.target.value)),
_onLoginClick: () => dispatch(onLoginClickAction())
})

export default connect(mapStateToProps,
    mapDispatchToProps)(Auth)