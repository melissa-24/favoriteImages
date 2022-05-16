from app import app
from flask import Flask, render_template, redirect, session, request, flash, jsonify
from app.models.user import User
from app.models.favorite import Favorite
from flask_cors import CORS

CORS(app)


@app.route('/images/nasa/')
def nasaImage():
    if 'user_id' not in  session:
        return redirect('/')
    else:
        data = {
            'id': session['user_id']
        }
        user = User.getOne(data)
    return render_template('nasaImage.html', user = user)

@app.route('/images/looneyToones/')
def looneyImages():
    if 'user_id' not in  session:
        return redirect('/')
    else:
        data = {
            'id': session['user_id']
        }
        user = User.getOne(data)
    return render_template('toons.html', user = user)

@app.route('/api/')
def apiBase():
    return jsonify({'Api Status': 'Running'}), 200
    
@app.route('/api/users/')
def apiUsers():
    allUsers = User.allUsers()
    # print('all users', allUsers)
    users = []
    for row in allUsers:
        userData = {
            'id': row['id'],
            'firstName': row['firstName'],
            'lastName': row['lastName'],
            'email': row['email'],
            'username': row['username']
        }
        users.append(userData)
        print('row data', row)
    return jsonify({'users': users}), 200

@app.route('/api/imgs/')
def apiImgs():
    allImgs = Favorite.allImgs()
    print('all imgs', allImgs)
    imgs = []
    for row in allImgs:
        imgData = {
            'id': row['id'],
            'name': row['name'],
            'imgUrl': row['img'],
            'user': row['username'],
            'userFirstName': row['firstName'],
            'userLastName': row['lastName']
        }
        imgs.append(imgData)
    return jsonify({'imgs': imgs}), 200
