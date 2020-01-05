import React from 'react';
import logo from 'static/svg/logo.svg';
import routes from 'static/routes';

const Header = () => {
  const { homepage } = routes;

  return (
    <header className="header-top container">
      <div className="header-logo">
        <a href={homepage}>
          <img alt="logo" src={logo} />
        </a>
      </div>
    </header>
  );
};

export default Header;
