import React from "react";
import FrontCard from "./FrontCard";
import FlippedCard from "./FlippedCard"


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
        <FrontCard numQuest={numQuest} TurnFlashCard={TurnFlashCard} index={index} status={status} />
      ) : (
        <FlippedCard status={status} textQuest={textQuest} answer={answer} result={result} index={index} />
      )}
    </>
  );
}
