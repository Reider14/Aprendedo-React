import React, {useState} from "react";

function EstruturasCondicionais() {

  const [logged, setLogged] = useState(false);
  const [name, setName] = useState('');

  // && quer dizer que acabou a condicao e ao mesmo tempo funciona como 'e'
  return (
    <>
      {logged == true &&
        <p>Promoção do dia</p>
      }
       
      {!logged &&
        <p>Você não está logado, por favor faça o seu login para ver as promoções do dia!</p>
      }
    </> 
  );
}


export default EstruturasCondicionais;

