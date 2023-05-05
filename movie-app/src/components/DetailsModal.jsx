import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
  } from '@chakra-ui/react'

 export function DetailsModal({movie}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <button onClick={onOpen} className='bg-red-400 font-bold text-white p-2 rounded-sm'>View More Details</button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Movie Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody >
            <div >
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
            <p>Director</p>
            -
            <p>{movie.Director}</p>
        </div>
        <div className='customFlex customTitle'>
            <p>Released</p>
            -
            <p>{movie.Released}</p>
        </div>
        <div className='customFlex customTitle'>
            <p>Runtime</p>
            -
            <p>{movie.Runtime}</p>
        </div>
        <div className='customFlex customTitle'>
            <p>Plot</p>
            -
            <p className='text-teal-400'>{movie.Plot}</p>
        </div>
            </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }