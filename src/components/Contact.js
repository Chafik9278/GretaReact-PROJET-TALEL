import React from 'react'

import Banniere from "./Banniere.js"

const Contact = () => {
    return (
        <div>

           

            <h1> je suis la page contact </h1>


            <div className="Box-contact">

                <img className="AnimeImg" src=" https://ancre-magazine.com/wp-content/uploads/2021/01/sac-femme-triangle-talel-paris-2-1.jpg " alt="" />

                <section>

                    <h1>Formulaire de contact</h1>

                    <form action="/action_page.php">

                        <label >Nom prénom</label>
                        <input type="text"  placeholder="Votre nom et prénom"/>

                            <label for="sujet">Sujet</label>
                            <input type="text" id="sujet" name="sujet" placeholder="L'objet de votre message"/>

                                <label >Email</label>
                                <input  type="email" name="email" placeholder="Votre email"/>


                                    <label >Message</label>
                                    <textarea name="subject" ></textarea>

                                    <input type="submit" value="Envoyer"/>

                                        </form >

                                        </section >
                                        
                                        </div>
                                        
                                        </div>
                        )
}

                        export default Contact
