import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./MainBackdrop.css";

const MainBackdrop = () => {
  const [movies, setMovie] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  const truncateString = (string, size) => {
    if (string?.length > size){
        return string.slice(0, size) + "..."
    }else{
        return string;
    }
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=es-MX&page=1`
      )
      .then((response) => {
        //console.log(response.data.results);
        setMovie(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  //console.log(movie);
  return (
    <>
      <div className="mainContainer">
        <div className="backdropContainer">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt=""
          />
        </div>
        <div className="gradient"></div>
        <div className="descriptionContainer">
            <h1>{movie?.title}</h1>
            <p>{truncateString(movie?.overview, 200)}</p>
            <p>Fecha de estreno: {movie?.release_date}</p>
            <Link to={"/peliculas/" + movie?.id}>
              <button>Más Información</button>
              </Link>
        </div>
      </div>
    </>
  );
};

export default MainBackdrop;
