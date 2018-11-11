# RNA

### What is it? ***R**eddit **N**ews **A**ssistant!*

Do you like to waste time on Reddit and want to do so more effectively? Don't worry, RNA can help!

Jokes aside, we built RNA as a tool to improve our Reddit browsing experience by helping us become more aware of what we were reading about. Whether you're reading a text post or browsing the comments section of a linked article on Reddit, RNA can automatically detect content in the post and recommend articles to read, allowing you to get a more complete understanding of the post's topic. 

#### Why is this useful?
It allows you to:
- Learn about other, closely-related events
- Find out more details about what is being discussed
- Verify the accuracy of claims being made by commenters
- Explore more news by selecting from the auto-generated tags
- Cite sources in your own posts/comments

Overall, this makes it *much* easier to stay on top of current events and contribute more confidently to Reddit's ecosystem, and we hope you find this to be true.

### How does it work?
The functionality of this application is split into the usual frontend and backend components.

#### Backend:
The backend is built with Python, Flask, IBM Watson SDKs, and the News API. It performs the following tasks:
- Accepts any URL (including that of a Reddit post itself) to be analyzed
- Uses IBM Watson's Natural Language Understanding library to find the categories and concepts that uniquely identify the topic discussed in the linked content
- Performs some pre-processing, sorting, and selection on the data to filter out categories/concepts that might not be relevant to the linked content
- Uses the News API to find other news articles relating to the filtered set of categories and concepts, giving content that the end user might be interested in reading

#### Frontend:
The frontend is the most critical part of this project since it provides a coherent and seamless RNA experience.

The frontend is effectively a Chrome extension built with React & Redux that is dynamically injected into "old" Reddit pages as a sidebar that can be toggled open or closed. This required the following functionality (roughly in the sequence followed by the extension's logic):
- Background scripts to monitor the sites being visited and inject site scrapers into Reddit pages
- Content scripts that interact directly with the DOM to find the most important content
- Usage of the Chrome messaging API to communicate between content scripts and background scripts on the completion of scraping
- Making API requests to the backend for relevant articles and the tags associated with linked/relevant content
- Dynamic injection of a pre-compiled React & Redux application into a Reddit post
- Usage of Chrome's storage API to transfer fetched data from background scripts to the injected application
- A React application to present all relevant articles
- Usage of Redux and redux-promise to maintain state application, specifically the articles to show, whether they be the initially-rendered articles, or new ones fetched based on tags. (Redux came in clutch by allowing us to maintain application in a fairly clean manner).
- A fair amount of JavaScript and CSS to ensure that the injected application both looks nice and does not interfere with existing content

### I want to run it!
To get the application running, follow these steps:
```bash
# Clone the repository
git clone https://github.com/PRAN1999/RNA.git
cd RNA

# Run the Flask server (see below for instructions on creating the config file)
cd server
pip3 install -r requirements.txt
python3 run.py

# Build the extension in another terminal tab
cd embedded-client
npm run install
npm install -g parcel
# Running build.sh will build the extension into a single 'build' folder 
source build.sh
```

In order to be able to run the Flask server, you'll need to create a `config.ini` file inside the `server` directory. The file should have the following format:

```ini
# Sign up for IBM Watson's Natural Language Understanding library at https://www.ibm.com/watson/developer/
[Watson]
watson_url=<URL from registration>
watson_api_key=<API key given by IBM>
watson_api_version=<The date on which you activated your Watson developer account>

# Register for the News API at https://newsapi.org/
[NewsAPI]
news_api_key=<Your API key>

# Create an account on Reddit and visit https://www.reddit.com/prefs/apps/ to register a development application
[Reddit]
reddit_client_id=<Client ID>
reddit_client_secret=<Client Secret>
reddit_username=<Reddit Username>
reddit_password=<Reddit Password>
reddit_user_agent=<The name of the development application>
```

With all of these steps complete, follow these steps to install the extension:
- Go to the `chrome://extensions` URL in Chrome
- Click the `Load unpacked` button
- In your file explorer, navigate to the `embedded-client` folder of the repository, and select the `build` folder to be uploaded
- The extension should be up and running! Just visit any Reddit post (or the comments section if the post redirects to a link), and RNA should do its magic.

# DevPost Submission:

## Inspiration


## What it does

RNA reads the current Reddit post the user is viewing sends a request to our web server to analyze the contents of either the post itself of any linked articles in the post to find relevant keywords using the IBM Watson API. Then, these keywords are sent as a search query to the News API in order to find other recent articles that the user could use as related supplemental reading. On the UI, these keywords and articles are displayed, and the user is given the option to narrow down their search by selecting a subset of given keywords.

## How we built it


## Challenges we ran into

As a means of 

## Accomplishments that we're proud of

## What we learned

## What's next for Reddit News Accessory (RNA)