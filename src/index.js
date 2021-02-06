import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react'

import Application from './components/Application';
import ItemList from './store/ItemStore';

import './index.css';

const itemList = new ItemList();

ReactDOM.render(
  <Provider itemList={itemList}>
    <Application/>
  </Provider>,
  document.getElementById('root')
);
