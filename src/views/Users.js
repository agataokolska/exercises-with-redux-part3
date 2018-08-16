import React from 'react'
import { connect } from 'react-redux'

const Users = (props) => (

    <div>
        {
            props._users && props._users.results.map((user, i) => (
                <p>{user.name.first} {user.name.last}</p>
            ))
        }
    </div>
)
const mapStateToProps = state => ({
    _users: state.fetchUsers.users,
    _isUsersAreLoading: state.fetchUsers.isUsersAreLoading
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps,
    mapDispatchToProps)(Users)