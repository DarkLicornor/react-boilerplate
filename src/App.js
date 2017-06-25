import React, { Component } from 'react';
import MenuTop             from "./components/organisms/MenuTop"
import MenuLeft             from "./components/organisms/MenuLeft"
import MenuRight             from "./components/organisms/MenuRight"
import Parameters             from "./components/organisms/Parameters"
import Document             from "./components/organisms/Document"

import './style/index.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      displayedParameters: false,
    }
    this.showParameters = this.showParameters.bind(this)
  }

  componentDidMount(){
      this.setState({ loading: false })
      window.addEventListener("keydown", function(e) {
            // space and arrow keys
        if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }, false);
  }

  showParameters(){
    this.setState({displayedParameters: !this.state.displayedParameters})
  }

  render() {
    return (
      <div className="App">
        <MenuTop showParameters={this.showParameters} />
        <div className="Container">
          <MenuLeft />
          <Document />
          <MenuRight />
        </div>
        {this.state.displayedParameters ? <div onClick={this.showParameters} className="HiddenApp"></div> : null}
       {this.state.displayedParameters
         ? <Parameters />
         : null
       }
      </div>
    );
  }
}

export default App;
