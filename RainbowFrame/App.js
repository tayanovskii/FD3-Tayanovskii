﻿"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import RainbowFrame from './components/RainbowFrame';

// const ColorsBlock = props => {
//   let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
//   return (
//     <RainbowFrame colors={colors}>
//       Hello!
//     </RainbowFrame>
//     , document.getElementById('container') 
//   );
// }

var colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
ReactDOM.render(
<RainbowFrame colors={colors}>
      Hello!
  </RainbowFrame>
  , document.getElementById('container') 
);
