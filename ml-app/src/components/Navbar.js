import React from 'react';
import '../style/App.css'
import ML_Item from './ML-item';

function Navbar({app_list}) {
  console.log("App list: ", app_list)
  return (
    <div className="Navbar">
      {
        app_list.map(item => (
          <ML_Item item={item} />
        ))
      }
    </div>
  );
}

export default Navbar;
