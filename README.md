# Weather-App

## Description
You build server that return location data and weather status of this location.
This project uses the following services: [open weather map api](https://openweathermap.org/api), [ip-api](https://ip-api.com/) and [mapbox](https://www.mapbox.com/)

## Install dependencies
- Clone the repository git clone https://github.com/peamarelle/Weather-App.git

- Go to directory: cd Weather-app

- Run command npm install or npm i

- Create .env file with port

## Packages
- fastify (create server).
- nodemon (aplication refresh whenever we modify code).
- jest and supertest for testing
-fastify-swagger (A Fastify plugin for serving a Swagger UI, using Swagger (OpenAPI v2) or OpenAPI v3 schemas automatically generated from your route schemas)

## Endpoints
#### GET /documentation
You can view the swagger documentation.
#### GET v1/location
Returns the city location data according to ip-api.
#### GET v1/weather
Returns the location data
current according to ip-api and the weather status.
#### GET v1/weather/{city}
Returns city location data and current weather status
#### GET v1/forecast
Returns the location data current according to ip-api and the weather status to 5 days.
#### GET v1/forecast/{city}
Returns city location data and 5 day weather status.