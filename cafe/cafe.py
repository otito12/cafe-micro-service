from rest_framework.response import Response
from rest_framework import status
from cafemicroservice.db import db_client, db_name, db_collections
from bson.json_util import dumps
from bson.json_util import loads

SERVICE_NAME = "cafe"
COLLECTION_KEY = db_collections[SERVICE_NAME]
COLLECTION = db_client[db_name][COLLECTION_KEY]

# collection.insert_one({"_id": "01", "name": "Borcelle Cafe", "menu": {"Double Espresso": {"$numberDouble": "3.75"}, "Espresso": {"$numberDouble": "2.75"}, "Latte": {"$numberDouble": "8.0"}}, "reviews": [
#         {"comment_id": "1", "body": "I am a test comment by Otito", "user_id": "0", "user_name": "odd_fish", "post_date": {"$date": {"$numberLong": "1923973200000"}}, "rating": {"$numberInt": "3"}}], "avrg_rating": {"$numberInt": "3"}})


def handle_get(request):
    id = request.GET.get('id', None)
    if not id:
        return Response(loads(dumps(COLLECTION.find())), status=status.HTTP_200_OK)
    else:
        return Response(loads(dumps(COLLECTION.find_one({"_id": id}))), status=status.HTTP_200_OK)
