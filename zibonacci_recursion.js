// This function borrows ideas from the Fibonacci series, but the calculated results appear to zig and zag, hence the name. A so-called 'Zibonacci' series would be defined by the following rules:

// 1) Zib(0) == 1;

// 2) Zib(1) == 1;

// 3) Zib(2) == 2;

// 4) Zib(2n+1) == Zib(n) + Zib(n-1)+1, if n>0 (i.e. odd values 3 and higher)

// 5) Zib(2n) == Zib(n) + Zib(n+1)+1, if n>1 (i.e. even values 4 and higher).

// Create the Zibonacci(num) function.

function Zibonacci(num){
    if(num<2){
      return 1;
    }
    else if(num===2){
      return 2;
    }
    if(num%2==1){
      return Zibonacci((num-1)/2)+Zibonacci((num-1)/2-1)+1;
    } else {
    return Zibonacci(num/2)+Zibonacci((num/2)+1)+1;
    }
  };
  
  Zibonacci(11);


// Zibonacci(0) to return 1
// Zibonacci(1) to return 1
// Zibonacci(2) to return 2
// Zibonacci(3) to return 3
// Zibonacci(4) to return 6
// Zibonacci(5) to return 4
// Zibonacci(6) to return 10
// Zibonacci(10) to return 15
// Zibonacci(11) to return 11
