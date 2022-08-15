import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsStarFill } from "react-icons/bs";
import "./ShowGrid.css";
import { Link } from "react-router-dom";

const ShowGrid = ({ type, title }) => {
  const [show, setShow] = useState([]);
  const truncateString = (string, size) => {
    if (string.length > size) {
      return string.slice(0, size) + "...";
    } else {
      return string;
    }
  };
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${type}/popular?api_key=${process.env.REACT_APP_API_KEY}&language=es-MX&page=1`
      )
      .then((response) => setShow(response.data.results))
      .catch((error) => console.log(error));
  }, [type]);

  //console.log(show);

  return (
    <div className="gridContainer">
      <h1>{title}</h1>
      <div className="grid">
        {show.map((show) => (
          <Link
            className="gridLink"
            to={type === "tv" ? "/series/" + show.id : "/peliculas/" + show.id}
            key={show.id}
          >
            <div className="gridElement">
              <div className="itemPoster">
                <img
                  src={`https://www.themoviedb.org/t/p/w300/${show.poster_path}`}
                  alt={show.title ? show.title : show.name}
                />
              </div>
              <div className="itemDescription">
                <h4>{show.title ? show.title : show.name}</h4>
                <h5>
                  {show.release_date ? show.release_date : show.first_air_date}
                </h5>
                <p className="overview">{truncateString(show.overview, 200)}</p>
                <p className="voteAverage">
                  <BsStarFill />{" "}
                  {show.vote_average === 0 ? "NR" : show.vote_average}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShowGrid;
