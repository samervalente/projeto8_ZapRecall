import React from "react";
import FlashCard from "./FlashCard";

let quests = [
  {
    question: "O que é JSX?",
    answer: "Uma extensão de linguagem do JavaScript"
  },
  {
    question: "O React é",
    answer: "uma biblioteca JavaScript para construção de interfaces"
  },
  {
    question: "Componentes devem iniciar com",
    answer: "letra maiúscula"
  },
  {
    question: "Podemos colocar __ dentro do JSX",
    answer: "expressões"
  },
  {
    question: "O ReactDOM nos ajuda ",
    answer: "interagindo com a DOM para colocar componentes React na mesma"
  },
  {
    question: "Usamos o npm para",
    answer: "gerenciar os pacotes necessários e suas dependências"
  },
  {
    question: "Usamos props para ",
    answer: "passar diferentes informações para componentes "
  },
  {
    question: "Usamos estado (state) para ",
    answer:
      "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
  }
];

function comparador(){
  return Math.random() - 0.5
}

quests.sort(comparador)

let arrayQuestions = quests.map(quest => {
  return {...quest, side:"front", status:"blank"};
});

export default function Tela2() {
  const [questions, setQuestions] = React.useState(arrayQuestions);
  const[contador, setContador] = React.useState(0)
  const[icons, setIcons] = React.useState([])
  const[msg, setMsg] = React.useState("")

  function TurnFlashCard(num) {
    let Flippeds = questions.map((quest, index) => {
      if (num === index) {
        return {...quest, side:"questionText"};
      } else {
        return {...quest};
      }
    });
    console.log(num)
    setQuestions([...Flippeds])
  }

  function result(num, status){
    setContador(contador+1)

    let Flippeds = questions.map((quest, index) => {
      if (num === index) {
        return {...quest, side:"front", status:status};
      } else {
        return {...quest};
      }
    });
    setIcons([...icons, status ])
    setQuestions([...Flippeds])
    
    if(contador === 7){
        icons.find(nameIcon => {
          if(nameIcon === "nao"){
            setMsg("Putz...Ainda faltam alguns...Mas não desanime! ")
          }else{
            setMsg("Parabéns! Você não esqueceu de nenhum flashcard!")
          }

        })
    }

  }

  console.log(icons)

  return (
    <>
      <div className="container tela2">
       
        <div className="top">
          <img className="logo" src="images/logo.png" alt="aasd"></img>
          <h1 className="title">ZapRecall</h1>
        </div>
        {/* flashcards */}
       <div className="fix">
       <div className="AllFlashcards">
        {questions.map((quest, index) => (
          <FlashCard
            key={index}
            status={quest.status}
            side={quest.side}
            index={index}
            numQuest={index + 1}
            TurnFlashCard={TurnFlashCard}
            textQuest={quest.question}
            answer={quest.answer}
            result={result}
          />
        ))}
        </div>
       </div>
      </div>
      <div className="Footer">
          <div className="msgResult">
          {msg}
          </div>
          {contador}/{quests.length} CONCLUÍDOS
          <div className="result">
          {icons.map((icon, index) => {
               if(icon === "nao"){
                return <ion-icon key={index} class="red" name="close-circle"></ion-icon>
              }else if (icon === "quase"){
                return  <ion-icon key={index} class="yellow" name="help-circle"></ion-icon>
              }else if(icon === "zap") {
                return <ion-icon key={index} class="green" name="checkmark-circle"></ion-icon>
              }
          })}
          </div>
        
      </div>
    </>
  );
}
