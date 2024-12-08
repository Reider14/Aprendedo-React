function Lista() {

    const usuarios = [
      {name: 'Haider', lastName: 'Andrade'},
      {name: 'Guiherme', lastName: 'Delgado'}
    ];
  
    return (
      <>
        {usuarios.map((usuario) => {
          return(
            <>
            {usuario.name} {usuario.lastName} <br /> 
          </>
          )
        })}         
      </>
     
    );
  }
  
  
  export default Lista;
  
  