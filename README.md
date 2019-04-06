# Reddit Basic

### Description
A basic copy of the website Reddit for a college assignment. In this project we were instructed to build a REST API using Nodejs and Typescript and Postgres as the database. We should also be able to run a Unit and Integration Test using Chai, Mocha and Supertes libraries. I have also used the Inversify framework to implement IOC (Inversion of Control) and Dependency Injection in this project.

### Requirements
* Nodejs
* NPM (Node Package Manager)
* Postgres

### How to run this project?
1. Clone this repository to your machine with the command - $ `git clone https://github.com/rbsrafa/reddit-basic.git`.
1. Open the reddit/src/backend/config/db.config.ts file and change the `port`, `host`, `username`, `password` and `database` values to match your own database settings.
1. Log into postgres shell and create a new database with the command - $ `CREATE DATABASE reddit;`
1. In the project's root directory `/reddit` type the command - $ `npm install`
1. After NPM installs all dependencies type - $ `npm start`