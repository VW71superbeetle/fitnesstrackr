import React, { useState } from 'react';
import { GetRoutinesByUser, GetCurrentUsername, CreateNewRoutine} from '../api';

const CreateRoutine = ({ setMyRoutines }) => {
	const [form, setForm] = useState({
		isPublic: 'true',
		name: '',
		goal: '',
	});

	const formReset = () => {
		setForm({ isPublic: 'true', name: '', goal: '' });
	};

    const handleInput = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

    const handleCreateSubmit = async (e) => {
        e.preventDefault();
        try {   
            const res = await CreateNewRoutine(form.name, form.goal, form.isPublic)
            const myRoutines = await GetRoutinesByUser(GetCurrentUsername());
            setMyRoutines(myRoutines)
            formReset();
            document.getElementById(CreateRoutineWrapperNew).checked = false; 
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <label className="button CreateRoutine success" htmlFor= "CreateRoutineWrapperNew" >New Routine...</label>
            <div className='modal CreateRoutine card' >
                <input id="CreateRoutineWrapperNew" type='checkbox' />
                <h4>Please enter the name and goal of your new routine.</h4>
                <form htmlFor= "CreateRoutineWrapperNew" className = "card" onSubmit={handleCreateSubmit}>
                    {/* <label type = "hidden">Make Public?</label> */}
                        <input
                            type="checkbox"
                            value='true'
                            name="isPublic"
                            type = "hidden"
                            // defaultChecked
                        />{' '}
                        <br></br>
                    <label>Name:</label>
                        <input
                            required
                            name="name"
                            value={form.name}
                            onChange={handleInput}
                        />{' '}
                        <br></br>
                    <label>Goal:</label>
                        <input
                            required
                            name="goal"
                            value={form.goal}
                            onChange={handleInput}
                        />{' '}
                    <br></br>
                    <button type="submit" className='success'>
                        Create Routine
                    </button>   
                </form>
            </div>
        </>
    )

}
export default CreateRoutine;
