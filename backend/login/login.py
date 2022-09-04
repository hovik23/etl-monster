from flask import Blueprint, render_template, request, jsonify
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


@login.route('/sign_up', methods = ['POST'])
def signup():
	if request.method == 'POST':
		data = request.get_json()
		print(data)

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

@login.route('/login', methods = ['POST'])
def signin():
	if request.method == 'POST':
		data = request.get_json()
		print(data)

		login = data['login']
		password = data['password']

		con = sqlite3.connect("etl.db")
		cur = con.cursor()

		return {'code': 1 if if_exists(cur, login, password) else 0}
	return 'ok'