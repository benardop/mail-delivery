import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

function CountingParent() {
  const [count, setCount] = useState(0);

  function handleAction() {
  setCount(count + 1);
 }
 return(
  <button onClick={handleAction}>
    Clicked { count } times
  </button>
 )
 
 }
 

 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <CountingParent />
  </div>
);

