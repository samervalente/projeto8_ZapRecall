import React from "react";
import Footer from "../Footer";

import Back from "./Back";
import Front from "./Front";



function FlashcardRender({questNum, questText, answer }) {
  const [quest, setQuest] = React.useState("front");
  const [questTexto, setQuestTexto] = React.useState(questText)
  const [vipot, setVipot] = React.useState("vipot")
  const [visible, setVisible] = React.useState("hidden")
  const [done, setDone] = React.useState(false)
  const [nameIcon, setNameIcon] = React.useState("")
  const [classIcon, setClassIcon] = React.useState("")


  function Turn(){
    setQuestTexto(answer)
    setVisible("result")
    setVipot("hidden")
  }


  return (
    <>
      {quest === "front" ? (
        <>
        <Front setQuest={setQuest}  questNum={questNum} nameIcon={nameIcon} classIcon={classIcon} done={done} /> 
     
        </>
       
      ) : (
        <Back click={Turn} setDone={setDone} setQuest={setQuest} questTexto={questTexto} done={done} vipot={vipot} setNameIcon={setNameIcon} setClassIcon={setClassIcon} classIcon={classIcon}  visible={visible}   />
      )}
        
    </>
  );
}

export default function Flashcard() {
  let questions = [
    { Quest: "Pergunta 1" },
    { Quest: "Pergunta 2" },
    { Quest: "Pergunta 3" },
    { Quest: "Pergunta 4" },
    { Quest: "Pergunta 5" },
    { Quest: "Pergunta 6" },
    { Quest: "Pergunta 7" },
    { Quest: "Pergunta 8" },
  ];

  function comparador() {
    return Math.random() - 0.5;
  }

  let quests = [
    { question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },
    { question: "O React é", answer: "uma biblioteca JavaScript para construção de interfaces" },
    { question: "Componentes devem iniciar com", answer: "letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    { question: "O ReactDOM nos ajuda ", answer: "interagindo com a DOM para colocar componentes React na mesma" },
    { question: "Usamos o npm para", answer: "gerenciar os pacotes necessários e suas dependências" },
    { question: "Usamos props para ", answer: "passar diferentes informações para componentes " },
    { question: "Usamos estado (state) para ", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" },
  ];

  quests.sort(comparador);

  let elementsJSX = questions.map((quest, index) => (
    <FlashcardRender
      key={index}
      questNum={quest.Quest}
      questText={quests[index].question}
      answer={quests[index].answer}
    />
  ));

  return <>{elementsJSX}
       
  </>;
}