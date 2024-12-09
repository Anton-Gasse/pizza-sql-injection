# 🍕 Pizza Order SQL Injection Challenge

## 📜 About

This project is a fun and educational web application designed to help you understand and practice SQL Injection vulnerabilities. The frontend simulates a simple pizza ordering page, but hidden in the database is a coupon code for a 100% discount. The goal of this challenge is to exploit a SQL injection vulnerability to extract the hidden coupon code and get your pizza order for free!

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
1. Clone the repo
2. docker compose up

### 🧑‍💻 Dev Setup
1. Clone the repo
2. Install the requirements via "pip install -r requirements.txt"
3. Start a Postgres Docker Container via: "docker run -d --name my_postgres_container -e POSTGRES_USER=myuser -e POSTGRES_PASSWORD=mypassword -e POSTGRES_DB=postgres -p 5432:5432 postgres"
4. Set the Environment Variable IP & POSTGRES_PASSWORD "export IP=<myip>" and "export POSTGRES_PASSWORD = <mypassword>"
5.Load the [init.sql](./init.sql) into the database
5. Start the server via "python3 app.py"

## 📡 Endpoints

### '/'
- **Method** GET
- **Description** Returns the frontend

### '/scoreboard'
- **Method** GET
- **Description** Returns the scoreboard

