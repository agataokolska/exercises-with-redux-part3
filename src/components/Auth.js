import React from 'react'
import { connect } from 'react-redux'

const Auth = (props) => (

    <div>
        <div>
            <input type="email" 
            onChange={()=>{}}
            />
        </div>
        <div>
            <input type="password" 
            onChange={()=>{}}
            />
        </div>
        <div>
            <button>
                LOGIN!
            </button>
        </div>
    </div>
)
const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
_onEmailChange = () => dispatch(onEmailChangeAction()),
_onPasswordChange = () => dispatch(onPasswordChangeAction())
})

export default connect(mapStateToProps,
    mapDispatchToProps)(Users)