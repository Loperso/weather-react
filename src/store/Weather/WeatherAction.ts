import { Dispatch } from "react"
import { GET_WEATHER, WeatherDispatcher } from "./WeatherActionTypes"

import {instance as axios}  from '../../weather-axios';

export const getWeather = () => {
    return (dispatch: Dispatch<WeatherDispatcher>) => {
        axios.get('').then(res => {
            dispatch({
                type: GET_WEATHER,
                payload: res.data
            })
        }).catch(err => {
            console.error(err);
        });
    }
}