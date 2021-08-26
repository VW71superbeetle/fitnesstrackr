
import React, {useState} from 'react';
import {CreateActivity} from './';

export const Activities = ({activities, user}) => {
    
    return (
        <>
            <div className = "activities">
                <h1>Activities</h1>
                {/* {console.log("Activities>>>>>>>>>>>>>>",activities)} */}
                {activities.map(({id, name, description}) => (
                    <div className="ActivityCard card" key={id}> 
                        <h3>Activity: {name}</h3>
                        <h4>Description: {description}</h4>
                    </div>
                ))}           
            </div>
            <CreateActivity activities={activities}/>
        </>
        )

}

export default Activities;