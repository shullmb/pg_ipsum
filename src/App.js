import React, { Component } from 'react';
import data from './data/data';
import Picker from './components/Picker';
import TextBox from './components/TextBox';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pangrams: null,
      sentences: 0,
      paragraphs: 0
    }
    this.handleSelect = this.handleSelect.bind(this)
  }

  componentDidMount() {
    this.setState({pangrams: data})
  }

  handleSelect(e) {
    this.setState({
      [e.name]: e.value
    })
  }

  render() {
    
    return (
      <div>
        <Picker handleSelect={this.handleSelect} name={'Sentences'} />
        <Picker handleSelect={this.handleSelect} name={'Paragraphs'} />
        <TextBox text={"This is a text"} />
      </div>
    );
  }
}

export default App;
