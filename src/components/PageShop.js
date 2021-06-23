import CardSac from "./CardSac";
import ShopBags from "../BaseData/ShopBags.js";



const PageShop = (props) => {
  return (

    <div>

<img  className="Banshop"    src= "https://res.cloudinary.com/sharing-cloud/image/upload/v1624002806/banniere-shop_yqpezv.png " alt=" " />
   

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
    </div>
  );
};

export default PageShop;
