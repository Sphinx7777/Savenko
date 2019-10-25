import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./App.jsx";
import {HashRouter} from "react-router-dom";

ReactDOM.render(
	<HashRouter>
	<App />
	</HashRouter>
	, document.getElementById('root'));

serviceWorker.unregister();
