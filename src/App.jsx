import React from "react";
import PlainDiv from "./Components/TestDiv";
import ColoredTextDiv from "./Components/TestDivTextColor";
import NewComponent from "./Components/newComponent";
import Automobiliai from "./Components/Auto";
import DogList from "../src/Components/Dogs";

const App = () => {
  return (
    <div className="App">
      {/* <PlainDiv text="tevukas" color="red" />
      <ColoredTextDiv textContent="as vaikas" myColor="green" />{" "}
      <NewComponent color="red" text="labas" />
      <NewComponent text="skaniu pietu" color="blue" />
      <NewComponent text="geros dieneles" color="purple" /> */}
      {/* <Automobiliai marke="bemsas" />
      <Automobiliai marke="mersas" />
      <Automobiliai marke="paseratis" /> */}

      {/* 1punktas */}

      {/* <h1>Sabakynas:</h1>
      <DogList /> */}

      {/* 2 punktas */}

      <h1>Sabakynas:</h1>
      <DogList />
    </div>
  );
};

export default App;
