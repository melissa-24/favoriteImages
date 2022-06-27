from django.contrib import admin
from django.urls import path, include
from api import views as app_views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('api.urls'))
]
