# Ice and Fire Node Express Challenge

Today we will be building a server that will serve up data from the Ice and Fire API. We will be using the [Express](https://expressjs.com/) framework to build our server.

## Instructions

To conquer this challenge, complete the tasks listed below.

Run your server with `npm run server`. Use [Postman](https://www.getpostman.com/downloads/) to test your routes.

## Part I - Setup

### Setup

- [ ] Fork and clone this repositoryInstall dependencies with `npm install`
- [ ] Install dependencies with `npm install`
- [ ] Create an `app.js` file in the root of the project
- [ ] Create folders for controllers and routes
- [ ] Review the resources listed in the [Ice and Fire API documentation](https://anapioficeandfire.com/Documentation)
- [ ] Download [Postman](https://www.getpostman.com/downloads/) to test your routes

### Create a server in `app.js`

- [ ] Import express
- [ ] Create an express app
- [ ] Create a server with `app.listen()`
- [ ] Create a GET route for `/` that sends a response of `Hello World!`
- [ ] Test your server with `npm run server` and visiting `localhost:3000`

## Part II - Building an API

### Create the following routes and controllers using the Ice and Fire API

- [ ] Create a route for `/characters` that returns a list of 20 GOT characters
- [ ] Create a route for `/character/name/:name` that returns a single character by name
- [ ] Create a route for `/character/titles/:name` that returns a list of titles for a single character
- [ ] Create a route for `/characters/:page` that returns a list of characters based on a page number
- [ ] 🌶️ Refactor the `/characters/:page` controller function to use a query to return a specific number of characters per page

## Part III - Combining Data

### Create the following routes and controllers using the Ice and Fire API

- [ ] Create a route for `/character/books/:name` that returns a list of book titles for a single character
- [ ] Create a route for `/character/allegiances/:name` that returns a list of character names for a single character's allegiances
- [ ] Create a route for `/overlords` that returns a list of all the characters who are House Overlords

## Part IV - Error Handling Middleware

- [ ] Build a custom `errorHandler` function in the `errorMiddleware.js` file that responds with the error status and error message if an error occurs inside the `catch` block of the characterControllers
- [ ] Check if your error handler works by commenting out your controller function code and adding `throw new Error('Error hit')` and running the route in Postman

## Part V - Error Handling Middleware for Invalid Path

- [ ] Build a custom `invalidPathHandler` function in the `errorMiddleware.js` file that returns a status of 404 and an "Invalid path" message if a user attempts to use a url path that is not a router.
