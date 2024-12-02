FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt /app/

RUN pip install --no-cache-dir -r requirements.txt

COPY . /app/

EXPOSE 80

CMD python3 -m gunicorn -w 16 -b 0.0.0.0:80 app:app
