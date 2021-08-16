
import React, {useState} from 'react';

export const Activities = ({activities}) => {
    
    return (
        <div className = "activities">
            <h1>Activities</h1>
            {/* {console.log("Activities>>>>>>>>>>>>>>",activities)} */}
            {activities.map(({id, name, description}) => (
                <div className="ActivityCard" key={id}> 
                    <h3>Activity: {name}</h3>
                    <h4>Description: {description}</h4>
                </div>
            ))}           
        </div>   
        )

}

export default Activities;