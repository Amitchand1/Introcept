import React from "react";
import "./Initialpage.css";
import { Link } from "react-router-dom";
export default function InitialPage() {
  return (
    <div className="inital">
      <h1 className="heading">Assessment</h1>

      <div className="button">
        <Link className="link" to="/" variant="contained" color="primary">
          Frontend
        </Link>
        <Link
          className="link"
          to="/backend"
          variant="contained"
          color="primary"
        >
          Backend
        </Link>
      </div>
    </div>
  );
}
