import React from "react";

export default function Tela1({setScreen}) {
  
  function iniciarRecall() {
    setScreen(2)
  }

  return (
    <>
        <div className="container tela1">
          <img src="images/logo.png" alt="logo" />
          <h1 className="title">ZapRecall</h1>
          <button onClick={iniciarRecall}>Iniciar Recall!!</button>
        </div>
    </>
  )
}
