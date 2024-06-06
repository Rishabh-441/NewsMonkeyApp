import './App.css';
import Navbar from './Components/Navbar';
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  static propTypes = {
    prop: PropTypes
  }

  myapiKey1 = "be8dcddfedd84a35b8799ee51c55cb2c";
  myapiKey2 = "dc0433e84225459e94c027bee50aa7b6";
  apiKey1 = this.myapiKey1;

  render() {
    return (
      <div>
        <Router>
        <Navbar />
          <Routes>
            <Route exact path='/' element={<News key="general" pageSize={9} category={"general"} country={"in"} apiKey={this.apiKey1}/>}></Route>
            <Route exact path='/business' element={<News key="business" pageSize={9} category={"business"} country={"in"} apiKey={this.apiKey1}/>}></Route>
            <Route exact path='/entertainment' element={<News key="entertainment" pageSize={9} category={"entertainment"} country={"in"} apiKey={this.apiKey1}/>}> </Route>
            <Route exact path='/health' element={<News key="health" pageSize={9} category={"health"} country={"in"} apiKey={this.apiKey1}/>}></Route>
            <Route exact path='/science' element={<News key="science" pageSize={9} category={"science"} country={"in"} apiKey={this.apiKey1}/>}></Route>
            <Route exact path='/sports' element={<News key="sports" pageSize={9} category={"sports"} country={"in"} apiKey={this.apiKey1}/>}></Route>
            <Route exact path='/technology' element={<News key="technology" pageSize={9} category={"technology"} country={"in"} apiKey={this.apiKey1}/>}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
