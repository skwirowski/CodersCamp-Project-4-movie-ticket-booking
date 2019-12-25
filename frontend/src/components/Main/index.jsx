import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';

const Main = props => {
  return (
    <div className="container-fluid">
      <Header />
      <div className="container-fluid">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Main;
