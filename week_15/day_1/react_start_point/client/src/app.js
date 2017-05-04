import React from 'react';
import ReactDOM from 'react-dom';

import PiggyBank from './components/PiggyBank';

window.onload = function(){
  ReactDOM.render(
    <PiggyBank title="Big Dan's Piggy Bank" />,
    document.getElementById('app')
  );
}
