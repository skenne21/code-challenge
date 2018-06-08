import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calendar from './components/calendar/Calendar.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Calendar />, document.getElementById('root'));
registerServiceWorker();
