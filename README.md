## Northcoder's News

Northcoders News is a social news aggregation, web content rating, and discussion website.

## URL

The site is deployed through Netlify and can be accessed at:

https://5be15a0c3813f067dfdf3338--northcoder-s-news.netlify.com

It can also be viewed through Github:

https://github.com/slh2610/northcoders-news

## Back End:

The back-end of this project was created by a MongoDB and Express

The back end API can be found at:

https://sallysnc-news.herokuapp.com/

It can also ve viewed through Github:

https://github.com/slh2610/Northcoders-News-Back-end

## Getting Started

The following dependencies are used:
-@reach/router
-axios
-chart.js
-dayjs
-react
-react-chartjs-2
-react-spinners

Run 'npm -i' to install all dependencies

Once installed run 'npm start' to run the website on localhost:3000

## Basic Use

Users can view a list of articles on the homepage, as well as a list of articles under each topic. They can also see which articles have the highest number of votes, and which users have posted the most articles by viewing the charts on the left of the page.
Users must login to view or add articles, vote, view or add comments.

## Login

In order to access all of the features, on the deployed link the website is already logged in. To login click 'logout' and then it will take you to the login component.

The website has no password authentication and a user can login using one of the following usernames:

-jessjelly
-happyamy2016
-grumpy19
-tickle122
-weegembump
-cooljmessy

There is not currently any password authentication for the website so once a username is entered you can click "login" without entering a password.

## Functionality

Northcoders News has articles which are divided into topics. Each article has user curated ratings and can be up or down voted using the API. Users can also add comments about an article. Comments can also be up or down voted. A user can add comments and remove any comments which they have added.

You must be logged in to view articles, add comments or articles or vote on comments or articles.

## Charts

The pie chart shows the most popular articles by number of votes.
The bar chart underneath shows the number or articles written by each user. To view which articles are written by each user, click on the bar and it will show a table of articles.
