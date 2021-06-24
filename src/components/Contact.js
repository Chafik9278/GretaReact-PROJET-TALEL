import React from "react";

const Contact = () => {
  return (
    <div className="Box-contact">
      <img
        className="Banshop"
        src="https://res.cloudinary.com/sharing-cloud/image/upload/v1624002805/banniere-contact_aoek3b.png "
        alt=" "
      />

      <div className="contact">
        <h1> CONTACT</h1>

        <ul>

        <li>Géneral : info@talelparis.com</li>
        <li>Géneral : info@talelparis.com</li>
        <li>Géneral : info@talelparis.com</li>


          <li>Géneral : info@talelparis.com</li>
          <li>Revendeurs : sales@talelparis.com</li>
          <li>Presse/communication : pr@talelparis.com</li>
          <li>Autres : collection@talelparis.com</li>
        </ul>
      </div>

      <form>
        <label>Nom prénom</label>
        <input type="text" placeholder="Votre nom et prénom" />

        <label for="sujet">Sujet</label>
        <input
          type="text"
          name="sujet"
          placeholder="L'objet de votre message"
        />

        <label>Email</label>
        <input type="email" name="email" placeholder="Votre email" />

        <label>Message</label>
        <textarea
          name="subject"
          rows="10"
          placeholder="Taper Votre message"
        ></textarea>

        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default Contact;
