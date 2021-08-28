import React, { useState } from 'react';
import { GetRoutinesByUser, GetCurrentUsername, UpdateRoutine} from '../api';

const EditRoutine = ({ setMyRoutines , id, name, goal, isPublic }) => {
	const [form, setForm] = useState({
		isPublic: 'true',
		name: name,
		goal: goal,
        id: id
	});

	const handleInput = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        try {   
                console.log("RoutineID>>>", id , form.id)
                const res = await UpdateRoutine( form.id , form.name, form.goal, form.isPublic)
                const myRoutines = await GetRoutinesByUser(GetCurrentUsername());
                setMyRoutines(myRoutines)
                document.getElementById(`EditRoutineWrapper${id}`).checked = false; 
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <label className="button" htmlFor= {`EditRoutineWrapper${id}` }>Edit Routine</label>
            <div className='modal' >
                <input id={`EditRoutineWrapper${id}` } type='checkbox' />
                <h4>If you would like to make a change, update the information and click "Update Routine"</h4>
                <form htmlFor= {`EditRoutineWrapper${id}` } onSubmit={handleEditSubmit}>
                    {/* <label type = "hidden">Make Public?</label> */}
                        <input
                            type="checkbox"
                            value='true'
                            name="isPublic"
                            type = "hidden"
                            defaultChecked
                        />{' '}
                        <br></br>
                    <label>Name:</label>
                        <input
                            required
                            name="name"
                            value={form.name}
                            onInput={handleInput}
                        />{' '}
                        <br></br>
                    <label>Goal:</label>
                        <input
                            required
                            name="goal"
                            value={form.goal}
                            onInput={handleInput}
                        />{' '}
                    <br></br>
                    <input
                        name="routineId"
                        value={form.id}
                        type = "hidden"
                    />
                    <button type="submit">
                        Update Routine
                    </button>   
                </form>
            </div>
        </>
    )

}
export default EditRoutine;
