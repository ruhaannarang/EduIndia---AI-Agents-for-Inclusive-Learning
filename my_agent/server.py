from flask import Flask, request, jsonify
from agent import root_agent 

app = Flask(__name__, static_folder="public", static_url_path="")

@app.route("/")
def home():
    return app.send_static_file("index.html")

@app.route("/api/query", methods=["POST"])
def query_agent():
    data = request.get_json()
    query = data.get("query")

    # Use query() method instead of run() or chat()
    response_obj = root_agent.query(query)

    # Get the text content from response object
    response_text = response_obj.text if hasattr(response_obj, "text") else str(response_obj)
    
    return jsonify({"response": response_text})

if __name__ == "__main__":
    app.run(port=5000, debug=True)
