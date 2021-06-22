import React from 'react'

import ProduitPhares from "./components/ProduitPhares.js";

import Engagements from "./components/Engagements.js";

const Home = () => {
    return (
        <div>

<ProduitPhares PanierSac={PanierSac} setPanierSac={setPanierSac} />

<Engagements />

            
        </div>
    )
}

export default Home
