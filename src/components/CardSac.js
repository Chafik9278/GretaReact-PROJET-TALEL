const CardSac = (props) => {
  return (
    <div className="Sac">
      <img className="AnimeImg" src={props.imageSac} alt="" />

      <div class="Sac-content">
      <button
          className="AnimeBTN"
          onClick={() => {
            props.setPanierSac(props.PanierSac + 1);
          }}
        >
          BUY ME
        </button>
        <h3 className="AnimePrix"> {props.Prix + " EUR"} </h3>
        

        <p>"Description": "Genderless and timeless, the mini version of our triangle bags will be the perfect final touch for all your outfits. These cute graphic bags exist in a variety of colors that will match every look. These unique bags are perfect for a casual day and night occasions. Carry it by the two handles or by the adjustable and removable leather strap",</p>
       
      </div>

      <h2> {props.Nom} </h2>
      <button
          className="AnimeBTN"
          onClick={() => {
            props.setPanierSac(props.PanierSac + 1);
          }}
        >
          BUY ME
        </button>
    
    </div>
  );
};

export default CardSac;
