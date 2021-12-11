let secondsInAMinute = 60;
let minutesInAnHour = 60;
let secondsInAnHour = secondsInAMinute * minutesInAnHour;
console.log("Секунд в одном часе " + secondsInAnHour);

let highFives = 0;
highFives++;
console.log("дай 5 " + highFives);
highFives++;
console.log("дай 5 " + highFives);
highFives++;
console.log("дай 5 " + highFives);
highFives++;
console.log("дай 5 " + highFives);
highFives--;
console.log("дай 5 " + highFives);

let ballons = 100;
ballons *= 2;
console.log("Кол-во баллонов " + ballons);

ballons = 100;
ballons /= 4;
console.log("Кол-во баллонов " + ballons);

// строки и числа
let numberNine = 9;
let stringNine = "9";
console.log(numberNine + numberNine);

console.log(stringNine + stringNine);

console.log(numberNine + stringNine);

// длина строки
let stringName = "Башаровский";
console.log(stringName);

//вариант 1
console.log("Символов в фамилии " + stringName.length);
//вариант 2
console.log("Башаровский".length);

//нужный символ строки
stringName = "Башаровский";
console.log(stringName[2]); // букву ш достали

// часть строки
stringName = "Башаровский";
console.log(stringName.slice(2, 5)); //  шар достали

// в заглавные все и строчные
stringName = "Башаровский Алексей";
console.log(stringName.toUpperCase());
console.log(stringName.toLowerCase());

stringName = "эЙ кАК деЛА";
stringNameLower = stringName.toLowerCase();
console.log(stringNameLower[0].toUpperCase());
console.log(stringNameLower.slice(1));
console.log(stringNameLower[0].toUpperCase() + stringNameLower.slice(1));

// заменяем одной строкой
console.log("заменяем одной строкой");
console.log(stringName[0].toUpperCase() + stringName.slice(1).toLowerCase());

// &&  и
let hadShower = true;
let hasBackpack = false;
console.log(hadShower && hasBackpack); // если хоть одна false будет false

// &&  и
hadShower = true;
hasBackpack = true;
console.log(hadShower && hasBackpack);

// || или
hadShower = true;
hasBackpack = false;
console.log(hadShower || hasBackpack); // если хоть одна true будет true

// ! не
hadShower = true;
hasBackpack = !hadShower;
console.log(hasBackpack);

//сравнение чисел
let height = 150;
let bigHeight = 155;
console.log("сравнение чисел");
console.log(bigHeight > height);
console.log(bigHeight < height);
console.log(bigHeight >= height);
console.log(bigHeight <= height);

height = 150;
bigHeight = 150;
console.log(bigHeight === height);

console.log("попробуйте");
let age = 11;
let accompanied = true;
console.log(age >= 12 || accompanied === true);

// undefined     неопределено
let myVariable; // не присвоено значение
console.log(myVariable); //undefined

//null  пусто
myVariable = null;
console.log(myVariable); //null

console.log("МАССИВЫ"); // массив в квадратных скобках

console.log("случайный выбор");
let randomDigit = Math.random(); // случайное число десятичное
console.log(randomDigit * 10); // умножаем чтоб больше 1 получилось
console.log(Math.floor(randomDigit * 10)); // уменьшаем до целого

console.log("генератор дразнилок");

let randomBodyParts = ["глаз", "нос", "череп", "живот"];
let randomAdjectives = ["вонючая", "унылая", "дурацкая", "гнилая"];
let randomWords = [
  "муха",
  "выдра",
  "дубина",
  "мартышка",
  "крыса",
  "гнида",
  "сопля",
];

let randomBodyPart =
  randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
console.log(randomBodyPart);

let randomAdjective =
  randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
console.log(randomAdjective);

let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
console.log(randomWord);

console.log(
  "У тебя " +
    randomBodyPart +
    " словно " +
    randomAdjective +
    " " +
    randomWord +
    "!!!"
);

console.log("ГЛАВА 4 ОБЪЕКТЫ");

let cat = {
  // объект в фигурных скобках
  legs: 3, // ключ: значение
  name: "Гармония", // ключ: значение
  color: "Черепаховый", // ключ: значение
};

console.log(cat);

console.log(cat["color"]); // доступ к элементу объекта
console.log(cat.color); // доступ через точку к элементу объекта

console.log(Object.keys(cat)); // возвращает массив содержащий все ключи объекта

//добавить элемент в объект cat
cat["bark"] = "Мяу мяу мяу"; // через квадр скобки
cat.bark = "Мяу мяу мяу"; // или через точку
console.log(cat);

let scores = {
  vasia: 3, // ключ: значение
  kolia: 5, // ключ: значение
  lesha: 2, // ключ: значение
};

console.log(scores);
scores.lesha = 13; //

console.log(scores);

let myCrazyObject = {
  name: "Нелепый объект",
  "some array": [7, 9, { purpose: "путанница", number: 123 }, 3.3],
  "random animal": "Банановая акула",
};

// вывести 123 одной строкой из объекта выше
console.log(myCrazyObject["some array"][2]["number"]); //123

//else if
let name = "Кирилл";
if (name === "Алексей") {
  console.log("Привет Мне");
} else if (name === "Алиса") {
  console.log("Привет Алиса");
} else if (name === "Кирилл") {
  console.log("Привет Кирилл");
} else {
  console.log("Привет незнакомец");
}

// for
for (let x = 3; x < 10000; x = x * 3) {
  console.log(x);
}

// while - до тех пор пока
let x = 3;
while (x < 10000) {
  console.log(x);
  x = x * 3;
}

// изменяем элементы массива
let animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];
console.log(animals);
console.log(animals.length);
let y = 0;
while (y < animals.length) {
  animals[y] = animals[y] + " - прекрасное животное";
  y++;
}
console.log(animals);

//Генератор случайных строк
console.log("Генератор случайных строк");
let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
let randomString = "";
let z = 1;
while (z < 8) {
  let letter = alphabet[Math.floor(Math.random() * alphabet.length)];
  randomString += letter;
  //console.log(randomString);
  z++;
}
console.log(randomString);

//Хакерский язык

let input = "javascript is awesome";
let output = "";
for (let w = 0; w < input.length; w++) {
  let bukva = input[w];
  if (bukva === "a") {
    bukva = "4";
  } else if (bukva === "e") {
    bukva = "3";
  } else if (bukva === "i") {
    bukva = "1";
  } else if (bukva === "o") {
    bukva = "0";
  }
  output += bukva;
}
console.log(output);

//let leter = prompt("Как вас зовут?");
//console.log("Привет, " + leter);

//let licesCats = confirm("Тебе нравятся кошки?");
//if (licesCats) {
//  console.log("Ты классная кошка!");
//} else {
//  console.log("Что ж, не проблема. Все равно ты молодец!");
//}

//alert("JavaScript это здорово!");

let words = ["программа", "макака", "прекрасный", "оладушек", "телефон"];
let word = words[Math.floor(Math.random() * words.length)];
console.log(word);

let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

let remainingLetters = word.length;
while (remainingLetters > 0) {
  alert(answerArray.join(" "));

  let guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.");

  if (guess === null) {
    //break
  } else if (guess.length !== 1) {
    alert("Пожалуйста введите только одну букву.");
  } else {
    // обновляем состояние игры
    for (let j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
  }

  //console.log(answerArray);
}
alert(answerArray.join(" "));
alert("Отлично! Было загадано слово " + word);

//подключаем GITHUB
//подключаем GITHUB

//Привет я изменение №11

//Привет я изменение №22
