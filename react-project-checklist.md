##Planning
Copy this list into your project Outline functionality of your app Draw main views of app Break out components from your views Name your components Draw component hierarchy Plan routing Label where you will require functions that change state Label where you will require data Determine from this where you will require state & hold functions

##Setup
Create your app directory (e.g. with create-react-app) Run your app Git init (unless cloned!), gitignore config, make an initial commit Ensure you have React DevTools running

##Static
Make blank components (functional or class?) as per your plan Create reuasable components e.g. buttons, inputs Export and import components as per your hierarchy Check everything is hooked up - you may want to add positional styling here to match your planned layout. DO NOT do any cosmetic styling yet! Write static render methods with mock data Add expected propTypes (adapt this as necessary)

##Dynamic (order may be a bit looser here!)
Create .api file Construct componentDidMount functions Create functions that setState Add expected props to component instantiation Add mapping / looping for creating multiple components Deal with component lifecycle issues, e.g. making new api calls on componentDidUpdate Add event handlers

##Style
Add classNames Create and .css files Write application CSS - sitewide styling choices like fonts, colour pallettes Write component specific CSS

##End Points
GET /api

4: GET /api/topics *

5: GET /api/topics/:topic_slug/articles *

8: POST /api/topics/:topic_slug/articles

1: GET /api/articles *

2: GET /api/articles/:article_id *

3: GET /api/articles/:article_id/comments *

7: POST /api/articles/:article_id/comments *

10: PATCH /api/articles/:article_id?vote=up (to increment votes by one) /api/articles/:article_id?vote=down (to decrease votes by one) *

11: PATCH /api/comments/:comment_id?vote=up (to increment votes by one) /api/comments/:comment_id?vote=down (to decrease votes by one) *

9: DELETE /api/comments/:comment_id *

6: GET /api/users/:username *

##Components
1: Articles 2: ArticleById 3: AddArticle 4: Comments 5: AddComment 6: Sign in 7: Logout 8: NavBar 9: VoteChange 10: popular articles 11: Active Users

##To-Do
change the H1 of the webpage to the type of topic.
Refactor the getArticleByTopic part.
Put some sort of feedback if the wrong username is input
Check all prop-types
Check all keys
Check to see if it is DRY
Testing