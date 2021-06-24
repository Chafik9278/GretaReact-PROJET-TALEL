import CardSac from "./CardSac";
import BagsPhare from "../BaseData/BagsPhare.js";

const ProduitPhares = (props) => {
  // *********TOUS MES STATES*****

  return (
    <div>
      <section>
        <h1>PRODUIT PHARES</h1>

        <div className="container">
          {BagsPhare.map((LeSac) => {
            return (
              <div className="Sacshop">
                <CardSac
                  imageSac={LeSac.imageURL}
                  Nom={LeSac.name}
                  Prix={LeSac.price}
                  Description={LeSac.Description}
                  Details={LeSac.Details}
                  PanierSac={props.PanierSac}
                  setPanierSac={props.setPanierSac}
                />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ProduitPhares;
