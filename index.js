let calculator  = function () {
  let result,
      firstN,
      secondN;


return {
  add: function(firstN, secondN) {
    result = firstN + secondN
    return result;
  },
  subtract: function(firstN, secondN) {
    result = firstN - secondN
    return result;
  },
  divide: function(firstN, secondN) {
    result = firstN / secondN
    return result;
  },
  multiply: function(firstN, secondN) {
    result = firstN * secondN
    return result;
  },
  result: function() {
    return result;
  }

}

}

module.exprts = calculator();