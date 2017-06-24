import React, { Component } from 'react';
import MenuTop             from "./components/organisms/MenuTop"
import MenuLeft             from "./components/organisms/MenuLeft"
import MenuRight             from "./components/organisms/MenuRight"

import './style/index.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount(){
      this.setState({ loading: false })
  }

  render() {
    return (
      <div className="App">
        <MenuTop />
        <div className="Container">
          <MenuLeft />
          <MenuRight />
        </div>
      </div>
    );
  }
}

export default App;
