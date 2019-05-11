import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import DetailPage from './pages/DetailPage';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Route path="/" exact component={SearchPage} />
          <Route path="/search/:term" component={SearchPage} />
          <Route path="/movie/:id" component={DetailPage} />
        </Router>
      </div>
    );
  }
}
