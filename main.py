import plaid
from flask import Flask, render_template, request, jsonify
from datetime import datetime
from datetime import timedelta
import base64
import os
import datetime
import json
import time
from dotenv import load_dotenv
from werkzeug.wrappers import response
load_dotenv()

def empty_to_none(field):
    value = os.getenv(field)
    if value is None or len(value) == 0:
        return None
    return value

def pretty_print_response(response):
  print(json.dumps(response, indent=2, sort_keys=True, default=str))

app = Flask(__name__)


@app.route('/', methods=['GET'])
def home():
    return 'OK'

if __name__ == '__main__':
    app.run(port=os.getenv('PORT', 8000))
