import React, { Component } from 'react';
import './App.css';
import UserForm from './components/UserForm';


class App extends Component {

  
  render() {
    return (
      <div style={{backgroundColor: "#f4f4f4"}}>
        <div className="col-lg-8 mx-auto text-center pt-4">
          <h1><b>Let's generate your Resume!</b></h1>
          <p className="lead">Please provide accurate and clear description wherever necessary.</p>
          <hr />
        </div>  
        <UserForm/>
      </div>  
    );
  }
}

export default App;
