import React, { Component } from 'react';
import axios from 'axios';

import { Navbar } from "./components/Navigator/Navbar";
import { UserList } from "./components/UserList/UserList";
import { Spinner } from "./components/Spinner/Spinner";

import './App.css';


class App extends Component {
  state = {
    loading: false,
    users: [],
  }

  async componentDidMount() {
    this.setState({ loading: true });

    const response = await axios.get("https://api.github.com/users");

    this.setState({ users: response.data, loading: false })
  }

  render() {

    if (this.state.loading) {
      return <Spinner />
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <Navbar navTitle="GitHub" icon="fab fa-github" />
            {/* @ts-ignore */}
            <UserList loading={this.state.loading} users={this.state.users} />
          </header>
        </div>
      );
    }
  }
}

export default App;