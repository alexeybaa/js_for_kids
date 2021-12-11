// function
let ourFirstFunction = function () {
  console.log("Привет, я функция!");
};

ourFirstFunction();

let sayHelloTo = function (names) {
  console.log("Привет, " + names + "!");
};

sayHelloTo("Сергей");
sayHelloTo("Анна");
sayHelloTo("Михаил");

let drawCats = function (howManyTimes) {
  for (var i = 0; i < howManyTimes; i++) {
    console.log(i + " =^.^=");
  }
};

drawCats(5);

let printMultipleTimes = function (howManyTimes, whatToDraw) {
  for (let i = 0; i < howManyTimes; i++) {
    console.log(i + " " + whatToDraw);
  }
};

printMultipleTimes(3, "(>_<)");

console.log(Math.floor(145.45)); //округляет вниз до целого

function double(number) {
  return number * 2; // возврат значения функции
}

console.log(double(3));

console.log(double(5) + double(6));

console.log(double(5) + double(6));

console.log(double(double(3)));
