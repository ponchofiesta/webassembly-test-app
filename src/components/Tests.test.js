import React from 'react';
import ReactDOM from 'react-dom';
import Tests from './Tests';

it('Tests', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tests />, div);
  ReactDOM.unmountComponentAtNode(div);
});
