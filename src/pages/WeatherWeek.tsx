import React from 'react';
import WeatherDetailsDay from '../components/WeatherDetailsDay/WeatherDetailsDay';
import WeatherWeekList from '../components/WeatherWeekList/WeatherWeekList';

const WeatherWeek = () => {
    return (
        <div>
            <WeatherDetailsDay />
            <WeatherWeekList />
        </div>
    );
}

export default WeatherWeek;