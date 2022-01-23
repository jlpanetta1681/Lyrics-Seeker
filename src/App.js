import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Index  from './Components/Layout/Index'
import Navbar from './Components/Layout/Navbar';


class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Navbar />
          <div className="container">
            <Routes>
              <Route exact path="/" component={ Index } />
            </Routes>
          </div>
        </>
     </Router>

);
}
}
       

export default App;                 
