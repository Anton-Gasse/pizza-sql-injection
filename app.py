from typing import Literal
import os
import flask
import psycopg2

app = flask.Flask(__name__)

database = "postgres"
user = "backend"
password = "password"
host: str | None = os.getenv("IP")
port = "5432"

scoreboard_list = []
conn = psycopg2.connect(
    dbname=database, user=user, password=password, host=host, port=port
)


@app.route("/")
def hello_world():
    return flask.render_template("index.html")


@app.route("/check_coupon/<id>")
def check_coupon(id) -> flask.Response:
    query = f"select amount from Coupon where code = '{id}';"

    try:
        with conn.cursor() as cursor:
            cursor.execute(query)
            if cursor.description:
                result = cursor.fetchall()

                if result == []:
                    return flask.jsonify({"percent": None})

                return flask.jsonify({"percent": result})

            else:
                conn.commit()
                return flask.Response("Query executed successfully.")

    except Exception as e:
        print(f"An error occurred: {e}")
        conn.commit()
        return flask.Response("Fehler in der Anfrage")


@app.route("/scoreboard", methods=["POST"])
def add_scoreboard() -> flask.Response | tuple[flask.Response, Literal[400]]:

    if flask.request.method != "POST":
        return flask.jsonify({"error": "Invalid data received"}), 400

    data = flask.request.get_json()
    name = data.get("name")

    if not name:
        return flask.jsonify({"error": "Invalid data received"}), 400

    if name in scoreboard_list:
        return flask.jsonify({"error": "Invalid data received"}), 400

    scoreboard_list.append(name)

    return flask.jsonify({"message": "Name added successfully!"})


@app.route("/scoreboard", methods=["GET"])
def show_scoreboard() -> str:

    return flask.render_template(
        "scoreboard.html", scoreboard=enumerate(scoreboard_list)
    )


if __name__ == "__main__":

    app.run("0.0.0.0")
