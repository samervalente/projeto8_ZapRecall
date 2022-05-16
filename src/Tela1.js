import React from "react";

export default function Tela1({setScreen}) {
  
  return (
    <>
        <div className="container tela1">
          <img src="images/logo.png" alt="logo" />
          <h1 className="title">ZapRecall</h1>
          <button onClick={() => setScreen(2)}>Iniciar Recall!!</button>
        </div>
    </>
  )
}
