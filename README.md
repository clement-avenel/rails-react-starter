[![CodeQL](https://github.com/clement-avenel/rails-react-starter/actions/workflows/codeql.yml/badge.svg)](https://github.com/clement-avenel/rails-react-starter/actions/workflows/codeql.yml)
[![Ruby on Rails CI](https://github.com/clement-avenel/rails-react-starter/actions/workflows/rubyonrails.yml/badge.svg)](https://github.com/clement-avenel/rails-react-starter/actions/workflows/rubyonrails.yml)
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
