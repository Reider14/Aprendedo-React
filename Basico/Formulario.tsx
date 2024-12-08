import React, {useState} from "react";

function Formulario() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');


  function handleSubmit(e: React.FormEvent){
    e.preventDefault(); // fazer a pagina para de recarregar ao clicar em enviar 

    console.log(nome, email, mensagem);
  }

 // O onChange vai joagr os dados no (e) que vai mandas os dados para o setName utilizando (e.target.value)
 // required -> faz a validacao de cada campo do formaulario
  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>Nome:</p>
      
        <input type="text" required onChange={(e) => {setNome(e.target.value)}} value={nome}/>

        <br />

        <p>E-mail: </p>
        <input type="text" required onChange={(e) => {setEmail(e.target.value)}} value={email}/>

        <br />

        <p>Mensagem: </p>
        <textarea placeholder="Digite uma mensagem..." required onChange={(e) => {setMensagem(e.target.value)}}>
          {mensagem}
        </textarea>  

        <br />
      
        <button type="submit">ENVIAR</button>

      </form>      
    </>
   
  );
}

export default Formulario;