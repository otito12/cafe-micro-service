from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

# normally would save password in .env file but ¯\_(ツ)_/¯
uri = "mongodb+srv://ood2103:columbia2023@cafeservice.4r2c6be.mongodb.net/?retryWrites=true&w=majority"
db_client = MongoClient(uri, server_api=ServerApi('1'))
db_name = "cafeservice"
db_collections = {
    "cafe": "cafe"
}
