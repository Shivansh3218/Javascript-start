
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
   b=1;
  for(i=1;i<=a;i++){
    b= i*b
  }
  console.log(b)
    
  });