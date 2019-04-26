import React from 'react';
import ReactDOM from 'react-dom';

import AuthProvider from './context/providers/AuthProvider'
import Authentication from './Authentication';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AuthProvider><Authentication /></AuthProvider>, document.getElementById('root'));

serviceWorker.unregister();