from flask import Blueprint, render_template, request, jsonify
import sqlite3

etl = Blueprint("etl", __name__, static_folder='static')

@etl.route('/', methods = ['POST'])
def etl_main():
	if request.method == 'POST':
		print('mta stex')
		data = request.get_json()
		print(data)

		text = data['text']

		response = jsonify({'text': text.upper()})
		response.headers.add('Access-Control-Allow-Origin', '*')
		return response

		# con = sqlite3.connect("etl.db")
		# cur = con.cursor()
	return 'ok'