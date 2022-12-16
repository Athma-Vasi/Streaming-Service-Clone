import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { baseUrl } from '../constants/movie';
import { Movie } from '../types';
import { FaPlay } from 'react-icons/fa';
import { HiInformationCircle } from 'react-icons/hi2';

type BannerProps = {
  netflixOriginals: Movie[];
};

function Banner({ netflixOriginals }: BannerProps) {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute -z-10 top-0 left-0 h-[95vh] w-screen">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          alt="movie poster"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <h1 className="text-2xl md:text-4xl lg:text-7xl ">
        {movie?.title ?? movie?.name ?? movie?.original_name}
      </h1>
      <p className="max-w-xs text-xs md:max-w-lg lg:max-w-2xl lg:text-2xl">
        {movie?.overview}
      </p>

      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black ">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7">Play</FaPlay>
        </button>
        <button className="bannerButton bg-[gray]/70">
          <p>More Info</p>
          <HiInformationCircle className="h-5 w-5 md:h-8 md:w-8"></HiInformationCircle>
        </button>
      </div>
    </div>
  );
}

export default Banner;

//api-key : 2cfd768d6f96636193d6a37959011dab

// API Read Access Token (v4 auth)
/**
 eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyY2ZkNzY4ZDZmOTY2MzYxOTNkNmEzNzk1OTAxMWRhYiIsInN1YiI6IjYzOTkzZTliNmU0NGJmMDA4OTZlOTcxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7EL6JSfhp9sesQIcSyVAgeKUyofAMZV_Wp9o-PKAvLU
 */

// Example API Request
/**
 https://api.themoviedb.org/3/movie/550?api_key=2cfd768d6f96636193d6a37959011dab
 */
