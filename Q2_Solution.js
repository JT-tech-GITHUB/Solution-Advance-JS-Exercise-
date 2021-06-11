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