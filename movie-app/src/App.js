
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import React from 'react';
import { getMovies } from './redux/action';
import SingleMovie from './components/SingleMovie';

import { Circle } from 'rc-progress'
import { CreateModal } from './components/CreateModal';

function App() {
  const {loading,movies}= useSelector(store=>store)
const dispatch =useDispatch()
  React.useEffect(()=>{
 
    dispatch(getMovies())
  },[])
  
  return (
    <div className="App">
  <h1 className='text-xl font-bold text-pink-700 bg-gray-400 p-5'>Movie Library App</h1>
<div className='grid grid-cols-2 sm:grid-cols-6 gap-4  w-[100%] sm:w-[90%] m-auto customTitle mt-5 '>
  <input onChange={(e)=>{
setTimeout(()=>{
dispatch(getMovies(undefined,e.target.value))
},1000)
  }} type="text" className="" placeholder="Search movies by Title,Director,Year or Genre"/>
  <select onChange={(e)=>{
dispatch(getMovies({field:"imdbRating",order:e.target.value}))
  }} className="cursor-pointer">
    <option value="">Sort Movies By Rating</option>
    <option value="asc">Ascending</option>
    <option value="desc">Descending</option>
  </select>
  <select onChange={(e)=>{
dispatch(getMovies({field:"Title",order:e.target.value}))
  }} className="cursor-pointer">
    <option value="">Sort Movies By Title</option>
    <option value="asc">Ascending</option>
    <option value="desc">Descending</option>
  </select>
  <select onChange={(e)=>{
dispatch(getMovies({field:"Director",order:e.target.value}))
  }} className="cursor-pointer">
    <option value="">Sort Movies By Director</option>
    <option value="asc">Ascending</option>
    <option value="desc">Descending</option>
  </select>
  <select onChange={(e)=>{
dispatch(getMovies({field:"Genre",order:e.target.value}))
  }} className="cursor-pointer">
    <option value="">Sort Movies By Genre</option>
    <option value="asc">Ascending</option>
    <option value="desc">Descending</option>
  </select>
  <select onChange={(e)=>{
dispatch(getMovies({field:"Year",order:e.target.value}))
  }} className="cursor-pointer">
    <option value="">Sort Movies By Year</option>
    <option value="asc">Ascending</option>
    <option value="desc">Descending</option>
  </select>
</div>
<CreateModal/>
{
   loading ?<div className='w-[30%] h-50vh m-auto mt-10 flex justify-center items-center border-3'><Circle className='w-[100%]' percent={60} strokeWidth={4} strokeColor="red" /></div>   :
  <div className='grid grid-cols-1 w-[100%] sm:w-[90%] m-auto gap-4 sm:grid-cols-2 md:grid-cols-3 mt-5'>
{
 
  movies.map(movie=><SingleMovie key={movie.id} movie={movie} />)
}
  </div>
}
    </div>

  );
}

export default App;
