import Footer from "./Footer";
import Flashcard from "./Flashcard";

export default function Tela2() {
  return (
    <>
      <div className="container tela2">
        <div className="top">
          <img className="logo" src="images/logo.png" alt="aasd"></img>
          <h1 className="title">ZapRecall</h1>
        </div>
        <Flashcard />
        <Footer/> 
      </div>
    </>
  );
}
