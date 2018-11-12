class Article(object):
    def __init__(self, title, description, url):
        self.title = title
        self.description = description
        self.url = url

    def json(self):
        return {
            "title": self.title,
            "description": self.description,
            "url": self.url
        }