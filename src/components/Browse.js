import React from 'react';
import Header from './Header';
import useNowPlayingMovies from '../CustomHooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../CustomHooks/usePopularMovies';
import GptSearch from './GptSearchPage';
import { useSelector } from 'react-redux';
import GptSearchPage from './GptSearchPage';

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header/>
      { showGptSearch ? 
      <GptSearchPage/> : 
      <>
      <MainContainer/>
      <SecondaryContainer/>
      </>
      }
      
      
    </div>
  );
}

export default Browse;
