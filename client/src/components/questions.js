import React, { Component } from 'react';
import './questions.css';

class Questions extends Component {
  constructor() {
    super();
    this.state = {
      customers: [],
      questions: ["Question1", "Question2", "Question3"],
      options: [["Question11", "Question12", "Question13"],
      ["Question21", "Question22", "Question23"],
      ["Question31", "Question32", "Question33"]],
      counter: 0,
      lastButton: false

    };

    this.handleClickNextButton = this.handleClickNextButton.bind(this);
    this.handleClickLastButton = this.handleClickLastButton.bind(this);
  }


  handleClickNextButton() {
    this.setState(state => ({
      counter: this.state.counter + 1
    }));
  }

  handleClickLastButton() {
    this.setState(state => ({
      lastButton: true
    }));
  }

  componentDidMount() {
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers => this.setState({ customers }, () => console.log('Customers fetched...', customers)));
  }


  showResults() {
    return (
      <div>
        <h2>Results</h2>
      </div>
    )
  }

  render() {
    const showLastButton = (this.state.counter === this.state.options.length - 1);
    return (
      <div className="all-wrapper">
        {
          this.state.lastButton ?
            <div>
              {this.showResults()}
            </div> :
            <div className="qu-answ-wrapper">
              <p className="qu">{this.state.questions[this.state.counter]}</p>
              {this.state.options[this.state.counter].map((question, id) =>
                <p className="answ">
                  <label for="dzen"></label>
                  <input name="dzen" type="radio" value={id} /> 
                  {question}</p>
              )}

              <div>{
                showLastButton ?
                  <button className="btn main-button" onClick={this.handleClickLastButton}>
                    FINISH!
                    </button> :
                  <button className="btn main-button" onClick={this.handleClickNextButton}>
                    Next question {this.state.counter + 1}
                  </button>}
              </div>
            </div>



        }
      </div>
    );
  }
}

export default Questions;
