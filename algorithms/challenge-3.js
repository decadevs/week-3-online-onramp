function binaryReversal(input) {
  let result = [0,0,0,0,0,0,0,0];
  let index = 0;
  while(input >result.length -1){
    result.push(0,0,0,0,0,0,0,0);
  }

  result[index] = input % 2;
  input = (input - result[index]) / 2;
index++;
}
let reversed = 0;
let letOfResult = result.length -1;

for(let i=0; i<letOfResult; i++){

  reversed+=
  result[i]*Math.pow(2,(letOfResult - i))
}

return reversed;
}

console.log(binaryReversal(213));
console.log(binaryReversal(4567));


