import React from 'react'
import { DetailsModal } from './DetailsModal'


import { EditModal } from './EditModal'
import { DeleteModal } from './DeleteModal'

export default function SingleMovie({movie}) {

  return (
    <div className='p-4 shadow-lg space-y-2'>
        <img className='w-[100%]' src={movie.Image} alt="movie" />
        <div className='customFlex customTitle'>
            <p className=''>
                Title
            </p>
            -
            <p>
                {movie.Title}
            </p>
        </div>
        <div className='flex justify-around '>
        <p className='customTitle'>Actors</p>
        -
        <div className="">
       {
        movie.Actors.split(",").map(actor=><button className='bg-indigo-400 mx-1 rounded-sm text-white p-1  my-1 text-sm'>{actor}</button>)
       }
       </div>
        </div>
        <div className='flex justify-around items-center'>
        <p className='customTitle'>Genre</p>
        -
        <div className="">
       {
        movie.Genre.split(",").map(genre=><button className='bg-pink-400 mx-2 rounded-sm text-white p-1 text-sm  my-1'>{genre}</button>)
       }
       </div>
        </div>
        <div className='customFlex customTitle'>
            <p>Rating</p>
            -
            <p>{movie.imdbRating}</p>
        </div>
        <div className='customFlex customTitle'>
            <p>Year</p>
            -
            <p>{movie.Year}</p>
        </div>
        <div className='flex justify-around'>
<EditModal movie={movie}/>
<DeleteModal id={movie.id}/>

        </div>
        <div className='mt-3'>
     <DetailsModal movie={movie}/>
        </div>
    </div>
  )
}
