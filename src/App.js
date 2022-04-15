import React from 'react';
import './App.css';
import SwaggerPetstore from './pages/swagger-petstore';
import NavBar from './components/nav-bar';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <SwaggerPetstore />
    </div>
  );
}

export default App;
