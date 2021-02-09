import axios from 'axios'

export const login=(username)=>{
    return {
        type:"LOGIN",
        username,
        task:true
    }
}

export const fetchUser=(email,password)=>{
     return dispatch =>{
            axios.post('http://localhost:8000/user/login',{email,password}).then((result)=>{
                console.log(result)
               dispatch(login(result.data.username))
               
            }).catch((err)=>{
                console.log(err);
            })
         
         
     }
}

export const Sign =(username)=>{
    return {
        type:"SIGNUP",
        username
    }
}

export const changeToLogin=()=>{
    console.log("in login")
    return{
        type:"CHANGETOLOGIN",
        login:true
    }
}

export const SignUp=(email,password,username,confirmPassword)=>{
        return dispatch=>{
            axios.post('http://localhost:8000/user/signup',{email,password,username}).then((res)=>{
      console.log(res);
       dispatch(Sign(res.data.username))
      }).catch((err)=>{
      console.log(err);
      })
        }
}

export const getUser=(username)=>{
    return dispatch =>{
        axios.post('http://localhost:8000/user/getUser',{username}).then((result)=>{
                console.log(result)
               dispatch(login(result.data.username))
               
            }).catch((err)=>{
                console.log(err);
            })
    }
}