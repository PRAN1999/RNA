from app.config import news_api_key, watson_api_key, watson_url, watson_api_version
from app.config import reddit_client_id, reddit_client_secret, reddit_username, reddit_password, reddit_user_agent
from watson_developer_cloud import NaturalLanguageUnderstandingV1
from watson_developer_cloud.natural_language_understanding_v1 import Features, CategoriesOptions, ConceptsOptions
from .models import Article
from newsapi import NewsApiClient
from datetime import datetime, timedelta
from urllib.parse import urlencode, quote_plus
from pprint import pprint
import json, re, requests, praw

#Init
newsapi_url = 'https://newsapi.org/v2/everything'
watson_nlu = NaturalLanguageUnderstandingV1(
    version=watson_api_version,
    iam_apikey=watson_api_key,
    url=watson_url
)
reddit = praw.Reddit(
    client_id=reddit_client_id,
    client_secret=reddit_client_secret,
    password=reddit_password,
    user_agent=reddit_user_agent,
    username=reddit_username
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
    text = None
    if 'reddit' in url:
        submission = reddit.submission(url=url)
        if submission.selftext is not None:
            text = submission.selftext
            url = None
        else:
            return []
    res = watson_nlu.analyze(
        url=url,
        text=text,
        features=Features(
            categories=CategoriesOptions(),
            concepts=ConceptsOptions(limit=5)
        )).get_result()
    kwds = set()
    if 'categories' in res:
        categories = res['categories']
        categories = sorted(categories, key=extract_relevancy, reverse=True)[:10]
        for category in categories:
            labels = re.split(',| |/', category['label'])
            for label in labels:
                kwds.add(label)
    if 'concepts' in res:
        for concept in res['concepts']:
            kwds.add(concept['text'])
    for stopword in stopwords:
        if stopword in kwds:
            kwds.remove(stopword)
    return list(kwds)

def extract_relevancy(category):
    return category['score']

def get_news_link(reddit_url):
    return reddit_url
