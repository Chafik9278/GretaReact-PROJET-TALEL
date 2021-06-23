import { useState } from "react";

const AnimeDescription = (props) => {

  const [AnimeDescription, setAnimeDescription] = useState("hide");

  return (
    <div>
      <div>
        <p
          className={AnimeDescription === true ? "show" : "hide"}
          
        >
        titre
 
        </p>
      </div>

      <div className={AnimeDescription === true ? "AnimeYes" : "AnimeNo"}  
      onMouseEnter={() => {
        setAnimeDescription(true);
      }}
      onMouseLeave={() => {
        setAnimeDescription(false);
      }}>


        <img   className={AnimeDescription === true ? "AnimeYes" : "AnimeNo"}   src="https://res.cloudinary.com/sharing-cloud/image/upload/v1624002808/jungle_dgciuu.png" />

      </div>
    </div>
  );
};
export default AnimeDescription;
