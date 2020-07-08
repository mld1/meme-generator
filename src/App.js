import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import MemeGenerator from "./components/MemeGenerator.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      img: "",
      allMemeImgs: {}
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <MemeGenerator
          topText={this.state.topText}
          bottomText={this.state.bottomText}
          img={this.state.img}
          allMemeImgs={this.state.allMemeImgs}
        />
      </div>
    );
  }
}

export default App;
