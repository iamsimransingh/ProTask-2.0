import axios from 'axios';
import React from 'react';
import Todo from './Todo';
import './Task.css';
import '../App.css';
import {useParams, withRouter} from 'react-router-dom';
import MultiSelect from "react-multi-select-component";
import Select from 'react-dropdown-select';
import {connect} from 'react-redux'
import * as actionTypes from './store/action'
import AssignTodo from './Assigntodo';

class Task extends React.Component{

    state={
        listOfTask:[{}],
        mytask:'',
        assigntask:'',
        username:'',
        selected1:[],
        Data:[],
        listOfAssignTask:[]
    }
    setSelected1 = (value)=>{
         let arr=[...this.state.selected1];
         arr.push(value)
         this.setState({selected1:arr})
    }
    
    setTodos=(myTask,assignedTask)=>{
      this.setState({listOfTask:myTask,listOfAssignTask:assignedTask})
    }
    componentDidMount(){
        const username=(this.props.match.params.username)
        
        console.log(username)
        axios.post('http://localhost:8000/user/getUser',{username}).then((result)=>{
            console.log(result);
            this.setState({listOfTask:result.data.myTask,username,listOfAssignTask:result.data.assignedTask})
            axios.get('http://localhost:8000/task/getAllUsers')
            .then((res)=>{
                
                this.setState({Data:res.data,})
                console.log(this.state.Data)
            }).catch((err)=>{
               console.log(err);
            })
            
        }).catch((err)=>{
            console.log(err);
        })
    }

    addTask=()=>{
       axios.put("http://localhost:8000/task/addMyTask",{username:this.state.username,task:this.state.mytask})
       .then((result)=>{
           console.log(result);
           this.setState({task:'',listOfTask:result.data.myTask,user:result})
       }).catch((err)=>{
           console.log(err);
       })
    }

    assignTask=()=>{
      console.log("In assignTask")
      let listOfUser=[];
      this.state.selected1.forEach(element=>{
        let obj={}
        obj["username"]=element.label
        listOfUser.push(obj)
      })
      console.log(listOfUser)
      axios.post('http://localhost:8000/task/delegateTask',{listOfUser,Task:this.state.assigntask,username:this.props.match.params.username}).then((res)=>{
        console.log(res)
        this.setState({listOfTask:res.data.myTask,listOfAssignTask:res.data.assignedTask})
        
      }).catch((err)=>{
        console.log(err);
      })
    }

    ArrowRenderer2 = () =>{
      return(
          <button className="access-btn" strokeWidth="0">
             <i className="fas fa-tags"></i>
          </button>
         )
          };

    render(){
        var myTask=[] ;
        var assignTask=[];
        console.log(this.state.selected1)
         myTask=this.state.listOfTask.map((element,index)=>{
          return <Todo Task={element.Task} username={this.state.username} status={element.status} progress={element.progress} set={this.setTodos}/>
 /*            if(index==0){
              const prog=element.progress;
              const status=element.status;
              console.log(prog,status)
              return <Todo Task={element.Task} username={this.state.username} status={status} progress={prog} set={this.setTodos}/>
            }
            else{
            return <Todo Task={element.Task} username={this.state.username} status={element.status} progress={element.progress} set={this.setTodos}/>
          }*/ 
        })
       
        assignTask=this.state.listOfAssignTask.map((element)=>{
            return <AssignTodo Task={element.Task} username={this.state.username} status={element.status} progress={element.progress} set={this.setTodos}/>
        })
        
        const data=[
          {label: 'Simran', value:1},
          {label: 'Virendra', value:2},
          {label: 'Arvind', value:3},
          {label:'Ayush', value:4}
      ]
        return(
            <div className="Task">
              <header>
              <h1>ProTask</h1> 
              </header>
              <div className="welc">
                <h2> Welcome {this.state.username} </h2>
              </div>
              {/* <form>
                 <input value={this.state.task} onChange={(event)=>this.setState({...this.state,task:event.target.value})} type="text" className="todo-input" /> 
                 <button onClick={this.addTask} className="todo-button" type="submit">
                   <i className="fas fa-plus-square"></i>
                 </button>
                 <div className="select">
                   <select name="todos" className="filter-todo">
                      <option value="all">All</option>
                      <option value="completed">Completed</option>
                      <option value="uncompleted">Uncompleted</option>
                   </select>
                 </div>
              </form>
               */}
              
              <div className="task-grid" >
              {}
                <div className= "my-todo-column">
                  <h3>My tasks</h3>
                <form>
                 <input value={this.state.task} onChange={(event)=>this.setState({...this.state,mytask:event.target.value})} type="text" className="todo-input" /> 
                 <button onClick={this.addTask} className="todo-button" type="submit">
                   <i className="fas fa-plus-square"></i>
                 </button>
                 {/*<div className="select">
                   <select name="todos" className="filter-todo">
                      <option value="all">All</option>
                      <option value="completed">Completed</option>
                      <option value="uncompleted">Uncompleted</option>
                   </select>
                 </div>*/}
              </form>
                  {myTask}
                  </div>
                <div className="assign-todo-column">
                <h3>Assign tasks</h3>
                <form>
                 <input value={this.state.assigntask} onChange={(event)=>this.setState({...this.state,assigntask:event.target.value})} type="text" className="todo-input" /> 
                 
                 <div className="dropdown"> {/*<MultiSelect
        options={this.state.Data}
        value={this.state.selected1}
        onChange={selected=>this.setState({selected1:selected})}
        overrideStrings={{selectSomeItems:"Assign to:",}} 
                 />*/}
                 <Select
    multi
    options={this.state.Data}
    onChange={(values) => this.setState({selected1:values})}
    className="react-select"
    placeholder="Assign Tasks ..."
  />

 </div>
 <button  className="todo-button" type="submit" onClick={this.assignTask}>
                   <i className="fas fa-plus-square"></i>
                 </button>

                 {/* <div className="select">
                   <select name="todos" className="filter-todo">
                      <option value="all">All</option>
                      <option value="completed">Completed</option>
                      <option value="uncompleted">Uncompleted</option>
                   </select>
                 </div> */}
              </form> 
               {assignTask}
                </div>
              </div>
            </div>  
        )
    }
}

export default withRouter(Task);
