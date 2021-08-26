import React from 'react';
import {CreateRoutine} from './index'
import {GetRoutinesByUser,GetCurrentUsername} from '../api'

const MyRoutines = ({myroutines, setMyRoutines}) => {
    // console.log("MYROUTINES>>>>>", GetRoutinesByUser(GetCurrentUsername()))
    return (
        <>
            <div className = "Routines">
                <h1>My Routines</h1>
                {/* {console.log("MYRoutines>>>>", myroutines)} */}
                
                {myroutines.map(({id, creatorId ,creatorName, goal, isPublic=true ,name, activities }) => (
                    <div className="RoutineCard card" key={id}> 
                        <h3>Routine: {name} <em>Created by {creatorName}: ({creatorId})</em></h3>
                        Goal: {goal}
                        <br />
                        Activities:
                        {/* {console.log("RoutineActivities>>>>", activities)} */}
                        {/* {console.log("RoutineACtivityLen", activities.length)} */}
                        {activities.map(({ id, name, description, count, duration}) => (
                            <div className="RoutineActivity"  key={id} >
                                <h6>activity!!{id}</h6>
                                <h1>{name}</h1>
                                <p>{description}</p>
                                <p>{count}x</p>
                                <p>{duration}</p>
                            </div>
                        ))}
                    </div>
                ))}           
            </div>   
            <CreateRoutine myroutines={myroutines} setMyRoutines={setMyRoutines}/>
        </>
        )

}

export default MyRoutines;