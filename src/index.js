import React from 'react';
import ReactDOM from 'react-dom/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
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
    <div>
      <FontAwesomeIcon icon={faHeart} size="2x" color="black" />
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MailDelivery />
  </React.StrictMode>
);

