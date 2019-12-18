import React from 'react';

const Main = props => {
  return (
    <main>
      <h1>This is main component content</h1>
      <section>{props.children}</section>
    </main>
  );
};

export default Main;
