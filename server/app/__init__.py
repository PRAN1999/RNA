from flask import Flask

app = Flask(__name__)
app.secret_key = 'rna_secret'

from app import views

app.register_blueprint(views.mod)