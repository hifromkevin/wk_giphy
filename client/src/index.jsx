import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import App from './components/App.jsx';
import '../dist/styles/style.sass';
import 'font-awesome/css/font-awesome.css';

ReactDOM.render(<App />, document.getElementById('app'));
