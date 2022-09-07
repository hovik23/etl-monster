import React, { useState } from 'react';

function LoginForm( props ) {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch('http://localhost:5000/auth/login', {
			'method':'POST',
			headers : {
			'Content-Type':'application/json'
			},
			body:JSON.stringify({"login": login, "password": password})
		}).then(response => { return response.json() })
        .then(data => {
            props.setIsLogged(data)
        })
	}

	return(
		<form onSubmit={handleSubmit}>
			<div className="login-container">
				<div className="form-group">
					<input type="text" className="form-control" placeholder="Username or Email" onChange={e => setLogin(e.target.value)}/>
				</div>
				<div className="form-group">
					<input type="password" className="form-control" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
				</div>
				<div className="form-group">
					<button type="submit" className="btn btn-dark btn-lg btn-block">Login</button>
				</div>
			</div>
		</form>
	)
}

export default LoginForm;