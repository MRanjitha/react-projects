import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {createSelector} from 'reselect';
import {updateUser,apiRequest} from './actions/user-action';
import {bindActionCreators} from 'redux'

class App extends Component {

  constructor(props) {
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  
  onUpdateUser(event){
    this.props.onUpdateUser(event.target.value)
  }

  render() {
    // console.log(this.props);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input onChange={this.onUpdateUser} />
        {this.props.user}
      </div>
    );
  }
}

const productSelector = createSelector(
  state => state.products,
  products => products
);
const userSelector = createSelector(
  state => state.user,
  user => user
);

const mapStateToProps = createSelector(
  productSelector,
  userSelector,
  state => state.products,
  state => state.user,
  (products,user) =>({
    products,user
  })
);

const mapActionsToProps = {
    onUpdateUser: updateUser,
    onApiRequest: apiRequest
};




export default connect(mapStateToProps,mapActionsToProps)(App);
