export const calculateMin = (mainData, relation) => {
   return  Math.min(...[mainData.userInput[relation[0]],mainData.userInput[relation[1]]])
}