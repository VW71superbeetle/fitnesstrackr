import React, {useState} from 'react';
import { GetCurrentUser, GetCurrentUsername, loginExistingUser, registerNewUser, clearCurrentUser } from '../api';

export const UsersPageModal = ({ setUser, user }) => {
    const [form, setForm] = useState({username:'robert', password:'bobbylong321'})

    const handleInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
                const res = await loginExistingUser(form.lusername, form.lpassword)
                // const user = res.user
                console.warn(res)
                console.log("LoginFile:Res", res)
                setUser(res.user)
                window.location.assign('/myroutines')
        } catch (error) {
            console.error(error)
        }
    }
    
    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        try {

            if (form.rpassword === form.rpassword2) {
                const res = await registerNewUser(form.rusername, form.rpassword)
                setUser(res.user)
                window.location.assign('/myroutines')
            }
            else {
                console.error("Passwords must match")
            }
        } catch (error) {
            console.error(error)
        }
    }

    const handleLogOutSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("clearing user")
            const res = await clearCurrentUser()
            setUser(null);
            window.location.assign('/')
        } catch (error) {
            console.error(error)
        }
    }

    return(
        <div id = "UserPage">
            { !user ? 
                (
                    <>
                        <label for="LoginModal">Login</label>
                        <div class="modal">
                            <h3>Login with an existing account</h3>
                            <form onSubmit={handleLoginSubmit}  className="loginForm">
                                <label>UserName</label>
                                    <input name="lusername" value={form.lusername} onInput={handleInput} />
                                <label>Password</label>
                                    <input name="lpassword" value={form.lpassword} onInput={handleInput} type="password"/>
                                <button type="Submit">Login</button>
                            </form>
                            <h3>Create a new account</h3>
                            <form onSubmit={handleRegisterSubmit} className="loginForm">
                                <label>UserName</label>
                                    <input name="rusername" value={form.rusername} onInput={handleInput} />
                                <label>Password</label>
                                    <input name="rpassword" value={form.rpassword} onInput={handleInput} type="password"/>
                                <label>Re-Enter Password</label>
                                    <input name="rpassword2" value={form.rpassword2} onInput={handleInput} type="password"/>
                                <button type="Submit">Create New User</button>
                            </form>
                        </div>
                    </>
                ) :
                (
                    <>
                        <h3>Welcome, {GetCurrentUsername()}</h3>
                        <form id = "LogOutFormModal" onSubmit={handleLogOutSubmit}>
                            <button type="Submit">Log Out</button>
                        </form>
                    </>
                )
            }

        </div>
    )
}

export default UsersPageModal;