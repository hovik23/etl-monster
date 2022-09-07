import React,{ useState } from 'react';
import uuid from 'react-uuid';

const ETLProcess = () => {
	const [text, setText] = useState('')
	const [result, setResult] = useState('Result')

	const handleSubmit = (e) => {
		e.preventDefault()
		fetch('http://localhost:5000/etl/', {
			'method':'POST',
			headers : {
				'Content-Type':'application/json'
			},
			body:JSON.stringify({
					"text": text,
					"user_id": "1234567890",
					"process_id": uuid()
				})
		}).then((response) => {
			return response.json()
		}).then((data) => {
			setResult(data['text'])
		});
	}

	return (
		<div className="account-container">
			<h3>CapsLocker</h3>
			<div className="input-group mb-3">
				<input type="text" className="form-control" placeholder="Enter text" onChange={e => setText(e.target.value)}/>
				<div className="input-group-append">
					<button className="btn btn-secondary" onClick={handleSubmit}>Create Process</button>
				</div>
			</div>
			<hr/>
			<h3>Result</h3>
			<h5>{ result }</h5>
		</div>
	)}

export default ETLProcess;