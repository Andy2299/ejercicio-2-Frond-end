import React from "react";
import "./css/base.css";

const Header = ({ toggleUserProfile, onLogout }) => {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <header>
      <div className="menu">
        <div className="logo" onClick={refreshPage}>Logo</div>
        <div className="menu-login">
          <div className="user-icon" onClick={toggleUserProfile}>
            <i className="bi bi-person-circle"></i>  {/* Nota: Cambié "class" a "className" */}
          </div>
          <div className="logout-button" onClick={onLogout}>
            <i className="bi bi-box-arrow-in-right"></i>  {/* Nota: Cambié "class" a "className" */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
