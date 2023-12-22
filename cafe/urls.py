from django.urls import path
from . import endpoints

urlpatterns = [path('', endpoints.cafe),
               path('login/', endpoints.login),
               path('review/', endpoints.review)]
