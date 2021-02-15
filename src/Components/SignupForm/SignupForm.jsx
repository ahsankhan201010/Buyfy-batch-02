import React, {useState} from 'react'
import { connect } from 'react-redux';
import { signup } from './../../Redux/auth/authActions';

const SignupForm = ({signup}) => {
    var [fullName, setFullName] = useState("");
    var [email, setEmail] = useState("");
    var [password, setPassword] = useState("");
    var handleFormSumit = (e) => {
        e.preventDefault();
        var cred = {
            fullName,email,password
        }
        signup(cred)
    }
    return (
        <div>
            <form onSubmit={handleFormSumit}>
                <input value={fullName} onChange={(e) => setFullName(e.target.value)} type="text" placeholder="full name" />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="email"/>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="password"/>
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}

var actions = {
    signup
}

export default connect(null,actions)(SignupForm)
