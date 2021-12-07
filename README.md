# Walnut Take-Home Assessment

## Backend Info and Start Up
I built my application with full-stack app with the following frameworks.
```Node, Express, Knex, Postgres, Json Web Token, Nodemon, Supertest, Jest```

I utilized Json Web Tokens to send from the server side to the client side to act as authentication and security. I was also able to save the token on local storage and validate it on both the front and back end.

Please navigate to the ```backend-walnut``` directory, then run either ```npm run watch``` or ```npm start``` for the backend. I utilized Nodemon so that I would not need to restart my server constantly.

## Frontend Info and Start Up
The frontend was primarily built with a ```React``` framework and feel free to run navigate to the ```frontend-walnut``` directory, then run ```npm run start``` to start up the front end.

## Ways I can Improve
Given the time constraint, here are some ways that I would have wanted to improve the app.

- Password Requirements: I would have wanted to make certain requirements to setup passwords on both the frontend and backend to insure there were no simple passwords.
- More Detailed Login: Having the exact username when a user logged in would have been a nice feature to have, other than the fact that they are logged in and authenticated.
- Brainstorming and potentially implementing more secure ways to store the Json Web Token aside from local storage would also be a way to improve this app. 
- Additional Test Code: I was not able to write as much test code as I wanted to. It would have been beneficial to think of and write more test to run my code against.
- Styling: I utilized bootstrap to give the app a sense of styling, but it was not the focus of the application. I would have wanted to make the UI/UX a bit better, but I sacrificed it given the time constraint.