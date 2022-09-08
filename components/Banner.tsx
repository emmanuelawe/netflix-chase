import Image from "next/image"
import { useEffect, useState } from "react"
import { baseUrl } from "../constants/movie"
import { Movie } from "../typings"

import {FaPlay} from 'react-icons/fa'
import {HiInformationCircle} from 'react-icons/hi'
import {useRecoilState} from 'recoil'
import {modalState, movieState} from '../atoms/modalAtom'

interface Props {
    netflixOriginals: Movie[]
}

const Banner = ({netflixOriginals}: Props) => {
const [movie, setMovie] = useState<Movie | null>(null)
const [showModal, setShowModal] = useRecoilState(modalState)
const [currentMovie, setCurrentMovie] = useRecoilState(movieState)



useEffect(() => {
  setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
}, [netflixOriginals])

console.log(movie)

  return (
    <div className="flex flex-col pb-6 space-y-2 py-18 md:space-y-4 lg:h-[65vh]
     lg:pb-20 md:pb-12 lg:justify-center"> 
        <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
        layout="fill" objectFit="cover"/>
        </div>

<<<<<<< HEAD
<div className="pt-16 space-y-4 ">
<h1 className="text-2xl lg:pt-40 font-bold md:text-3xl lg:text-6xl">{movie?.title || movie?.name || movie?.original_name}</h1>
=======
<div className="pt-16 space-y-4">
<h1 className="text-2xl lg:pt-40 font-bold md:text-3xl lg:text-6xl ">{movie?.title || movie?.name || movie?.original_name}</h1>
>>>>>>> 64f739a162005bd82d295332be1e17a4611edbc8
        <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">{movie?.overview}</p>
        <div className="flex space-x-3">
            <button className="bannerButton bg-white text-black"><FaPlay className="h-4 w-4 text-black md:h-7 md:w-7"/> Play</button>
            <button onClick={() => {
            setCurrentMovie(movie)
            setShowModal(true)
          }} className="bannerButton bg-[gray]/70">More Info <HiInformationCircle className="h-5 w-5 md:h-8 md:w-8"/></button>
        </div>
</div>
        
    </div>
  )
}


export default Banner
