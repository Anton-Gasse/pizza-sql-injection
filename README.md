# 🍕 Pizza Order SQL Injection Challenge

## 📜 About

This project is a fun and educational web application designed to help you understand and practice SQL Injection vulnerabilities. The frontend simulates a simple pizza ordering page, but hidden in the database is a coupon code for a 100% discount. The goal of this challenge is to exploit a SQL injection vulnerability to extract the hidden coupon code and get your pizza order for free! Test it out: https://anton-gasse.de/pizza

##### ⚠️ Disclaimer: This project is for educational purposes only. Always ensure you have permission before attempting security testing, and never perform SQL injection or other attacks on systems without authorization.

## 🎯 Learning Objectives

- Understand how SQL Injection vulnerabilities arise.
- Practice exploiting SQL Injection to retrieve sensitive data.
- Learn about secure coding practices to prevent SQL Injection.

## 🚀 How It Works

The frontend is a simple HTML-based pizza order form.
When redeeming a coupon, user input is sent to the backend where SQL queries are executed.
Your goal is to find and exploit an SQL Injection vulnerability to reveal the 100% off coupon code hidden in the database.



## 🛠️ Getting started

### ⚡ Quick start
1. Clone the repo via:
```sh
git clone git@github.com:Anton-Gasse/pizza-sql-injection.git
```
2. Run the docker container via:
```sh
docker compose up
```

### 🧑‍💻 Dev Setup
1. Clone the repo via:
```sh
git clone git@github.com:Anton-Gasse/pizza-sql-injection.git
```
2. Install the requirements via:
```sh
pip install -r requirements.txt"
```
3. Start a Postgres Docker Container via:
```sh
docker run -d --name my_postgres_container \
  -e POSTGRES_USER=<myuser> \
  -e POSTGRES_PASSWORD=<mypassword> \
  -e POSTGRES_DB=postgres \
  -v ./init.sql:/docker-entrypoint-initdb.d/init.sql \
  -p 5432:5432 postgres

```
4. Set the Environment Variable IP & POSTGRES_PASSWORD via:
```sh
export IP=<myip> && export POSTGRES_PASSWORD=<mypassword>
```
5. Start the server via:
```sh
python3 app.py"
```

## 📡 Endpoints

### '/'
- **Method** GET
- **Description** Returns the frontend

### '/scoreboard'
- **Method** GET
- **Description** Returns the scoreboard

