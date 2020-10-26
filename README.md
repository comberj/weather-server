# Weather-Server

### Date
- October 25th, 2020

### Tech Stack and Why I Chose What I did

- Looking at the stretch goals and seeing that deploying the application was one of them, I decided to start a new serverless project, because I have worked with it previously, and it's such a breeze to get something up and running. 
- On top of that I chose typescript for the backend because I wanted the extra validation that comes with type checking, and it is a language I'm familiar with.
- I chose not to include a database, as looking at the project requirements, I didn't see the need for one. If I had to create a further stretch goal for myself it would be to include a DB and keep a record of a user's searches.

### Location of deployed application:

- Front end is found here: https://d3ivsw43iuvhsd.cloudfront.net/
- Server is found here: https://l50szzra01.execute-api.us-west-1.amazonaws.com/development/weather

- I do have a domain registered to me, but left the setting up of this domain too late to hand in the project in time. So unfortunately the urls above aren't as friendly looking as they could be.

### Time spent:
- Roughly 6.5 hours spread out over the weekend.

### Assumptions made:
- I assumed that the only item the user would provide would be the city they wanted the weather from, and not the standard of measurement, for instance.
- I assumed that the user didn't want ALL the data that the json response had to offer, and instead only the relevant highlights.
- I assumed that having the clientID - for my google login - not abstracted out in the front-end would be alright, seeing as it isn't a secret. This is something I would abstract out usually.
- I assumed having the authentication on the front-end alone would be fine. I wanted to give the users the opportunity to skip authentication if, for instance, they were worried about signing in with their google account ( maybe they don't like giving their email/name away ) - and since we're not doing anything with the information on the backend, since I've no database, I figured having a simple check on the front-end would be fine.

### Shortcuts/Compromises made:
- I definitely could have spent some more time on the front-end, ensuring that there were tests written, etc, but I was already over time and wanted to not push it further.
- In the same vein, I could have made the front-end much more mobile friendly.
- I took a shortcut with the google auth. It's a quick and easy win for authentication. 
- I took a shortcut with the auth being on the front-end and not server-side. 

### Stretch goals attempted:
- I attempted all the stretch goals.
     - My application is deployed
     - My application has simple auth
     - My application has a simple UI
     - My application proxies a real weather API

#### What could have been better:
- Authentication could have been server-side. If I had included a database, then I could have done something fun on the front-end with the user's weather search history.
- I could clean up the front-end significantly. There are a few blocks of code which could have been broken down further into components. On top of that I'm sure theres a class or two that might be being incorrectly used.
- The front-end could have been done in typescript as well, to get that extra little bit of validation, and developer friendliness.
- The front-end could have included tests. 
- I could have abstracted out a few more things, such as the google client ID present in the login/logout components.

#### What went well:
- I started out a new project using serverless, and immediately proxying the openWeatherAPI, so I feel as though I got a headstart there.
- I feel as though the front-end is relatively mobile friendly.

### Instructions to run assignment locally
- Clone the repo
- cd into the front-end and back-end folders and run ```npm install```


- The back-end by default should be running on http://localhost:4000
- In the back-end create a .env file in the root folder of your project -> ``` touch .env```
- Take a look at the .env.example file I've included, and set up the same structure using your openWeatherMapsAPI key, it should be called WEATHER_KEY=...
- run -> ```npm run start```


- The front-end by default should be running on http://localhost:3000
- run -> ```npm run start```
- You should be able to visit http://localhost:3000 and see the app in action!

### What did you not include in your solution that you want us to know about?
- I wanted to build out a forecast feature on the front-end. I have the API available to be hit, for instance you can hit ```localhost:4000/weather-api/weather/Vancouver/forecast``` if you have the back-end running locally, and wanted to test via Postman or some other tool. Sadly I did not have enough time for this, but the handler is present on the back-end, as are the tests.

### Other information about your submission that you feel it's important that we know if applicable.
- Users might experience cold starts, since I'm using lambda functions

### Your feedback on this technical challenge
- I really enjoyed the challenge. It's quite vague, which I like, as it lets you decide where to go and how to implement the solution. I thoroughly enjoyed the fact that it was full stack, as I feel as though I got some good practice in some areas where I was feeling rusty. 
