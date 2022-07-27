import React, { useState } from 'react';
import { throwWater } from '../constant/mainFunctions';
import Button from './Button';

const MainInputs = ({handler, mainData}) => {
  const [inputData, setInputData] = useState([]);
  const trowWaterDisabled = mainData.userInput.length === 0;

  const buildStructure = () => {
    handler({userInput: JSON.parse(inputData),totalWater: 0, throwWater: [] })
  }

  const resetStructure = () => {
    handler({
      userInput: [],
      totalWater: 0,
      throwWater: []
    });
    setInputData([]);
  }

  const appearButtons = () => {
    return mainData.throwWater.length === 0
      ? <div className='buttonGroups'>
          <Button name="Crear Estructura" onclick={buildStructure} styleName="buildStructure"/>
          <Button name="Tirar agua" 
            disabled={trowWaterDisabled} 
            onclick={() => throwWater(mainData, handler)}
            styleName={`throwWater${trowWaterDisabled ? "-disabled" : ""}`} />
        </div>
      : <div>
          <Button name="Resetear" onclick={resetStructure} styleName="throwWater reset-button"/>
        </div>
  }

  return (
    <div className='main-inputs'>
      <input className='form__input'
        type="text"
        name="name"
        placeholder='Escriba la altura del perfil del terreno...'
        onChange={e => setInputData(e.target.value)}
        value={inputData}
        autoFocus
      />
      {appearButtons()}
    </div>
  );
}

export default MainInputs;