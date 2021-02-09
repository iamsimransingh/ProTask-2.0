import React from "react";

const Form = ({ setInputText, setTodos, todos, inputText, setStatus}) =>{
    const inputTextHandler = (e) => { // e is event javaScript code and function, it's handling the state of any input put in the form
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
       e.preventDefault();
       setTodos([
           ...todos, {text: inputText, completed: false, id: Math.random()*1000}
       ]);
       setInputText("");
    };
    const statusHandler = (e) =>{
        setStatus(e.target.value);
    };
    return(
<form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" /> 
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
     {/* <div className="todo-input2">
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input2" /> 
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      </div> */} 
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
      
    </form>
    );
};
export default Form;
