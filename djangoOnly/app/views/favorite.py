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
    
def addImage(request):
    if 'user_id' not in request.session:
        return redirect('/')
    user = User.objects.get(id=request.session['user_id'])
    context = {
        'user': user
    }
    return render(request, 'addImage.html', context)

def createImages(request):
    Favorite.objects.create(
        name = request.POST['name'],
        img = request.POST['img'],
        user = User.objects.get(id=request.session['user_id'])
    )
    messages.error(request, "Images Added")
    return redirect('/dashboard/')