const readline = require("readline");
// readline ek library hoti hai. Input lene me help karti hai

const code = readline.createInterface({
  input: process.stdin
});

const userInput = [];

code.on("line", (data) => {
  userInput.push(data);
});

// neglect code above it
code.on("close", () => {
  let a = parseInt(userInput[0])
  let b = parseInt(userInput[1])
  // write your code here
  function temperature(temp){

    let Celsius = (temp - 32) * 5 / 9;
  
     return Celsius
  }
  // console.log (temprature(56))
  exports.temperature = temperature

  
});
