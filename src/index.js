import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//redux import
import { Provider } from 'react-redux';
import {createStore} from 'redux'
import rootReducer from'./services/reducers/Index'
const store=createStore(rootReducer)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
<App />
</Provider>

);

reportWebVitals();
