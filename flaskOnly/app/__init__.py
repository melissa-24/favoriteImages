from flask import Flask
from app.env import KEY

app = Flask(__name__)
app.secret_key = KEY