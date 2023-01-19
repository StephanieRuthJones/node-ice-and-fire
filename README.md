# Ice and Fire Node Express Challenge

Today we will be building a server that will serve up data from the Ice and Fire API. We will be using the [Express](https://expressjs.com/) framework to build our server.

## Instructions

To complete this challenge, you will need to:

- [ ] Fork and clone this repository
- [ ] Install dependencies with `npm install`

## Part I

### Setup

- [ ] Fork and clone this repositoryInstall dependencies with `npm install`
- [ ] Install dependencies with `npm install`
- [ ] Create an `app.js` file in the root of the project
- [ ] Create folders for controllers and routes
- [ ] Review the resources listed in the [Ice and Fire API documentation](https://anapioficeandfire.com/Documentation)

### Create a server in `app.js`

- [ ] Import express
- [ ] Create an express app
- [ ] Create a server with `app.listen()`
- [ ] Create a GET route for `/` that sends a response of `Hello World!`
- [ ] Test your server with `nodemon app.js` and visiting `localhost:3000`

### Create the following routes and controllers using the Ice and Fire API

- [ ] Create a route for `/characters` that returns a list of 20 GOT characters
- [ ] Create a route for `/characters/:page` that returns a user-specified number of GOT characters (up to 50) from a user-specified page number
- [ ] Create a route for `/character/name/:name` that returns a single character by name
- [ ] Create a route for `/character/titles/:name` that returns a list of titles for a single character

## Part II

### Create the following routes and controllers using the Ice and Fire API

- [ ] Create a route for `/character/books/:name` that returns a list of book titles for a single character
- [ ] Create a route for `/character/allegiances/:name` that returns a list of character names for a single character's allegiances
- [ ] Create a route for `/characters/overlords` that returns a list of all the characters who are House Overlords
