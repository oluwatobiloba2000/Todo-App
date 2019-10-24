import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from '../../react-Todo-App/TodoApp/app';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
