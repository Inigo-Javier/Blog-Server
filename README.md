# Blog-Server project
## Introduction
This is a simple server raised in express to connect to a hosted database on Mongo Atlas.The main reason is to give data for a User Interface maked on ReactJs.

## Structure

The server and connection to the database is made in the index.js file.
Also we have middleware functions like:


|  middlewar    | http://localhost:PORT+ | routes files  |
| ------------- |:----------------------:| -------------:|
| app.use       | "/api/auth"            | auth.js       |
| app.use       | "/api/users"           | categories.js |
| app.use       | "/api/posts"           | posts.js      |
| app.use       | "/api/categories"      | users.js      |

to access routes.







