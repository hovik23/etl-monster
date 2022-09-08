import React, { useState } from 'react';
import Cookies from 'universal-cookie';

function LoginForm( props ) {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')

	const cookies = new Cookies()

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
			cookies.set('access_token', data["access_token"], {path: '/'})
			cookies.set('user_id', data["user_id"], {path: '/'})
			props.setIsLogged(true)
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