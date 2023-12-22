import uuid
from django.http import HttpResponse
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .auth import handle_login
from .cafe import handle_get
from .review import handle_post as handle_review_post
from cafemicroservice.db import db_client
# yelp

# Client ID
# lCazXhb2Z1K8IMdbk8bazA

# API Key
# 5KnxRDYjCcqSc4dZe_jhcxqv8keg3zPNg_pepdxLcfE87aYngjj1woOEvKptVEUnS3vj055siuMzrSmACnbAa4f46IScbzYoYAUmKQiF50KAIkATBde5Y-lHMK6CZXYx


@api_view(['GET'])
def cafe(request):
    if request.method == 'GET':
        return handle_get(request)
    return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def review(request):
    if request.method == 'POST':
        return handle_review_post(request, request.GET.get('id', None))


@api_view(['POST'])
def login(request):
    if request.method == 'POST':
        return handle_login(request)
