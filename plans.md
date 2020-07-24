# Some Notes

## Helpful Blogs/Documentation
- PostgreSQL
    - ***Documentation*** - https://www.postgresql.org/docs/current
    - ***Compartamentalize DB*** https://itnext.io/how-to-share-a-single-database-connection-in-a-node-js-express-js-app-fcad4cbcb1e
    - 

## Structure
- Current Routes
    - Users
        1. GET - /users | getUsers()
        2. GET - /users/:id | getUserById()
        3. POST - users | createUser()
        4. PUT - /users/:id | updateUser()
        5. DELETE - /users/:id | deleteUser()

## Miscellaneous
- "How should I structure my app?"
    - depends on scale of app and team involved
        - I'm solo rn
    - routes and other app specific logic can live in as many files as you wish in any directory structure
- how to show tables in psql: "\dt;"

## TODO
- Hook up a Database (Postgresql) - DONE
    - compartamentalize DB (figured out how to setup a database module so that we could use a DB connection throughout our application)
    - grab some users through HTTP requests
- Create user signup and login functionality
    - email forms??

## MVP
- ***Account Functionality***
    - User Registration and Signing In
    - people have profiles

- ***FrontEnd***
    - React

- ***User Functionality***
    - implement 2-FA
    - people have points from 'upvotes' or 'downvotes'

- ***Blog Functionality***
    - people can comment as anonymous or with an account
    - people can upvote

## MYSQL Notes
- check status: sudo service mysql status
- start service: sudo service mysql start
- stop service: sudo service mysql stop
