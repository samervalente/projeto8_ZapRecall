import React from "react";
import Quest from "./Questions"
import Footer from "./Footer";


export default function Tela1(){
    const [nameClass, setNameClass] = React.useState("container tela1")
    const [other, setOther] = React.useState("hidden")

    function iniciarRecall(){
        setNameClass("hidden")
        setOther("container tela2")
    }

    return (
        <>
        <div className={nameClass}>
            <img src="images/logo.png" alt="logo"/>
            <h1 className="title">ZapRecall</h1>
            <button onClick={iniciarRecall}>Iniciar Recall!!</button>
        </div>

        <div className={other}>
            <div className="top">
            <img className="logo" src="images/logo.png" alt="aasd"></img>
            <h1 className="title">ZapRecall</h1>
            </div>
            <Quest />
            <Footer/>
        </div>
            
        </>
    )
}