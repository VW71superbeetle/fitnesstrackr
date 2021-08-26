import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, BrowserRouter , NavLink} from 'react-router-dom'
import {
    healthCheck, 
    GetAllRoutines, 
    GetRoutinesByUser, 
    GetRoutinesByActivity, 
    GetAllActivities, 
    GetCurrentUser, 
    GetCurrentUserID, 
    GetCurrentUsername, 
    GetLoggedInUser
} from './api'
import {Routines, Header, NavBar, Activities, MyRoutines, UsersPage} from './components';


export const App = () => {
    const [user, setUser] = useState(GetCurrentUser());
    const [routines, setRoutines] = useState([]);
    const [myroutines, setMyRoutines] = useState([]);
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        GetAllRoutines()
            .then((routines) => {
                setRoutines(routines)
            })
            .catch((error) => {
                throw (error, "Error Getting all Routines");
            }, []);

        GetAllActivities()
            .then((activities) => {
                setActivities(activities)
            })
            .catch((error) => {
                throw (error, "Error Getting all Activities");
            }, []);

        GetRoutinesByUser(GetCurrentUsername())
            .then(myroutines => {
                setMyRoutines(myroutines)
            })
            .catch((error) => {
                throw (error, "Error Getting my Routines");
            }, []);

        // GetCurrentUser()
        //     .then(user => {
        //         setUser(user)
        //     })
        //     .catch((error) => {
        //         throw (error, "Error Setting User");
        //     }, []);
    }, []);

    // useEffect(() => {

    //     if (!userID) {
    //         setUserID()
    //         setUserName()
    //         setMyRoutines([]);
    //         return;
    //     }

    //     GetCurrentUserID()
    //         .then(userID => {
    //             setUserID(userID)
    //         })
    //         .catch((error) => {
    //             throw (error, "Error Getting UserID");
    //         }, []);

    //         GetRoutinesByUser(UserID)
    //         .then(myroutines => {
    //             setMyRoutines(myroutines)
    //         })
    //         .catch((error) => {
    //             throw (error, "Error Getting my Routines");
    //         }, []);

    //     // GetLoggedInUser()
    //     //     .then((user) => {
    //     //         setUser(user)
    //     //     })
    //     //     .catch((error) => {
    //     //         throw (error, "Error Setting User");
    //     //     }, []);
    // }, [userID]);

    return (
        <>
            <Router>
                <div id = "app">
                    <Header user={user}/>         
                    <UsersPage setUser={setUser} user={user}/>
                    <Switch>
                        <Route path = "/routines">
                            <Routines 
                                routines={routines}/>
                        </Route>
                        <Route path = "/myroutines">
                            <MyRoutines 
                                myroutines={myroutines} setMyRoutines = {setMyRoutines}/>
                        </Route>
                        <Route path = "/activities">
                            <Activities 
                                activities={activities}/>
                        </Route>
                        <Route exact path="/">
                            <div id="dashboard">
                            </div>
                        </Route>
                        <Redirect to="/" />
                    </Switch>
                </div>
            </Router>
        </>
    )
};