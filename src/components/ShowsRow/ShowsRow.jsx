import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ShowsRow.css";

const ShowsRow = ({ title, request }) => {
  const [show, setShow] = useState([]);

  useEffect(() => {
    axios
      .get(request)
      .then((response) => {
        //console.log(response.data.results);
        setShow(response.data.results);
      })
      .catch((error) => console.log(error));
  }, [request]);

  console.log(show);
  return (
    <section>
      <h1>{title}</h1>
      <div className="rowContainer">
        {show.map((item) => (
            <div className="rowElement">
            <Link
            className="rowLink"
            to={item.title ? "/peliculas/" + item.id : "/series/" + item.id}
            key={item.id}
          >
              <img
                src={
                  item.backdrop_path === null
                    ? "https://bicentenario.gob.pe/biblioteca/themes/biblioteca/assets/images/not-available-es.png"
                    : `https://www.themoviedb.org/t/p/w400/${item.backdrop_path}`
                }
                alt={item.id}
              />
              <h3>{item.title ? item.title : item.name}</h3>
              </Link>
            </div>
        ))}
      </div>
    </section>
  );
};

export default ShowsRow;
