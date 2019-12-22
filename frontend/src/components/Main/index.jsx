import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header';
import Footer from 'components/Footer';

const Main = ({ children }) => {
  return (
    <main>
      <Header />
      <section style={{ margin: '0 10rem' }}>{children}</section>
      <Footer />
    </main>
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
