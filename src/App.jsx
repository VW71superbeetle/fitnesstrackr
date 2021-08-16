import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, BrowserRouter , NavLink} from 'react-router-dom'
import {healthCheck, GetAllRoutines, GetRoutinesByUser, GetRoutinesByActivity, GetAllActivities, GetCurrentUser, GetLoggedInUser} from './api'
import {Register, Routines, Header, Activities, LoggedInUser, MyRoutines} from './components';


export const App = () => {
    const [user, setUser] = useState(GetCurrentUser());
    const [userID, setUserID] = useState(GetCurrentUser());
    const [routines, setRoutines] = useState([]);
    const [myroutines, setMyRoutines] = useState([]);
    const [activities, setActivities] = useState([]);

    // const handleLogout = () => setUser();

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

        GetLoggedInUser()
            .then(user => {
                setUser(user)
            })
            .catch((error) => {
                throw (error, "Error Setting User");
            }, []);
    }, []);

    useEffect(() => {

        if (!user) {
            return;
        }
        GetCurrentUserID()
            .then(userID => {
                setUserID(userID)
            })
            .catch((error) => {
                throw (error, "Error Getting UserID");
            }, []);

            GetRoutinesByUser(UserID)
            .then(myroutines => {
                setMyRoutines(myroutines)
            })
            .catch((error) => {
                throw (error, "Error Getting my Routines");
            }, []);

        // GetLoggedInUser()
        //     .then((user) => {
        //         setUser(user)
        //     })
        //     .catch((error) => {
        //         throw (error, "Error Setting User");
        //     }, []);
    }, [user]);

    return (
        <Router>
            <div id = "app">
                <Header setUser={setUser} user={user}/>         
            </div>
            {/* {user} ? */}
            {/* <LoggedInUser /> :  */}
            
            <h1> {user}</h1>
            <Switch>
                <Route path = "/routines">
                    <Routines 
                        routines={routines}/>
                </Route>
                <Route path = "/myroutines">
                    <MyRoutines 
                        myroutines={myroutines}/>
                </Route>
                <Route path = "/activities">
                    <Activities 
                        activities={activities}/>
                </Route>
            </Switch>
        </Router>
    )
};