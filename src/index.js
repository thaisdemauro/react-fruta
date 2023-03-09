import React from 'react';
import  ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store} from './store/store';

ReactDOM.render(
  <provider store={store}>,

  document.getElementById('root')

<App/> 

  </provider>
  

);