
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/sdb/config", methods=["POST"])
@app.route("/sdb", methods=["POST"])
def sdb_config():
    return jsonify({
        "status": "ok",
        "config": {
            "voice_enabled": False,
            "SampleRate": 48000,
            "Channels": 1,
            "SessionId": "fake-session-123",
            "Latency": 0,
            "Region": "eu-central"
        }
    })

@app.route("/telemetry", methods=["POST"])
def telemetry():
    return jsonify({"result": "ok"})

@app.route("/login", methods=["POST"])
@app.route("/account", methods=["POST"])
def login():
    return jsonify({
        "access_token": "abc123",
        "expires_in": 3600,
        "token_type": "bearer",
        "refresh_token": "refresh_123",
        "account_id": "00000000-0000-0000-0000-000000000000",
        "client_id": "lqm-client",
        "client_service": "lqm-backend",
        "product_id": "LaQuimera",
        "device_id": "1234-5678",
        "user_id": "player1",
        "display_name": "Player1",
        "email": "player1@example.com"
    })

@app.route("/session", methods=["POST"])
@app.route("/verify", methods=["POST"])
def session():
    return jsonify({"status": "ok"})

@app.route("/", methods=["GET"])
def root():
    return jsonify({"hello": "world"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)
