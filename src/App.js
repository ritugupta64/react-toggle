import React, { Component } from 'react';

import './App.css';

class App extends Component {

    state = {
      toggle:false
    }

    onToggle = () =>{
      this.setState({
        toggle:!this.state.toggle
      })
    }

  render() {
    return (
      <div className="App">
            <h3>Toggle the any element</h3>
            <span style={{color:"red", border:"1px solid green",fontSize:"20px",display:"inline-block",padding:"5px"}} onClick = {this.onToggle}>Toggle</span>
            <br/>
          <div style={{display:this.state.toggle?"block":"none"}}>
            Toggle Content
          </div>


      </div>
    );
  }
}

export default App;
