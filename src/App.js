import "./App.css";

import { useState } from "react";


import Header from "./components/Header.js";



import Footer from "./components/Footer.js";

import PageShop from "./components/PageShop.js";

import Contact from "./components/Contact.js";

import Apropos from "./components/Apropos.js";

import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // *********TOUS MES STATES*****

  const [PanierSac, setPanierSac] = useState(0);

  return (
    <div className="App">
      <Router>
        <div>
          <Header PanierSac={PanierSac} />

          <Switch>
            <Route path="/SHOP">
              <PageShop PanierSac={PanierSac} setPanierSac={setPanierSac} />
            </Route>

            <Route path="/APROPOS">
              <Apropos />
            </Route>

            <Route path="/CONTACT">
              <Contact />
            </Route>

          </Switch>
        </div>
      </Router>

     

      <Footer />
    </div>
  );
}

export default App;
