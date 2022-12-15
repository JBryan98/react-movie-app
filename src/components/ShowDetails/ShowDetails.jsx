import React, { useEffect, useState } from "react";
import "./ShowDetails.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FiExternalLink } from "react-icons/fi";

const ShowDetails = ({ showType }) => {
  const { showId } = useParams();
  const [show, setShow] = useState(null);
  const truncateString = (string, size) => {
    if (string.length > size){
      return string.slice(0, size) + "..."
    }
    else{
      return string
    }
  }
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${showType}/${showId}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=credits,videos&language=es-MX`
      )
      .then((response) => setShow(response.data))
      .catch((error) => console.log(error));
  }, [showId, showType]);
  //console.log(show);
  if (show) {
    return (
      <>
        <div className="showDetailsContainer">
          <div className="showBackdrop">
            <img
              src={`https://image.tmdb.org/t/p/original/${show.backdrop_path}`}
              alt=""
            />
          </div>
          <div className="showGradient"></div>
          <div className="showInfoContainer">
            <div className="showPoster">
            <img
                src={
                  show.poster_path == null
                    ? "https://bicentenario.gob.pe/biblioteca/themes/biblioteca/assets/images/not-available-es.png"
                    : `https://www.themoviedb.org/t/p/w300/${show.poster_path}`
                }
                alt=""
              />
            </div>
            <div className="showDetails">
              {showType === "tv" ? (
                <>
                  <h2>{show.name}</h2>
                  <h4>
                    {show.networks.map((network) => network.name).join(", ")}
                  </h4>
                  <p>{truncateString(show.overview, 940)}</p>
                  <p>
                    <strong>Fecha Emision: </strong>
                    {show.first_air_date === ""
                      ? "Desconocido"
                      : show.first_air_date}
                  </p>
                  <p>
                    <strong>Temporadas: </strong>
                    {show.number_of_seasons}
                  </p>
                  <p>
                    <strong>Episodios: </strong>
                    {show.number_of_episodes}
                  </p>
                  <p>
                    <strong>Estado: </strong>
                    {show.status === "Ended"
                      ? (show.status = "Finalizado")
                      : show.status}
                  </p>
                  <p>
                    <strong>Calificación: </strong>
                    {show.vote_average === 0
                      ? "Sin calificación"
                      : show.vote_average.toFixed(1) + "/10"}
                  </p>
                  <p>
                    <strong>Categorías: </strong>
                    {show.genres.length === 0
                      ? "No disponible"
                      : show.genres.map((genre) => genre.name).join(", ")}
                  </p>
                  <p>
                    <strong>Creadores: </strong>
                    {show.created_by.length === 0
                      ? "No disponible"
                      : show.created_by
                          .map((creator) => creator.name)
                          .join(", ")}
                  </p>
                  {show.homepage === "" ? (
                    ""
                  ) : (
                    <p>
                      <strong>Página Oficial: </strong>
                      <a
                        href={show.homepage}
                        target="_blank"
                        rel="noreferrer"
                        className="externalLink"
                      >
                        {show.name}
                        <FiExternalLink className="externalIcon" />
                      </a>
                    </p>
                  )}
                </>
              ) : (
                <>
                  <h2>{show.title}</h2>
                  <h4>
                    {show.production_companies
                      .map((companie) => companie.name)
                      .join(", ")}
                  </h4>
                  <p>{truncateString(show.overview, 940)}</p>
                  <p>
                    <strong>Fecha de Estreno: </strong>
                    {show.release_date ? show.release_date : "Desconocido"}
                  </p>
                  <p>
                    <strong>Duración: </strong>
                    {show.runtime ? show.runtime + "min" : "Desconocido"}
                  </p>
                  <p>
                    <strong>Estado: </strong>
                    {show.status === "Ended"
                      ? (show.status = "Finalizado")
                      : show.status}
                  </p>
                  <p>
                    <strong>Calificación: </strong>
                    {show.vote_average === 0
                      ? "Sin calificación"
                      : show.vote_average.toFixed(1) + "/10"}
                  </p>
                  <p>
                    <strong>Categorías: </strong>
                    {show.genres.length === 0
                      ? "No disponible"
                      : show.genres.map((genre) => genre.name).join(", ")}
                  </p>
                  <p>
                    <strong>Director: </strong>
                    {show.credits.crew.length === 0
                      ? "No disponible"
                      : show.credits.crew
                          .filter((director) => director.job === "Director")
                          .map((item) => item.name)}
                  </p>
                  {show.homepage === "" ? (
                    ""
                  ) : (
                    <p>
                      <strong>Página Oficial: </strong>
                      <a
                        href={show.homepage}
                        target="_blank"
                        rel="noreferrer"
                        className="externalLink"
                      >
                        {show.title}
                        <FiExternalLink className="externalIcon" />
                      </a>
                    </p>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
        <div className="showCastContainer">
          <h2>Actores Principales</h2>
          <div className="castRow">
            {show.credits.cast.length === 0
              ? "No disponible"
              : show.credits.cast.slice(0, 10).map((actor) => {
                  return (
                    <div className="profileBox" key={actor.id}>
                      <img
                        src={
                          actor.profile_path == null
                            ? "https://talents2kin.com/wp-content/uploads/inconnu.jpg"
                            : `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                        }
                        alt=""
                      />
                      <h4>{actor.name}</h4>
                      <p>{actor.character}</p>
                    </div>
                  );
                })}
          </div>
        </div>
        <div className="showVideoContainer">
          <h2>Videos</h2>
          <div className="videoSection">
            {show.videos.results.length === 0
              ? "No disponible"
              : show.videos.results.map((video) => {
                  return (
                    <div className="videoRow" key={video.key}>
                      <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${video.key}`}
                        title="YouTube video player"
                        frameBorder="0"
                      ></iframe>
                      <div className="videoName">
                        <h4>{video.name}</h4>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </>
    );
  }
};

export default ShowDetails;
 