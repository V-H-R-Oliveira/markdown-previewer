import React, { Component } from 'react';
import Header from './components/Header';
import MarkdownInput from './components/MarkdownInput';
import ResultDiv from './components/ResultDiv';
import './App.css';

class App extends Component 
{
  constructor(props)
  {
    super(props);
    this.state = {
        markdown: ''
    }

    this.addToMainState = this.addToMainState.bind(this);
  }
  
  addToMainState = data => this.setState({markdown: data});

  render() 
  {
    return (
      <div>
       <Header />
        <MarkdownInput addToMainState={this.addToMainState} />
        <ResultDiv input={this.state.markdown} />
      </div>
    );
  }
}

export default App;
