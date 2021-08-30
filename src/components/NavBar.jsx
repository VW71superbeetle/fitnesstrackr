import React from "react";
import { NavLink } from "react-router-dom";
import { GetCurrentUsername, clearCurrentUser} from '../api';
import {UsersPageModal} from './'


export const NavBar = ({ user, setUser }) => {
    
    const handleLogOutSubmit= async (e) => {
        e.preventDefault();
        try {
            const res = await clearCurrentUser()
            setUser(null);
            window.location.assign('/')
        } catch (error) {
            console.error(error)
        }
    }
      return (
            <div id="NavBar" >
                <div className="menu">
                    <NavLink to="/#" className="button">Home</NavLink>
                    <NavLink to="/routines" className="button">Check out the Routines </NavLink>
                    <NavLink to="/activities" className="button">Activities Browser </NavLink>
                    { user ? (
                            <>
                                <NavLink to="/myroutines" className="button">Work on my Routines </NavLink> 
                                <h3>Welcome, {GetCurrentUsername()}!</h3>
                                <form id = "LogOutNav" onSubmit={handleLogOutSubmit}>
                                    <button className="button" type="Submit">Log Out</button>
                                </form>
                            </>
                        ) 
                        : 
                            <button className="button">Login</button>
                    }
                </div>
            </div>
      );
  };

export default NavBar;


