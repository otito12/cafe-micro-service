from rest_framework.response import Response
from rest_framework import status
from cafe.auth import handle_auth
from cafemicroservice.db import db_client, db_name, db_collections
from bson.json_util import dumps
from bson.json_util import loads
from cafemicroservice.kafka_config import producer
import json

SERVICE_NAME = "cafe"
COLLECTION_KEY = db_collections[SERVICE_NAME]
COLLECTION = db_client[db_name][COLLECTION_KEY]


def handle_post(request, id):
    cafe = loads(dumps(COLLECTION.find_one({"_id": id})))
    reviews = cafe["reviews"]
    if not (handle_auth(request.data["user_id"])):
        return Response(status=status.HTTP_401_UNAUTHORIZED)
    # producer event to queue
    try:
        producer.send('new-review', json.dumps(request.data).encode('utf8'))
        # middleware
        new_avrg = sum([review["rating"] for review in reviews])//len(reviews)
        newvalues = {"$set": {"reviews": [
            request.data] + reviews, "avrg_rating": new_avrg}}
        COLLECTION.update_one({"_id": id}, newvalues)
    except Exception as e:
        print(f"Error producing message: {e}")
    finally:
        producer.close()
    return Response(status=status.HTTP_200_OK)
