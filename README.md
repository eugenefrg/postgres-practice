NOTE: This practice is being run on a windows machine.

This is a CLI that could do a basic CRUD for a fish database with Postgres.

See https://www.postgresqltutorial.com/postgresql-getting-started/install-postgresql/
for installation.

Installing postgres v16.1
ensure CLI tools are installed, may need this for this application.
Note step #3 in the doc above to add the bin directory to the PATH env.
The installation did not give me a plsql command, only psql.

Installing NVM
I'm installing NVM to make sure I can use different node versions when I need it.
https://github.com/coreybutler/nvm-windows#installation--upgrades
I'm using the nvm-setup.exe. after this, you may need to restart terminal.

```
nvm install lts
nvm use lts
```

using lts as this project currently is just for practice. Current LTS is node.js version 20.12.2

initial setup
```
npm install typescript --save-dev // makes my life easier
npx tsc init
```

database setup
``` cmd
psql -U postgres // login to postgres with your username. (replace postgres with your user)

CREATE DATABASE fish_database; // create the database
\l // list databases

\c fish_database // use/connect database

CREATE TYPE origin_type AS ENUM ('Sea', 'River', 'Lake', 'Ocean');

CREATE TABLE fish (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    species VARCHAR(100),
    origin origin_type
);

\q //quit
```
