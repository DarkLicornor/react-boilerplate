import React, { Component } from 'react';
import DisabilityList from "../molecules/DisabilityList"
import SizeList from "../molecules/SizeList"
import FontList from "../molecules/FontList"
import PaletteList from "../molecules/PaletteList"
import VoiceList from "../molecules/VoiceList"


class Parameters extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
    }
  }

  componentDidMount(){
      this.setState({ loading: false })
  }

  render() {
    return (
      <div className="Parameters">
        <h1> Préférences </h1>
        <DisabilityList />
        <div className="Online">
          <SizeList />
          <FontList />
        </div>
        <PaletteList />
        <VoiceList setSelectedVoice={this.props.setSelectedVoice}/>
      </div>
    );
  }
}

export default Parameters;
