import React, { Component } from 'react';

class FontList extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      list: ['Basique', 'Bichromate sans bleu','Bichromate sans rouge',
      'Bichromate sans vert','Monochromate avec bleu','Monochromate avec vert',
      'Monochromate avec rouge','Non voyant','Dyslexique'],
      selected: 0,
    }
  }

  componentDidMount(){
      this.setState({ loading: false})
  }


  render() {
    let array = ["Times New Roman", "Roboto","Arial","monospace" ,"sans-serif" ,"serif"]
    return (
      <div className="FontList">
      <p>Police</p>
        <select name="fonts" onChange={this.newSelection}>
        {array.map((font, key) => {
          return <option style={{fontFamily: font}} key={key} value={font}>{font}</option>
        })}
        </select>
      </div>
    );
  }
}

export default FontList;
