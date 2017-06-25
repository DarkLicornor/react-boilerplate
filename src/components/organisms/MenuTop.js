import React, { Component } from 'react';
import settings from "../../../public/settings.svg"
import zoomIn from "../../../public/zoom-in.svg"
import zoomOut from "../../../public/zoom-out.svg"
import stop from "../../../public/stop-button.svg"
import play from "../../../public/play-button.svg"

class MenuTop extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      voice: false,
      actualZoom: 100,
    }
    this.toggleVoice = this.toggleVoice.bind(this)
    this.zoomIn = this.zoomIn.bind(this)
    this.zoomOut = this.zoomOut.bind(this)
  }

  componentDidMount(){
      this.setState({ loading: false})
  }

  toggleVoice() {
    this.setState({ voice: !this.state.voice})
  }

  zoomIn() {
    document.body.style.zoom = (this.state.actualZoom +10 ).toString() + "%"
    this.setState({actualZoom: this.state.actualZoom + 10})
  }

  zoomOut() {
    document.body.style.zoom = (this.state.actualZoom -10).toString() + "%"
    this.setState({actualZoom: this.state.actualZoom - 10})
  }

  render() {
    return (
      <div id="MenuTop">
        <img onClick={this.props.showParameters} src={settings} alt="Paramètres (touche échape)"/>
        {this.state.voice
          ? <img onClick={this.toggleVoice} src={play} alt="Lancer la voie de synthèse (touche espace)"/>
          : <img onClick={this.toggleVoice} src={stop} alt="Arrêter la voie de synthèse (touche espace)"/>
        }
        <div className="Zoom">
          <img src={zoomIn} onClick={this.zoomIn} alt="Agrandir le document (touche +)"/>
          <img src={zoomOut} onClick={this.zoomOut} alt="Réduire le document (touche -)"/>
        </div>
      </div>
    );
  }
}

export default MenuTop;
