from flask import Flask, jsonify, request
from flask_cors import CORS
from mongo_utils import get_questions
from model_inference import rephrase_question

app = Flask(__name__)
CORS(app)

# @app.route("/api/questions", methods=["GET"])
# def fetch_questions():
#     return jsonify(get_questions())

@app.route("/api/questions", methods=["GET"])
def fetch_questions():
    try:
        print("got a request on questions")
        questions = get_questions()
        # print(questions)
        return jsonify(questions)
    except Exception as e:
        print("Error fetching questions:", e)
        return jsonify({"error": str(e)}), 500



@app.route("/api/rephrase", methods=["POST"])
def rephrase():
    data = request.json
    prompt = data.get("question", "")
    rephrased = rephrase_question(prompt)
    return jsonify({"rephrased": rephrased})

if __name__ == "__main__":
    app.run(port=8000)