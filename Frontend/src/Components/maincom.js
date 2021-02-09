import React, { useState, useEffect } from "react";
import Form from "./Form";//importing components
import TodoList from "./TodoList"; 
import {withRouter} from 'react-router-dom';
import axios from "axios";

const Maincom=(props) => {
const [inputText, setInputText] = useState(""); //state for input in the list
const [todos, setTodos] = useState([]); //state for storing input of todos,in array of objects
const [status, setStatus] = useState("all");
const [filteredTodos, setFilteredTodos] = useState([]);
//run once when starts
useEffect(() => {
    axios.get('http://localhost:8000/user/getUser',{username:props.location.state.username}).then((res)=>{
        console.log(res.data)
        setTodos(res.data.myTask);
    }).catch((err)=>{
       console.log(err)
    })
    
  }, []);

  //use effect
  useEffect(() => {
      //functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
      default:
           setFilteredTodos(todos);
           break;  
    }
  };
  saveLocalTodos();
    filterHandler();
    
  }, [todos, status]);
 //save to local storage
 const saveLocalTodos = () => {
     localStorage.setItem("todos",JSON.stringify(todos));
 };
 const getLocalTodos = () => {
  if(localStorage.getItem('todos') == null){
    localStorage.setItem('todos',JSON.stringify([]));
  }else{
    let todoLocal = JSON.parse(localStorage.getItem('todos'));
    setTodos(todoLocal);
  }
 };
 return( 
     <div className="App">
     <header>
       <h1>ProTask</h1>
     </header>
     <div className="welc">
       <h2> Welcome {props.location.state.username} </h2>
    </div>
    <Form 
    todos={todos} 
    setTodos={setTodos} 
    setInputText={setInputText} 
    inputText={inputText}
    setStatus={setStatus}
    />   
    <TodoList 
    filteredTodos={filteredTodos}
    setTodos={setTodos} 
    todos={todos} 
    username={props.location.state.name}/>  
  </div>
 );
}
 export default withRouter(Maincom);