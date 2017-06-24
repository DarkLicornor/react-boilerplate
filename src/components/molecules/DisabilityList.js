import React, { Component } from 'react';
import settings from "../../../public/settings.svg"
import zoomIn from "../../../public/zoom-in.svg"
import zoomOut from "../../../public/zoom-out.svg"
import stop from "../../../public/stop-button.svg"
import play from "../../../public/play-button.svg"

class DisabilityList extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      list: ['Basique', 'Bichromate sans bleu','Bichromate sans rouge',
      'Bichromate sans vert','Monochromate avec bleu','Monochromate avec vert',
      'Monochromate avec rouge','Non voyant','Dyslexique'],
      selected: 0,
    }
  }

  componentDidMount(){
      this.setState({ loading: false})
  }

  toggleVoice() {
    this.setState({ voice: !this.state.voice})
  }

  render() {
    return (
      <div className="DisabilityList">
        <select name="disabilities" onChange={this.newSelection}>
        {this.state.list.map((disability) => {
          console.log("dis:", disability)
        })}
        </select>
      </div>
    );
  }
}

export default DisabilityList;
