import React from 'react';
import ReactDOM from 'react-dom/client';
import stamp from './image/stamp.jpg';
import './index.css';

function AddressLabel({person}) {
  return (
   <div className='address-label'>
      <FromPerson fromPerson={person.fromPerson} />
      <ToPerson toPerson={person.toPerson} />
      <Stamp/>
   </div> 
  )
}
function FromPerson({fromPerson}) {
  const { name, address, state } = fromPerson;
  return (
    <div className='sender-Adddress'>
      <div className='name'>{name}</div>
      <div className='street'>{address}</div>
      <div className='state'>{state}</div>
    </div>
  )
}
function ToPerson({toPerson}) {
  const { name, address, state } = toPerson;
  return (
    <div className='receiver-address'>
      <div className='name'>{name}</div>
      <div className='street'>{address}</div>
      <div className='state'>{state}</div>
    </div>
  )
}

function Stamp() { 
  return (
    <div className='postage-stamp'>
      <img 
        src={stamp}
        className='stamp-image'
        alt='Pastage stamp' />
    </div>
  )
}

var testPerson = {
  fromPerson: {
    name: "John Doe",
    address: "Wood lane 100-00900",
    state:"Boston MA, 02118"
  },  
  toPerson: {
    name: "Alex Doe",
    address: "Wood lane 100-00900",
    state:"Carlifornia CA, 02118"
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AddressLabel person={testPerson}/>
  </React.StrictMode>
);

