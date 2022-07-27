import { calculateMin } from "./function";

let relations = [];
let conditionsArray = []
let water = 0;
let waterBoxData = []

const calculateArea = (holeDimention, height) => height*(holeDimention.length);
const accumulatedWater = (holeDimention, area, relation, mainData) => {
  const min = calculateMin(mainData,relation);
  holeDimention.forEach((wall, index) => {
    area -= wall;
    const waterByHole = (min-wall) === -1 ? 0 : min-wall;
    waterBoxData.push({index: relation[0] + index + 1, waterMeter: waterByHole})
});
  water += area === -1 ? 0 : area;
  relations = [];
  conditionsArray = [];
}
const builConditionsdData = (mainData) => {
    for(let i=0; i<mainData.userInput.length; i++){
    	if(mainData.userInput[i-1]){
            if(mainData.userInput[i] > mainData.userInput[i-1] && mainData.userInput[i] > 1){
                conditionsArray.push(mainData.userInput[i])
            } else {
                conditionsArray.push(0)
            }
      } else {
        if(mainData.userInput[i] > 1){
      	  conditionsArray.push(mainData.userInput[i])
        } else {
        	conditionsArray.push(0)
        }
      }
    }
}
const buildRelations = () => {
    for(let i=0; i<conditionsArray.length; i++){
        const firstIndex = i;
        if(conditionsArray[i] !== 0){
            let current = conditionsArray[i];
            let nextWall;
            let nextWallIndex;
            
            for(let j=i+1; j<conditionsArray.length; j++){
                if(conditionsArray[j] >= current){
                nextWall = conditionsArray[j]
                nextWallIndex = j;
                i = j-1;
                break;
                } else if (j === conditionsArray.length-1){
                nextWall = Math.max(...conditionsArray.slice(i+1))
                const allIndexOf = conditionsArray.reduce((acc,el,index) => (el === nextWall ? [...acc, index] : acc), [])
                nextWallIndex = Math.max(...allIndexOf)
                i = nextWallIndex-1;
                break;}
                }
            nextWallIndex && relations.push([firstIndex,nextWallIndex])
            if(nextWallIndex === conditionsArray.length-1) break;      
        }
    }
}
const calculateWater = (mainData) => {
    relations.forEach((relation) => {
        const holeDimention = mainData.userInput.slice(relation[0]+1,relation[1]);
        const area = calculateArea(holeDimention,calculateMin(mainData,relation));
        accumulatedWater(holeDimention,area, relation, mainData)
    })
}
export const throwWater = (mainData,mainaHandler) => {
    builConditionsdData(mainData);
    buildRelations();
    calculateWater(mainData);
    mainaHandler({...mainData, totalWater: water, throwWater: waterBoxData})
    waterBoxData = [];
    water = 0;
}