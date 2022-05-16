import Flashcard from "./Flashcard/Flashcard"

import React from "react";
import Footer from "./Footer";

export default function Tela2() {
  const [contador, setContador] = React.useState(0)

  return (
    <>
      <div className="container tela2">
        <div className="top">
          <img className="logo" src="images/logo.png" alt="aasd"></img>
          <h1 className="title">ZapRecall</h1>
        </div>
        <Flashcard />
      
         
      </div>
    </>
  );
}