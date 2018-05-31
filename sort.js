var numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

numbers.sort();

console.log(numbers);

numbers.sort(function (numA, numB) {
  // return POSITIVE number when order needs to change
  // return NEGATIVE number when order should stay the same
  return numA - numB;
});

console.log(numbers);

// -----------------------------------------------------------------------------

var words = ["Hello", "Goodbye", "First", "A", "a", "Second", "Third"];

words.sort();

console.log(words);

words.sort(function (strA, strB) {
  strA = strA.toLowerCase();
  strB = strB.toLowerCase();

  if (strB < strA) {
    // return POSITIVE number when order needs to change
    return 1;
  }
  else {
    // return NEGATIVE number when order should stay the same
    return -1;
  }
});

console.log(words);
