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