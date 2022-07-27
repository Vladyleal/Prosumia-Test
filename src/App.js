import './App.css';
import React, {useState} from 'react';
import MainInputs from './components/MainInputs';
import GroundStructure from './components/GroundStructure';

function App() {
  const [mainData, setMainData] = useState({
    userInput: [],
    totalWater: 0,
    throwWater: []
  });

  const message = () => {
    return mainData.userInput.length === 0 
      ? (<h1>Coloque los pilares y construya la estructura</h1 >) 
      : (mainData.totalWater === 0 ? (<h1>Tire el agua</h1>) 
      : (<h1>{`Quedaron atrapados ${mainData.totalWater} cubos de agua`}</h1>))
  }

  return (
    <div className="App">
      <MainInputs mainData={mainData} handler={setMainData}/>
      <GroundStructure mainData={mainData} />
      {message()}
    </div>
  );
}

export default App;
