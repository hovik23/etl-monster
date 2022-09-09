from flask import Blueprint, render_template, request, jsonify
from flask_jwt_extended import jwt_required, get_jti, get_jwt_identity
import sqlite3
import uuid

etl = Blueprint("etl", __name__, static_folder='static')

def create_process(con, cur, user_id):
	query = "INSERT INTO processes VALUES(?, ?)"
	process_id = str(uuid.uuid4())
	params = (process_id, user_id)
	cur.execute(query, params)
	con.commit()
	return process_id

def finish_process(con, cur, process_id):
	query = "DELETE FROM processes WHERE process_id=?"
	params = (process_id, )
	cur.execute(query, params)
	con.commit()

def get_callback_url(cur, user_id):
	query = "SELECT callback_url FROM users WHERE user_id=?"
	params = (user_id, )
	callback_url_raw = cur.execute(query, params)
	callback_url = callback_url_raw.fetchone()[0]
	return callback_url

@etl.route('/', methods=['POST'])
@jwt_required()
def etl_main():
	current_user = get_jwt_identity()
	print(current_user)
	data = request.get_json()
	print(data)

	con = sqlite3.connect("etl.db")
	cur = con.cursor()

	text = data['text']

	process_id = create_process(con, cur, data['user_id'])

	response = jsonify({'text': text.upper()})
	response.headers.add('Access-Control-Allow-Origin', '*')

	finish_process(con, cur, process_id)

	fetch(get_callback_url(data['user_id']), {
			'method':'POST',
			headers : {
			'Content-Type':'application/json'
			},
			body: JSON.stringify({"ready": True})
		})

	con.close()

	return response

	# con = sqlite3.connect("etl.db")
	# cur = con.cursor()