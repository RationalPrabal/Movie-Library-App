import axios from "axios"
import { CREATE_MOVIES_FAILURE, CREATE_MOVIES_LOADING, CREATE_MOVIES_SUCCESS, DELETE_MOVIES_FAILURE, DELETE_MOVIES_LOADING, DELETE_MOVIES_SUCCESS, GET_MOVIES_FAILURE, GET_MOVIES_LOADING, GET_MOVIES_SUCCESS, UPDATE_MOVIES_FAILURE, UPDATE_MOVIES_LOADING, UPDATE_MOVIES_SUCCESS } from "./actionTypes"

//! Get Movies Action

//* Get Movies Api

const getMoviesAPI=async(sort,q)=>{
    
    try{
    let data=await  axios.get(`https://southern-boatneck-bumper.glitch.me/movies?q=${q||""}&_sort=${sort ? sort.field : "all"}&_order=${sort ? sort.order:"all"}`);
    return data.data
    }
    catch(e){
        throw e
    }
}

//* Get Movies Function

export const getMovies =(sort,q)=>async(dispatch)=>{

dispatch({type:GET_MOVIES_LOADING})

try{
let movies= await getMoviesAPI(sort,q)
dispatch({type:GET_MOVIES_SUCCESS,payload:movies})
}
catch(err){
    dispatch({type:GET_MOVIES_FAILURE})
}
}



//! Post Movies Action

//* Post Movies Api

const postMoviesAPI=async(data)=>{
    try{
    await  axios.post("https://southern-boatneck-bumper.glitch.me/movies",data)
    }
    catch(e){
        throw e
    }
}

//* Post Movies Function

export const postMovies =(data)=>async(dispatch)=>{
dispatch({type:CREATE_MOVIES_LOADING})

try{
await postMoviesAPI(data)

dispatch({type:CREATE_MOVIES_SUCCESS,payload:data})

}
catch(err){
    dispatch({type:CREATE_MOVIES_FAILURE})
}
}


//! Update Movies Action

//* Update Movies Api

const patchMoviesAPI=async(data,id)=>{
    try{
   await  axios.patch(`https://southern-boatneck-bumper.glitch.me/movies/${id}`,data)
    }
    catch(e){
        throw e
    }
}

//* Update Movies Function

export const updateMovies =(data,id)=>async(dispatch)=>{
dispatch({type:UPDATE_MOVIES_LOADING})

try{
await patchMoviesAPI(data,id)
dispatch({type:UPDATE_MOVIES_SUCCESS,payload:{data,id}})
}
catch(err){
    dispatch({type:UPDATE_MOVIES_FAILURE})
}
}




//! Delete Movies Action

//* Delete Movies Api

const deleteMoviesAPI=async(id)=>{
    try{
   await  axios.delete(`https://southern-boatneck-bumper.glitch.me/movies/${id}`)
    }
    catch(e){
        throw e
    }
}

//* Delete Movies Function

export const deleteMovies =(id)=>async(dispatch)=>{
dispatch({type:DELETE_MOVIES_LOADING})

try{
 await deleteMoviesAPI(id)
dispatch({type:DELETE_MOVIES_SUCCESS,payload:id})
}
catch(err){
    dispatch({type:DELETE_MOVIES_FAILURE})
}
}