import uuid
from django.http import HttpResponse
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view


@api_view(['GET'])
def getCafe(request):
    return Response({"message": "Hello world"}, status=status.HTTP_200_OK)
