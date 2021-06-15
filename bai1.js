function findOppositeNumber(n, intNumber) {
    if (intNumber > n / 2) 
    return intNumber - parseInt(n / 2);
  
    return intNumber + parseInt(n / 2);
  }
  
  // Driver code
  var n = 10,
    intNumber = 2;
  console.log(findOppositeNumber(n, intNumber));