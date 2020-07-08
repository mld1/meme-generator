import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import MemeGenerator from "./components/MemeGenerator.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MemeGenerator />
      </div>
    );
  }
}

export default App;
