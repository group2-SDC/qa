import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-family: sans-serif;
  /* float: right; */
  background-color: #000;
  color: rgb(255, 255, 255);
  border-color: #000;
  border-radius: 10%;
  &:hover {
    background-color: #424040
  }

`


class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="parent">
        <div className="test">Hello World!</div>
        <Button>Next</Button>
      </div>
    )
  }
}

export default App;