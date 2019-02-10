import React, { Component } from 'react';
import './App.css';
import data from './data/data';
import PickerContainer from './components/PickerContainer'
import Picker from './components/Picker';
import TextBox from './components/TextBox';
import Button from './components/Button';

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
    this.copyToClipboard = this.copyToClipboard.bind(this)
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

  copyToClipboard() {
    let copyText = document.getElementById('copyBox')
    copyText.select() 
    document.execCommand('copy')
    console.log('copied', copyText.value);
  }

  render() {
    let ipsum = this.state.ipsum ? this.state.ipsum : '';
    return (
      <div id="main">
        <header>
          <h1>Pangram Ipsum</h1>
          <h3>Have a pick: twenty-six letters — no forcing a jumbled quiz!</h3>
        </header>
        <div id="container">
          <PickerContainer>
            <Picker handleSelect={this.handleSelect} name={'Sentences'}  value={this.state.sentences} />
            <Picker handleSelect={this.handleSelect} name={'Paragraphs'} value={this.state.paragraphs} />
            <Button onClick={this.copyToClipboard} name={"Copy"}/>
          </PickerContainer>
          <TextBox text={ipsum} />
        </div>
        <footer>
          <p>built with love and React | i'm a developer not a designer | &copy; {new Date().getFullYear()} <a href="http://www.mbshull.com" rel="noopener noreferrer" target="_blank">mbshull</a> </p>
        </footer>
      </div>
    );
  }
}

export default App;
