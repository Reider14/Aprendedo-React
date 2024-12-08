

import React, {useState, useEffect} from "react";


function CalculaterWithUseEffect() {

  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [operater, setOperater] = useState('');
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const [resultado, setResultado] = useState<number>(0);

  useEffect(() => {
    switch (operater){
        case '+':
          const resultdoSoma = firstNumber + secondNumber;
          if(!isNaN(resultdoSoma)){
            setResultado(firstNumber + secondNumber);
          }
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

  }, [firstNumber, operater, secondNumber]);

  return (
    <>
     <input type="number" onChange={(e) => {setFirstNumber(e.target.valueAsNumber)}} value={firstNumber}/>
        <select onChange={(e) => {setOperater(e.target.value)}}>
          <option value="">Selecionar Operador</option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="/">/</option>
          <option value="*">*</option>
        </select>

      <input type="number" onChange={(e) => {setSecondNumber(e.target.valueAsNumber)}} value={secondNumber}/>

    <b> resultado:</b> {resultado};           
    </>
   
  );
}


export default CalculaterWithUseEffect;

