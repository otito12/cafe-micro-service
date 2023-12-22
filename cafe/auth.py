from rest_framework.response import Response
from rest_framework import status
from cafemicroservice.db import db_client, db_name, db_collections
from bson.json_util import dumps
from bson.json_util import loads

SERVICE_NAME = "user"
COLLECTION_KEY = db_collections[SERVICE_NAME]
COLLECTION = db_client[db_name][COLLECTION_KEY]


def handle_login(request):
    COLLECTION.update_one(
        {"_id": request.data.get("user").get("email")}, {"$set": {
            "_id": request.data.get("user").get("email"),
            "name": request.data.get("user").get("name")
        }}, upsert=True)
    return Response(status=status.HTTP_200_OK)


def handle_auth(email):
    print(COLLECTION.find_one(email))
    if email:
        return True
    else:
        return False
