import React, {useState} from 'react'
import { connect } from 'react-redux';
import { signin } from './../../Redux/auth/authActions';

const SigninForm = ({signin}) => {
    var [email, setEmail] = useState("");
    var [password, setPassword] = useState("");
    var handleFormSumit = (e) => {
        e.preventDefault();
        var cred = {
            email, password
        }
        signin(cred)
    }
    return (
        <div>
            <form onSubmit={handleFormSumit}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="email"/>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="password"/>
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}

var actions = {
    signin
}

export default connect(null,actions)(SigninForm)
