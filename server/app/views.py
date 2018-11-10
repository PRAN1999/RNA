from flask import Blueprint, request, jsonify
from app.service import get_keywords_from_url
import json

mod = Blueprint('service', __name__, url_prefix='/service')

@mod.route('/relevant-articles', methods=['GET'])
def find_relevant_articles():
    url = request.args.get('url')
    if url is not None:
        return jsonify(
            {
                "articles": [],
                "keywords": get_keywords_from_url(url)
            }
        )
    return jsonify(
        {
            "articles": [],
            "keywords": []
        }
    )
