import React from 'react';
import logo from 'static/svg/logo.svg';

const Header = () => {
  return (
    <header className="header-top">
      <div className="header-logo">
        <img alt="logo" src={logo} />
      </div>
    </header>
  );
};

export default Header;

