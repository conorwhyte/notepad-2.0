import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import reportWebVitals from './reportWebVitals';
// import { publishWebVitals } from './utils/putMetricData';

render(<App />, document.getElementById('root'));

// reportWebVitals(publishWebVitals);
serviceWorkerRegistration.register();
