from flask import Flask, render_template
from flask_cors import CORS
from login.login import login
from etl.etl import etl

app = Flask(__name__)
CORS(app)

app.register_blueprint(login, url_prefix='/auth')
app.register_blueprint(etl, url_prefix='/etl')

@app.route('/')
def index():
	return render_template('index.html')
	
if __name__ == '__main__':
	app.run(host='localhost', debug=True)
