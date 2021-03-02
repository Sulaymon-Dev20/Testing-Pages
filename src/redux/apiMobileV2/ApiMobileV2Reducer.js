import {
    BEGIN_TIME_BUS,
    SUCCESS_TIME_BUS,
    ERROR_TIME_BUS,

    BEGIN_SEARCH_STATION,
    SUCCESS_SEARCH_STATION,
    ERROR_SEARCH_STATION,
} from './ApiMobileV2Action';

const initialState = {
    timeBusLoading: false,
    timeBusData: [],
    timeBusStationInfo: [],
    timeBusError: false,

    stationLoading: false,
    stationData: [],
    stationError: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case BEGIN_TIME_BUS:
            return {
                ...state,
                timeBusLoading: true
            };
        case SUCCESS_TIME_BUS:
            return {
                ...state,
                timeBusLoading: false,
                timeBusData: action.payload.busTimes,
                timeBusStationInfo: action.payload.stationInfo
            }
        case ERROR_TIME_BUS:
            return {
                ...state,
                timeBusError: true
            };

        case BEGIN_SEARCH_STATION:
            return {
                ...state,
                stationLoading: true
            };
        case SUCCESS_SEARCH_STATION:
            return {
                ...state,
                stationLoading: false,
                stationData: action.payload.data,
            }
        case ERROR_SEARCH_STATION:
            return {
                ...state,
                stationError: true
            };

        default:
            return state
    }
}
