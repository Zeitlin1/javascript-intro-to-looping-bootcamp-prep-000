array = []
strangeArray = []
function forLoop(array) {
  for (i = 0; i < 25; i++) {
  array.push("I am ${i} strange loop${i === 0 ? : 's' }.");
  }
}

function whileLoop(n) {
  while (n > 0) {
    console.log("${n}")
    n--
    if (n === 0){
      return "done"
    }
  }
}

function doWhileLoop(array) {
    do {
      array.pop()
    } while (maybeTrue() || array.length > 0);
}

function maybeTrue() {
  return Math.random() >= 0.5
}
