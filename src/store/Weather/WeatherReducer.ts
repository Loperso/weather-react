import { WeatherDispatcher, WeatherList, GET_WEATHER } from './WeatherActionTypes';

interface stateType {
    weather?: WeatherList
}

const initialState: stateType = {

}

const reducer = (state = initialState, action: WeatherDispatcher) => {

    if (action.type === GET_WEATHER) {
        return state;
    }

    return state;
}

export default reducer;