import React from 'react';
import {CreateRoutine, EditRoutine} from './index'
import {GetRoutinesByUser,GetCurrentUsername, DeleteRoutine} from '../api'

const MyRoutines = ({myroutines, setMyRoutines}) => {
    // console.log("MYROUTINES>>>>>", GetRoutinesByUser(GetCurrentUsername()))


    const handleDeleteSubmit = async ({id}) => {
        try {   
                console.log(" handleDeleteSubmit called")
                const res = await DeleteRoutine(id)
                const myRoutines = await GetRoutinesByUser(GetCurrentUsername());
                setMyRoutines(myRoutines)
        } catch (error) {
            console.error(error)
            alert('Error Creating Routine', error)
        }
    }
    
    const handleEditSubmit = async ({id, name, goal, isPublic}) => {
        try {   
                console.log(" handleEditSubmit called")
                return (
                    <EditRoutine setMyRoutines={setMyRoutines} id={id} setMyRoutines={setMyRoutines} name={name} goal={goal} isPublic = {isPublic}/>
                )
        } catch (error) {
            console.error(error)
            alert('Error Creating Routine', error)
        }
    }

    

    return (
        <>
            <div className = "Routines">
                <h1>My Routines</h1>                
                {myroutines.map(({id, creatorId ,creatorName, goal, isPublic=true ,name, activities }) => (
                    <div className="RoutineCard card" key={id}> 
                        <h3>Routine: {name}</h3>
                        <em>Created by {creatorName}</em>
                        <em>Goal: </em>{goal}
                        <br />
                        {!!activities.length ? 
                            (
                            <table className="routineActivityList">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Count</th>
                                        <th>Duration</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        {activities.map(({ id, name, description, count, duration}) => (
                                            <tr key={id} >
                                                <td>{name}</td>
                                                <td>{description}</td>
                                                <td>{count}x</td>
                                                <td>{duration}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                            </table>
                            ) : ""
                        }
                        {/* <button key={`edit${id}`} onClick={() => handleEditSubmit({id, name, goal, isPublic})} >Edit</button> */}
                        <EditRoutine setMyRoutines={setMyRoutines} id={id} setMyRoutines={setMyRoutines} name={name} goal={goal} isPublic = {isPublic}/>
                        <button key={`delete${id}`} onClick={() => handleDeleteSubmit({id})} >Delete</button>
                    </div>
                ))}           
            </div>   
            <CreateRoutine myroutines={myroutines} setMyRoutines={setMyRoutines}/>
        </>
        )

}

export default MyRoutines;