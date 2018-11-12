from flask import Blueprint, request, jsonify
from .service import get_keywords_from_url, get_articles_from_keywords, get_news_link
import json

mod = Blueprint('service', __name__, url_prefix='/service')

@mod.route('/relevant-articles', methods=['GET'])
def find_relevant_articles():
    reddit_url = request.args.get('url')
    kwd_args = request.args.getlist('kwd')
    if reddit_url is not None:
        url = get_news_link(reddit_url)
        kwds = get_keywords_from_url(url)
    elif kwd_args.count != 0:
        kwds = kwd_args
    articles = get_articles_from_keywords(kwds)
    return jsonify(
        {
            "articles": articles,
            "keywords": kwds
        }
    )
