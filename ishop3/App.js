"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import ShopItemsBlock from './components/ShopItemBlock/ShopItemsBlock';

let itemsArr=require('./items.json');
let shopNameText="Shop3";

ReactDOM.render(
  <ShopItemsBlock 
    shopName={shopNameText}
    items={itemsArr}
  />
  , document.getElementById('container') 
);

