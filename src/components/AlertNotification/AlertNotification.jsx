import { Alert } from "@mui/material";
import React from "react";
import './AlertNotification.css';

const AlertNotification = ({ setAlert, severity, message }) => {
  return (
    <Alert
    className="errorNotification"
      onClose={() => {
        setAlert({ state: false, severity: "", message: "" });
      }}
      severity={severity}
    >
      <strong>Error: </strong>
      {message}
    </Alert>
  );
};

export default AlertNotification;
