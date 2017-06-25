import React, { Component } from 'react';

class Sizelist extends Component {
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
    let array = []
    for (let i = 12; i<=50; i++) {
      array.push(i)
      i = i+4
    }
    return (
      <div className="Sizelist">
        <p>Taille</p>
        <select name="sizes" onChange={this.newSelection}>
        {array.map((i) => {
          return <option value={i}>{i}</option>
        })}

        </select>
      </div>
    );
  }
}

export default Sizelist;
