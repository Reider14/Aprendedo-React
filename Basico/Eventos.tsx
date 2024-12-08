function Eventos() {

    function BUY(){
      alert("Comprar os products do carrinho!");
  
    }
  
    function digit(){
      alert("Digitou!");
    }
  
    return (
      <>
      <button onClick={()=> {BUY()}}>
        BUY
      </button>
  
      <input type="text" onChange={() => {digit()}}/>
      </>
     
    );
  }
  
  
  export default Eventos;
  