import React, { Component } from 'react'

import 'react-color-picker/index.css'

class PaletteList extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      active: 1,
      selected: 0,
    }
    this.toggleActive = this.toggleActive.bind(this)
  }

  componentDidMount(){
      this.setState({ loading: false})
  }

  toggleActive(newActive){
    this.setState({active: newActive})
  }

  render() {
    return (
      <div className="PaletteTop">
        <p>Choisir sa palette</p>
        <div className="PaletteList">
          {console.log("active", this.state.active)}
          {this.state.active === 1
            ? <div className="Palette Active" onClick={() => this.toggleActive(1)}>
              <div style={{width: "4em", height: "4em", background: '#4b85ea'}}></div>
              <div style={{width: "4em", height: "4em", background: '#1fa8e2'}}></div>
              <div style={{width: "4em", height: "4em", background: '#d3d3d3'}}></div>
            </div>
            : <div className="Palette" onClick={() => this.toggleActive(1)}>
              <div style={{width: "4em", height: "4em", background: '#1fa8e2'}}></div>
              <div style={{width: "4em", height: "4em", background: '#4b85ea'}}></div>
              <div style={{width: "4em", height: "4em", background: '#d3d3d3'}}></div>
            </div>
          }
          {this.state.active === 2
            ? <div className="Palette Active" onClick={() => this.toggleActive(2)}>
              <div style={{width: "4em", height: "4em", background: '#a30000'}}></div>
              <div style={{width: "4em", height: "4em", background: '#ff7700'}}></div>
              <div style={{width: "4em", height: "4em", background: '#c9c9c9'}}></div>
            </div>
            : <div className="Palette" onClick={() => this.toggleActive(2)}>
              <div style={{width: "4em", height: "4em", background: '#a30000'}}></div>
              <div style={{width: "4em", height: "4em", background: '#ff7700'}}></div>
              <div style={{width: "4em", height: "4em", background: '#c9c9c9'}}></div>
            </div>
          }
          {this.state.active === 3
            ? <div className="Palette Active" onClick={() => this.toggleActive(3)}>
            <div style={{width: "4em", height: "4em", background: '#08a045'}}></div>
              <div style={{width: "4em", height: "4em", background: '#6bbf59'}}></div>
              <div style={{width: "4em", height: "4em", background: '#b5d99c'}}></div>
            </div>
            : <div className="Palette" onClick={() => this.toggleActive(3)}>
              <div style={{width: "4em", height: "4em", background: '#08a045'}}></div>
              <div style={{width: "4em", height: "4em", background: '#6bbf59'}}></div>
              <div style={{width: "4em", height: "4em", background: '#b5d99c'}}></div>
            </div>
          }
        </div>
      </div>

    );
  }
}

export default PaletteList;
