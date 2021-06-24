const CardSac = (props) => {
  return (
    <div className="Sac">
      <img className="AnimeImg" src={props.imageSac} alt="" />

      <div class="Sac-content">
        <h3 className="AnimePrix"> {props.Prix + " EUR"} </h3>

        <button
          className="AnimeBTN"
          onClick={() => {
            props.setPanierSac(props.PanierSac + 1);
          }}
        >
          BUY ME
        </button>
      </div>

      <h2> {props.Nom} </h2>
    </div>
  );
};

export default CardSac;
