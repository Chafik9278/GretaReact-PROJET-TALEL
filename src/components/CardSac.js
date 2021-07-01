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

        <p className="Description">
        {"Descrition :" + props.Description}
          <p>
            
          Details: Crafted in Paris Embossed TALEL logo Dimensions: height 10cm, depth 12cm, width 12cm - Composition 100% leather 
          </p>
        </p>
      </div>

      <h2> {props.Nom} </h2>
    </div>
  );
};

export default CardSac;
