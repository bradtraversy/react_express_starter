import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Customers from './customers';
import Examples from './examples';
import Footer from './footer';
import '@fontsource/roboto';
import categories from '../categories';
import { json } from 'body-parser';
import SearchBar from "./searchbar";
import SearchPage from "./searchpage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


class Index extends Component {
  
  render() {
    return (
      <div className="Index">
        <header className="App-header">
          <h1 className="App-title">flashfollow</h1>
          <h2>Instantly integrate yourself into a Twitter community by following up to a hundred accounts</h2>
          <h3>A drop by <a href="https://genzmafia.com/" className="gzm">Gen Z Mafia</a></h3>
          <h2>Explore Communities</h2>
        </header>
        <div style={{paddingTop: 30}}>
        {/* <SearchBar
          placeholder="Search"
          onChange={(e) => console.log(e.target.value)}
        /> */}
        </div>
        <SearchPage />
        {/* <div className="examples">
        <div className="grid-container">
        {categories.map((category, i) => (
                    <div key={i} className="grid-child">
                      {category.name}
                    <Examples name={category.title} description={category.text} image={category.img}/>
                    </div>
                  ))}
        </div>
        </div> */}
        <Footer />
        <Link to="/venture_capitalists">About</Link>
      </div>
    );
  }
}

export default Index;