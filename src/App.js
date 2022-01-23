import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import  Index  from './Components/Layout/Index'
import Navbar from './Components/Layout/Navbar'



class App extends Component {
  render() {
    return (
      <Router>
    <React.Fragment>
        <Navbar />
          <div className="container">
       <Routes>
          <Route exact path="/" component={Index } />
      </Routes>
        </div>
    </React.Fragment>
     </Router>
    );
            
  }
}
       

export default App;                 
