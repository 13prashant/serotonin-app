import React from 'react';
import './App.css';
import Header from './components/Header'
import WelcomeNav from './components/WelcomeNav'
import CakeList from './components/CakeList'

function App() {
  return (
    <div className="App">

      <Header />
      <WelcomeNav />
      <CakeList />
    </div>
  );
}

export default App;