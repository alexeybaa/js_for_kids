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

let randomWords = ["Планета", "Червяк", "Цветок", "Компьютер"];

function pickRandomWord(words) {
  return words[Math.floor(Math.random() * words.length)];
}
console.log(pickRandomWord(randomWords));

function generateRandomInsult() {
  let randomBodyParts = ["глаз", "нос", "череп", "живот"];
  let randomAdjectives = ["вонючая", "унылая", "дурацкая", "гнилая"];
  randomWords = [
    "муха",
    "выдра",
    "дубина",
    "мартышка",
    "крыса",
    "гнида",
    "сопля",
  ];

  let randomString =
    "У тебя " +
    pickRandomWord(randomBodyParts) +
    " словно " +
    pickRandomWord(randomAdjectives) +
    " " +
    pickRandomWord(randomWords) +
    "!!!";
  return randomString;
}
console.log(generateRandomInsult());
console.log(generateRandomInsult());
console.log(generateRandomInsult());

function fifthLetter(names) {
  if (names.length < 5) {
    return;
  }
  return "Пятая буква вашего имени: " + names[4] + ".";
}

console.log(fifthLetter("Алексей"));

function medalForScore(score) {
  if (score < 3) {
    return "Бронзовая";
  }
  if (score < 7) {
    return "Серебрянная";
  }

  return "Золотая";
}

console.log(medalForScore(10));

function add(number1, number2) {
  return number1 + number2;
}

let summ = add(9824, 777);

function multiply(summ, number4) {
  return summ * number4;
}

console.log(multiply(summ, 36325));
