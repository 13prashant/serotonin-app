import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Cover from './components/Cover'
import WelcomeNav from './components/WelcomeNav'
import AddNewItem from './components/AddNewItem'
import CakeList from './components/CakeList'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/addnewitem'>
            <AddNewItem />
          </Route>
          <Route path='/'>
            <NavBar />
            <Cover />
            {/* <WelcomeNav /> */}
            {/* <BakerSignIn /> */}
            {/* <BakerSignUp /> */}
            <CakeList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;