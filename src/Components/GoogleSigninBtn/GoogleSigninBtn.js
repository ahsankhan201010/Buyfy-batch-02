import React from 'react'
import { connect } from 'react-redux'
import { googleSignin } from './../../Redux/auth/authActions';


const GoogleSigninBtn = ({googleSignin}) => {
    return (
        <div>
            <button onClick={googleSignin} >Signin With Google</button>
        </div>
    )
}

var actions = {
    googleSignin
}

export default connect(null,actions)(GoogleSigninBtn)
