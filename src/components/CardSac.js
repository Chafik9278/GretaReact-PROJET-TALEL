const CardSac = (props) => {
  return (
    <div className="Sac">
      <img className="AnimeImg" src={props.imageSac} alt="" />

      <div ClassName="Detail">
        <h1 className="AnimeName"> {props.Nom} </h1>

        <h2 className="AnimePrix"> {props.Prix + " EUR"} </h2>

        <div>
          <p> {props.Description} </p>

          <button
            className="AnimeBTN"
            onClick={() => {
              props.setPanierSac(props.PanierSac + 1);
            }}
          >
            Achetez - Moi
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardSac;
