function colorCodeConverter() {
  if (arguments.length === 1 && !arguments[0].includes(',')) { // if input is HEX (one input)
    let hexArr = arguments[0].split(''); //split each letter in array
    let hexPair = []; // for storing  each pair letter color [ hex, hex, hex]
    let toRGB = []; // for storing rgb format (num,num,num )
    for (let i = 1; i < hexArr.length; i++) { // loop over array to group each color in pair start from index 1 (skip '#' on index 0)
      if (i % 2 !== 0) {
        hexPair.push(hexArr[i].toString() + hexArr[i + 1].toString()); // pair them in string and add them hexPair array
      }
    } hexPair.forEach(pair => toRGB.push(hexToDecimal(pair))); // convert each pair of hex to decimal number and stores it in to RGB array
    return `(${toRGB.join(',')})`; // return string in rgb format (num, num, num)
  } else { // RGB input
    let hex = ['#'];
    let rgbArr = [arguments[0], arguments[1], arguments[2]] // allocate each number in array
    if (!Number(arguments[0])) { // split each number into array if user input in string format
      rgbArr = arguments[0].split(',');
    }
    rgbArr.forEach(num => hex.push(decimalToHex(num))); //convert each number to HEX
    return hex.join(''); // return hex in string
  }
}

/**hexToDecimal function is not limited to using with RGB input (maximum value of 255) but can be used to convert all value of Hexadecimal format
 * however, this function doesn't catch error from inputting wrong format of Hexadecimal (other chars that is out of range of A-F)*/
const hexToDecimal = (hexPair) => {
  let hexPairArray = hexPair.split('').reverse(); // take input string and split each string into array then reverse it
  let decimal = hexPairArray.reduce((accumulator, current, index) => {
    if (Number(current)) {
      current = Number(current) * 16 ** index;
    } else {
      current = (current.toUpperCase().charCodeAt() - 55) * 16 ** index; // change string to uppercase because hex is not case sensitve, then get value of char which range from 65-70 for A-F and take away 55 because value of A-F in hex is 10-15
    }
    return accumulator + current;
  }, 0);// start adding up from index 0
  return decimal;
}

/**decimalToHex, this function converts decimal number to Hexadecimal   */
const decimalToHex = (input) => {
  let hexNumber = [];
  while (Math.floor(input / 16) !== 0) { //keep dividing until input less than 16
    let rest = Math.ceil(input % 16); // round up residual
    hexNumber.unshift(rest); // add from the front of array
    input = Math.floor(input / 16); // update input value
  }
  let rest = Math.floor(input); //take last residual < 16
  hexNumber.unshift(rest);
  let hexResult = hexNumber.map(value => { // convert number that greater than 9 to Letter A-F
    if (value >= 10) {
      value = String.fromCharCode(value + 55);
    } else {
      value = value;
    }
    return value;
  });
  return hexResult.join(''); // return string
}
