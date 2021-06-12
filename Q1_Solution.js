const arrOrganizer = (arr) => {
  arr.sort((a, b) => a - b);
  let obj = {};
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i].toString()] === undefined) {
      obj[arr[i].toString()] = 1;
    } else {
      obj[arr[i].toString()]++;
    }
  }
  for (key in obj) {
    if (obj[key] > 1) {
      result.push(Array(Number(obj[key])).fill(Number(key)))
    } else {
      result.push(Number(key));
    }
  }
  return result;
}

let input = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
console.log(arrOrganizer(input));
//[[1,1,1,1], [2,2,2], 4, 5, 10, [20,20], 391, 392, 591]


/** BONUS */
const seperator = (arr) => {
  let result = [];
  let numArr = [];
  let strArr = [];
  arr.sort((a, b) => Number(a) - Number(b));
  arr.forEach(ele => {
    if (typeof ele === 'number') {
      numArr.push(ele);
    } else {
      strArr.push(ele);
    }
  });
  result.push(numArr, strArr)
  return result;
}
let input = [1, "2", "3", 2];
console.log(seperator(input));
//[[1, 2], ["2", "3"]]