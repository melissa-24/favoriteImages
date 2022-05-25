from django.shortcuts import render, redirect
from django.contrib import messages
from app.models import *



def dashboard(request):
    if 'user_id' not in request.session:
        return redirect('/')
    user = User.objects.get(id=request.session['user_id'])
    images = Favorite.objects.filter(user_id=user)
    context = {
        'user': user,
        'images': images,
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

def viewUser(request, user_id):
    if 'user_id' not in request.session:
        return redirect('/')
    you = User.objects.get(id=request.session['user_id'])
    user = User.objects.get(id=user_id)
    images = Favorite.objects.filter(user_id=user_id)
    context = {
        'you': you,
        'user': user,
        'images': images,
    }
    return render(request, 'viewUser.html', context)