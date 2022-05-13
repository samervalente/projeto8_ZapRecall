import React from "react";
import Tela1 from "./Tela1";
import Tela2 from "./Tela2"

export default function App() {
  const [screen, setScreen] = React.useState(1)
  
  return (
    <>
      <div className="container">
        {screen === 1 ? <Tela1  setScreen={setScreen}  /> : <Tela2 />}
      </div>
    </>
  );
}
