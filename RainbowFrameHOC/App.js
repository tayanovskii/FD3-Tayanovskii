"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import withRainbowFrame from './components/withRainbowFrame';
import {Fragment} from './components/Fragment'


var colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
let FramedFragment=withRainbowFrame(colors)(Fragment);
//let FramedFragment=withRainbowFrame(colors)(React.Fragment);  // Depends on the meaning of 'Fragment' in the task. Both options work
ReactDOM.render(
<FramedFragment>
      Hello!
  </FramedFragment>
  , document.getElementById('container') 
);
