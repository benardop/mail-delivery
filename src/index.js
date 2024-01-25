import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function OneTimeButton({onClick})  {
  
  const [clicked, setClicked] = useState(false);

    const handleClick = () => {
      onClick();

      setClicked(true);
    }

      return(
        <button onClick={handleClick} disabled={clicked}>
        Just click once!
        </button>
      )
 
 }
 

 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <OneTimeButton onClick={() => alert('Hi')} />
  </div>
);

