function checkprimeNumber(n) {
    //prime number is its divisble by 1 or by itself
    // initialization -->starting
  
    // where it should end --->
  
    //
    var isPrime = true;
    for (var i = 0; i <= n; i = i + 2) {
      // && --->AND OPERATOR
      // || ---> OR OPERATOR
  
      if (i != 1 && i != n) {
        if (n % i == 0) {
          
          isPrime = false;
          break;
        }
      }
    }
    ///
    return isPrime;
  }
  
  function allPrimeNumbers(n) {
    var primeArray = []; 
    for (var i = 2; i <= n; i++) {
      if (checkprimeNumber(i)) {
        primeArray.push(i);
      }
    }
  
    return primeArray;
  }
  
  console.log(allPrimeNumbers(100));
  
  // 2<3
  