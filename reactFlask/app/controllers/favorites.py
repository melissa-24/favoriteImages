import re
from app import app
from flask import Flask, render_template, redirect, session, request, flash, jsonify
from app.models.favorite import Favorite
from app.models.user import User
from flask_cors import CORS
from app.config.links import BACK, FRONT

CORS(app)

# @app.route('/api/')
# def apiTest():
#     return jsonify({'API Test': 'API Running'}), 200

@app.route('/api/session/')
def sessionUser():
    data = {
        'id': session['user_id']
    }
    user = User.getUser(data)
    return jsonify({'user': user}), 200

@app.route('/api/dash/')
def dashboard():
    if 'user_id' not in session:
        flash('please log in')
        return redirect(f'{FRONT}')
    data = {
        'id': session['user_id']
    }
    user = User.getUser(data)
    images = User.userFavs(data)
    return jsonify({'user': user}, {'images': images}), 200

@app.route('/images/add/')
def addImage():
    if 'user_id' not in session:
        flash('please log in')
        return redirect('/')
    data = {
        'id': session['user_id']
    }
    user = User.getOne(data)
    return render_template('addImage.html', user = user)

@app.route('/images/create/', methods=['post'])
def createImage():
    data = {
        'name': request.form['name'],
        'img': request.form['img'],
        'user_id': session['user_id']
    }
    Favorite.save(data)
    return redirect('/dashboard/')
