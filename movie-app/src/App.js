
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import React from 'react';
import { getMovies } from './redux/action';
import SingleMovie from './components/SingleMovie';

function App() {
  const {movies}= useSelector(store=>store)
const dispatch =useDispatch()
  React.useEffect(()=>{
    dispatch(getMovies())

  },[])
  console.log(movies)
  return (
    <div className="App">
  <h1 className='text-xl font-bold text-pink-700 bg-gray-400 p-5'>Movie Library App</h1>

  <div className='grid grid-cols-1 w-[80%] m-auto gap-4 sm:grid-cols-2 md:grid-cols-3'>
{
  movies.map(movie=><SingleMovie key={movie.id} movie={movie} />)
}
  </div>
    </div>
  );
}

export default App;
