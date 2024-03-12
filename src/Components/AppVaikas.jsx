import React from "react";
import AppVaikoVaikas from "./AppVaikoVaikas";
import AppVaikoVaikas2 from "./AppVaikoVaikas2";

const AppVaikas = (props) => {
  return (
    <div>
      <AppVaikoVaikas myProp={props.text} />
      <AppVaikoVaikas2 myProp={props.text} />
    </div>
  );
};

export default AppVaikas;
