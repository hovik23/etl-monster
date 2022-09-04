from flask import Flask, render_template
from login.login import login

app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True
app.register_blueprint(login, url_prefix='/auth')

@app.route('/')
def index():
	return render_template('index.html')
	
if __name__ == '__main__':
	app.run(host='localhost', debug=True)
