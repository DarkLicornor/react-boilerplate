import React, { Component } from 'react'
import jsonPage from '../../res/formatted.json'
import Mousetrap from 'mousetrap'
import {htmlTemplate} from '../../res/html.js'
import htmlparser from 'htmlparser2'
import ReactHtmlParser from 'react-html-parser';

class Document extends Component {
  constructor(props){
    super(props);
    this.typeSelected = ""
    this.initElements()
    this.maxElements = 0
    this.selectedText = ""
    this.state = {
      loading: true,
      json: jsonPage,
      selected: 0,
      typeSelected: "",
      htmlRender: ""
    }
  }

  getSelectedText(){
    return this.selectedText
  }

  getSelectedVoice(){
    let voices = []
    var selectedOption = this.props.selectedVoice;
    for(let i = 0; i < voices.length ; i++) {
      if(voices[i].name === selectedOption) {
      console.log(voices[i])
        return voices[i];
      }
    }
  }

  speak(){
    var synth = window.speechSynthesis
    var utterThis = new SpeechSynthesisUtterance(this.selectedText);

    utterThis.voice = this.getSelectedVoice()
    utterThis.pitch = 1
    utterThis.rate = 1
    synth.speak(utterThis)

    utterThis.onpause = function(event) {
     var char = event.utterance.text.charAt(event.charIndex);
     console.log('Speech paused at character ' + event.charIndex + ' of "' +
     event.utterance.text + '", which is "' + char + '".');
    }
  }

  componentDidMount(){
    //Set all the key listenners
    let context = this

    Mousetrap.bind('right', () => {
      if(context.state.selected+1 > 0){
        context.setState({selected: context.state.selected + 1})
      }
    })
    Mousetrap.bind('up', () => {
      if(context.state.selected-1 > 0){
        context.setState({selected: context.state.selected - 1})
      }
    })
    Mousetrap.bind('a', () => {
      context.speak()
    })

    Mousetrap.bind('down', () => {
      let currentSelected = context.maxElements
      let priorityOrder = ["h1", "h2", "h3", "h4", "h5", "p", "li"]
      //On cherche la balise equivalente ou au dessus en priorite
      //On parcours les balises avec un plus grande priorite
      for(let i=priorityOrder.indexOf(context.typeSelected); i > 0 ;i--){
        //On parcours les elements de la liste pour trouver le prochain
        let found = false
        for(let j=0;j<context.elements[priorityOrder[i]].length;j++){
          //On compare si il est plus proche que la balise trouvee precedement
          let currentElement = context.elements[priorityOrder[i]][j]
          if(currentElement > context.state.selected && found === false){
            found = true
            if(currentSelected > currentElement){
              currentSelected = currentElement
            }
          }
        }
      }
      if(currentSelected < context.maxElements){
        this.setState({selected: currentSelected})
      }
    })

    Mousetrap.bind('left', () => {
      let currentSelected = 0
      let priorityOrder = ["h1", "h2", "h3", "h4", "h5", "p", "li"]
      //On cherche la balise equivalente ou au dessus en priorite
      //On parcours les balises avec un plus grande priorite
      for(let i=priorityOrder.indexOf(context.typeSelected)-1; i > 0 ;i--){
        //On parcours les elements de la liste pour trouver le prochain
        let found = false
        for(let j=this.elements[priorityOrder[i]].length-1;j >= 0;j--){
          //On compare si il est plus proche que la balise trouvee precedement
          let currentElement = context.elements[priorityOrder[i]][j]
          if(currentElement < context.state.selected && found === false){
            found = true
            if(currentSelected < currentElement){
              currentSelected = currentElement
            }
          }
        }
      }
      this.setState({selected: currentSelected})
    })
  }

  initElements(){
    this.elements = {
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      p: [],
      li: [],
      ol: [],
      ul: [],
    }
  }

  render() {
    let finalHtml
    let i = 0
    this.initElements()

    let context = this
    //Generate the page HTML, and store the cursor as well as the current selected text
    var parser = new htmlparser.Parser({
      onopentag: function(name, attribs){
          if(name in context.elements && name !== "ul" && name !== "ol"){
            context.elements[name].push(i)

            finalHtml += "<"+name
            if(context.state.selected === i && name !== "ul" && name !== "ol" ){
              finalHtml += ' style="color: red" '
              context.typeSelected = name
            }
            finalHtml += ">"
            i++
          }
      },
      ontext: function(text){
          finalHtml += text
          if(context.state.selected === i-1 && text.match(/^\s+$/) === null){
            context.selectedText = text
          }
      },
      onclosetag: function(name){
          finalHtml += "</"+name+">"
      }
  }, {decodeEntities: true});
  parser.write(htmlTemplate);
  parser.end();
  this.maxElements = i


    return <div>{ ReactHtmlParser(finalHtml) }</div>;
  }
}

export default Document;
