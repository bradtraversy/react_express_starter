import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import { Redirect } from 'react-router';
import './events.css';
// import Party from "./party"

class Events extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  createUser() {
    return this.state.users.map((el, i) =>

      <div key={i}>
        <label for="name"> Name: </label>
        <input type="text" value={el || ''} onChange={this.handleChange.bind(this, i)} />
        <input type='button' value='remove' onClick={this.removeClick.bind(this, i)} />
      </div>

    )
  }

  handleChange(i, event) {
    let users = [...this.state.users];
    users[i] = event.target.value;
    //this.props.onUpdate(event.target.value);
    this.setState({ users });
  }

  addClick() {
    this.setState(prevState => ({ users: [...prevState.users, ''] }));
  }

  removeClick(i) {
    let users = [...this.state.users];
    users.splice(i, 1);
    this.setState({ users });
  }

  submit(event) {
    this.props.onUpdate(this.state.users);
    return (this.state.users.join(','))

  }
  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          { this.props.onData}
          <h3> Create Event </h3>
          {this.createUser()}
          <div>
            <input type='button' value='add more' onClick={this.addClick.bind(this)} />
            <input type="button" value="Submit" onClick={this.submit.bind(this)} />
          </div>
        </form>
        {this.state.users.join(', ')}


      </div>
    )

  }

  // componentDidMount() {
  //   fetch('/api/events')
  //     .then(res => res.json())
  //     .then(events => this.setState({ events }, () => console.log('events fetched...', events)));
  // }
}

export default Events;
