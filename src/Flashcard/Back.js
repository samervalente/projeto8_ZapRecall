import Footer from "../Footer";


let array = []
let colors = []
let resultado = ""



export default function Back({ questTexto, vipot, visible, click, setDone, setQuest, setNameIcon, setClassIcon}) {
  

  function concluir(type){

    setQuest("front")
    if(type === "Não"){
     setDone("nao")
     setNameIcon("close-circle")
     setClassIcon("red")
     array.push("close-circle")
     colors.push("red")
  
  
    }else if(type === "Quase"){
      setDone("quase")
      setNameIcon("help-circle")
      setClassIcon("yellow")
      array.push("help-circle")
      colors.push("yellow")
    
    }else if(type === "Zap"){
      setDone("zap")
      setNameIcon("checkmark-circle")
      setClassIcon("green")
      array.push("checkmark-circle")
      colors.push("green")
      
    }

  

    console.log(array)
    console.log(colors)
  }
  //icon color icon color icon color
 
  let icons = array.map((name,index) =>  <ion-icon class={colors[index]} key={index} name={name}></ion-icon>)

  return (
    <>
      <div className="questionElement crescer" onClick={click}>
        <p>{questTexto}</p>
        <img className={vipot} onClick={click} src="images/Vector.png" alt="Turn Flashcard" />
        <div className={visible}>
          <div className="nao" onClick={() => concluir("Não")}>Não Lembrei</div>
          <div className="quase" onClick={() => concluir("Quase")}>Quase Não Lembrei</div>
          <div className="lembrei" onClick={() => concluir("Zap")}>Zap!</div>
        </div>
      </div>


      <Footer>
        <p>{resultado}</p> 
        <p><span>{array.length}/8 Concluídos</span></p>
        <span className={"resultIcons"}>{icons}</span>
      </Footer  > 
    </>
  );
}
