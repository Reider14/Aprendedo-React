import React, {useState} from "react";
import {Espaco, Texto, Quadrado} from "./AppStyled"

function App() {

  return (
    <>
      <Espaco>
        <Texto>hello word</Texto>
      </Espaco>

      <Quadrado>
        <Texto style={{color: "white"}}>HI</Texto>
      </Quadrado>
    </> 
  );
}


export default App;

