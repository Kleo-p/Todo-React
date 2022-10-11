import React from "react";

export default function First() {
  return (
    <div className="navBar">
      <div className="kleo">
        <h3>Kleovader</h3>
      </div>
      <div className="options">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>More</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="socials">
        <ul>
          <li>
            <img src="./images/facebookLogo.png" alt="fb"></img>
          </li>
          <li>
            <img src="./images/instagramLogo.jpg" alt="logo"></img>
          </li>
          <li>
            <img src="./images/twitterLogo.jpg" alt="logo"></img>
          </li>
        </ul>
      </div>
    </div>
  );
}
