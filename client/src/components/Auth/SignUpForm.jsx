import React,{ useState } from 'react';
import uuid from 'react-uuid';

function SignUpForm() {

	const [name, setName] = useState('')
	const [surname, setSurname] = useState('')
	const [music, setMusic] = useState('')
	const [email, setEmail] = useState('')
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [callbackURL, setCallbackURL] = useState('')

	const handleSubmit = (e) => {
		console.log('signupy ashxatum a')
		e.preventDefault();
		const data = {
			"name": name,
			"surname": surname,
			"music": music,
			"email": email, 
			"login": username, 
			"password": password,
			"callback_url": callbackURL,
			"user_id": uuid()
		}

		fetch('http://localhost:5000/auth/sign_up', {
			'method':'POST',
			headers : {
				'Content-Type':'application/json'
			},
			body:JSON.stringify(data)
		})
	}


	return(
		<form onSubmit={handleSubmit}>
			<div className="login-container">
				<div className="form-group">
					<div className="row">
						<div className="col">
							<input type="text" className="form-control" placeholder="First name" onChange={e => setName(e.target.value)}/>
						</div>
						<div className="col">
							<input type="text" className="form-control" placeholder="Last name" onChange={e => setSurname(e.target.value)}/>
						</div>
					</div>
				</div>
				<div className="form-group">
					<input type="text" className="form-control" placeholder="Callback URL" onChange={e => setCallbackURL(e.target.value)}/>
				</div>
				<div className="form-group">
					<input type="text" className="form-control" placeholder="Music" onChange={e => setMusic(e.target.value)}/>
				</div>
				<div className="form-group">
					<input type="email" className="form-control" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
				</div>
				<div className="form-group">
					<input type="text" className="form-control" placeholder="Username" onChange={e => setUsername(e.target.value)}/>
				</div>

				<div className="form-group">
					<input type="password" className="form-control" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
				</div>
				<div className="form-group">
					<button type="submit" className="btn btn-dark btn-lg btn-block">Sign Up</button>
				</div>
			</div>
		</form>
	)
}

export default SignUpForm;