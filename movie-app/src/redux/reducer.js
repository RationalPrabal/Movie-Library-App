import { CREATE_MOVIES_FAILURE, CREATE_MOVIES_LOADING, CREATE_MOVIES_SUCCESS, DELETE_MOVIES_FAILURE, DELETE_MOVIES_LOADING, DELETE_MOVIES_SUCCESS, GET_MOVIES_FAILURE, GET_MOVIES_LOADING, GET_MOVIES_SUCCESS, UPDATE_MOVIES_FAILURE, UPDATE_MOVIES_LOADING, UPDATE_MOVIES_SUCCESS } from "./actionTypes"

const initState={
    movies:[],
    loading:false,
    error:false,
}

export const reducer=(state=initState,{type,payload})=>{
switch(type){
    case GET_MOVIES_LOADING:{
        return {
            ...state, loading:true
        }
    }
    case GET_MOVIES_SUCCESS:{
        return{
            ...state, loading:false,movies:payload
        }
    }
 
    case GET_MOVIES_FAILURE:{
        return {
            ...state, loading:false,error:true
        }
    }

    case CREATE_MOVIES_LOADING:{
        return {
            ...state, loading:true,error:false
        }
    }
    case CREATE_MOVIES_SUCCESS:{
        return{
...state, loading:false,error:false,movies:[...state.movies,payload]
        }
    }
    case CREATE_MOVIES_FAILURE:{
        return{
            ...state, loading:false,error:true
        }
    }
    case UPDATE_MOVIES_LOADING:{
        return{
            ...state, loading:true,error:false
        }
    }
    case UPDATE_MOVIES_SUCCESS:{
        let updateMovies = state.movies.map(el=>{
if(el.id===payload.id){
    el=payload.data
    return el
}
else{
    return el
}
        })
return{
    ...state,loading:false,error:false, movies:updateMovies
}
    }

    case UPDATE_MOVIES_FAILURE:{
        return {
            ...state,loading:false,error:true
        }
    }

    case DELETE_MOVIES_LOADING:{
        return {
            ...state,loading:true,error:false
        }
    }

    case DELETE_MOVIES_SUCCESS:{
        let moviesAfterDeleting= state.movies.filter(el=>{
            if(el.id!==payload){
                return el
            }
        })
        return {
            ...state,loading:false,error:false, movies:moviesAfterDeleting
    }
}

case DELETE_MOVIES_FAILURE:{
    return {
        ...state,loading:false,error:true
    }
}
    default:{
        return state
    }
}
}