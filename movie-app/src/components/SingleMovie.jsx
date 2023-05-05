import React from 'react'

export default function SingleMovie({movie}) {

  return (
    <div className='p-4 shadow-lg'>
        <img className='w-[100%]' src={movie.Images[0]} alt="movie" />
        <div className='customFlex'>
            <p>
                Title
            </p>
            -
            <p>
                {movie.Title}
            </p>
        </div>
        <div>
        <p>Actors</p>
        <p>{movie.Actors}</p>
        </div>

    </div>
  )
}
