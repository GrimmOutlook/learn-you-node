// console.log(process.argv);
const array = process.argv;
// const arrayLength = array.length;

let sum = 0;

function computeSum(stuff){
  for(let i=2; i < stuff.length; i++){
    sum += +stuff[i];
    // console.log(sum);
  }

  return sum;
}

console.log(computeSum(array));
