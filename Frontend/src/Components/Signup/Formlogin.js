import React from 'react';
import './FormSign.css';
import axios from 'axios';
import {Link, withRouter} from 'react-router-dom';
import * as actionTypes from '../store/action';
import {connect} from 'react-redux'

class Formlogin extends React.Component{
    
    state={
        email:'',
        password:''
    }
    
    Submit=()=>{
       console.log(this.state)
       axios.post('http://localhost:8000/user/login',{email:this.state.email,password:this.state.password}).then((result)=>{
        console.log(result)
        this.props.history.push({
             pathname:`/protask/${result.data.username}`,
            
           })
       }).catch((err)=>{
         console.log(err);
       })
    }

    render(){
        return(
          <div className='form-container'>
          <span className='close-btn'>×</span>
          <div className='form-content-left'>
          <header>
            <h1>ProTask</h1>
        </header>
        <img className='form-img' src='img/img-2.png' alt='spaceship' />
          </div>
            <div className='form-content-right'>
        <div className='form' >
        <h1>
          Login:
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={this.state.email}
            onChange={(event)=>this.setState({email:event.target.value})}
          />
          
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={this.state.password}
            onChange={(event)=>this.setState({password:event.target.value})}
          />
        </div>
        <button className='form-input-btn' type='submit' onClick={this.Submit}>
          Login
        </button>
        </div>
    </div>
    </div>
        )
    }
}

const mapStateToProps= state=>{
  return{
    username:state.username
  }
}

const mapDispatchToProps=dispatch=>{
  return{
    handleSubmit:(email,password)=>dispatch(actionTypes.fetchUser(email,password)),
    User:(username)=>dispatch(actionTypes.getUser(username))
  }
}
export default (connect(mapStateToProps,mapDispatchToProps)(withRouter(Formlogin)));
