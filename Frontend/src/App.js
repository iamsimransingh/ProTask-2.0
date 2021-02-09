import React, { useState, useEffect } from "react";
import './App.css';
import Form from "./Components/Form";//importing components
import TodoList from "./Components/TodoList"; //importing components
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from "react-router-dom";
import AppSign from './Components/Signup/AppSign';
import Formlogin from "./Components/Signup/Formlogin";
import AppLog from "./Components/Signup/AppLog";
import Task from "./Components/Task";
import { createBootstrapComponent } from "react-bootstrap/esm/ThemeProvider";
import {connect} from 'react-redux';

function App(props) {
  
console.log(props.task)
return (
    <div>
      
      <Router>
        <Switch>
          <Route path="/protask/:username" component={Task}/>
          <Route path="/login"><AppLog/></Route>
          <Route path="/"><AppSign/></Route>
        </Switch>
      </Router>
      
      
    </div>
  );
}

const mapStateToProps= state=>{
  return{
    username:state.username,
    task:state.task,
    login:state.login
  }
}
const mapDispatchToProps=dispatch=>{

}
export default connect(mapStateToProps)(App);
