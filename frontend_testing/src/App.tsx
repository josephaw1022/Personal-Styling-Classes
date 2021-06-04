import React from "react";
import logo from "./logo.svg";
import "./style/index.scss";

const App = () => {
  return (
    <div
      className="
     flex-col
     align-center 
     justify-center 
     txt-center
     height-100-percent
     
      align-self-center
      "
    >
      <h1 className="text-black"> Hello </h1>
      
      <div className="
       card
       width-50-percent
       align-self-center
       txt-center
       align-center
       mx-auto 
       
       
       "
       >
        <h1 className="
        card-text
        text-white
        fontpx40
        margin-percent-4
        "
        >
        Click Me 
        </h1>
      </div>
    </div>
  );
};

export default App;
