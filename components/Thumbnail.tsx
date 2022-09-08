import Image from 'next/image'
import React from 'react'
import { Movie } from '../typings'
<<<<<<< HEAD
<<<<<<< HEAD
import {useRecoilState} from 'recoil'
import {modalState, movieState} from '../atoms/modalAtom'
=======
>>>>>>> 64f739a162005bd82d295332be1e17a4611edbc8
=======
>>>>>>> 64f739a162005bd82d295332be1e17a4611edbc8

interface Props {
    movie: Movie 
    // movie: Movie | DocumentData
}

const Thumbnail = ({movie}: Props) => {
  const [showModal, setShowModal] = useRecoilState(modalState)
const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  return (
    <div onClick={() => {
      setCurrentMovie(movie)
      setShowModal(true)
    }} className="relative h-28 min-w-[180px] 
    cursor-pointer transition duration-200 ease-out md:h-36 md-min-width-[260px] md:hover:scale-105">
        <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  )
}

export default Thumbnail
