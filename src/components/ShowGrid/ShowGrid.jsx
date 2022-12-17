import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsStarFill } from "react-icons/bs";
import "./ShowGrid.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import Pagination from '../Pagination/Pagination'

const ShowGrid = ({ type, title }) => {
  const { page } = useParams();
  const [show, setShow] = useState([]);

  const truncateString = (string, size) => {
    if (string.length > size) {
      return string.slice(0, size) + "...";
    } else {
      return string;
    }
  };

  const navigate = useNavigate();

  if (page > 500 || isNaN(page)) {
    navigate("/*");
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${type}/popular?api_key=${process.env.REACT_APP_API_KEY}&language=es-MX&page=${page}`
      )
      .then((response) => setShow(response.data.results))
      .catch((error) => console.log(error));
  }, [page, type]);

  const changePage = ({ selected }) => {
    let currentPage = selected + 1;
    navigate(
      show[0].title
        ? "/peliculas/page/" + currentPage
        : "/series/page/" + currentPage
    );
  };

  console.log(show);

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
                  src={
                    show.poster_path === null
                      ? "https://bicentenario.gob.pe/biblioteca/themes/biblioteca/assets/images/not-available-es.png"
                      : `https://www.themoviedb.org/t/p/w300/${show.poster_path}`
                  }
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
      <Pagination
        pageCount={500}
        changePage={changePage}
        forcePage={Number(page - 1)}
      />
    </div>
  );
};

export default ShowGrid;
