import React, {useState} from "react";

function UseState() {

  const [login, setlogin] = useState("Nao Logado!");

  /*let login = false;

  function setlogin(logar: boolean){
    login = logar;
  }

  setlogin(true);
  */
  return (
    <>
      <button onClick={() => {setlogin("Logado!")}}>
        LOGIN
      </button>
      <br /><br />

      <button onClick={() => {setlogin("Nao Logado!")}}>
        DESLOGAR
      </button>

      <br /><br />
      {login}
    </>
   
  );
}


export default UseState;
