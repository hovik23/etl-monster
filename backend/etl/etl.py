from flask import Blueprint, render_template, request, jsonify
import sqlite3
import uuid

etl = Blueprint("etl", __name__, static_folder='static')

def create_process(user_id):
	query = "INSERT INTO processes VALUES(?, ?)"
	process_id = uuid.uuid4()
	params = (process_id, user_id)
	cur.execute(query, params)
	con.commit()
	con.close()
	return process_id

def finish_process(process_id):
	query = "DELETE FROM processes WHERE process_id=?"
	params = (process_id, )
	cur.execute(query, params)
	con.commit()
	con.close()

@etl.route('/', methods = ['POST'])
def etl_main():
	if request.method == 'POST':
		data = request.get_json()

		text = data['text']

		process_id = create_process(user_id)

		response = jsonify({'text': text.upper()})
		response.headers.add('Access-Control-Allow-Origin', '*')

		finish_process(process_id)
		return response

		# con = sqlite3.connect("etl.db")
		# cur = con.cursor()
	return 'ok'