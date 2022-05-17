import React from "react";

function Card({ numQuest, TurnFlashCard, index, status }) {
    if(status === "blank"){
        return (
            <div className="flashcard">
                <p>Pergunta {numQuest}</p>
             <ion-icon name="play-outline" onClick={() => TurnFlashCard(index)}></ion-icon>
            </div>
          );
    }else if(status === "nao"){
        return (
            <div className="flashcard">
                <p className="done red">Pergunta {numQuest}</p>
             <ion-icon class="red" name="close-circle"></ion-icon>
            </div>
        )
    }else if(status === "quase"){
        return (
            <div className="flashcard">
                <p className="done yellow">Pergunta {numQuest}</p>
             <ion-icon class="yellow" name="help-circle"></ion-icon>
            </div>
        )
    }else if(status === "zap"){
        return (
            <div className="flashcard">
                <p className="done green">Pergunta {numQuest}</p>
             <ion-icon class="green" name="checkmark-circle"></ion-icon>
            </div>
        )
    }


 
}

function Flipped({ textQuest, answer, result, index }) {
  const [flip, setFlip] = React.useState("textQuest");

  return (
    <>
      {flip === "textQuest" ? (
        <div className="flashcard aberta">
          {textQuest}
          <img
            className="vipot"
            src="images/Vector.png"
            onClick={() => setFlip("answer")}
          />
        </div>
      ) : (
        <div className="flashcard aberta">
          {answer}
          <div className="result">
                <div className="nao" onClick={() => result(index,"nao")}>Não lembrei</div>
                <div className="quase" onClick={() => result(index,"quase")}>Quase não lembrei</div>
                <div className="lembrei" onClick={() => result(index,"zap")}>Zap!</div>
          </div>
        </div>
      )}
    </>
  );
}

export default function FlashCard({
  numQuest,
  status,
  TurnFlashCard,
  index,
  textQuest,
  side, answer, result
}) {
  return (
    <>
      {side === "front" ? (
        <Card numQuest={numQuest} TurnFlashCard={TurnFlashCard} index={index} status={status} />
      ) : (
        <Flipped status={status} textQuest={textQuest} answer={answer} result={result} index={index} />
      )}
    </>
  );
}
