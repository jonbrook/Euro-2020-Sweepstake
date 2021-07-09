# Euro 2020 Sweepstake Project

> Codeworks Solo Project

## Table of contents

- [Goal](#goal)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)
- [Features](#features)
- [Status](#status)
- [Contact](#contact)

## Goal

Build a portal to manage sweepstakes for the Euro 2020 tournament, utimately to replace manually managed sweepstakes that are on paper or in spreadsheets.

## Screenshots

<img src="img/login.png" width="25%">
<img src="img/main.png" width="25%">

## Tech Stack

- Express
- Sequelize (using Postgres)
- React

## Setup

1. Clone the repo

```
git clone https://github.com/jonbrook/Euro-2020-Sweepstake.git
cd Euro-2020-Sweepstake
```

2. Configure environment variables

```
Sign up for an account on https://www.api-football.com/ and create .env files using the examples in both the frontend and backend.
```

3. Install all dependencies

```
cd backend && npm install
cd frontend && yarn
```

4. Run postgres and redis services

```
docker-compose up -d
```

5. Start the backend

```
cd backend && npn run dev
```

6. Start the fronend

```
cd frontend && yarn start
```

7. Create a new user

```
Use postman collection to send request to POST /user
```

## Features

List of features ready:

- Basic login (email address only, no auth)
- Create new or join existing sweepstake pools using unique codes
- Make predictions per pool on the group stages of the tournament
- Predictions cannot be updated once each match kickoff has passed
- Leaderboard to keep track of current pool standings

Future suggested improvements:

- Login using an auth provider such as Auth0
- Add names to pools in to make them more identifiable by users
- Add knockout stages to the pool predictions
- Customisable point scoring by owner of each pool
- Improved cross device UI

## Status

Project is: _Work in Progress_

## Contact

Created by [@jonbrook](https://github.com/jonbrook) - feel free to contact me!
