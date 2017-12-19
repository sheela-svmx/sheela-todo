import React from 'react';
import { Link } from 'react-router-dom';
import APICall from 'components/APICall';
import AppHello from 'components/AppHello';
import AppTodo from 'components/AppTodo';
import Hello from 'components/Hello';

const ComponentsList = () => (
  <ul className="components-list">
    <li>
      <Link to={'/components/APICall'}>APICall</Link>
    </li>
    <li>
      <Link to={'/components/AppHello'}>AppHello</Link>
    </li>
    <li>
      <Link to={'/components/AppTodo'}>AppTodo</Link>
    </li>
    <li>
      <Link to={'/components/Hello'}>Hello</Link>
    </li>
  </ul>
);

ComponentsList.components = [
  {
    name: 'APICall',
    path: '/components/APICall',
    component: APICall,
  },
  {
    name: 'AppHello',
    path: '/components/AppHello',
    component: AppHello,
  },
  {
    name: 'AppTodo',
    path: '/components/AppTodo',
    component: AppTodo,
  },
  {
    name: 'Hello',
    path: '/components/Hello',
    component: Hello,
  },
];

export default ComponentsList;
