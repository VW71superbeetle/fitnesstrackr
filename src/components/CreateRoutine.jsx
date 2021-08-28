import React, { useState } from 'react';
import { CreateNewRoutine, GetRoutinesByUser, GetCurrentUsername} from '../api';

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
        } catch (error) {
            console.error(error)
            // alert('Error Creating Routine', error)
        }
    }

    return (
        <div id="CreateRoutineForm">
            <h3>Please enter the name and goal of your new routine.</h3>
            <form onSubmit={handleCreateSubmit}>
            {/* <label >Make Public?</label> */}
				<input
					// style={{ marginTop: '3px', padding: '3px' }}
					type="checkbox"
					value='true'
					name="isPublic"
                    type = "hidden"
					defaultChecked
				/>{' '}
				<br></br>
				<label>Name:</label>
				<input
					style={{ marginTop: '3px', padding: '3px' }}
					required
					name="name"
					value={form.name}
					onInput={handleInput}
				/>{' '}
				<br></br>
				<label>Goal:</label>
				<input
					style={{ marginTop: '3px', padding: '3px' }}
					required
					name="goal"
					value={form.goal}
					onInput={handleInput}
				/>{' '}
				<br></br>
				<button type="submit">
					Create Routine
				</button>   
            </form>
        </div>
    )

}
export default CreateRoutine;
