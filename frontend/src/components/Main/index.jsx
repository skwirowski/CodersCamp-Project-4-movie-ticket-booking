import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';

const Main = props => {
  return (
    <main>
      <Header />
      <section>{props.children}</section>
      <Footer />
    </main>
  );
};

export default Main;
