from pymongo import MongoClient

# def get_questions():
#     uri = "mongodb+srv://ircgmgqe:3d931855-b6cd-4631-adb6-b9f1c738d7a3@cluster0.yt0ezbi.mongodb.net/?retryWrites=true&w=majority"
#     client = MongoClient(uri)
#     print("Mongodb connected!")
#     db = client['oa_questions']
#     collection = db['questions']
#     return list(collection.find({}, {"_id": 0, "question": 1}))

def get_questions():
    try:
        # uri = "mongodb+srv://ircgmgqe:3d931855-b6cd-4631-adb6-b9f1c738d7a3@cluster0.yt0ezbi.mongodb.net/?retryWrites=true&w=majority"
        uri="mongodb://burnwalsahil27:alwayskrpkab@ac-6exz1iy-shard-00-00.yt0ezbi.mongodb.net:27017,ac-6exz1iy-shard-00-01.yt0ezbi.mongodb.net:27017,ac-6exz1iy-shard-00-02.yt0ezbi.mongodb.net:27017/?replicaSet=atlas-inpl9v-shard-0&ssl=true&authSource=admin"
        client = MongoClient(uri)
        print("MongoDB connected!")
        db = client['oa_questions']
        collection = db['questions']
        questions = list(collection.find({}, {"_id": 0, "statement": 1}))
        print(f"Fetched {len(questions)} questions")
        return questions
    except Exception as e:
        print("MongoDB error:", e)
        raise
