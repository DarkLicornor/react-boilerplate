import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

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

  generateTOC(){
    let finalHtml = ""
    for(let key in this.props.TOC){
      let element = this.props.TOC[key]
      finalHtml += "<"+element.type+">"+element.text+"</"+element.type+">"
    }
    console.log(finalHtml)
    return finalHtml
  }

  render() {
    return (
      <div className="MenuLeft">
        { ReactHtmlParser(this.generateTOC()) }
      </div>
    );
  }
}

export default MenuLeft;
