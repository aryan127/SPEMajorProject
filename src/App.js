import logo from './logo.svg';
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import {
  BrowserRouter as Router,
  Switch ,
  Route,
  Link
} from "react-router-dom"

import { useState } from 'react';

function App() {
   
  const [user,setLoginUser]=useState({
    name:"",
    email:"",
    password:""
  })

  return (
    <div className="App">
      {/* <Login/> */}
    <Router>
  <switch>
    <Route exact path="/">
      {
        user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
      }
    </Route>
    <Route path="/login">
      <Login setLoginUser={setLoginUser}/>
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </switch>
</Router>

  </div>
  );
}

export default App;
