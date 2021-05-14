function findX() {
    let a = parseInt(document.forms[0].aVal.value),
      b = parseInt(document.forms[0].bVal.value),
      c = parseInt(document.forms[0].cVal.value),
      xVals = document.getElementById("x-vals"),
      yVals = document.getElementById("y-vals"),
      zVals = document.getElementById("z-vals");
  
    /* calculate discriminant */
    function disc() {
      return Math.sqrt(b * b - 4 * a * c);
    }
    /* solve for x */
    let xPosRoot = (-1 * b + disc()) / (2 * a),
      xNegRoot = (-1 * b - disc()) / (2 * a);
  
    /* print result */
    if (isNaN(xPosRoot) || isNaN(xNegRoot)) {
      // handle domain errors
      xVals.innerHTML = "No X",
      yVals.innerHTML = disc(),
      zVals.innerHTML = "< 0";
    } else if (xPosRoot == xNegRoot) {
      // when x values are the same, use first one
      xVals.innerHTML = (xPosRoot % 1 != 0 ? xPosRoot.toFixed(2) : xPosRoot),
      yVals.innerHTML = disc(),
      zVals.innerHTML = "= 0";
    } else {
      // print both x values
      xVals.innerHTML = 
        (xPosRoot % 1 != 0 ? xPosRoot.toFixed(2) : xPosRoot) + "<br>     x = " + 
        (xNegRoot % 1 != 0 ? xNegRoot.toFixed(2) : xNegRoot),
      yVals.innerHTML = disc(),
      zVals.innerHTML = "> 0";
    }
  }
  // find X on load
  findX();
  
  // then find X after every change
  document.forms[0].aVal.addEventListener("change", function() {
    findX()
  });
  document.forms[0].bVal.addEventListener("change", function() {
    findX()
  });
  document.forms[0].cVal.addEventListener("change", function() {
    findX()
  });