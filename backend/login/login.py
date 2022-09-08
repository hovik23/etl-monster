from flask import Blueprint, render_template, request, jsonify
from flask_jwt_extended import create_access_token, unset_jwt_cookies, get_jwt
from flask import current_app
import sqlite3

login = Blueprint("auth", __name__, static_folder='static', template_folder='templates')

def validate_user(cur, login, email):
	query = "SELECT user_id FROM users WHERE login=? OR email=?"
	user_raw = cur.execute(query, (login, email))
	user = user_raw.fetchall()

	return True if len(user) == 0 else False

def if_exists(cur, login, password):
	query = "SELECT user_id FROM users WHERE (login=? OR email=?) AND password=?"
	user_raw = cur.execute(query, (login, login, password))
	user = user_raw.fetchall()

	return False if len(user) == 0 else True

@login.route('/sign_up', methods=['POST'])
def signup():
	data = request.get_json()

	user_id = data['user_id']
	name = data['name']
	surname = data['surname']
	callback_url = data['callback_url']
	music = data['music']
	email = data['email']
	login = data['login']
	password = data['password']

	con = sqlite3.connect("etl.db")
	cur = con.cursor()

	if validate_user(cur, login, email):
		query = "INSERT INTO users VALUES(?, ?, ?, ?, ?, ?, ?, ?)"
		params = (user_id, name, surname, callback_url, music, email, login, password)
		cur.execute(query, params)
		con.commit()
		# TO-DO: add data to session
		# render main logged main page
		con.close()

		# Successful signig up
		response = jsonify({'code': 1})
		response.headers.add('Access-Control-Allow-Origin', '*')
		return response
	else:
		# TO-DO: render error template - already exists

		# Error while signing up
		response = jsonify({'code': 0})
		response.headers.add('Access-Control-Allow-Origin', '*')
		return response
	return 'ok'

@login.after_request
def refresh_expiring_jwts(response):
	try:
		exp_timestamp = get_jwt()["exp"]
		now = datetime.now(timezone.utc)
		target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
		if target_timestamp > exp_timestamp:
			access_token = create_access_token(identity=get_jwt_identity())
			data = response.get_json()
			if type(data) is dict:
				data["access_token"] = access_token 
				response.data = json.dumps(data)
		return response
	except (RuntimeError, KeyError):
		return response


@login.route("/logout", methods=["POST"])
def logout():
	response = jsonify({"message": "logout successful"})
	unset_jwt_cookies(response)
	return response

@login.route('/login', methods = ['POST'])
def signin():
	data = request.get_json()

	login = data['login']
	password = data['password']

	con = sqlite3.connect("etl.db")
	cur = con.cursor()

	query = "SELECT user_id FROM users WHERE (login=? OR email=?) AND password=?"
	user_raw = cur.execute(query, (login, login, password))
	user_id = user_raw.fetchone()[0]

	# TO-DO: If user_id is not okay
	if user_id != None:
		access_token = create_access_token(identity=user_id)
		response = { "access_token": access_token, 'user_id': user_id }
	else:
		# TO-DO: handle login
		return {"message": "Wrong email or password"}, 401
	return response

@login.route("/user_info", methods=["POST"])
def get_user_info():
	data = request.get_json()

	con = sqlite3.connect("etl.db")
	cur = con.cursor()

	query = "SELECT name, surname FROM users WHERE user_id=?"
	user_raw = cur.execute(query, (data['user_id'], ))
	fetched = user_raw.fetchone()
	name = fetched[0]
	surname = fetched[1]
	con.close()
	
	response = { "name": name, 'surname': surname }
	return response
