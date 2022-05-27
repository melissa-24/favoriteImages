from dataclasses import fields
from urllib import request
from django.shortcuts import render, redirect
from django.contrib import messages
from api.models import *
from django.http import JsonResponse
from django.core.serializers import serialize
from django.http import HttpResponse

status = {
    "Api Status": "Running"
}

def apiBase(request):
    return JsonResponse(status, content_type="application/json")

def apiUsers(request):
    allUsers = list(User.objects.filter(app="Django Only App").values())
    users = []
    for row in allUsers:
        userData = {
            'id': row['id'],
            'firstName': row['firstName'],
            'lastName': row['lastName'],
            'email': row['email'],
            'username': row['username'],
            'app': row['app'],
        }
        users.append(userData)
    # print("all users: ", users)
    return JsonResponse(users, safe = False, content_type="application/json")

def apiImgs(request):
    allImgs = list(Favorite.objects.filter(app="Django Only App").values())
    allUsers = list(User.objects.filter(app="Django Only App").values())
    # print('all img data:', allImgs)
    imgs = []
    for row in allImgs:
        for r in allUsers:
            if row['user_id'] == r['id']:
                imgData = {
                    'id': row['id'],
                    'name': row['name'],
                    'imgUrl': row['img'],
                    'user': r['username'],
                    'userFirstName': r['firstName'],
                    'userLastName': r['lastName'],
                    'app': row['app'],
                }
                imgs.append(imgData)  
    return JsonResponse(imgs, safe= False, content_type="application/json")