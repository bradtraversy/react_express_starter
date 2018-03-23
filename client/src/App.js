import React, { Component } from 'react';
import './App.css';
import Events from './components/events';
import Party from './components/party';
import Nav from './components/nav';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: ['APP DATA']
    }
    this.onUpdate = this.onUpdate.bind(this);

  }
  onUpdate(newUser) {
    this.setState({
      users: newUser
    });
  }
  showUsers() {
    return (this.state.users.join(','))
  }

  render() {
    return (
      <div className="App">
        <header>
          <Nav></Nav>
          <h1 className="heading">Token</h1>

        </header>
        {/*Value in Parent Component State: {this.state.users}
        <Events onUpdate={this.onUpdate} />
        <Party passedVal={this.state.users} />*/}
        <Router>
          <div>
            <div>
              <Link to="/">Events</Link>
              <Link to="/party">Party</Link>
            </div>
            <Switch>
              <Route exact path="/" render = {() => (<Events onUpdate = {this.onUpdate}/>
              )}/>

              <Route path="/party" render = {() => (<Party passedVal = {this.state.users}/>
              )}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
