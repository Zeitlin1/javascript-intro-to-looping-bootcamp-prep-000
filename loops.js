
function forLoop(array) {
  for (i = 0; i < 25; i++) {
  array.push("I am ${i} strange loop${i === 0 ? \'\' : \'s\'}.");
  }
  return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log('${n}')
    n--
    if (n === 0){
      return "done"
    }
  }
}

function doWhileLoop(array) {
    poppedArray = array.pop
    do {
    } while ((poppedArray.length > 0 || Math.random() >= 0.5 == false));
    return poppedArray
}
