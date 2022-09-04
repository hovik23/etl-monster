function LoginForm() {
	return(
		<form>
			<div className="login-container">
				<div className="form-group">
					<input type="text" className="form-control" placeholder="Username or Email"/>
				</div>
				<div className="form-group">
					<input type="password" className="form-control" placeholder="Password"/>
				</div>
				<div className="form-group">
					<button type="button" class="btn btn-dark btn-lg btn-block">Login</button>
				</div>
			</div>
		</form>
	)
}

export default LoginForm;