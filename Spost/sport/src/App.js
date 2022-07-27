import React, { Component } from 'react';
import './scss/all.scss';
import NavBarOK from './BenComponents/navBarOK.jsx';
// import NavBarContent from './BenComponents/navBarContent.jsx';
import {HashRouter} from 'react-router-dom'

class App extends Component {
    state = { 
  
     } 
    render() { 
      return (
        <HashRouter>
          <NavBarOK/>
        </HashRouter>
      );
    }
  }
   
  export default App;
