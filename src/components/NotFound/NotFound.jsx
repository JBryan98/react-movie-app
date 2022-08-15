import React from "react";
import {Link} from 'react-router-dom';
import './NotFound.css';

const NotFound = ({message, type}) => {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1>
          Error <span>{type}</span>
        </h1>
        <h3>{message}</h3>
        <img
          src="https://spikeandfreak.com/wp-content/uploads/2019/03/img-404.gif"
          alt=""
        />
        <Link to="/"><button>Volver al Inicio</button></Link>
      </div>
    </div>
  );
};

export default NotFound;
