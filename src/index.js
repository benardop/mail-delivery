import React from 'react';
import ReactDOM from 'react-dom/client';
import stamp from './image/stamp.jpg';
import './index.css';

function MailDelivery() {
  return (
    <div className='mail-delivery'>
      <div className='sender-address'>
      <SenderName />
      <SenderStreet />
      <SenderState />
      </div>
      <div className='receiver-address'>
      <ReceiverName />
      <ReceiverStreet />
      <ReceiverState />
      </div>
      <div className='stamp'>
        <PostageStamp />
      </div>
    </div>
  )
}
function SenderName() {
  return (
    <span>John Doe</span>
  )
}

function SenderStreet() {
  return (
    <span>North Street 100</span>
  )
}
function SenderState() {
  return (
    <span>California-CA</span>
  )
}

function ReceiverName() {
  return (
    <span>Alex Doe</span>
  )
}
function ReceiverStreet() {
  return (
    <span>Gold Park 1000</span>
  )
}
function ReceiverState() {
  return (
    <span>California-CA</span>
  )
}
function PostageStamp() {
  return (
    <img
      src={stamp}
      className='stamp-image'
      alt='Stamp' />
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MailDelivery />
  </React.StrictMode>
);

