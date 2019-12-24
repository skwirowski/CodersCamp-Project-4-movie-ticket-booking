import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';

const Main = props => {
  return (
    <div className="ui fluid container">
      <Header />
      <div className="ui fluid container">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Main;
