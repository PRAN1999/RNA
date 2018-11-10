from flask import Flask

app = Flask(__name__)
app.secret_key = 'rna_secret'

from app import views

app.register_blueprint(views.mod)

from configparser import ConfigParser
from app.constants import *

parser = ConfigParser()
parser.read('../config.ini')

watson_url = parser[WATSON_SECTION][WATSON_URL]
watson_api_key = parser[WATSON_SECTION][WATSON_API_KEY]
news_api_key = parser[NEWS_API_SECTION][NEWS_API_KEY]