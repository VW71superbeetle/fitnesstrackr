import React, { useState } from 'react';
import { CreateNewActivity, GetAllActivities} from '../api';

const CreateActivity = ({ activities }) => {
	const [form, setForm] = useState({
		name: '',
		description: '',
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
            const res = await CreateNewActivity(form.name, form.goal, form.isPublic)
            // const routines = await GetRoutinesByUser(myroutines);
            // setMyRoutines(routines)
            formReset();
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div id="CreateActivityForm">
            <h3>Please enter the name and description of your new activity.</h3>
            <form onSubmit={handleCreateSubmit}>
				<label>Name:</label>
				<input
					style={{ marginTop: '3px', padding: '3px' }}
					required
					name="name"
					value={form.name}
					onInput={handleInput}
				/>{' '}
				<br></br>
				<label>Description:</label>
				<input
					style={{ marginTop: '3px', padding: '3px' }}
					required
					name="description"
					value={form.description}
					onInput={handleInput}
				/>{' '}
				<br></br>
				<button type="submit">
					Create Activity
				</button>   
            </form>
        </div>
    )

}
export default CreateActivity;