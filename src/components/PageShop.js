import CardSac from "./CardSac";
import ShopBags from "../BaseData/ShopBags.js";

const PageShop = (props) => {
  return (
    <div className="Box-shop">
      <img
        className="Banshop"
        src="https://res.cloudinary.com/sharing-cloud/image/upload/v1624002806/banniere-shop_yqpezv.png "
        alt=" "
      />

      <h1>SHOP STORE</h1>

      <section className="container">
        {ShopBags.map((LeSac) => {
          return (
            <div className="Sacshop">
              <CardSac
                imageSac={LeSac.imageURL}
                Nom={LeSac.name}
                Prix={LeSac.price}
                PanierSac={props.PanierSac}
                setPanierSac={props.setPanierSac}
              />
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default PageShop;
