import uuid
from django.http import HttpResponse
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .cafe import handle_delete, handle_get, handle_post, handle_put
from cafemicroservice.db import db_client
# yelp

# Client ID
# lCazXhb2Z1K8IMdbk8bazA

# API Key
# 5KnxRDYjCcqSc4dZe_jhcxqv8keg3zPNg_pepdxLcfE87aYngjj1woOEvKptVEUnS3vj055siuMzrSmACnbAa4f46IScbzYoYAUmKQiF50KAIkATBde5Y-lHMK6CZXYx


@api_view(['GET', 'PUT', 'POST', 'DELETE'])
def cafe(request):
    if request.method == 'GET':
        return handle_get(request)
    elif request.method == 'PUT':
        return handle_put(request)
    elif request.method == 'POST':
        return handle_post(request)
    elif request.method == 'DELETE':
        return handle_delete(request)
    return Response(status=status.HTTP_400_BAD_REQUEST)
