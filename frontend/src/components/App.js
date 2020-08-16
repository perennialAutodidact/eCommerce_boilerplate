import React from "react";
import "../../node_modules/normalize.css";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar showLogin={false} />
    </div>
  );
}

export default App;
