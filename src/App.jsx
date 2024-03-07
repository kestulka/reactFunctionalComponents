import React from "react";
import PlainDiv from "./Components/TestDiv";
import ColoredTextDiv from "./Components/TestDivTextColor";
import NewComponent from "./Components/newComponent";

const App = () => {
  return (
    <div className="App">
      <PlainDiv text="tevukas" color="red" />
      <ColoredTextDiv textContent="as vaikas" myColor="green" />{" "}
      <NewComponent color="red" text="labas" />
      <NewComponent text="skaniu pietu" color="blue" />
      <NewComponent text="geros dieneles" color="purple" />
    </div>
  );
};

export default App;
