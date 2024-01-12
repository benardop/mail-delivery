import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

function OneTimeButton({onClick}) {
 const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    onClick();

    setClicked(true);
  };

      return(
        <button onClick={handleClick} disabled={clicked}>
          You can only click me once
        </button>
      );
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <OneTimeButton onClick={()=> alert('Hi')} />
  </>
);

