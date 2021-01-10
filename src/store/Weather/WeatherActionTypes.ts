export const GET_WEATHER = 'GET_WEATHER';



type WeatherWeatherDetails = {
    id: number,
    main: string,
    description: string,
    icon: string
}

type WeatherMainDetails = {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number
    humidity: number
}

type WeatherListDetails = {
    dt: number,
    main: WeatherMainDetails,
    weather: WeatherWeatherDetails
}

export interface WeatherList {
    list: Array<WeatherListDetails>
}

export interface getWeatherActionType {
    type: typeof GET_WEATHER,
    payload: WeatherList
}

export type WeatherDispatcher = getWeatherActionType;