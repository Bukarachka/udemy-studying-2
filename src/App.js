import React, { Component } from 'react';
import './App.css';
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

class App extends Component {
  state = {
      inputText: ''
  };

  inputChangeHandler = (event) => {
      this.setState({
          inputText: event.target.value
      });
  };

  deleteCharHandler = (index) => {
      const text = this.state.inputText.split('');
      text.splice(index, 1);
      const updatedText = text.join('');
      this.setState({inputText: updatedText});
  };

  render() {
      const charList = this.state.inputText.split('').map((ch, index) => {
          return <Char
          character={ch}
          key={index}
          clicked={this.deleteCharHandler.bind(this, index)}/>
      });

    return (
      <div className="App">
          <input value={this.state.inputText} onChange={this.inputChangeHandler}/>
          <p>{this.state.inputText.length}</p>
          <Validation textLength={this.state.inputText.length}/>
          {charList}
      </div>
    );
  }
}

export default App;
