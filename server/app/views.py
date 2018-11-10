from flask import Blueprint, request, jsonify
from app.service import get_keywords_from_url, get_articles_from_keywords
import json

mod = Blueprint('service', __name__, url_prefix='/service')

@mod.route('/relevant-articles', methods=['GET'])
def find_relevant_articles():
    url = request.args.get('url')
    kwd_args = request.args.getlist('kwd')
    kwds = []
    if url is not None:
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
