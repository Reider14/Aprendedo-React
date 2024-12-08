import React, {useState} from "react";


function Calculadora() {

  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [operater, setOperater] = useState('');
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const [resultado, setResultado] = useState<number>(0);

  function handleSubmit(e: React.FormEvent){
    e.preventDefault();

    switch (operater){
      case '+':
        setResultado(firstNumber + secondNumber);
        break;

      case '-':
        setResultado(firstNumber  -secondNumber);
        break;
      
      case '/':
        setResultado(firstNumber / secondNumber);
        break;

      case '*':
        setResultado(firstNumber * secondNumber);
        break;

      default:
        break
    }
  }

  return (
    <>
     <form onSubmit={handleSubmit}>

     <input type="number" onChange={(e) => {setFirstNumber(e.target.valueAsNumber)}} value={firstNumber}/>
        <select onChange={(e) => {setOperater(e.target.value)}}>
          <option value="">Selecionar Operador</option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="/">/</option>
          <option value="*">*</option>
        </select>

      <input type="number" onChange={(e) => {setSecondNumber(e.target.valueAsNumber)}} value={secondNumber}/>

      <button type="submit">CALCULAR</button> <b> resultado:</b> {resultado};

     </form>

           
    </>
   
  );
}


export default Calculadora;