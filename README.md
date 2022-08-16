# Blog-Server project
## Introduction
This is a simple server raised in express to connect to a hosted database on Mongo Atlas.The main reason is to give data for a User Interface maked on ReactJs.

## Structure

The server and database connection is made on the index.js file.
Also we have middleware functions like:


|  middlewar    | localhost:PORT         | routes files  |
| ------------- |:----------------------:| -------------:|
| app.use       | "/api/auth"            | auth.js       |
| app.use       | "/api/users"           | categories.js |
| app.use       | "/api/posts"           | posts.js      |
| app.use       | "/api/categories"      | users.js      |

to access routes.


### auth.js

| Description              | route                  | method        |
| ------------------------ |:----------------------:| -------------:|
| create user              | "/register"            | post          |
| login user               | "/login"               | post          |

### categories.js

| Description              | route                  | method        |
| ------------------------ |:----------------------:| -------------:|
| create categorie         | "/"                    | post          |
| find categorie           | "/"                    | get           |

### posts.js

| Description              | route                  | method        |
| ------------------------ |:----------------------:| -------------:|
| create post              | "/"                    | post          |
| update post              | "/:id"                 | put           |
| delete post              | "/:id"                 | delete        |
| find all post            | "/:id"                 | get           |
| find a post by query     | "/?user=name"          | get           |
 
### user.js

| Description              | route                  | method        |
| ------------------------ |:----------------------:| -------------:|
| update user              | "/:id"                 | put           |
| delete user              | "/:id"                 | delete        |
| find user                | "/:id"                 | get           |




