import { objectType, inputObjectType } from 'nexus'

export const Alert = objectType({
  name: 'Alert',
  definition(t) {
    t.string('title', { nullable: true })
    t.string('time', { nullable: true })
    t.string('expires', { nullable: true })
    t.string('description', { nullable: true })
    t.string('uri', { nullable: true })
  },
})
export const Forecast = objectType({
  name: 'Forecast',
  definition(t) {
    t.string('summary', { nullable: true })
    t.string('icon', { nullable: true })
    t.list.field('data', {
      type: WeatherData,
      nullable: true,
    })
  },
})

export const Weather = objectType({
  name: 'Weather',
  definition(t) {
    t.float('latitude', { nullable: true })
    t.float('longitude', { nullable: true })
    t.string('timezone', { nullable: true })
    t.field('currently', { type: WeatherData, nullable: true })
    t.field('minutely', { type: Forecast, nullable: true })
    t.field('hourly', { type: Forecast, nullable: true })
    t.field('daily', { type: Forecast, nullable: true })
    t.list.field('alerts', {
      type: Alert,
      nullable: true,
    })
  },
})
export const WeatherData = objectType({
  name: 'WeatherData',
  definition(t) {
    t.string('time', { nullable: true })
    t.string('summary', { nullable: true })
    t.string('icon', { nullable: true })
    t.int('nearestStormDistance', { nullable: true })
    t.float('precipIntensity', { nullable: true })
    t.float('precipIntensityError', { nullable: true })
    t.float('precipProbability', { nullable: true })
    t.string('precipType', { nullable: true })
    t.float('temperature', { nullable: true })
    t.float('apparentTemperature', { nullable: true })
    t.float('dewPoint', { nullable: true })
    t.float('humidity', { nullable: true })
    t.float('pressure', { nullable: true })
    t.float('windSpeed', { nullable: true })
    t.float('windGust', { nullable: true })
    t.int('windBearing', { nullable: true })
    t.float('cloudCover', { nullable: true })
    t.int('uvIndex', { nullable: true })
    t.int('visibility', { nullable: true })
    t.float('ozone', { nullable: true })
    t.float('precipIntensityMax', { nullable: true })
    t.float('precipIntensityMaxTime', { nullable: true })
    t.float('temperatureHigh', { nullable: true })
    t.string('temperatureHighTime', { nullable: true })
    t.float('temperatureLow', { nullable: true })
    t.string('temperatureLowTime', { nullable: true })
    t.float('apparentTemperatureHigh', { nullable: true })
    t.string('apparentTemperatureHighTime', { nullable: true })
    t.float('apparentTemperatureLow', { nullable: true })
    t.string('apparentTemperatureLowTime', { nullable: true })
    t.string('windGustTime', { nullable: true })
    t.string('uvIndexTime', { nullable: true })
    t.float('temperatureMin', { nullable: true })
    t.string('temperatureMinTime', { nullable: true })
    t.float('temperatureMax', { nullable: true })
    t.string('temperatureMaxTime', { nullable: true })
    t.float('apparentTemperatureMin', { nullable: true })
    t.string('apparentTemperatureMinTime', { nullable: true })
    t.float('apparentTemperatureMax', { nullable: true })
    t.string('apparentTemperatureMaxTime', { nullable: true })
  },
})

export const WeatherByLatLngInput = inputObjectType({
  name: 'WeatherByLatLngInput',
  definition(t) {
    t.float('lat')
    t.float('lng')
  },
})
