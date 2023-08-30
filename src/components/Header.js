import React from "react";
import "./css/base.css";

const Header = () => {
  return (
    <header>
      <div className="menu">
        <div className="logo">Logo</div>
        <div className="user-icon"><i class="bi bi-person-badge"></i></div>
      </div>
    </header>
  );
};

export default Header;
