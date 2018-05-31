var numbers = [ 10, 15, 20, 5 ];

var result =
  numbers.reduce(function (accumulator, oneNumber) {
    return accumulator + oneNumber;
  });

console.log(result);

// -----------------------------------------------------------------------------

// Exercise

var menu = [
  { name: "Carrots", calories: 150 },
  { name: "Steak", calories: 350 },
  { name: "Broccoli", calories: 120 },
  { name: "Chicken", calories: 250 },
  { name: "Pizza", calories: 520 }
];

var totalCalories =
  menu.reduce(function (acc, oneFood) {
    return acc + oneFood.calories;
  }, 0);

console.log(totalCalories);

console.log(totalCalories / menu.length);

// -----------------------------------------------------------------------------

var totalCalories = 0;

menu.forEach(function (oneFood) {
  totalCalories += oneFood.calories;
});

console.log(totalCalories);

console.log(totalCalories / menu.length);
