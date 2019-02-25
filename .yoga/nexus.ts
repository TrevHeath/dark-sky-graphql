/**
 * This file was automatically generated by Nexus 0.9.14
 * Do not make changes to this file directly
 */

import * as ctx from "../src/context"


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  WeatherByLatLngInput: { // input type
    lat?: number | null; // Float
    lng?: number | null; // Float
  }
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  Alert: { // root type
    description?: string | null; // String
    expires?: string | null; // String
    time?: string | null; // String
    title?: string | null; // String
    uri?: string | null; // String
  }
  Forecast: { // root type
    data?: NexusGenRootTypes['WeatherData'][] | null; // [WeatherData!]
    icon?: string | null; // String
    summary?: string | null; // String
  }
  Query: {};
  Weather: { // root type
    alerts?: NexusGenRootTypes['Alert'][] | null; // [Alert!]
    currently?: NexusGenRootTypes['WeatherData'] | null; // WeatherData
    daily?: NexusGenRootTypes['Forecast'] | null; // Forecast
    hourly?: NexusGenRootTypes['Forecast'] | null; // Forecast
    latitude?: number | null; // Float
    longitude?: number | null; // Float
    minutely?: NexusGenRootTypes['Forecast'] | null; // Forecast
    timezone?: string | null; // String
  }
  WeatherData: { // root type
    apparentTemperature?: number | null; // Float
    apparentTemperatureHigh?: number | null; // Float
    apparentTemperatureHighTime?: string | null; // String
    apparentTemperatureLow?: number | null; // Float
    apparentTemperatureLowTime?: string | null; // String
    apparentTemperatureMax?: number | null; // Float
    apparentTemperatureMaxTime?: string | null; // String
    apparentTemperatureMin?: number | null; // Float
    apparentTemperatureMinTime?: string | null; // String
    cloudCover?: number | null; // Float
    dewPoint?: number | null; // Float
    humidity?: number | null; // Float
    icon?: string | null; // String
    nearestStormDistance?: number | null; // Int
    ozone?: number | null; // Float
    precipIntensity?: number | null; // Float
    precipIntensityError?: number | null; // Float
    precipIntensityMax?: number | null; // Float
    precipIntensityMaxTime?: number | null; // Float
    precipProbability?: number | null; // Float
    precipType?: string | null; // String
    pressure?: number | null; // Float
    summary?: string | null; // String
    temperature?: number | null; // Float
    temperatureHigh?: number | null; // Float
    temperatureHighTime?: string | null; // String
    temperatureLow?: number | null; // Float
    temperatureLowTime?: string | null; // String
    temperatureMax?: number | null; // Float
    temperatureMaxTime?: string | null; // String
    temperatureMin?: number | null; // Float
    temperatureMinTime?: string | null; // String
    time?: string | null; // String
    uvIndex?: number | null; // Int
    uvIndexTime?: string | null; // String
    visibility?: number | null; // Int
    windBearing?: number | null; // Int
    windGust?: number | null; // Float
    windGustTime?: string | null; // String
    windSpeed?: number | null; // Float
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  WeatherByLatLngInput: NexusGenInputs['WeatherByLatLngInput'];
}

export interface NexusGenFieldTypes {
  Alert: { // field return type
    description: string | null; // String
    expires: string | null; // String
    time: string | null; // String
    title: string | null; // String
    uri: string | null; // String
  }
  Forecast: { // field return type
    data: NexusGenRootTypes['WeatherData'][] | null; // [WeatherData!]
    icon: string | null; // String
    summary: string | null; // String
  }
  Query: { // field return type
    weatherByLatLng: NexusGenRootTypes['Weather']; // Weather!
  }
  Weather: { // field return type
    alerts: NexusGenRootTypes['Alert'][] | null; // [Alert!]
    currently: NexusGenRootTypes['WeatherData'] | null; // WeatherData
    daily: NexusGenRootTypes['Forecast'] | null; // Forecast
    hourly: NexusGenRootTypes['Forecast'] | null; // Forecast
    latitude: number | null; // Float
    longitude: number | null; // Float
    minutely: NexusGenRootTypes['Forecast'] | null; // Forecast
    timezone: string | null; // String
  }
  WeatherData: { // field return type
    apparentTemperature: number | null; // Float
    apparentTemperatureHigh: number | null; // Float
    apparentTemperatureHighTime: string | null; // String
    apparentTemperatureLow: number | null; // Float
    apparentTemperatureLowTime: string | null; // String
    apparentTemperatureMax: number | null; // Float
    apparentTemperatureMaxTime: string | null; // String
    apparentTemperatureMin: number | null; // Float
    apparentTemperatureMinTime: string | null; // String
    cloudCover: number | null; // Float
    dewPoint: number | null; // Float
    humidity: number | null; // Float
    icon: string | null; // String
    nearestStormDistance: number | null; // Int
    ozone: number | null; // Float
    precipIntensity: number | null; // Float
    precipIntensityError: number | null; // Float
    precipIntensityMax: number | null; // Float
    precipIntensityMaxTime: number | null; // Float
    precipProbability: number | null; // Float
    precipType: string | null; // String
    pressure: number | null; // Float
    summary: string | null; // String
    temperature: number | null; // Float
    temperatureHigh: number | null; // Float
    temperatureHighTime: string | null; // String
    temperatureLow: number | null; // Float
    temperatureLowTime: string | null; // String
    temperatureMax: number | null; // Float
    temperatureMaxTime: string | null; // String
    temperatureMin: number | null; // Float
    temperatureMinTime: string | null; // String
    time: string | null; // String
    uvIndex: number | null; // Int
    uvIndexTime: string | null; // String
    visibility: number | null; // Int
    windBearing: number | null; // Int
    windGust: number | null; // Float
    windGustTime: string | null; // String
    windSpeed: number | null; // Float
  }
}

export interface NexusGenArgTypes {
  Query: {
    weatherByLatLng: { // args
      input: NexusGenInputs['WeatherByLatLngInput']; // WeatherByLatLngInput!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Alert" | "Forecast" | "Query" | "Weather" | "WeatherData";

export type NexusGenInputNames = "WeatherByLatLngInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: ctx.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}