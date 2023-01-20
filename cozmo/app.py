# Importing flask module in the project is mandatory
# An object of Flask class is our WSGI application.
from flask import Flask, render_template, jsonify, request

# Flask constructor takes the name of
# current module (__name__) as argument.
app = Flask(__name__)

# The route() function of the Flask class is a decorator,
# which tells the application which URL should call
# the associated function.
@app.route('/voweltoword', methods=['POST', 'GET'])
# ‘/’ URL is bound with hello_world() function.
def voweltoword():
    return jsonify('voweltoword.html')
    return render_template('voweltoword.html')
@app.route('/home')
def home():
   return render_template('home.html')

# main driver function
if __name__ == '__main__':

	# run() method of Flask class runs the application
	# on the local development server.
	app.run()
