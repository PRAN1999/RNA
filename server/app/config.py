from configparser import ConfigParser

_WATSON_SECTION = 'Watson'
_WATSON_URL = 'watson_url'
_WATSON_API_KEY = 'watson_api_key'
_WATSON_API_VERSION = 'watson_api_version'

_NEWS_API_SECTION = 'NewsAPI'
_NEWS_API_KEY = 'news_api_key'

_REDDIT_SECTION = 'Reddit'
_REDDIT_CLIENT_ID = 'reddit_client_id'
_REDDIT_CLIENT_SECRET = 'reddit_client_secret'
_REDDIT_USERNAME = 'reddit_username'
_REDDIT_PASSWORD = 'reddit_password'
_REDDIT_USER_AGENT = 'reddit_user_agent'

_CONFIG_FILE = 'config.ini'

parser = ConfigParser()
parser.read(_CONFIG_FILE)

watson_url = parser[_WATSON_SECTION][_WATSON_URL]
watson_api_key = parser[_WATSON_SECTION][_WATSON_API_KEY]
watson_api_version = parser[_WATSON_SECTION][_WATSON_API_VERSION]

news_api_key = parser[_NEWS_API_SECTION][_NEWS_API_KEY]

reddit_client_id = parser[_REDDIT_SECTION][_REDDIT_CLIENT_ID]
reddit_client_secret = parser[_REDDIT_SECTION][_REDDIT_CLIENT_SECRET]
reddit_username = parser[_REDDIT_SECTION][_REDDIT_USERNAME]
reddit_password = parser[_REDDIT_SECTION][_REDDIT_PASSWORD]
reddit_user_agent = parser[_REDDIT_SECTION][_REDDIT_USER_AGENT]