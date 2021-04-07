# Wonderlust - Explore the unexpected
![alt text](https://github.com/anorangesky/wonderlust/blob/master/src/images/wonderlust2.png?raw=true)

"We show you places Google Maps won't" 

## Project description
Find interesting unexpected attractions in your local area. We fetch articles from Wikipedia that are related to a location (long, lat) and display them on a map using Google Map API. The users will be able to explore attractions on the map either by drag-drop or searching for a location in the search bar. As a logged-in user, you will also be able to share, save, and add new attractions to the map (stored in Firebase).  

## Midterm update (what we have done so far)
- Project prototype in Figma
- Early user evaluation on the prototype and the project concept both on Mobile and Desktop
- Connect Google Map API
- Search bar 
- Support for fetching articles from Wikipedia (MediaWiki API)
- Details view connected to each location marker on the map  
- User auth using Google and Email (including user signup) through Firebase
- Wonderlust logotype including color theme and font style
- Log in/sign up with Google and email
 
## Backlog (what we still plan to do)
- Logged in user functionalities
  - Save attractions
  - share attractions
  - add friends (or explorer buddies)
  - notification view
  - settings (change user name, password, added attraction, etc.)
  - your saved attractions (show them in a list and a map)
- Update Google markers when the user moves around the map
- Add clustering of markers 
- Add search functionality to the map
- Design: Update Google’s map-markers to our WL markers
- Add login with FB 
- User evaluation
- Jest tests 
- Bugfix

## Project file structure (short description/purpose of each file)
- wonderlust/public
- -  Favicon.ico  
- -  index.html - main html page
- -  manifest.json
- -  robots.txt
- wonderlust/src
- -   css/ contains style sheets for the different views
- - - detailsView.css
- - -  loginView.css
- - -  mapView.css
- - -  searchView.css
- - - titleView.css
- - images/ contains images used as the logo and/or placeholders
- -  redux/ contains redux specific content
- - -  Reducer.js - Reducers and action creators
- - -  stateToProps.js - Functions for connecting redux to props
- - -  Store.js - Redux store
- - services/ contains Firebase and Wikimedia specific code
- - -  Firebase.js - Code for app configuration and init, user authentication including providers
- - -  wikiSource.js - Code for API calls and fetching article data 
- - views/ contains the different views of Wonderlust
- - - authViews/ contains components relevant for authorization
- - - - AuthView.js - Shows the login and signup forms
- - - - LoginEmail.js - Component for logging in using email
- - - - LoginFB.js - Component for logging in using FB
- - - - LoginGoogle.js - Component for logging in using Google
- - - - SignUpEmail.js - Sign-up form for email account
- - - addAttractionView.js - View for adding attractions (locations) to the map
- - - detailsView.js - Component showing info about an attraction
- - - friendListView.js - Displays a list of the users friends
- - - mapView.js - Component displaying a map with markers 
- - - navigationView.js - Menu bar or navigation component when logged in
- - - notifcationView.js - Summary of notifications from the users friends
- - - searchView.js - Component for searching for places
- - - settingsView.js - User account settings
- - - shareView.js - View for sharing locations with friends
- - - titleView.js - Component showing the website logo and title
- - - yourListView.js - Displays a list of saved or created attractions
- - - yourMapView.js - Display saved or createdattractions on a map
- App.js - Main component where the views are put together
- Index.js - Renders the App
- setupTests.js - For our jest-tests 
- (.env) - Not in the repository, but keeps environment variables locally

## Created by 
- Agnes Petäjävaara <agnespet@kth.se> [anorangesky](https://github.com/anorangesky)
- Erik Bauer <ebauer@kth.se> [eribau](https://github.com/eribau)

