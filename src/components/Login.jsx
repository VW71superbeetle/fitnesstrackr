
import React, {useState} from 'react';
import { loginExistingUser, storeCurrentUser } from '../api';

export const Login = ({setUser, user}) => {
    const [form, setForm] = useState({username:'robert', password:'bobbylong321'})

    const handleInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
                const res = await loginExistingUser(form.username, form.password)
                // const user = res.user
                console.warn(res)
                console.log("LoginFile:Res", res)
                console.log("LoginFile:user", user)
                setUser(user)

                
        } catch (error) {
            console.error(error)
        }
    }


    // console.log(form)

    return(
        <form onSubmit={handleSubmit}>
            <h1>user12345</h1>
            <label>UserName</label>
                <input name="username" value={form.username} onInput={handleInput} />
            <label>Password</label>
                <input name="password" value={form.password} onInput={handleInput} type="password"/>
            <button type="Submit">Login</button>
        </form>
    )
}

export default Login;