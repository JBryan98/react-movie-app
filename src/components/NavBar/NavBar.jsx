import React, { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import AlertNotification from "../AlertNotification/AlertNotification";
import "./NavBar.css";

const NavBar = () => {
  const [input, setInput] = useState("");
  const [alert, setAlert] = useState({
    state: false,
    severity: "",
    message: "",
  });
  const [showLinks, setShowLinks] = useState(false);
  showLinks ? document.body.style.overflow = 'hidden' : document.body.style.overflow= ''
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      e.target[0].focus();
      setAlert({
        state: true,
        severity: "error",
        message: "¡No hay nada que buscar!",
      });
    } else {
      navigate("/buscar/" + input);
      setInput("")
      setShowLinks(false);
    }
  };

  return (
    <>
      <header className={showLinks ? "responsive" : ""}>
        <ul>
          <FaBars
            className="barIcon"
            onClick={() => setShowLinks(!showLinks)}
          />
          <div className="linkContainer" id={showLinks ? "hidden" : ""}>
            <li>
              <NavLink
                className="navLink"
                to="/"
                onClick={() => {setShowLinks(false); setAlert({state:false, severity:"", message: ""})}}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navLink"
                to="/peliculas/page/1"
                onClick={() => {setShowLinks(false); setAlert({state:false, severity:"", message: ""})}}
              >
                Películas
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navLink"
                to="/series/page/1"
                onClick={() => {setShowLinks(false); setAlert({state:false, severity:"", message: ""})}}
              >
                Series
              </NavLink>
            </li>
          </div>
          <form onSubmit={handleSubmit} className="searchForm">
            <div className="inputContainer">
              <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type="text"
                placeholder="Buscar..."
                className="searchInput"
              />
              <button className="searchButton">
                <FaSearch />
              </button>
            </div>
          </form>
        </ul>
      </header>
      {alert.state === true && (
        <AlertNotification
          setAlert={setAlert}
          severity={alert.severity}
          message={alert.message}
        />
      )}
    </>
  );
};

export default NavBar;
