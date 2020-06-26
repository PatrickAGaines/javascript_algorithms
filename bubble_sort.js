function bubbleSort(arr){
    for(i=0; i<arr.length; i++){
      for(j=0; j<arr.length-1; j++){
        if(arr[j] > arr[j+1]){
          let temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
        };
      };
    };
    return arr;
  };
  
  bubbleSort([5,3,1,2]);
  // returns [1, 2, 3, 4, 5];