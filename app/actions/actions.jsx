

export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';

function requestWeather(zipcode) {
    return {
        type: REQUEST_WEATHER,
        zipcode
    }
}

function recieveWeather(zipcode, json) {
    return {
        type: RECEIVE_WEATHER,
        zipcode,
        posts: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    }
}

function getWeather(zipcode) {
    return dispatch => {
        dispatch(requestWeather(zipcode))
        return get(`http://api.wunderground.com/api/71f1e6778777f2da/forecast/q/{zipcode}.json`)
            .then(response => response.json())
            .then(json => dispatch(receiveWeather(zipcode, json)))
    }
}