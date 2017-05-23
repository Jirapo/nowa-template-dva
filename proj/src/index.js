import React from 'react';
import ReactDOM from 'react-dom';

/*import App from './App';

import './app.css';

ReactDOM.render(<App />, document.getElementById('root'));*/

import './app.less';
import dva from 'dva';
import { browserHistory } from 'dva/router';

// 1. Initialize
const app = dva();

// 2. Model
// app.model(require('./models/users'));

// 3. Router
app.router(require('./router'));

// 4. Start
app.start('#root');
