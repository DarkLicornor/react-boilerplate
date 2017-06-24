import React, { Component } from 'react';

class Document extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      voice: false,
    }
  }

  componentDidMount(){
      this.setState({ loading: false })
  }

  render() {
    return (
      <div className="MenuBottom">
        <img src="../../public/parameters.svg" alt="Paramètres (touche échape)"/>
        {this.state.voice
          ? <img src="../../public/play.svg" alt="Lancer la voie de synthèse (touche espace)"/>
          : <img src="../../public/stop.svg" alt="Arrêter la voie de synthèse (touche espace)"/>
        }
        <div className="Zoom">
          <img src="../../public/zoomIn.svg" alt="Agrandir le document (touche +)"/>
          <img src="../../public/zoomOut.svg" alt="Réduire le document (touche -)"/>
        </div>
      </div>
    );
  }
}

export default Document;
