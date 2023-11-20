function fibs(n) {
    let fibArray = [0,1,1];
    for (let b = n-3; b>=0;b--){
      fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
    }
    return fibArray[n]
    }