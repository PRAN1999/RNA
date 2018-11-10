from configparser import ConfigParser

WATSON_SECTION = 'Watson'
WATSON_URL = 'watson_url'
WATSON_API_KEY = 'watson_api_key'
WATSON_API_VERSION = 'watson_api_version'

NEWS_API_SECTION = 'NewsAPI'
NEWS_API_KEY = 'news_api_key'

CONFIG_FILE = 'config.ini'

parser = ConfigParser()
parser.read(CONFIG_FILE)

watson_url = parser[WATSON_SECTION][WATSON_URL]
watson_api_key = parser[WATSON_SECTION][WATSON_API_KEY]
watson_api_version = parser[WATSON_SECTION][WATSON_API_VERSION]
news_api_key = parser[NEWS_API_SECTION][NEWS_API_KEY]