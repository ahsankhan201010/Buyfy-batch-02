import React from 'react'
import SigninForm from '../../Components/SigninForm/SigninForm'
import SignoutBtn from '../../Components/SignoutBtn/SignoutBtn'
import SignupForm from '../../Components/SignupForm/SignupForm'

const Authtentication = () => {
    return (
        <div>
            <h1>Authtentication page</h1>
            <SignupForm/>
            <SigninForm/>
            <SignoutBtn/>
        </div>
    )
}

export default Authtentication
