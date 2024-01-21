import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

class CountingParent extends Component {
 constructor(props) {
  super(props);

  this.state = {
    actionCount: 0
  }

  this.handleAction = this.handleAction.bind(this);
  this.resetButton = this.resetButton.bind(this);
 }
 handleAction() {
  this.setState({
    actionCount: this.state.actionCount + 1
  },function(){    
  });
 }

 resetButton(){
   this.setState((state, props) => {
    return {
      actionCount: state.actionCount - 1
    }
   }
  )
  }
 render(){
  return(
    <div>
      <Child onAction={this.handleAction} />
      &nbsp;
      <Reset onAction={this.resetButton}/>
      <p>Clicked counter {this.state.actionCount} times!</p>
    </div>
  )
 }
}

function Child({onAction}) {
  return(
    <button onClick={onAction}>
      Set Count!
    </button>
  )
}

function Reset({onAction}) {
  return(
    <button onClick={onAction}>
      Reset Count!
    </button>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <CountingParent />
  </div>
);

