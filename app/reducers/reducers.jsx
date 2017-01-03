import { REQUEST_WEATHER, RECEIVE_WEATHER } from './../actions/actions.jsx';


function weather(state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) {
    switch (action.type) {
        case REQUEST_WEATHER:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case RECEIVE_WEATHER:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.weather,
                lastUpdated: action.receivedAt
            })
        default:
            return state
    }
}

export default weather;