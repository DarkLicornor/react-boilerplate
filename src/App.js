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
    this.selectedVoice = undefined
    this.state = {
      loading: true,
      displayedParameters: false,
    }
    this.showParameters = this.showParameters.bind(this)
  }

  componentDidMount(){
      this.setState({ loading: false })
      //Shortcut for menu
      // Mousetrap.bind('right', () => {
      //   if(context.state.selected+1 > 0){
      //     context.setState({selected: context.state.selected + 1})
      //   }
      // })
  }

  showParameters(){
    this.setState({displayedParameters: !this.state.displayedParameters})
  }

  setSelectedVoice(e){
    this.selectedVoice = e.target.value
  }

  render() {
    return (
      <div className="App">
        <MenuTop showParameters={this.showParameters} />
        <div className="Container">
          <MenuLeft />
          <MenuRight />
        </div>
        {this.state.displayedParameters ? <div onClick={this.showParameters} className="HiddenApp"></div> : null}
       {this.state.displayedParameters
         ? <Parameters setSelectedVoice={this.setSelectedVoice.bind(this)}/>
         : null
       }
          <Document selectedVoice={this.selectedVoice}/>
      </div>
    );
  }
}

export default App;
