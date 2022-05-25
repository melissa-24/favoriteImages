from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('register/', views.register),
    path('login/', views.login),
    path('logout/', views.logout),
    path('profile/', views.profile),
    path('profile/update/', views.updateProfile),
    path('profile/updatePass/', views.updatePass),
    path('users/', views.users),
    path('users/<int:user_id>/view/', views.viewUser),
    path('dashboard/', views.dashboard),
    # path('images/add/', views.addImage),
    path('images/create/', views.createImages),
    path('images/nasa/', views.nasaImage),
    # path('images/looneyToones/', views.looneyImages),
]