import CardSac from "./CardSac";
import ShopBags from "../BaseData/ShopBags.js";

const PageShop = (props) => {
  return (
    <section className="container">
      {ShopBags.map((LeSac) => {
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
    </section>
  );
};

export default PageShop;
