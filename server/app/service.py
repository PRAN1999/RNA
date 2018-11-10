from app.models.article import Article
from newsapi import NewsApiClient
from app import news_api_key

#Init
newsapi = NewsApiClient(api_key = news_api_key)

#keywords must
def get_articles_from_keywords(keywords):
    all_articles = newsapi.get_everything(
        q=keywords,
        sources='abc-news,',
        language='en',
        sort_by='relevancy' 
    )
    return None
