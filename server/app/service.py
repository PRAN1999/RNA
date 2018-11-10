from app.config import news_api_key, watson_api_key, watson_url, watson_api_version
from watson_developer_cloud import NaturalLanguageUnderstandingV1
from watson_developer_cloud.natural_language_understanding_v1 import Features, CategoriesOptions, ConceptsOptions
import json, re
from app.models.article import Article
from newsapi import NewsApiClient
from datetime import datetime, timedelta

#Init
newsapi = NewsApiClient(api_key = news_api_key)
watson_nlu = NaturalLanguageUnderstandingV1(
    version=watson_api_version,
    iam_apikey=watson_api_key,
    url=watson_url
)
stopwords = ['', 'and', 'or']

#keywords must
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

def get_keywords_from_url(url):
    res = watson_nlu.analyze(
        url=url, 
        features=Features(
            categories=CategoriesOptions(),
            concepts=ConceptsOptions(limit=7)
        )).get_result()
    kwds = set()
    categories = res['categories']
    for category in categories:
        labels = re.split(',| |/', category['label'])
        for label in labels:
            kwds.add(label)
    concepts = res['concepts']
    for concept in concepts:
        kwds.add(concept['text'])
    for stopword in stopwords:
        if stopword in kwds:
            kwds.remove(stopword)
    return list(kwds)