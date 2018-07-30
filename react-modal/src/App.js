import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="container">

{/* <!-- Trigger the modal with a button --> */}
<button type="button" className="btn btn-info sm" data-toggle="modal" data-target="#myModal">Add New Todo</button>
{/* Modal  */}
<div className="modal fade" id="myModal" role="dialog">
  <div className="modal-dialog">
  
    {/* <!-- Modal content--> */}
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal">&times;</button>
        <h4 className="modal-title">Add new Todo </h4>
      </div>
      <div className="modal-body">
         <p>Some text in the modal.</p> 
      </div>
    </div> 
  </div>
</div>
</div>
      </div>

      
    );
  }
}

export default App;
