export default function FrontCard({ numQuest, TurnFlashCard, index, status }) {
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