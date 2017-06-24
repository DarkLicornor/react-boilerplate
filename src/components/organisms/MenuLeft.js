import React, { Component } from 'react';

class MenuLeft extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      voice: false
    }
  }

  componentDidMount(){
      this.setState({ loading: false })
  }

  render() {
    console.log("left")
    return (
      <div className="MenuLeft">
        <h1>Titre</h1>
        <h2>SousTitre</h2>
      </div>
    );
  }
}

export default MenuLeft;
