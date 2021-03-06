import re
from app import app
from flask import Flask, render_template, redirect, session, request, flash, jsonify
from app.models.favorite import Favorite
from app.models.user import User


@app.route('/dashboard/')
def dashboard():
    if 'user_id' not in session:
        flash('please log in')
        return redirect('/')
    data = {
        'id': session['user_id']
    }
    user = User.getOne(data)
    return render_template('dashboard.html', user = user, images = User.userFavs(data),)

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
