import React from "react";
import logo from "./logo.svg";
import "./style/index.scss";

const App = () => {
  return (
    <div className=" flex-col pad-pixel-0 align-center justify-center txt-center height-100-percent  ">
      <h1 className=" text-center txt-orange "> Hello </h1>
      <div className=" card  align-self-center txt-center align-center mx-auto bg-pink">
        <h1 className=" card-text fontpx40 txt-green">
          click me
        </h1>
      </div>
    </div>
  );
};

export default App;
