
import axois from 'axios';
const API_KEY = '8848c17d046edc839733b68a0c227e58';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axois.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}