var array = [ 11, 75, 4 ];

var doubleArray =
  array.map(function (oneNumber) {
    return oneNumber * 2;
  });

console.log(array);

console.log(doubleArray);

// -----------------------------------------------------------------------------

var doubleArray = [];

array.forEach(function (oneNumber) {
  doubleArray.push(oneNumber * 2);
});

console.log(doubleArray);

// -----------------------------------------------------------------------------

// Exercise

var cities = [ "miami", "barcelona", "madrid", "paris" ];

var capsCities =
  cities.map(function (oneCity) {
    var firstLetter = oneCity[0].toUpperCase();
    var restOfWord = oneCity.slice(1);

    return firstLetter + restOfWord;
  });

console.log(capsCities);
