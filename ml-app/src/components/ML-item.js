// import React from 'react';


// import '../style/App.css';


// // Image as background
// function ML_Item({item}) {
//   console.log("Item: ", item)
//   return (
//     <div className="ML-Item" onClick={() => {console.log("Hey: ", item.name)}}>
//       {item.name}
//     </div>
//   );
// }

// export default ML_Item;


import React, { useState } from 'react';
import '../style/App.css';

function ML_Item({ item }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div
      className={`ML-Item ${clicked ? 'grey-background' : 'ML-Item'}`}
      onClick={handleClick}
    >
      {item.name}
    </div>
  );
}

export default ML_Item;
