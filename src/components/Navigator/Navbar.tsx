import React, { Component } from 'react';

interface NavProps {
  navTitle: string;
  icon: string;
}

export class Navbar extends Component<NavProps> {
  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={this.props.icon} /> {this.props.navTitle}
        </h1>
      </nav>
    )
  }
}