from dataclasses import fields
from urllib import request
from django.shortcuts import render, redirect
from django.contrib import messages
from api.models import *
from django.http import JsonResponse
from django.core.serializers import serialize
from django.http import HttpResponse
import bcrypt

status = {
    "Django Database Status": "Running"
}

def index(request):
    return JsonResponse(status, content_type="application/json")

def register(request):
    errors = User.objects.validate(request.POST)
    return JsonResponse(errors, content_type='application/json')