import React from "react";
import PlainDiv from "./Components/TestDiv";
import ColoredTextDiv from "./Components/TestDivTextColor";
import NewComponent from "./Components/newComponent";
import Automobiliai from "./Components/Auto";
import DogList from "../src/Components/Dogs";
import Kavele from "./Components/RytineKavele";
import VienasDu from "./Components/VienasDu";
import DuTekstai from "./Components/DuTekstai";
import AppVaikas from "./Components/AppVaikas";
import AppVaikas2 from "./Components/AppVaikas2";
import CompA from "./Components/CompA";
import ComponentA from "./Components/ComponentA";

const App = () => {
  return (
    // <Layout>
    <div className="App">
      {/* <PlainDiv text="tevukas" color="red" />
      <ColoredTextDiv textContent="as vaikas" myColor="green" />{" "}
      <NewComponent color="red" text="labas" />
      <NewComponent text="skaniu pietu" color="blue" />
      <NewComponent text="geros dieneles" color="purple" /> */}
      {/* <Automobiliai marke="bemsas" />
      <Automobiliai marke="mersas" />
      <Automobiliai marke="paseratis" /> */}
      {/* 1, 2, 3, 4, 5 punktai atsivaizduoja taip pat */}
      {/* <h1>Sabakynas:</h1>
      <DogList /> */}
      {/* <Kavele color="brown" fontWeight="bold" /> */}
      {/* <VienasDu color={1} /> */}
      {/* <DuTekstai randtext1="Pirmas" randtext2="Antras" color="purple" /> */}

      {/* <AppVaikas texnetn="labas" />
      <AppVaikas2 /> */}
      <ComponentA textA="A" textB="B" textC="C" textD="D" />
    </div>
    // </Layout>
  );
};

export default App;
