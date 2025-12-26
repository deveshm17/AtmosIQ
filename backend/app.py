from flask import Flask, jsonify
from aqi_utils import load_aqi_data, calculate_average_aqi

app = Flask(__name__)

@app.route("/aqi", methods=["GET"])
def get_aqi_summary():
    data = load_aqi_data()
    average_aqi = calculate_average_aqi(data)

    return jsonify({
        "status": "success",
        "average_aqi": average_aqi
    })

if __name__ == "__main__":
    app.run(debug=True)
