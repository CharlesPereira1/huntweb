import React, { Component } from 'react';
import Routes from './routes';

import api from './services/api';

import './stylesGlobal.css';

import Header from './components/Header';
import Main from './pages/main';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
