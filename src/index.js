import React from 'react';
import ReactDOM from 'react-dom/client';
//import stamp from './image/stamp.jpg';
import './index.css';

function AddressLabel({person}) {
  return (
   <div className='address-label'>
      <Name text={person.name} />
      <Address streetName={person.address} />
      <State stateName={person.state} />
   </div> 
  )
}

function Name({text}) {
  return (
    <div>
      {text}
    </div>
  )
}

function Address({streetName}) {
  return (
    <div>
      {streetName}
    </div>
  )
}

function State({stateName}) {
  return (
    <div>
      {stateName}
    </div>
  )
}

var testPerson = {
  name: "John Doe",
  address: "Wood lane 100-00900",
  state:"Boston MA, 02118"
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AddressLabel person={testPerson}/>
  </React.StrictMode>
);

