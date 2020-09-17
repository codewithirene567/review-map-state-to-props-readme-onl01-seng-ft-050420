import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';


class App extends Component {

  handleOnClickItems() {
    this.props.store.dispatch({
      type: 'GET_COUNT_OF_ITEMS',
    });
  }

  handleOnClickUsers() {
    this.props.store.dispatch({
      type: 'GET_COUNT_OF_USERS',
    });
  }

  render() {
     debugger;
    return (
      <div className="App">
          <button onClick={() => this.handleOnClickItems()}>
            Click to change items count
            </button>
          <button onClick={() => this.handleOnClickUsers()}>
            Click to change user count
          </button>
          <p>{this.props.items.length}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //debugger;
  return { items: state.items }
  //*again* the state of the items is being returned here no matter what you call it
  //which each change to the store's state the mapStateToProps method is executed
  //specifies which slice of the store's state
}

//export default connect(mapStateToProps)(App);
export default connect( mapStateToProps) (App);
//redux is the state part which is in mapStateToProps and react is the App part
//connect is connecting them together
//whatever function we pass to the connect() function will be the state of the store
//this means line 38 is going to return the state