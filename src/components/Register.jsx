
import React, {useState} from 'react';
import { registerNewUser } from '../api';

export const Register = ({setUser}) => {
    const [form, setForm] = useState({username:'', password:''})

    const handleInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            if (form.password === form.password2) {
                const res = await registerNewUser(form.username, form.password)
                // console.warn(res)
                setUser(res.user)
            }
            else {
                console.error("Passwords must match")
            }
        } catch (error) {
            console.error(error)
        }
    }


    // console.log(form)

    return(
        <form onSubmit={handleSubmit}>
            <label>UserName</label>
                <input name="username" value={form.username} onInput={handleInput} />
            <label>Password</label>
                <input name="password" value={form.password} onInput={handleInput} type="password"/>
            <label>Re-Enter Password</label>
                <input name="password2" value={form.password2} onInput={handleInput} type="password"/>
            <button type="Submit">Create New User</button>
        </form>
    )
}