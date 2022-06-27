from app import app
from flask import Flask, render_template, redirect, session, request, flash, jsonify
from flask_bcrypt import Bcrypt
from app.models.user import User
from app.models.favorite import Favorite
from flask_cors import CORS

CORS(app)


bcrypt = Bcrypt(app)

@app.route('/')
def index():
    return jsonify({'Flask Database Status': 'Running'}), 200

