from django.shortcuts import render, redirect
from django.contrib import messages
from .models import *
import bcrypt

def index(request):
    if 'user_id' not in request.session:
        return render(request, 'index.html')
    else:
        return redirect('/dashboard/')

def register(request):
    if request.method == 'GET':
        return redirect('/')
    errors = User.objects.validate(request.POST)
    if errors:
        for err in errors.values():
            messages.error(request, err)
        return redirect('/')
    hashedPw = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt()).decode()
    newUser = User.objects.create(
        firstName = request.POST['firstName'],
        lastName = request.POST['lastName'],
        email = request.POST['email'],
        username = request.POST['username'],
        password = hashedPw
    )
    request.session['user_id'] = newUser.id
    return redirect('/dashboard/')

def login(request):
    usernameUser = User.objects.filter(username = request.POST['username'])
    emailUser = User.objects.filter(email = request.POST['email'])
    if usernameUser:
        userLogin = user[0]
        if bcrypt.checkpw(request.POST['password'].encode(), userLogin.password.encode()):
            request.session['user_id'] = userLogin.id
            return redirect('/dashboard/')
        messages.error(request, 'Invalid Credentials')
        return redirect('/')
    if emailUser:
        userLogin = user[0]
        if bcrypt.checkpw(request.POST['password'].encode(), userLogin.password.encode()):
            request.session['user_id'] = userLogin.id
            return redirect('/dashboard/')
        messages.error(request, 'Invalid Credentials')
        return redirect('/login/')
    messages.error(request, 'That Username or Email is not in our system, please register for an account')
    return redirect('/')

def logout(request):
    request.session.clear()
    messages.error(request, 'You have been logged out')
    return redirect('/')

def dashboard(request):
    if 'user_id' not in request.session:
        return redirect('/')
    user = User.objects.get(id=request.session['user_id'])
    context = {
        'user': user,
    }
    return render(request, 'dashboard.html', context)

def profile(request):
    if 'user_id' not in request.session:
        return redirect('/')
    user = User.objects.get(id=request.session['user_id'])
    context = {
        'user': user,
    }
    return render(request, 'profile.html', context)

def updateProfile(request):
    toUpdate = User.objects.get(id=request.session['user_id'])
    toUpdate.firstName = request.POST['firstName']
    toUpdate.lastName = request.POST['lastName']
    toUpdate.username = request.POST['username']
    toUpdate.save()
    return redirect('/profile/')

def updatePass(request):
    toUpdate = User.objects.get(id=request.session['user_id'])
    toUpdate.password = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt()).decode()
    toUpdate.save()
    return redirect('/profile/')

def users(request):
    if 'user_id' not in request.session:
        return redirect('/')
    user = User.objects.get(id=request.session['user_id'])
    users = User.objects.all().values()
    context = {
        'user': user,
        'users': users
    }
    return render(request, 'users.html', context)