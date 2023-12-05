
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar></Navbar>
          <Routes>
            <Route exact path="/general" element={<News key="general" pageSize={10} country="in" category="general"/>}/>
            <Route exact path="/sport" element={<News key="sport" pageSize={10} country="in" category="sport" />} />
            <Route exact path="/business" element={<News key="business" pageSize={10} country="in" category="business"/>}/>
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={10} country="in" category="entertainment"/>}/>
            <Route exact path="/health" element={<News key="health" pageSize={10} country="in" category="health"/>}/>
            <Route exact path="/science" element={<News key="science" pageSize={10} country="in" category="science"/>}/>
            <Route exact path="/technology" element={<News key="technology" pageSize={10} country="in" category="technology"/>}/>
          </Routes>
        </div>
      </Router>
    )
  }
}



