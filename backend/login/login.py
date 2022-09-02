from flask import Blueprint, render_template, request
import sqlite3

login = Blueprint("login", __name__, static_folder='static', template_folder='templates')

def validate_user(cur, login, email):
	query = "SELECT user_id FROM users WHERE login=? OR email=?"
	user_raw = cur.execute(query, (login, email))
	user = user_raw.fetchall()

	return True if len(user) == 0 else False

@login.route('/', methods = ['POST'])
def sign_up():
	if request.method == 'POST':
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
			return 'Succesfully registered'
		else:
			# TO-DO: render error template - already exists
			return 'ok'
	return 'ok'