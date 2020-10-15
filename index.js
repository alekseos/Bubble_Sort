let array = [99, 1, 44, -9, 4, -9, 0, 8, 1];
let length = array.length;

for (let iTurn = length - 1; iTurn > 0; iTurn--) {  
  for (let i = 1; i < length - 1; i++) {
    if (array[i] < array[i - 1]) {
      current = array[i];
      array[i] = array[i-1];
      array[i-1] = current;
    }
  }
}

console.log(array);