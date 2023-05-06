import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
  } from '@chakra-ui/react'
import React from 'react'

import { postMovies } from '../redux/action'
import { useDispatch } from 'react-redux'
import { MdAddCircleOutline } from 'react-icons/md'
 export function CreateModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch= useDispatch()
    const [data,setData]= React.useState({
        Title:"",
        Year:"",
        Runtime:"",
        Genre:"",
        Director:"",
        Actors:"",
Plot:"",
Image:"",
imdbRating:"",
Released:"",
    })
   
    return (
      <>
      
       <div onClick={onOpen} className='flex w-[60%] sm:w-[20%] justify-around m-auto items-center bg-teal-500 rounded-md mt-8 cursor-pointer'>
  <p className='font-bold text-white text-lg'>Add New Movie</p>
< MdAddCircleOutline className='text-white text-4xl'/>
</div>
        <Modal isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add New Movie</ModalHeader>
            <ModalCloseButton />
            <ModalBody  >
                <div className='flex justify-between font-bold'>
                <span>Image Link</span>
                -
                <input placeholder='enter image url' value={data.Image} onChange={(e)=>setData({...data,Image:e.target.value})}  />
                </div>
                <div className='flex justify-between font-bold'>
                <span>Title</span>-
               <input placeholder='Enter Title' value={data.Title} onChange={(e)=>setData({...data,Title:e.target.value})} />
               </div>
               <div className='flex justify-between font-bold'>
                <span>Year</span>-
               <input placeholder='Enter Year of release' value={data.Year} onChange={(e)=>setData({...data,Year:e.target.value})} />
               </div>
               <div className='flex justify-between font-bold'>
                <span>Runtime</span>-
               <input placeholder='Enter Runtime' value={data.Runtime} onChange={(e)=>setData({...data,Runtime:e.target.value})} />
               </div>
               <div className='flex justify-between font-bold'>
                <span>Director</span>-
               <input placeholder='Enter Director' value={data.Director} onChange={(e)=>setData({...data,Director:e.target.value})} />
               </div>
               <div className='flex justify-between font-bold'>
                <span>Actors</span>-
               <input placeholder='Enter Actors name' value={data.Actors} onChange={(e)=>setData({...data,Actors:e.target.value})} />
               </div>
               <div className='flex justify-between font-bold'>
                <span>Plot</span>-
               <input placeholder='Enter the Plot' value={data.Plot} onChange={(e)=>setData({...data,Plot:e.target.value})} />
               </div>
               <div className='flex justify-between font-bold'>
                <span>Rating</span>-
               <input placeholder='Enter Rating' type='number' value={data.imdbRating} onChange={(e)=>setData({...data,imdbRating:e.target.value})} />
               </div>
               <div className='flex justify-between font-bold'>
                <span>Genre</span>-
               <input placeholder='Enter Genre' value={data.Genre} onChange={(e)=>setData({...data,Genre:e.target.value})} />
               </div>
               <div className='flex justify-between font-bold'>
                <span>Date Of Release</span>-
               <input placeholder='Choose Date' type='Date' value={data.Released} onChange={(e)=>setData({...data,Released:e.target.value})} />
               </div>
               <p className='text-sm text-red-700'>
                You can add multiple Genre and Actors by separating them with commas.
               </p>
               <div className='flex justify-center mt-5'>
                <button disabled={!data.Title||!data.Image||!data.Year||!data.Runtime||!data.Actors||!data.Director||!data.Plot||!data.Released||!data.imdbRating||!data.Genre} onClick={()=>{
                 dispatch(postMovies(data))
                onClose()
                }}  className='bg-green-500 text-white text-bold p-3 disabled:cursor-not-allowed'>Add</button>
               </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }