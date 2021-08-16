import React from 'react';

export const MyRoutines = ({myroutines}) => {
    
    return (
        <div className = "Routines">
            <h1>My Routines</h1>
            {console.log("MYRoutines>>>>", myroutines)}
            {myroutines.map(({id, creatorId ,creatorName, goal, isPublic ,name, activities }) => (
                <div className="RoutineCard" key={id}> 
                    <h3>Routine: {name} <em>Created by {creatorName}: ({creatorId})</em></h3>
                    Goal: {goal}
                    <br />
                    Activities:
                    {console.log("RoutineActivities>>>>", activities)}
                    {/* {console.log("RoutineACtivityLen", activities.length)} */}
                    {activities.map(({ id, name, description, count, duration}) => (
                        <div className="RoutineActivity" key={id} >
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
        )

}

export default MyRoutines;