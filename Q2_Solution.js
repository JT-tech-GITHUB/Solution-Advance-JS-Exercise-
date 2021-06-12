const addingPair = (arr, target) => {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(target - arr[i])) {
      let removedIndex = arr.indexOf(target - arr[i]);
      if (removedIndex !== i) {
        answer.push([arr[i], target - arr[i]]);
        arr.splice(removedIndex, 1);
      }
    }
  } return answer;
}

let input  = [3, 3, 1, 5, 2, 6, 1, 7, 12, 13];

console.log(addingPair(input, 8));
//[[3, 5], [1, 7], [2, 6]]

let input2 = [12, 21, -5, 8, -14, 0];
console.log(addingPair(input2,3));
//[[-5, 8]];