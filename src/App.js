import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import  Index  from './Components/Layout/Index'
import Navbar from './Components/Layout/Navbar'


import { Provider } from './context';


class App extends Component {
  render() {
    return (
      <Provider>
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
     </Provider>
    );
            
  }
}
       

export default App;                 
