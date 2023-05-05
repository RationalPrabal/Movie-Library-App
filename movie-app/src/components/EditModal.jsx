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
  import {BiEdit} from 'react-icons/bi'
import { updateMovies } from '../redux/action'
import { useDispatch } from 'react-redux'
 export function EditModal({movie}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch= useDispatch()
    const [data,setData]= React.useState({
        Title:movie.Title,
        Year:movie.Year,
        Runtime:movie.Runtime,
        Genre:movie.Genre,
        Director:movie.Director,
        Actors:movie.Actors,
Plot:movie.Plot,
Image:movie.Image,
imdbRating:movie.imdbRating,
Released:movie.Released,
    })
    return (
      <>
       <BiEdit onClick={onOpen} className='text-2xl text-blue-600 cursor-pointer'/>
        <Modal isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Movie Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody  >
                <div className='flex justify-between font-bold'>
                <span>Image Link</span>
                -
                <input value={data.Image} onChange={(e)=>setData({...data,Image:e.target.value})}  />
                </div>
                <div className='flex justify-between font-bold'>
                <span>Title</span>-
               <input value={data.Title} onChange={(e)=>setData({...data,Title:e.target.value})} />
               </div>
               <div className='flex justify-between font-bold'>
                <span>Year</span>-
               <input value={data.Year} onChange={(e)=>setData({...data,Year:e.target.value})} />
               </div>
               <div className='flex justify-between font-bold'>
                <span>Runtime</span>-
               <input value={data.Runtime} onChange={(e)=>setData({...data,Runtime:e.target.value})} />
               </div>
               <div className='flex justify-between font-bold'>
                <span>Director</span>-
               <input value={data.Director} onChange={(e)=>setData({...data,Director:e.target.value})} />
               </div>
               <div className='flex justify-between font-bold'>
                <span>Actors</span>-
               <input value={data.Actors} onChange={(e)=>setData({...data,Actors:e.target.value})} />
               </div>
               <div className='flex justify-between font-bold'>
                <span>Plot</span>-
               <input value={data.Plot} onChange={(e)=>setData({...data,Plot:e.target.value})} />
               </div>
               <div className='flex justify-between font-bold'>
                <span>Rating</span>-
               <input value={data.imdbRating} onChange={(e)=>setData({...data,imdbRating:e.target.value})} />
               </div>
               <div className='flex justify-between font-bold'>
                <span>Genre</span>-
               <input value={data.Genre} onChange={(e)=>setData({...data,Genre:e.target.value})} />
               </div>
               <div className='flex justify-center mt-5'>
                <button onClose={onClose} onClick={()=>{
                    dispatch(updateMovies(data,movie.id))
                    
                }} className='bg-green-500 text-white text-bold p-3 '>Save Changes</button>
               </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }