import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import { HashRouter } from 'react-router-dom';
//Initialize the redux global state or store
const store = createStore(rootReducer);

console.log(store.getState());

//import { addItem }  from './actions/index'

// Dispatched an action to make sure redux was working correctly
// store.dispatch( addItem({name: "Item 1", id: 1}));

// console.log(store.getState());

ReactDOM.render(
	<Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>, 
	document.getElementById('root')
);

registerServiceWorker();
