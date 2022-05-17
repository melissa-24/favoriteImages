from app import app
from flask import Flask, redirect, session, request, flash, jsonify
from flask_bcrypt import Bcrypt
from app.models.user import User
from app.models.favorite import Favorite
from flask_cors import CORS
from app.config.links import BACK, FRONT

CORS(app)

bcrypt = Bcrypt(app)

@app.route('/')
def index():
    return redirect('/api/')

@app.route('/register/', methods=['POST'])
def register():
    isValid = User.validate(request.form)
    if not isValid:  # if isValid = False then redirect to /
        return redirect(f'{FRONT}')
    newUser = {
        'firstName': request.form['firstName'],
        'lastName': request.form['lastName'],
        'email': request.form['email'],
        'username': request.form['username'],
        'password': bcrypt.generate_password_hash(request.form['password'])
    }
    id = User.save(newUser)
    if not id:
        flash('Something went wrong')
        return redirect(f'{FRONT}')
    session['user_id'] = id
    flash("You are now logged in")
    return redirect(f'{FRONT}dashboard/')

@app.route('/login/', methods=['POST'])
def login():
    data = {
        'email': request.form['email'],
        'username': request.form['username'],
    }
    user = User.getLogin(data) # check if the email is in the database
    if not user: # if not let them know
        flash('That email or username is not in our system')
        return redirect(f'{FRONT}')
    if not bcrypt.check_password_hash(user.password, request.form['password']):
        flash('Wrong password')
        return redirect(f'{FRONT}')
    session['user_id'] = user.id
    flash("You are now logged in")
    print("user in session: ", session['user_id'])
    return redirect(f'{FRONT}dashboard/')

@app.route('/logout/')
def logout():
    session.clear()
    return redirect(f'{FRONT}')

# @app.route('/profile/')
# def editProfile():
#     if 'user_id' not in session:
#         flash('Please log in')
#         return redirect('/')
#     data = {
#         'id': session['user_id']
#     }
#     user = User.getOne(data)
#     return render_template('profile.html', user = user)

@app.route('/profile/')
def editProfile():
    data = {
        'id': session['user_id']
    }
    user = User.getOne(data)
    return jsonify({'user': user}), 200

@app.route('/updateProfile/', methods=['post'])
def updateProfile():
    isValid = User.validateUpdate(request.form)
    if not isValid:
        return redirect('/profile/')
    id = session['user_id']
    updateUser = {
        'id': id,
        'firstName': request.form['firstName'],
        'lastName': request.form['lastName'],
        'username': request.form['username'],
    }
    User.updateUser(updateUser)
    return redirect(f'{FRONT}profile/')

@app.route('/updatePassword/', methods=['post'])
def updatePassword():
    isValid = User.validatePassword(request.form)
    if not isValid:
        return redirect('/profile/')
    id = session['user_id']
    updateUser = {
        'id': id,
        'password': bcrypt.generate_password_hash(request.form['password'])
    }
    User.updatePassword(updateUser)
    flash('Password updated')
    return redirect(f'{FRONT}profile/')

# @app.route('/users/')
# def users():
#     if 'user_id' not in session:
#         flash('please log in')
#         return redirect('/')
#     data = {
#         'id': session['user_id']
#     }
#     you = User.getOne(data)
#     users = User.getAll()
#     favs = Favorite.getAll()
#     return render_template('users.html', you = you, users = users, favs = favs)

@app.route('/users/')
def users():
    data = {
        'id': session['user_id']
    }
    you = User.getOne(data)
    users = User.getAll()
    favs = Favorite.getAll()
    return jsonify({'users': users}, {'you': you}, {'favs': favs}), 200

# @app.route('/users/<int:id>/view/')
# def viewUser(id):
#     if 'user_id' not in session:
#         flash('please log in')
#         return redirect('/')
#     data = {
#         'id': session['user_id']
#     }
#     userData = {
#         'id': id
#     }
#     you = User.getOne(data)
#     user = User.getOne(userData)
#     images = User.userFavs(userData)
#     return render_template('viewUser.html', you = you, user = user, images = images)

@app.route('/users/<int:id>/view/')
def viewUser(id):
    data = {
        'id': session['user_id']
    }
    userData = {
        'id': id
    }
    you = User.getOne(data)
    user = User.getOne(userData)
    images = User.userFavs(userData)
    return jsonify({'you': you}, {'user': user}, {'images': images}), 200
