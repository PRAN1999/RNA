from flask import Blueprint

mod = Blueprint('service', __name__, url_prefix='/service')

@mod.route('/relevant-articles', methods=['GET'])
def find_relevant_articles():
    return None
