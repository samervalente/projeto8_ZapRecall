import React from "react";

function FlashcardRender({questNum, questText, answer }) {
  const [quest, setQuest] = React.useState("fechada");
  const [questTexto, setQuestTexto] = React.useState(questText)
  const [vipot, setVipot] = React.useState("vipot")
  const [visible, setVisible] = React.useState("hidden")
  
  function Abrir() {
    setQuest("aberta");
  }

  function Girar(){
    setQuestTexto(answer)
    setVisible("result")
    setVipot("hidden")
  }

  function Result(type){
    switch(type){

      case "Não":
        alert("Não!")
      case "Quase":
        return (<><p>Quase</p></>)
      case "Zap":
        return (<>Zap!</>)
    }
  }

  return (
    <>
      {quest === "fechada" ? (
        <div className="questionElement" onClick={Abrir}>
          <p>{questNum}</p>
          <ion-icon name="play-outline"></ion-icon>
        </div>
      ) : (
        <div className="questionElement crescer"  onClick={(Girar)}>
          <p>{questTexto}</p>
          <img className={vipot} onClick={(Girar)} src="images/Vector.png"/>
          <div className={visible}>
          <div className="nao" onClick={() => Result("Não")}>Não Lembrei</div>
          <div className="quase" onClick={() => Result("Quase")} >Quase Não Lembrei</div>
          <div className="lembrei" onClick={() => Result("Zap")}>Zap!</div>
          </div>
        </div>
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

  return <>{elementsJSX}</>;
}
