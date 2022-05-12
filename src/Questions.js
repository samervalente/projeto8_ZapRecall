import React from "react"

function Questions({
    questNum,
    questText
}){
    const [quest, setQuest] = React.useState("questionElement")
    const [textQuest, setTextQuest] = React.useState(questNum)
   
    function Abrir(){
        setQuest("questionElement crescer")
        setTextQuest(questText)

    }

    return (
        <>
            <div className={quest} onClick={Abrir}>
                <p>{textQuest}</p>
                <ion-icon  name="play-outline"></ion-icon>
            </div>
        </>
    )
}

export default function Quests(){

    let questions = [
    {Quest:"Pergunta 1"},
    {Quest:"Pergunta 2"},
    {Quest:"Pergunta 3"},
    {Quest:"Pergunta 4"}
    ]

 
    let elementsJSX = questions.map((quest, index) => <Questions key={index} questNum={quest.Quest} questText={"a"}/> )

    return(
        <>
        {elementsJSX}
        </>
    )
}