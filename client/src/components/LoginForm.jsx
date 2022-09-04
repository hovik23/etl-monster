function LoginForm() {
	return(
		<form>
			<div class="form-group row">
			    <label for="staticEmail" class="col-sm-2 col-form-label">Login</label>
			    <div class="col-sm-10">
			      <input type="text" class="form-control" id="inputEmail" placeholder="email@example.com"/>
			    </div>
			</div>
			<div class="form-group row">
			    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
			    <div class="col-sm-10">
			      <input type="password" class="form-control" id="inputPassword" placeholder="Password"/>
			    </div>
			</div>
		</form>
	)
}

export default LoginForm;