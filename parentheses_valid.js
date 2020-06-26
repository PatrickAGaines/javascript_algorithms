// Create a function that, given an input string str, returns a boolean whether parentheses in str are valid. Valid sets of parentheses always open before they close, for example. For "Y(3(p)p(3)r)s", return true. Given "N(0(p)3", return false: not every parenthesis is closed. Given "N(0)t )0(k", return false, because the underlined ")" is premature: there is nothing open for it to close.

function parensValid(str){
    arr = Array.from(str);
    var count = 0;
    for(var i=0; i<arr.length; i++){
      if(arr[i] === "("){
        count += 1;
      };
      if(arr[i] === ")"){
        count -= 1;
      };
      if(count < 0){
        return false;
      };
    };
    if(count === 0){
      return true;
    };
    if(count !== 0){
      return false;
    };
  };
  
  parensValid("Y(3(p)p(3)r)s");
  //returns true;