// Create a function twoDimensional(row, column) that returns a two dimensional array containing bunch of zeros but where the outer values are filled with ones. For example twoDimensional(5,5) should return the following array:

// [

// [ 1, 1, 1, 1, 1 ],

// [ 1, 0, 0, 0, 1 ],

// [ 1, 0, 0, 0, 1 ],

// [ 1, 0, 0, 0, 1 ],

// [ 1, 1, 1, 1, 1 ]

// ]

// Assume that both row and column are greater than 2.

function twoDimensional(row, column){
    var temp = [];
    for(var i=1; i<=row; i++){
      var temp2 = [];
      for(var j=1; j<=column; j++){
        if(i == 1 | i == row){
          temp2.push(1);
        }
        else if(j == 1 | j == column){
          temp2.push(1);
        } else {
          temp2.push(0);
        }
      };
      console.log(temp2);
      temp.push(temp2);
    };
    console.log(temp);
    return temp;
  };
  
  twoDimensional(4, 5);
  // returns [
  //   [ 1, 1, 1, 1, 1 ],
  //   [ 1, 0, 0, 0, 1 ],
  //   [ 1, 0, 0, 0, 1 ],
  //   [ 1, 1, 1, 1, 1 ]
  // ];