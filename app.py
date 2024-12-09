from typing import Literal
import os
import flask
import psycopg2

app = flask.Flask(__name__)

database = "postgres"
coupon_user = "coupon_user"
scoreboard_user = "scoreboard_user"
password = os.getenv("POSTGRES_PASSWORD")
host: str | None = os.getenv("IP")
port = "5432"

coupon_conn = psycopg2.connect(
    dbname=database, user=coupon_user, password=password, host=host, port=port
)

scoreboard_conn = psycopg2.connect(
    dbname=database, user=scoreboard_user, password=password, host=host, port=port
)


def get_coupon_discount(coupon_code: str) -> list | None:
    query = f"SELECT amount FROM Coupon WHERE code = '{coupon_code}';"
    try:
        with coupon_conn.cursor() as cursor:
            cursor.execute(query)
            if cursor.description:
                result = cursor.fetchall()
                coupon_conn.commit()
                return result if result else None
            coupon_conn.commit()
    except Exception as e:
        print(f"An error occurred: {e}")
        coupon_conn.rollback()
        return None


@app.route("/")
def hello_world():
    return flask.render_template("index.html")


@app.route("/check_coupon/<id>")
def check_coupon(id) -> flask.Response:

    result = get_coupon_discount(id)
    if result == []:
        return flask.jsonify({"percent": None})
    return flask.jsonify({"percent": result})


@app.route("/scoreboard", methods=["POST"])
def add_scoreboard() -> flask.Response | tuple[flask.Response, Literal[200, 400]]:

    data = flask.request.get_json()
    name = data.get("name")
    coupon = data.get("coupon")

    if not name:
        return flask.jsonify({"error": "No name given"}), 400

    coupon_discount = get_coupon_discount(coupon)

    if coupon_discount is None:
        return flask.jsonify({"error": f"Invalid coupon"}), 400

    if coupon_discount[0][0] != 100:
        return flask.jsonify({"error": f"Invalid coupon {coupon_discount}"}), 400

    query = f"INSERT INTO Scoreboard(username) VALUES ('{name}');"

    try:
        with scoreboard_conn.cursor() as cursor:
            cursor.execute(query)
            scoreboard_conn.commit()
            return flask.jsonify({"message": "Name added successfully!"}), 200

    except Exception as e:
        scoreboard_conn.rollback()
        return flask.jsonify({"message": "Name already in leaderboard"}), 400


@app.route("/scoreboard", methods=["GET"])
def show_scoreboard() -> str:

    scoreboard_list = []
    name_list = []

    query = f"SELECT username from Scoreboard;"
    try:
        with scoreboard_conn.cursor() as cursor:
            cursor.execute(query)

            scoreboard_list = cursor.fetchall()
            name_list = [entry[0] for entry in scoreboard_list]

    except Exception as e:
        print(f"An error occurred: {e}")
        scoreboard_conn.commit()

    return flask.render_template("scoreboard.html", scoreboard=enumerate(name_list))


if __name__ == "__main__":

    app.run("0.0.0.0", 80, debug=True)
