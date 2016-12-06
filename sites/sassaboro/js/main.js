import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/app.jsx';
import { events } from './src/events.js'

// =====================================
// start app
// =====================================

ReactDOM.render(<App />, document.getElementById('page'));

// =====================================
// register events
// =====================================

events()