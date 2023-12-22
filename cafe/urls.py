from django.urls import path
from . import endpoints

urlpatterns = [path('', endpoints.cafe)]
