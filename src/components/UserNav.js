import React from "react";

const UserNav = () => (
  <nav className="user-nav">
    <div className="user-nav__icon-box">
      <img
        src={require("../img/SVG/bookmark.svg")}
        className="user-nav__icon"
        alt="search"
      />
      <span className="user-nav__notification">7</span>
    </div>
    <div className="user-nav__icon-box">
      <img
        src={require("../img/SVG/chat.svg")}
        className="user-nav__icon"
        alt="search"
      />
      <span className="user-nav__notification">10</span>
    </div>
    <div className="user-nav__user">
      <img src={require("../img/user.jpg")} alt="Foto" className="user-nav__user-photo"/>
      <span className="user-nav__user-name">Jeff</span>
    </div>
  </nav>
);

export default UserNav;