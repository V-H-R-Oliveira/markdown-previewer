import React, { Component } from 'react';
import '../App.css';

export class MarkdownInput extends Component 
{

  constructor(props)
  {
    super(props);
    this.state = {
        input: '',
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onKeyUpHandler = this.onKeyUpHandler.bind(this);
  }

  onChangeHandler = e => this.setState({[e.target.name]: e.target.value});
  
  onKeyUpHandler = () => this.props.addToMainState(this.state.input);
  
  render() 
  {
    return (
      <div>
        <textarea name="input" placeholder="Markdown notation" 
        className="textarea" value={this.state.input}
        onChange={this.onChangeHandler} onKeyUp={this.onKeyUpHandler} autoFocus></textarea>
      </div>
    )
  };
}

export default MarkdownInput;
