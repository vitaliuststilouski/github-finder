import React, { Component } from 'react';
import { Navbar } from "./components/Navigator/Navbar";
import { UserList } from "./components/UserList/UserList";
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar navTitle="GitHub" icon="fab fa-github"/>
          <UserList />
        </header>
      </div>
    );
  }
}

export default App;