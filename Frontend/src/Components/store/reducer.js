const initialState={
    username:null,
    task:false,
    login:false
}

const reducer=(state=initialState,action)=>{
    switch(action){
        case "LOGIN":
            return({...state,username:action.username,task:true});
        case "CHANGETOLOGIN":
            return({...state,login:true})   
        case "SIGNUP":
             return({...state,username:action.username,task:true})     
    }
    return state;
}

export default reducer;