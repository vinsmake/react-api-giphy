import { useState } from "react";


export const AddCategory = ({ onNewCategory }) => {
  
  const [InputValue, setInputValue] = useState('One Piece');


  //we are getting onChange as an target
  const onInputChange = ({ target }) => {
    //we setInputValue with the value of the target that we recived in onChange-input
    setInputValue(target.value)
  }
  


  
  //we get the form submit as an event (the event is the submit)
  const onSubmit = (event) => {
    event.preventDefault();

    //if inputValue without spaces < than 1
    if (InputValue.trim().length <= 1) {
      return;
    }

    //we use the inpud value as a valor
    onNewCategory(InputValue.trim());

    //and restart the input
    setInputValue('');
  }
  



  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text"
          placeholder="Buscar gif"
          value={InputValue}
          //this means that "Whenb change" excecute "onInputChange" with that change
          onChange={onInputChange} />
      </form>
    </>
  )
}