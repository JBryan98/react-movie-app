import axios from "axios";
import { BsStarFill } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./Searched.css";
import NotFound from "../NotFound/NotFound";
import Pagination from "../Pagination/Pagination";

const Searched = () => {
  const { input, page } = useParams();
  const [searched, setSearched] = useState([]);
  const [totalPages, setTotalPages] = useState({});
  const navigate = useNavigate();

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${input}&language=es-MX&page=${page}`
      )
      .then((response) => {
        setSearched(response.data.results);
        setTotalPages(response.data.total_pages);
      })
      .catch((error) => console.log(error));
  }, [page, input]);

  const changePage = ({ selected }) => {
    let currentPage = selected + 1;
    navigate(`/buscar/${input}/page/${currentPage}`);
  };

  console.log(searched);
  console.log(totalPages);

  return (
    <>
      <h1 className="resultado">
        Resultados de "<span>{input}</span>"
      </h1>
      {searched.length !== 0 ? (
        <>
          <div className="itemContainer">
            {searched
              .filter((tipo) => tipo.media_type !== "person")
              .map((item) => {
                return (
                  <Link
                    key={item.id}
                    to={
                      item.title
                        ? "/peliculas/" + item.id
                        : "/series/" + item.id
                    }
                    className="itemLink"
                  >
                    <div className="items">
                      <div className="itemPoster">
                        <img
                          src={
                            item.poster_path == null
                              ? "https://bicentenario.gob.pe/biblioteca/themes/biblioteca/assets/images/not-available-es.png"
                              : `https://www.themoviedb.org/t/p/w300/${item.poster_path}`
                          }
                          alt={item.title}
                        />
                      </div>
                      <div className="itemDescription">
                        <div className="itemInfo">
                          <h4>{item.title ? item.title : item.name}</h4>
                          <h5>{item.release_date}</h5>
                        </div>
                        <div className="itemOverview">
                          <p>{truncateString(item.overview, 200)}</p>
                        </div>
                        <h4 className="itemRate">
                          <BsStarFill />{" "}
                          {item.vote_average === 0 ? "NR" : item.vote_average}
                        </h4>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
          <Pagination
            pageCount={totalPages}
            changePage={changePage}
            forcePage={page - 1}
          />
        </>
      ) : (
        <div className="notFound">
          <NotFound message="Parece que no pudimos encontrar lo que buscaste" />
        </div>
      )}
    </>
  );
};

export default Searched;
