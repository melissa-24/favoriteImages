from dataclasses import fields
from urllib import request
from django.shortcuts import render, redirect
from django.contrib import messages
from api.models import *
from django.http import JsonResponse
from django.core.serializers import serialize
from django.http import HttpResponse

