import React, { Component } from 'react';
import data from './data/data';
import Picker from './components/Picker';
import TextBox from './components/TextBox';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pangrams: null,
      sentences: 1,
      paragraphs: 1,
      ipsum: "placeholder"
    }
    this.handleSelect = this.handleSelect.bind(this)
    this.generateIpsum = this.generateIpsum.bind(this)
  }

  componentDidMount() {
    this.setState({pangrams: data}, this.generateIpsum)
  }

  handleSelect(e) {
    this.setState({
      [e.name]: e.value
    }, this.generateIpsum)
  }

  generateIpsum() {
    let ipsum = [...Array(this.state.paragraphs).keys()].map( p => {
      return [...Array(this.state.sentences).keys()].map( s => {
        
        return this.state.pangrams[Math.floor(Math.random() * this.state.pangrams.length)].text
      }).join(' ')
    }).join('\n')
    console.log(ipsum)
    this.setState({ipsum})
  }

  render() {
    let ipsum = this.state.ipsum ? this.state.ipsum : '';
    return (
      <div>
        <Picker handleSelect={this.handleSelect} name={'Paragraphs'} value={this.state.paragraphs} />
        <Picker handleSelect={this.handleSelect} name={'Sentences'}  value={this.state.sentences} />
        <TextBox text={ipsum} />
      </div>
    );
  }
}

export default App;
