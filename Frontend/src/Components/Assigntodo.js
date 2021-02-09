import React, { useEffect, useState } from "react";
import MultiSelect from "react-multi-select-component";
import axios from 'axios';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './Todo.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AssignTodo = (props) => {
    
 const [progress,setprogress]=useState(props.progress)
 const [status,setstatus]=useState(props.status)
 
 const updateTask=()=>{
     axios.put('http://localhost:8000/task/updateTask',{Task:props.Task,progress}).then((result)=>{
        console.log(result);
     }).catch((err)=>{
         console.log(err);
     })
 }

 const closeTask=()=>{
    axios.put('http://localhost:8000/task/closeTask',{task:props.Task,username:props.username}).then((res)=>{
        console.log(res);
        setstatus("Closed")
    }).then((err)=>{
        console.log(err);
    })
}
const deleteTask=()=>{
    axios.put('http://localhost:8000/task/deleteTask',{task:props.Task,username:props.username}).then((res)=>{
        props.set(res.data.myTask,res.data.assignedTask)
    }).catch((err)=>{
        console.log(err)
    })
 }
/*
    useEffect(()=>{
        axios.get('http://localhost:8000/task/getAllUsers')
        .then((res)=>{
            console.log(res);
            setData(res.data);
            
        }).catch((err)=>{
           console.log(err);
        })
    },[])
    const data=[
        {label: 'Simran', value:1},
        {label: 'Virendra', value:2},
        {label: 'Arvind', value:3},
        {label:'Ayush', value:4}
    ]
    const [Data,setData]=useState([{}]);
    const [selected, setSelected] = useState([]);
    const [selected1, setSelected1] = useState([]);
    const ArrowRenderer1 = () => {
        return(
            <button className="share-btn">
       
            <i className="fas fa-share-alt"  ></i>
            
            </button>
        )
    };
    const ArrowRenderer2 = () =>{
return(
    
    <button className="access-btn" strokeWidth="0">
       <i className="fas fa-tags"></i>
    </button>
   )
    };
    //const ArrowRenderer = ({ expanded }) => (expanded ? "🦉" : "🦚");

   /* const rendershareicon=(props)=>{
    return(
        ArrowRenderer.rendershareicon && (
            <ArrowRenderer.rendershareicon{...props}>
            <button className="share-btn">
       
        <i className="fas fa-share-alt"  ></i>
        
        </button>
            </ArrowRenderer.rendershareicon>
        )       
        );
    }; */
  //const now=150;
    return(    
<div className="todo">
    <li className= {`todo-item${status==="Open"?"Open":"Closed"}`}>
        {props.Task}
    </li>
    {/* className="fas fa-pencil"<input className="input-progress"></input>  */}
   
    <div className="progress">
          <ProgressBar variant="info" now={progress} label={`${progress}%`} />
          </div>
    
    <div className="status">
    <button className="status-btn" onClick={closeTask}>
    <i className="fas fa-check" ></i>

          </button>
          </div>
          <div className="delete">
          <button className="trash-btn" onClick={deleteTask}>
        <i className="fas fa-trash"></i>
        </button>
        </div>
          
          
        {/* <button className="trash-btn">
        <i className="fas fa-trash"></i>
    </button>  */}
       {/* <button className="share-btn">
       
        <i className="fas fa-share-alt"  ></i>
        
        </button>
        <button onClick={deleteHandler} className="access-btn">
        <i className="fas fa-tags"></i>
        </button>
         */} 
{/*<div className="dropdown">
 <MultiSelect
        options={Data}
        value={selected}
        onChange={setSelected}
        ArrowRenderer= {ArrowRenderer1}
        overrideStrings={{selectSomeItems:"Share with:",}}
      /> 
      </div>
      <div className="dropdown"> <MultiSelect
        options={Data}
        value={selected1}
        onChange={setSelected1}
        ArrowRenderer= {ArrowRenderer2}
        overrideStrings={{selectSomeItems:"Assign to:",}}
      />
 </div>*/}
      
     {/*  <div className="progress">
          <label id="status">
              {props.status}
          </label>
          <label id="changeProgress">Change Progress</label>
          <ProgressBar variant="Danger" now={props.progress} label={`${props.progress}%`} />
      </div> */}
    </div>
   
    );
};
export default AssignTodo;