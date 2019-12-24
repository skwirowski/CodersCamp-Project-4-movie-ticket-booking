import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header';
import Footer from 'components/Footer';

const Main = ({ children }) => {
  return (
    <div className="ui fluid container">
      <Header />
      <div className="ui container">{children}</div>
      <Footer />
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.element,
  ]).isRequired,
};

export default Main;
