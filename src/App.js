import React, { Component } from 'react';
import './App.css';
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
    document.title = "mbshull.com | Pangram Ipsum"
  }

  handleSelect(e) {
    this.setState({
      [e.name]: e.value
    }, this.generateIpsum)
  }

  generateIpsum() {
    let numParagraphs = parseInt(this.state.paragraphs);
    let numSentences = parseInt(this.state.sentences);
    let ipsum = [...Array(numParagraphs).keys()].map( (p,i) => {
      return [...Array(numSentences).keys()].map(s => {
        return this.state.pangrams[Math.floor(Math.random() * this.state.pangrams.length)].text
      }).join(' ')
    }).join('\n')
    this.setState({ipsum})
  }

  render() {
    let ipsum = this.state.ipsum ? this.state.ipsum : '';
    return (
      <div id="main">
        <h1>Pangram Ipsum</h1>
        <Picker handleSelect={this.handleSelect} name={'Sentences'}  value={this.state.sentences} />
        <Picker handleSelect={this.handleSelect} name={'Paragraphs'} value={this.state.paragraphs} />
        <TextBox text={ipsum} />
      </div>
    );
  }
}

export default App;
