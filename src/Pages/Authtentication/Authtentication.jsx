import React from 'react'
import SigninForm from '../../Components/SigninForm/SigninForm'
import SignoutBtn from '../../Components/SignoutBtn/SignoutBtn'
import SignupForm from '../../Components/SignupForm/SignupForm'
import GoogleSigninBtn from '../../Components/GoogleSigninBtn/GoogleSigninBtn'

const Authtentication = () => {
    return (
        <div>
            <h1>Authtentication page</h1>
            <SignupForm/>
            <SigninForm/>
            <GoogleSigninBtn/>
            <SignoutBtn/>
        </div>
    )
}

export default Authtentication
