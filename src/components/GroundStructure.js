import React from 'react';
import SvgRectangle from './SvgRectangle';
import SvgSquare from './SvgSquare';

const GroundStructure = ({mainData}) => {

    const buildGroundProfile = () => {
        if(mainData.userInput.length !== 0){
            return mainData.userInput.map((wall, index) => 
            <SvgRectangle wallHeight={wall} color='grey' key={index}>
                {buildWater(index, wall)}
              </SvgRectangle>)
          }
      }

    const buildWater = (userIndex, wall) => {
        if(mainData.totalWater !== 0){
            return mainData.throwWater.map((relationWater, index) => {
              if(userIndex !== relationWater.index){
                return <div key={index}></div>
              }
              return <SvgSquare color='blue' wallHeight={wall} relation={relationWater} key={index}/>
            }
            )
        }
    }
  return (
    <div className='groundStructure'>
      {buildGroundProfile()}
    </div>
  );
}

export default GroundStructure;