[![CodeQL](https://github.com/clement-avenel/rails-react-starter/actions/workflows/codeql.yml/badge.svg)](https://github.com/clement-avenel/rails-react-starter/actions/workflows/codeql.yml)
[![Ruby on Rails CI](https://github.com/clement-avenel/rails-react-starter/actions/workflows/rubyonrails.yml/badge.svg)](https://github.com/clement-avenel/rails-react-starter/actions/workflows/rubyonrails.yml)

![Rails React Starter Banner](https://user-images.githubusercontent.com/29872940/216771882-081504e1-30d1-4c27-a281-4be5f940c5a5.png)

# Rails React Starter

It combines the power of the React JavaScript framework with the simplicity and robustness
of the Rails web application framework. The project is set up with a Rails backend that
serves a JSON API and a React frontend that consumes the API and manages the
application&apos;s state.

## Tech Stack
- Ruby 3.1.2
- Rails 7.0.4
- React 18.2.0
- TailwindCSS 3.2.4
- Docker

## Setup Rails
- `cd server`
- `bundle install`
- `rails db:create`
- `rails db:migrate`
- `rails db:seed`

## Setup React
- `cd client`
- `npm install`

## Run Rails
- `cd server`
- `rails s`

## Run React
- `cd client`
- `npm start`

## Setup with docker
Assuming you have docker and docker-compose installed
- `docker-compose run server bin/rails db:create db:migrate db:seed`

## Run with docker
- `docker-compose up`
