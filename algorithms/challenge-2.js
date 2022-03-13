function transpose(arr) {
  let row = arr.length;
  let col = arr[0].length;
  let result =[];
  if((row >=1 && row <= 10) && (col >=1 && col <=10)){
    for(let i = 0; i< col; i++){
      let subArray = [];
      for(let j=0; j< row; j++){
        subArray.push(arr[j][i]);
        }
       result.push(subArray);
      }
      return result;
    }
    console.log(transpose([
    [5,12,17,9,3],
    [13,4,8,14,1],
    [9,6,3,7,21],
    ]));  

