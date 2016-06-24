# TTrack

[![Build Status](https://travis-ci.org/25th-floor/ttrack.svg?branch=master)](https://travis-ci.org/25th-floor/ttrack)

A Time Tracking application.

## Getting Stated

### Dependencies
First you need a postgres Database with at least version 9.3.

For manual installation you also need npm and the npm package db-migrate:
```
$ npm install -g db-migrate
```

### Manual Install
Then you need the two config files from config:
```
cp config.json.example config.json 
cp database.json.example database.json
```

Adjust the config to your setup and then you need to install the database migrations using:
```
db-migrate up
```

To start the server you need the node environment `NODE_ENV` setup to `production`.
Then call npm to start the server:
```
npm start
```

### Docker Variant

Starting with docker does not require any node or npm present on the host machine, just docker itself.
For development the use of docker-compose is recommended.

The following describes the development environment, deployment/production setup will follow soon.

#### Starting the application
The first block is only required to install the database schema before the actual application
starts and can be omitted afterwards:
```
docker-compose up -d database
docker-compose run app migrate
# docker-compose run app install-demo-data # (optional, and not working yet - have a look at docker/demo_data.sql)

docker-compose up
```

## Administration

To setup the users you need to be comfortable using the psql shell and working with the database as there is no Administration Interface, everything is done using pure sql.
The `user` table is your main starting point.

Also the austrian holidays are kind of hardcoded.

## Development

This section explains how to develop the TTrack application.

### Getting Started

To start developing you have to run the app in dev mode.
Prefer to do this locally which will be more efficient.

```
# don't forget migrations!
$ db-migrate up

# start the TTrack server (port 8080)
$ npm start

# start the webpack dev server
$ npm run dev

# open the app
$ open http://localhost:8080
```

The webpack dev server watches the sources and serves the built JS and CSS with hot reloading enabled.
The TTrack server serves the main index.html and the rest API. It requests JS and CSS from the webpack dev server.

### Contributors

Since because of security concerns we needed to purge the git commit history, here are the contributors of the project.

* Marcus Artner <ma@25th-floor.com>
* Andreas de Pretis <ad@25th-floor.com>
* Stefan Oestreicher <so@25th-floor.com>
* Martin Prebio <martin.prebio@gmail.com>
* Robert Prosenc <rp@25th-floor.com>
* Ali Sharif <as@25th-floor.com>
* Pierre Strohmeier <ps@25th-floor.com>
* Thomas Subera <thomas.subera@gmail.com>

### History

It all started as a fun project and never majored of it. It is strictly a tool for tracking our times with our needs. (f.e. Austrian Holidays, no Administration, ...)
