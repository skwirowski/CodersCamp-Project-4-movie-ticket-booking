import React, { PureComponent } from 'react';

class Main extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div>
        <h1>The Main Component</h1>
        {children}
      </div>
    );
  }
}

export default Main;
