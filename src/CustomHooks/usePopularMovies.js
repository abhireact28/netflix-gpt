import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const usePopularMovies = () => {
      //Fetch data from TMDB API and update store movies
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=2', API_OPTIONS);
    const json = await data.json();
    // console.log(json);
    dispatch(addPopularMovies(json.results));
  }

  useEffect(() => {
    getPopularMovies();
  }, []);
}

export default usePopularMovies;