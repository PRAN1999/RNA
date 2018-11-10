from app.models.article import Article
from newsapi import NewsApiClient
from app import news_api_key
from datetime import datetime, timedelta



#Init
newsapi = NewsApiClient(api_key = news_api_key)
def get_articles_from_keywords(keywords):
    now = datetime.datetime.now().replace(microsecond=0).isoformat()
    print((now))
    then = now - timedelta(days=7)
    print(then)

    all_articles = newsapi.get_everything(
        q=keywords,
        language='en',
        sort_by='relevancy' 
    )
    return None
