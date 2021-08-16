import React, { useState } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import { Login } from "./Login";
import { Register } from "./Register";
import { LoggedInUser } from "./LoggedInUser"


export const Header = ({  setUser, user }) => {

      return (
            <div id="title">
                <h1>
                    YourFitnessTracker
                </h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/routines">Check out the Routines</NavLink>
            <NavLink to="/myroutines">Work on my Routines</NavLink>
            <NavLink to="/activities">Activities Browser</NavLink>
            <Register setUser={setUser} />
            <Login setUser={setUser} user ={user}/>
            <LoggedInUser setUser={setUser} user ={user}/>
            {console.log(user)}
            {user ? "LOGGED IN": "Nope"}
        </div>
      );

  };

export default Header;