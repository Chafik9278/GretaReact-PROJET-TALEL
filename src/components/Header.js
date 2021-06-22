import React from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";

const Header = (props) => {
  // *********TOUS MES STATES*****

  return (
    <header>
      <nav>
        <Link to="/HOME">
          <svg
            width="142"
            height="50"
            viewBox="0 0 142 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.0385 9.19733H16.0573V50H8.98119V9.19733H0V0H25.0385V9.19733Z"
              fill="black"
            />
            <path
              d="M58.3322 50H50.6211L48.3531 38.8796H37.104L34.9267 50H27.2156L38.6462 0H47.0831L58.3322 50ZM46.7202 30.2676L43.3636 13.4615C43.0914 12.2074 42.91 10.7023 42.8193 8.94649H42.6378C42.5471 10.4515 42.3657 11.8729 42.0935 13.2943L38.6462 30.2676H46.7202Z"
              fill="black"
            />
            <path
              d="M85.5481 50H66.7693V0H73.8454V40.8027H85.5481V50Z"
              fill="black"
            />
            <path
              d="M113.127 50H94.2571V0H112.401V9.19733H101.333V20.3177H111.675V29.4314H101.333V40.8863H113.127V50Z"
              fill="black"
            />
            <path
              d="M141.431 50H122.652V0H129.728V40.8027H141.431V50Z"
              fill="black"
            />
          </svg>
        </Link>
        <ul>
          <li>
            <Link to="/HOME"> HOME </Link>
          </li>

          <li>
            <Link to="/SHOP"> SHOP </Link>
          </li>

          <li>
            <Link to="/APROPOS"> A PROPOS </Link>
          </li>

          <li>
            <Link to="/CONTACT"> CONTACT </Link>
          </li>

          <li>
            <div>
              <div className="panier">
                <svg
                  width="26"
                  height="30"
                  viewBox="0 0 26 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.2003 28.747L23.3748 8.41707C23.3249 7.86187 22.8596 7.43661 22.3023 7.43661H18.5377V5.73873C18.5377 2.57439 15.9634 0 12.7992 0C9.63517 0 7.06121 2.57439 7.06121 5.73873V7.43661H3.29401C2.73666 7.43661 2.27135 7.86187 2.22153 8.41707L0.388827 28.827C0.361835 29.1282 0.462623 29.4267 0.666639 29.6498C0.870656 29.8729 1.15909 30 1.46131 30H24.1351C24.136 30 24.1371 30 24.138 30C24.7328 30 25.2148 29.5179 25.2148 28.9232C25.2146 28.8633 25.2097 28.8043 25.2003 28.747ZM9.21479 5.73873C9.21479 3.76188 10.8228 2.15358 12.7994 2.15358C14.7761 2.15358 16.3842 3.76188 16.3842 5.73873V7.43661H9.21479V5.73873ZM2.63918 27.8466L4.27849 9.5902H7.06121V11.5158C7.06121 12.1105 7.54318 12.5926 8.138 12.5926C8.73282 12.5926 9.21479 12.1105 9.21479 11.5158V9.5902H16.3842V11.5158C16.3842 12.1105 16.8662 12.5926 17.461 12.5926C18.0558 12.5926 18.5378 12.1105 18.5378 11.5158V9.5902H21.3179L22.9572 27.8466H2.63918V27.8466Z"
                    fill="black"
                  />
                </svg>

                <span> {props.PanierSac} </span>
                
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
