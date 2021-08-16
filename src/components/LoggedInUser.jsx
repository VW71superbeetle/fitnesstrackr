
import React, {useState} from 'react';
import { GetLoggedInUser } from '../api';
import { getCurrentUser, clearCurrentUser } from '../api';

export const LoggedInUser = ({setUser, user}) => {
    const [form, setForm] = useState({username:'', password:''})

    const handleInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await clearCurrentUser()
            setUser(null)
        } catch (error) {
            console.error(error)
        }
    }


    // console.log(form)

    return(
        <form onSubmit={handleSubmit}>
            <h1>Welcome, {GetLoggedInUser}</h1>
            <button type="Submit">Log Out.</button>
        </form>
    )
}