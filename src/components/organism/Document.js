import React, { Component } from 'react'
import jsonPage from '../../res/formatted.json'
import Mousetrap from 'mousetrap'
import {htmlTemplate} from '../../res/html.js'
import htmlparser from 'htmlparser2'
import ReactHtmlParser from 'react-html-parser';

class Document extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      json: jsonPage,
      selected: 0,
      typeSelected: "",
      elements: {
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        p: [],
        li: [],
        ol: [],
        ul: [],
      },
      htmlRender: ""
    }
  }

  componentDidMount(){
    let context = this
    Mousetrap.bind('down', () => {
      //h1[]

      //let newSelected =
      context.setState({selected: context.state.selected + 1}); console.log(context.state.selected)
    })
    Mousetrap.bind('down', function() { console.log('down'); })
    Mousetrap.bind('right', () => { context.setState({selected: context.state.selected + 1}); console.log(context.state.selected) })
    Mousetrap.bind('left', () => { context.setState({selected: context.state.selected - 1}); console.log(context.state.selected) })
    Mousetrap.bind('spacebar', function() { console.log('spacebar'); })
  }

  render() {
    let finalHtml
    let i = 0

    let context = this
    var parser = new htmlparser.Parser({
      onopentag: function(name, attribs){
          if(name in context.state.elements && name !== "ul" && name !== "ol"){
            context.state.elements[name].push(i)
            i++

            finalHtml += "<"+name
            if(context.state.selected === i && name !== "ul" && name !== "ol" ){
              finalHtml += ' style="color: red" '
            }
            finalHtml += ">"
          }
      },
      ontext: function(text){
          finalHtml += text
      },
      onclosetag: function(name){
          finalHtml += "</"+name+">"
      }
  }, {decodeEntities: true});
  parser.write(htmlTemplate);
  parser.end();
  console.log("elements:", context.state.elements)


    return <div>{ ReactHtmlParser(finalHtml) }</div>;
  }
}

export default Document;
