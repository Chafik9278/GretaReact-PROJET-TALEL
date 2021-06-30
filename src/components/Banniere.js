import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Banniere = () => {
  return (
    <div>
      <div className="Banniere">
        <div className="BoxBanniere">
          <h1> LES NOUVEAUTEES </h1>
          <Link to="/SHOP">  <button> DECOUVRIR </button> </Link> 
        </div>
      </div>
    </div>
  );
};

export default Banniere;
