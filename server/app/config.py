from configparser import ConfigParser

WATSON_SECTION = 'Watson'
WATSON_URL = 'watson_url'
WATSON_API_KEY = 'watson_api_key'
WATSON_API_VERSION = 'watson_api_version'

NEWS_API_SECTION = 'NewsAPI'
NEWS_API_KEY = 'news_api_key'

REDDIT_SECTION = 'Reddit'
REDDIT_CLIENT_ID = 'reddit_client_id'
REDDIT_CLIENT_SECRET = 'reddit_client_secret'
REDDIT_USERNAME = 'reddit_username'
REDDIT_PASSWORD = 'reddit_password'
REDDIT_USER_AGENT = 'reddit_user_agent'

CONFIG_FILE = 'config.ini'

parser = ConfigParser()
parser.read(CONFIG_FILE)

watson_url = parser[WATSON_SECTION][WATSON_URL]
watson_api_key = parser[WATSON_SECTION][WATSON_API_KEY]
watson_api_version = parser[WATSON_SECTION][WATSON_API_VERSION]

news_api_key = parser[NEWS_API_SECTION][NEWS_API_KEY]

reddit_client_id = parser[REDDIT_SECTION][REDDIT_CLIENT_ID]
reddit_client_secret = parser[REDDIT_SECTION][REDDIT_CLIENT_SECRET]
reddit_username = parser[REDDIT_SECTION][REDDIT_USERNAME]
reddit_password = parser[REDDIT_SECTION][REDDIT_PASSWORD]
reddit_user_agent = parser[REDDIT_SECTION][REDDIT_USER_AGENT]