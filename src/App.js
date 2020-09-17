import React from 'react';
import './App.css';
import Login from './Login';
import Page from './Page';

class App extends React.Component{
  render(){
     return (
    <div className="App">
      <Login/>
      
      <Page/>
    </div>
  );


  }
}
 

export default App;
