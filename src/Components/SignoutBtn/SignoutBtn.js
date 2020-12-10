import React from 'react'
import { connect } from 'react-redux'
import { signout } from './../../Redux/auth/authActions';

const SignoutBtn = ({signout}) => {
    return (
        <div>
            <button onClick={signout}>Sign out</button>
        </div>
    )
}

var actions = {
    signout
}

export default connect(null,actions)(SignoutBtn)
