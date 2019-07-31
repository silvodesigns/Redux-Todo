import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//import redux objects
import { Provider} from 'react-redux';
import{ createStore } from 'redux';
import { reducer } from './reducers';

//create store and pass in reducer 
const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));



