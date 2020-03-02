import React, { Component } from "react";
import Headers from "./component/header/Header.js";
import ConHead from "./component/content/contentHeader/ContentHeader.js";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Headers />
        <ConHead />
      </div>
    );
  }
}
// function App() {
//   return (

//   );
// }

export default App;
