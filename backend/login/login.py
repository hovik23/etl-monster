from flask import Blueprint, render_template, request, jsonify
from flask_login import LoginManager, UserMixin, login_required
import sqlite3

login = Blueprint("auth", __name__, static_folder='static', template_folder='templates')
login_manager = LoginManager()
login_manager.init_app(login)

class User(UserMixin):
	def __init__(self, id, email, password):
		self.id = unicode(id)
		self.email = email
		self.password = password
		self.authenticated = False
		
		def is_active(self):
			return self.is_active()
		def is_anonymous(self):
			return False
		def is_authenticated(self):
			return self.authenticated
		def is_active(self):
			return True
		def get_id(self):
			return self.id

@login_manager.user_loader
def load_user(user_id):
	con = sqlite3.connect("etl.db")
	cur = conn.cursor()
	cur.execute("SELECT user_id, email, password FROM users where user_id=?", (user_id, ))
	user = cur.fetchone()
	if user is None:
		return None
	else:
		return User(int(user[0]), user[1], user[2])

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
	if current_user.is_authenticated:
		pass
	if request.method == 'POST':
		data = request.get_json()
		print(data)

		login = data['login']
		password = data['password']

		con = sqlite3.connect("etl.db")
		cur = con.cursor()

		query = "SELECT user_id FROM users WHERE (login=? OR email=?) AND password=?"
		user_raw = cur.execute(query, (login, login, password))
		user_id = user_raw.fetchone()[0]
		user = load_user(user_id)
		login_user(user, remember=True)

		return {'code': 1 if if_exists(cur, login, password) else 0}
	return 'ok'