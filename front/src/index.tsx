import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Root from './Root';
import createFinalStore from './stores/createFinalStore';

const store = createFinalStore();

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
