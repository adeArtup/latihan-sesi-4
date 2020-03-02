import React, { Component } from "react";
import Headers from "./component/header/Header.js";
import ConHead from "./component/content/ContentHeader.js";
import ConBody from "./component/content/ContentCons.js";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Headers />
        <ConHead />
        {/* <ConBody /> */}
      </div>
    );
  }
}
// function App() {
//   return (

//   );
// }

export default App;
