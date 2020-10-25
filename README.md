# Weather-Server 

### Date
October 26th, 2020

### Tech Stack and Why I Chose What I did

- Looking at the stretch goals and seeing that deploying the application was one of them, I decided to start a new serverless project, because I have worked with it previously, and it's such a breeze to get something up and running. 
- On top of that I chose typescript for the backend because I wanted the extra validation that comes with type checking, and I'm most familiar with typescript/javascript. 
- On the front-end I just went with javascript for my react project instead of typescript, because I wasn't sure how much time I was going to have to get things up and running, and pausing to type things just takes that extra second here and there. 

### Location of deployed application
If applicable, please provide the url where we can find and interact with your running application.

### Time spent
~6.5 hours

### Assumptions made
- I assumed that the only item the user would provide would be the city they wanted the weather from
- ?

### Shortcuts/Compromises made
- I definitely could have spent some more time on the front-end, ensuring that there were tests written, etc, but I was already over time and wanted to not push it further.
- In the same vein, I could have made the front-end more mobile friendly.
- I took a shortcut with the google auth. It's a quick and easy way to get authentication on an application, and I have worked with it before so it was an opportunity I took.

### Stretch goals attempted
- I attempted all the stretch goals.
     - My application is deployed
     - My application has simple auth
     - My application has a simple UI
     - My application proxies a real weather API

- Mentioned above, but I wish I had had more time to spend on the front-end to make it more mobile friendly. My initial design for the UI that I had had in my head was something very closely resembling a mobile app, but I know making something mobile friendly takes a little more time and I wanted to ensure I hit all the stretch goals without going too much over time.

- I started out a new project using serverless, and immediately proxying the openWeatherAPI, so I feel as though I got a headstart there, and that went really well. I've worked with serverless before, and it's a breeze to deploy applications.

### Instructions to run assignment locally
- Clone the repo
- run -> ```npm install```
- create a .env file in the root folder of your project -> ``` touch .env```
- Take a look at the .env.example file I've included, and set up the same structure using your openWeatherMapsAPI key
- run -> ```npm run start```

### What did you not include in your solution that you want us to know about?
Were you short on time and not able to include something that you want us to know
about? Please list it here so that we know that you considered it.

### Other information about your submission that you feel it's important that we know if applicable.
### Your feedback on this technical challenge
Have feedback for how we could make this assignment better? Please let us know.
