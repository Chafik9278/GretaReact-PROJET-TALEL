import React from 'react'

import ProduitPhares from "./ProduitPhares.js";

import Engagements from "./Engagements.js";

import Banniere from "./Banniere.js";

import { useState } from "react";

const Home = (props) => {

    
    return (
        <div>

<Banniere/>

<ProduitPhares PanierSac={props.PanierSac} setPanierSac={props.setPanierSac} />

<Engagements />

            
        </div>
    )
}

export default Home
