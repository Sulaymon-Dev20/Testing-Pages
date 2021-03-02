import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./redux/RootReducer";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);