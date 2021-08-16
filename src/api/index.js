import axios from "axios";

const apiURL = "https://guarded-sands-24074.herokuapp.com/api";
// const apiURL ="https://fitnesstrac-kr.herokuapp.com/api"

const getHeaders = () => {
    return {
        Authorization: `Bearer ${getCurrentToken()}`
    }
}

// Auth Functions
export function storeCurrentUser(data) {
    console.log("USERObj: >> ", data.user)
    console.log("USERID: >> ", data.user.id)
    console.log("USERName: >> ", data.user.username)
    console.log("TOKENObj: >> ", data.token)
    localStorage.setItem('currentUser', JSON.stringify(data.user));
    localStorage.setItem('currentUsername', JSON.stringify(data.user.username));
    localStorage.setItem('currentUserID', JSON.stringify(data.user.id));
    localStorage.setItem('currentToken', JSON.stringify(data.token));
}

export function clearCurrentUser() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentToken');
}

export function GetCurrentUser() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    console.log("GetCurrentUser() >>>", user)
    return user;
}

export function GetCurrentUserID() {
    const userID = JSON.parse(localStorage.getItem('currentUserID'));
    console.log("GetCurrentUserID() >>>", userID)
    return userID;
}
  
export function getCurrentToken() {
    const user = JSON.parse(localStorage.getItem('currentToken'));
    return token;
}


// Site Check
export async function healthCheck() {
    const URL = `${apiURL}/health`
    try {
        const { data } =  await axios.get(URL);
        return data;
    } catch (error) {
        throw error
    }
};

// User functions

export async function registerNewUser( username, password) {
    const URL = `${apiURL}/users/register`
    try {
        const {data} = await axios.post(`${URL}`, {
            username,
            password
        })
        console.log("RETURNED REGISTER DATA ===>>>>",data)
        storeCurrentUser(data)
        return data.user
    } catch (error) {
        
    }
};

export async function loginExistingUser(username, password) {
    const URL = `${apiURL}/users/login`
    try {
        const {data} =  await axios.post(`${URL}`, {
            username,
            password
        })
        console.log("RETURNED LOGIN DATA ===>>>>",data)
        storeCurrentUser(data)
        return data
    } catch (error) {
        
    }
};

export async function GetLoggedInUser() {
    const URL = `${apiURL}/users/me`
    try {
        const {data} =  await axios.get(`${URL}`)
        console.log(data)
        return data
    } catch (error) {
        
    }
}

// Activities

export async function GetAllActivities() {
    const URL = `${apiURL}/activities`
    try {
        const {data} =  await axios.get(`${URL}`)
        // console.log(data)
        return data;
    } catch (error) {
        
    }
}

export async function CreateNewActivity(name, description) {
    const URL = `${apiURL}/activities`
    try {
        const {data} = await axios.post(`${URL}`, {
            name:name,
            description:description
        })
        console.log(data)
        return data
    } catch (error) {
        
    }
};

export async function UpdateActivity(activityID, name, description) {
    const URL = `${apiURL}/activities/${activityID}`
    try {
        const {data} = await axios.patch(`${URL}`, {
            name:name,
            description:description
        })
        console.log(data)
        return data
    } catch (error) {
        
    }
};

// Routines

export async function GetAllRoutines() {
    const URL = `${apiURL}/routines`
    try {
        const {data} = await axios.get(`${URL}`)
        // console.log(data)
        return data;
    } catch (error) {
        
    }
}

export async function GetRoutinesByUser(user) {
    const URL = `${apiURL}/users/${user}/routines`
    try {
        const {data} = await axios.get(`${URL}`,getHeaders())
        console.log("RoutinesByUser",user,"DATA:>>>",data)
        return data
    } catch (error) {
        
    }
}

export async function GetRoutinesByActivity(ActivityID) {
    const URL = `${apiURL}/activities/${ActivityID}/routines`
    try {
        const {data} = await axios.get(`${URL}`)
        console.log(data)
        return data
    } catch (error) {
        
    }
}

export async function CreateNewRoutine(name, goal, isPublic) {
    const URL = `${apiURL}/routines`
    try {
        const {data} = await axios.post(`${URL}`, {
            name:name,
            goal:goal,
            isPublic:isPublic
        })
        console.log(data)
        return data
    } catch (error) {
        
    }
};

export async function UpdateRoutine(routineID, name, goal, isPublic) {
    const URL = `${apiURL}/activities/${routineID}`
    try {
        const {data} = await axios.patch(`${URL}`, {
            name:name,
            goal:goal,
            isPublic:isPublic
        })
        console.log(data)
        return data
    } catch (error) {
        
    }
};

export async function DeleteRoutine(routineID) {
    const URL = `${apiURL}/routines/${routineID}`
    try {
        const {data} = await axios.delete(`${URL}`)
        console.log(data)
        return data
    } catch (error) {
        
    }
};

// Routine Activities
export async function CreateNewRoutineActivity(routineID, count, duration) {
    const URL = `${apiURL}/routines/${routineID}/activities`
    try {
        const {data} = await axios.post(`${URL}`, {
            count:count,
            duration:duration
        })
        console.log(data)
        return data
    } catch (error) {
        
    }
};

export async function UpdateRoutineActivity(routineActivityID, count, duration) {
    const URL = `${apiURL}/routine_activities/${routineActivityID}`
    try {
        const {data} = await axios.patch(`${URL}`, {
            count:count,
            duration:duration
        })
        console.log(data)
        return data
    } catch (error) {
        
    }
};

export async function DeleteRoutineActivity(routineActivityID) {
    const URL = `${apiURL}/routine_activities/${routineActivityID}`
    try {
        const {data} = await axios.delete(`${URL}`, {
            count:count,
            duration:duration
        })
        console.log(data)
        return data
    } catch (error) {
        
    }
};