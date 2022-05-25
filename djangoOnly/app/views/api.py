from dataclasses import fields
from urllib import request
from django.shortcuts import render, redirect
from django.contrib import messages
from app.models import *
from django.http import JsonResponse
from django.core.serializers import serialize
from django.http import HttpResponse

status = {
    "Api Status": "Running"
}


def nasaImage(request):
    if 'user_id' not in request.session:
        return redirect('/')
    user = User.objects.get(id=request.session['user_id'])
    context = {
        'user': user,
    }
    return render(request, 'nasaImage.html', context)

def tuneImages(request):
    if 'user_id' not in request.session:
        return redirect('/')
    user = User.objects.get(id=request.session['user_id'])
    context = {
        'user': user,
    }
    return render(request, 'tunes.html', context)

def apiBase(request):
    # obj = status
    data = status
    return HttpResponse(data, content_type="application/json")