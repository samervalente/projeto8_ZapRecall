export default function Front ({questNum, setQuest, done, nameIcon, classIcon}){
    return(
        <>
        {done === false ?  <div className="questionElement" onClick={() => setQuest("back")}>
          <p >{questNum}</p>
          <ion-icon name="play-outline"></ion-icon>
        </div> :  <div className="questionElement" >
          <p className={`done ${done}`}>{questNum}</p>
          <ion-icon class={`icon ${classIcon}`} name={nameIcon}></ion-icon>
        </div>}
        </>
    )
}