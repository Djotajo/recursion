function fibsRec(n, list = [0, 1]){
    if (list.length >= n) {
      return list;
    }

    return fibsRec(n, [...list, list[list.length-1] + list[list.length-2]]);
  }