import axios from 'axios'

// export const api = 'http://04fd3bc9831e.ngrok.io/api/mobile/v2/';
export const api = 'http://localhost:8010/api/mobile/v2/getTimeBus/';

export const BEGIN_TIME_BUS = 'BEGIN_TIME_BUS';
export const SUCCESS_TIME_BUS = 'SUCCESS_TIME_BUS';
export const ERROR_TIME_BUS = 'ERROR_TIME_BUS';

export const getTimeBusByStationId = (id) => async dispatch => {
    dispatch({type: BEGIN_TIME_BUS});
    console.log("Begin bus time");
    try {
        setInterval(async () => {
                const res = await axios.get("http://localhost:8010/api/mobile/v2/getTimeBus/" + id);
                dispatch({type: SUCCESS_TIME_BUS, payload: res.data});
            }, 15000
        );
    } catch (e) {
        dispatch({type: ERROR_TIME_BUS});
        console.error("get by time Error");
    }
};

export const BEGIN_SEARCH_STATION = 'BEGIN_SEARCH_STATION';
export const SUCCESS_SEARCH_STATION = 'SUCCESS_SEARCH_STATION';
export const ERROR_SEARCH_STATION = 'ERROR_SEARCH_STATION';

export const searchStation = () => async dispatch => {
    dispatch({type: BEGIN_SEARCH_STATION});
    console.log("Begin bus time");
    try {
        const res = await axios.get("http://localhost:8010/api/mobile/v2/forRadius");
        dispatch({type: SUCCESS_SEARCH_STATION, payload: res.data});
    } catch (e) {
        dispatch({type: ERROR_SEARCH_STATION});
        console.error("get by time Error");
    }
};