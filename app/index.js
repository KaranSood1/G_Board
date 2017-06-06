/**
 * Created by Tridev on 02-06-2017.
 */
import React from 'react';
import * as ReactDOM from 'react-dom';
require('./index.css');
var App = require('./components/App')



let node  = document.getElementById('app');
ReactDOM.render(<App/>,node);
