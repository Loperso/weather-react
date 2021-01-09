import { combineReducers } from 'redux';
import reducer from './Weather/WeatherReducer';

const RootReducer = combineReducers({
    weather: reducer
});

export default RootReducer;