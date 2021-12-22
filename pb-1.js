/* Give an array of integers,replace all the occurrences of elementToReplace with subtractionElem */
const inputArray=[1,2,1]
const elementToReplace=1
const subtractionElem=3
for(let i=0;i<inputArray.length;i++){
  if(inputArray[i]==elementToReplace){
    inputArray[i]=subtractionElem
  }
}
console.log(inputArray)