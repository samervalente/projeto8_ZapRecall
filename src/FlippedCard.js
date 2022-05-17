import React from "react";

export default function Flipped({ textQuest, answer, result, index }) {
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
            <div className="nao" onClick={() => result(index, "nao")}>
              Não lembrei
            </div>
            <div className="quase" onClick={() => result(index, "quase")}>
              Quase não lembrei
            </div>
            <div className="lembrei" onClick={() => result(index, "zap")}>
              Zap!
            </div>
          </div>
        </div>
      )}
    </>
  );
}
