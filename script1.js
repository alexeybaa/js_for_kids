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
