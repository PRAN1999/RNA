from app.config import news_api_key, watson_api_key, watson_url, watson_api_version
from watson_developer_cloud import NaturalLanguageUnderstandingV1
from watson_developer_cloud.natural_language_understanding_v1 import Features, CategoriesOptions, ConceptsOptions
from app.models.article import Article
from newsapi import NewsApiClient
from datetime import datetime, timedelta
from urllib.parse import urlencode, quote_plus
from pprint import pprint
import json, re, requests

#Init
newsapi_url = 'https://newsapi.org/v2/everything'
watson_nlu = NaturalLanguageUnderstandingV1(
    version=watson_api_version,
    iam_apikey=watson_api_key,
    url=watson_url
)
stopwords = ['', 'and', 'or']

def get_articles_from_keywords(keywords):
    keyword_string = ' OR '.join(keywords)
    keyword_dict = {
        'q':keyword_string
    }
    encoded_keywords = urlencode(keyword_dict, quote_via=quote_plus)

    now = datetime.now()
    now = now - timedelta(days=30)

    request_url = '{}?{}&apiKey={}&sortBy=relevancy'.format(newsapi_url, encoded_keywords, news_api_key)
    all_articles = requests.get(request_url).json()
    articles = all_articles['articles']
    parsed_list = []
    for entry in articles:
        parsed_list.append(Article(entry['title'], entry['description'], entry['url']).json())
    return parsed_list

def get_keywords_from_url(url):
    xpath_str = None
    if 'reddit' in url:
        xpath_str = '//div[@class="expando"]'
    res = watson_nlu.analyze(
        url=url,
        xpath=xpath_str,
        features=Features(
            categories=CategoriesOptions(),
            concepts=ConceptsOptions(limit=5)
        )).get_result()
    kwds = set()
    categories = res['categories']
    categories = sorted(categories, key=extract_relevancy, reverse=True)[:10]
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
