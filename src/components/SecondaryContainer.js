import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className=''>
      <div className=' bg-[#141414] '>
        <div className='mt-0 md:-mt-40 relative  px-6 pb-14 '>
        <MovieList title={"Now PLaying"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
        <MovieList title={"Top Rated"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Up Coming"} movies={movies.popularMovies}/>
        <MovieList title={"Binge Movies"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
        </div>
  
      </div>
      </div>
    )
  );
}

export default SecondaryContainer;
