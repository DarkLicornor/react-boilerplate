import share from "../../../public/share.svg"
import React, { Component } from 'react';
import edit from "../../../public/edit.svg"


class Toolbar extends Component {
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
      <div className="Toolbar">
        <img src={edit} alt="Aller au titre précédent" />
        <img src={share} alt="Aller au titre suivant" />
      </div>
    );
  }
}

export default Toolbar;
