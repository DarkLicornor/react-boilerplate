import React, { Component } from 'react';
import Document             from "./components/organism/Document"

import './style/index.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount(){
      this.setState({ loading: false })
  }

  render() {
    return (
      <div className="App">
          <Document />
      </div>
    );
  }
}

export default App;
