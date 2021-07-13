import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers';
import Examples from './components/examples';
import '@fontsource/roboto';
import categories from './categories';
import { json } from 'body-parser';


class Follow extends Component {
  
  render() {
    return (
      <div className="Follow">
        <header className="App-header">
          <h1 className="App-title">flashfollow</h1>
          <h2>Instantly integrate yourself into a twitter community by following up to a hundred accounts</h2>
          <h3>A drop by <a href="https://genzmafia.com/">GenZMafia</a></h3>
          <h2>Explore Communities</h2>
        </header>
        <div className="examples">
        <div className="grid-container">
        {categories.map((category, i) => (
                    <div key={i} className="grid-child">
                      {category.name}
                    <Examples name={category.title} description={category.text} image={category.img}/>
                    </div>
                  ))}
        </div>
        </div>
      </div>
    );
  }
}

export default App;
