import React, { Component } from 'react';
import './quiz.css';

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      quiz: []
    };
  }

  componentDidMount() {
    fetch('/api/quiz')
      .then(res => res.json())
      .then(quiz => this.setState({ quiz }, () => console.log('quiz fetched...', quiz)));
  }

  render() {
    return (
      <div>
        <h2>Quiz</h2>
        <ul>
          {this.state.quiz.map(item =>
            <li key={item.id}>{item.question} {item.answer1} {item.answer2}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Quiz;
