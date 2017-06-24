import React, { Component } from 'react';
import DisabilityList from "../molecules/DisabilityList"

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
      </div>
    );
  }
}

export default Parameters;
