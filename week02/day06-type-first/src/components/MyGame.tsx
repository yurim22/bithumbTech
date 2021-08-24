import React from 'react';

interface MyGameProps {
  title: string;
}

class MyGame extends React.Component<MyGameProps> {
  render() {
    return (
      <h2>
        MyGame.js <br />
        {this.props.title}
      </h2>
    );
  }
}

export default MyGame;
