import React from 'react';
import 'components/Loader/style.css';

// eslint-disable-next-line react/prop-types
const Loader = ({ message }) => (
  <div className="text-center">
    <div className="spinner-border" role="status">
      <span className="sr-only">{message}</span>
    </div>
  </div>
);

Loader.defaultProps = {
  message: 'Loading...',
};

export default Loader;
