from app.config import news_api_key, watson_api_key, watson_url, watson_api_version
from watson_developer_cloud import NaturalLanguageUnderstandingV1
from watson_developer_cloud.natural_language_understanding_v1 import Features, CategoriesOptions, ConceptsOptions
from app.models.article import Article
from newsapi import NewsApiClient
from datetime import datetime, timedelta
from urllib.parse import urlencode, quote_plus
import json, re

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
    keyword_string = ''
    for i in range(len(keywords)):
        if i != len(keywords):
            str_temp = keywords[i] + " OR "
            keyword_string+= str_temp
        else:
            keyword_string+= keywords[i]
    keyword_dict = {
        'q':keyword_string
    }
    encoded_keywords = urlencode(keyword_dict, quote_via=quote_plus)
    now = datetime.now().replace(microsecond=0)
    now = now - timedelta(days=7)
    all_articles = newsapi.get_everything(
        q=encoded_keywords[2:],
        from_param=now.isoformat(),
        language='en',
        sort_by='relevancy' 
    )
    articles = all_articles['articles']
    parsed_list = []
    for entry in articles:
        parsed_list.append(Article(entry['title'], entry['description'], entry['url']).json())
    return parsed_list

def get_keywords_from_url(url):
    res = watson_nlu.analyze(
        url=url, 
        features=Features(
            categories=CategoriesOptions(),
            concepts=ConceptsOptions(limit=5)
        )).get_result()
    kwds = set()
    categories = res['categories']
    categories = sorted(categories, extract_relevancy, True)[:10]
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

def extract_relevancy(category):
    return category['score']