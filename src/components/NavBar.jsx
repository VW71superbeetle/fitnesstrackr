import React from "react";
import { NavLink } from "react-router-dom";
import { GetCurrentUsername} from '../api';

export const NavBar = ({ user }) => {

      return (
            <>
                { user ? 
                    <h3>Welcome, {GetCurrentUsername()}</h3>
                    : ""
                }
                <div id="NavBar" className="menu">
                    <NavLink to="/" className="button">Home</NavLink>
                    <NavLink to="/routines" className="button">Check out the Routines </NavLink>
                    <NavLink to="/activities" className="button">Activities Browser </NavLink>
                    { user ? (
                            <>
                                <NavLink to="/myroutines" className="button">Work on my Routines </NavLink> 
                                <NavLink to="/" className="button">Logout</NavLink>
                            </>
                        ) 
                        : <NavLink to="/" className="button">Login</NavLink>
                    }
                </div>
            </>
      );
  };

export default NavBar;


