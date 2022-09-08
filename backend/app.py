from flask import Flask, render_template, request, jsonify
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from login.login import login
from etl.etl import etl
import datetime
import sqlite3

app = Flask(__name__)
app.config["JWT_SECRET_KEY"] = "galust_sahakian"
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = datetime.timedelta(hours=1)
jwt = JWTManager(app)
CORS(app)

app.register_blueprint(login, url_prefix='/auth')
app.register_blueprint(etl, url_prefix='/etl')

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/data', methods = ['GET'])
def get_data():
	if request.method == 'GET':
		con = sqlite3.connect("etl.db")
		cur = con.cursor()

		table_users_raw = cur.execute("SELECT * FROM users")
		table_users_keys = ['user_id', 'name', 'surname', 'callback_url', 'music', 'email', 'login', 'password']
		table_users_vals = table_users_raw.fetchall()
		table_users = []
		for i in table_users_vals:
			table_users.append(dict(zip(table_users_keys, i)))

		table_processes_raw = cur.execute("SELECT * FROM processes")
		table_processes_keys = ['process_id', 'user_id']
		table_processes_vals = [ row for row in table_processes_raw.fetchall() ]
		table_processes = []
		for i in table_processes_vals:
			table_processes.append(dict(zip(table_processes_keys, i)))

		return jsonify({'users': table_users, 'processes': table_processes})
	
if __name__ == '__main__':
	app.run(host='localhost', debug=True)
