import React, { useState } from "react";
import {NavBar} from './';
export const Header = ({ setUser, user }) => {

      return (
            <header id="title">
                <h1>
                    YourFitnessTracker
                </h1>
                <NavBar user={user} setUser={setUser}/>   
            </header>
      );

  };

export default Header;