import React from 'react';
import Navbar from './components/Navbar.js';

function App() {

  const ml_items = [
    {"name": "app 1"},
    {"name": "app 2"},
    {"name": "app 3"},
    {"name": "app 4"},

  ]

  return (
    <div>
      <Navbar app_list={ml_items}/>
      World
    </div>
  );
}

export default App;
