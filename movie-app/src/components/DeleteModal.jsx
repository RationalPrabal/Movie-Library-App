import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
  } from '@chakra-ui/react'
  import {AiFillDelete} from "react-icons/ai"
import { useDispatch } from 'react-redux'
import { deleteMovies } from '../redux/action'
 export function DeleteModal({id}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch =useDispatch()
    return (
      <>
       
       <AiFillDelete onClick={onOpen} className='text-2xl text-red-600 cursor-pointer'/>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Delete Movie</ModalHeader>
            <ModalCloseButton />
            <ModalBody >
          <div className='font-bold'>
            <p>You want to delete this movie for Sure? </p>
          <div className='flex justify-around mt-8'>
            <button onClose={onClose}  onClick={()=>{
dispatch(deleteMovies(id))

            }}  className='bg-red-400 text-white rounded-md px-4 py-2'>Yes</button>
            <button onClick={onClose}  className='bg-green-400 text-white rounded-md px-4 py-2'>No</button>
            </div>
          </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }